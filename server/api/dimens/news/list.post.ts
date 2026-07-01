/**
 * 代理调用维表智联新闻列表接口
 * POST /api/dimens/news/list
 * 对应 POST /open/mul/{teamId}/{projectId}/sheet/{sheetId}/row/page
 */
export default defineEventHandler(async (event) => {
  const baseUrl = getDimensBaseUrl()
  const token = getDimensMarketToken()
  const body = await readBody(event)

  const teamId = process.env.DIMENS_TEAM_ID || 'TTFFEN'
  const projectId = process.env.DIMENS_PROJECT_ID || 'PJXD24D'
  const sheetId = 'sh_MLPRYzivYSJIEDD9'

  try {
    const data = await $fetch(`${baseUrl}/open/mul/${teamId}/${projectId}/sheet/${sheetId}/row/page`, {
      method: 'POST',
      body: {
        page: body?.page || 1,
        size: body?.size || 20,
        ...(body?.keyword ? { keyword: body.keyword } : {}),
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