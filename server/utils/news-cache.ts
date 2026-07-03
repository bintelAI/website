const LIST_CACHE_KEY = 'news:list'
const DETAIL_CACHE_PREFIX = 'news:detail:'
const CACHE_LIST_SIZE = 50
const WARMUP_DETAIL_COUNT = 20

let memoryListCache: any = null
const memoryDetailCache = new Map<string, any>()

let schedulerTimer: ReturnType<typeof setTimeout> | null = null
let isWarmingUp = false

async function fetchNewsList() {
  const baseUrl = getDimensBaseUrl()
  const token = getDimensMarketToken()
  const teamId = process.env.DIMENS_TEAM_ID || 'TTFFEN'
  const projectId = process.env.DIMENS_PROJECT_ID || 'PJXD24D'
  const sheetId = 'sh_MLPRYzivYSJIEDD9'

  return await $fetch(`${baseUrl}/open/mul/${teamId}/${projectId}/sheet/${sheetId}/row/page`, {
    method: 'POST',
    body: { page: 1, size: CACHE_LIST_SIZE },
    headers: {
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  })
}

async function fetchNewsDetail(id: string) {
  const baseUrl = getDimensBaseUrl()
  const token = getDimensMarketToken()
  const teamId = process.env.DIMENS_TEAM_ID || 'TTFFEN'
  const projectId = process.env.DIMENS_PROJECT_ID || 'PJXD24D'
  const sheetId = 'sh_MLPRYzivYSJIEDD9'

  return await $fetch(`${baseUrl}/open/mul/${teamId}/${projectId}/sheet/${sheetId}/row/${id}/info`, {
    method: 'GET',
    params: { include: 'richtext' },
    headers: {
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  })
}

export async function warmupNewsCache(): Promise<void> {
  if (isWarmingUp)
    return
  isWarmingUp = true

  try {
    const listData = await fetchNewsList()
    memoryListCache = listData
    await useStorage('cache').setItem(LIST_CACHE_KEY, listData)

    const list = listData?.data?.list || []
    const idsToWarmup = list.slice(0, WARMUP_DETAIL_COUNT)
      .map((item: any) => item?.rowId)
      .filter(Boolean) as string[]

    const detailResults = await Promise.allSettled(
      idsToWarmup.map(id => fetchNewsDetail(id)),
    )

    for (let i = 0; i < idsToWarmup.length; i++) {
      const result = detailResults[i]
      if (result.status === 'fulfilled' && result.value) {
        const id = idsToWarmup[i]
        memoryDetailCache.set(id, result.value)
        await useStorage('cache').setItem(`${DETAIL_CACHE_PREFIX}${id}`, result.value)
      }
    }

    console.warn(`[news-cache] 缓存预热完成: 列表 + ${idsToWarmup.length} 条详情`)
  }
  catch (error: any) {
    console.error('[news-cache] 缓存预热失败:', error?.message || error)
  }
  finally {
    isWarmingUp = false
  }
}

export async function getCachedNewsList(): Promise<{ data: any, fromCache: boolean }> {
  if (memoryListCache) {
    return { data: memoryListCache, fromCache: true }
  }

  try {
    const cached = await useStorage('cache').getItem(LIST_CACHE_KEY)
    if (cached) {
      memoryListCache = cached
      return { data: cached, fromCache: true }
    }
  }
  catch (error: any) {
    console.error('[news-cache] 读取列表文件缓存失败:', error?.message || error)
  }

  return { data: null, fromCache: false }
}

export async function getCachedNewsDetail(id: string): Promise<{ data: any, fromCache: boolean }> {
  if (memoryDetailCache.has(id)) {
    return { data: memoryDetailCache.get(id), fromCache: true }
  }

  try {
    const cached = await useStorage('cache').getItem(`${DETAIL_CACHE_PREFIX}${id}`)
    if (cached) {
      memoryDetailCache.set(id, cached)
      return { data: cached, fromCache: true }
    }
  }
  catch (error: any) {
    console.error(`[news-cache] 读取详情文件缓存失败 (id=${id}):`, error?.message || error)
  }

  return { data: null, fromCache: false }
}

export async function saveNewsDetailToCache(id: string, data: any): Promise<void> {
  memoryDetailCache.set(id, data)
  try {
    await useStorage('cache').setItem(`${DETAIL_CACHE_PREFIX}${id}`, data)
  }
  catch (error: any) {
    console.error(`[news-cache] 写入详情缓存失败 (id=${id}):`, error?.message || error)
  }
}

function scheduleNextRefresh(): void {
  const now = new Date()
  const nextMidnight = new Date(now)
  nextMidnight.setHours(24, 0, 0, 0)
  const delay = nextMidnight.getTime() - now.getTime()

  schedulerTimer = setTimeout(async () => {
    console.warn('[news-cache] 定时刷新触发')
    await warmupNewsCache()
    scheduleNextRefresh()
  }, delay)

  console.warn(`[news-cache] 下次刷新: ${nextMidnight.toISOString()} (${Math.round(delay / 1000 / 60)} 分钟后)`)
}

export function startNewsCacheScheduler(): void {
  if (schedulerTimer)
    return

  warmupNewsCache().then(() => {
    scheduleNextRefresh()
  })
}

export function stopNewsCacheScheduler(): void {
  if (schedulerTimer) {
    clearTimeout(schedulerTimer)
    schedulerTimer = null
    console.warn('[news-cache] 调度器已停止')
  }
}
