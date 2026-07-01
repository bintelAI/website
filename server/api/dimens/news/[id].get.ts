/**
 * 代理调用维表智联新闻详情接口
 * GET /api/dimens/news/:id
 * 对应 GET /open/mul/{teamId}/{projectId}/sheet/{sheetId}/row/{id}/info
 */
export default defineEventHandler(async (event) => {
  const baseUrl = getDimensBaseUrl()
  const token = getDimensMarketToken()
  const { id } = event.context.params!

  const teamId = process.env.DIMENS_TEAM_ID || 'TTFFEN'
  const projectId = process.env.DIMENS_PROJECT_ID || 'PJXD24D'
  const sheetId = 'sh_MLPRYzivYSJIEDD9'

  try {
    const data = await $fetch(`${baseUrl}/open/mul/${teamId}/${projectId}/sheet/${sheetId}/row/${id}/info`, {
      method: 'GET',
      params: { include: 'richtext' },
      headers: {
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
    })
    return data
  }
  catch (error: any) {
    const status = error?.statusCode || 500
    const message = error?.statusMessage || error?.message || '请求新闻详情失败'
    throw createError({ statusCode: status, statusMessage: message })
  }
})