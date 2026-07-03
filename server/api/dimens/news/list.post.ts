/**
 * 代理调用维表智联新闻列表接口
 * POST /api/dimens/news/list
 * 对应 POST /open/mul/{teamId}/{projectId}/sheet/{sheetId}/row/page
 *
 * 缓存策略: 无关键词 + 第1页 + size≤50 时优先读缓存
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const page = body?.page || 1
  const size = body?.size || 20
  const keyword = body?.keyword || ''

  if (!keyword && page === 1 && size <= 50) {
    const { data: cachedData, fromCache } = await getCachedNewsList()
    if (fromCache && cachedData) {
      const list = cachedData?.data?.list || []
      return {
        ...cachedData,
        data: {
          ...cachedData.data,
          list: size > 0 ? list.slice(0, size) : list,
          page: 1,
          size,
        },
        _cached: true,
      }
    }
  }

  const baseUrl = getDimensBaseUrl()
  const token = getDimensMarketToken()

  const teamId = process.env.DIMENS_TEAM_ID || 'TTFFEN'
  const projectId = process.env.DIMENS_PROJECT_ID || 'PJXD24D'
  const sheetId = 'sh_MLPRYzivYSJIEDD9'

  try {
    const data = await $fetch(`${baseUrl}/open/mul/${teamId}/${projectId}/sheet/${sheetId}/row/page`, {
      method: 'POST',
      body: {
        page,
        size,
        ...(keyword ? { keyword } : {}),
      },
      headers: {
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
    })
    return data
  }
  catch (error: any) {
    const status = error?.statusCode || 500
    const message = error?.statusMessage || error?.message || '请求新闻列表失败'
    throw createError({ statusCode: status, statusMessage: message })
  }
})
