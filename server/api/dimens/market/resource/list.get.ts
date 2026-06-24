/**
 * 代理调用维表智联市场资源列表接口
 * GET /api/dimens/market/resource/list?page=1&size=40&sideFilter=all&teamId=TTFFEN&keyword=xxx
 */
export default defineEventHandler(async (event) => {
  const baseUrl = getDimensMarketBaseUrl()
  const token = getDimensMarketToken()
  const query = getQuery(event)

  const page = Number(query.page) || 1
  const size = Number(query.size) || 40
  const sideFilter = (query.sideFilter as string) || 'all'
  const teamId = (query.teamId as string) || 'TTFFEN'
  const keyword = (query.keyword as string) || ''

  try {
    const data = await $fetch(`${baseUrl}/app/market/resource/list`, {
      method: 'GET',
      params: {
        page,
        size,
        sideFilter,
        teamId,
        keyword,
      },
      headers: {
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
    })
    return data
  }
  catch (error: any) {
    const status = error?.statusCode || 500
    const message = error?.statusMessage || error?.message || '请求维表市场接口失败'
    throw createError({ statusCode: status, statusMessage: message })
  }
})
