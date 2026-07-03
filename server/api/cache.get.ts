/**
 * 手动触发新闻缓存刷新
 * GET /api/cache
 */
export default defineEventHandler(async () => {
  await warmupNewsCache()
  return {
    success: true,
    message: '新闻缓存已刷新',
    timestamp: new Date().toISOString(),
  }
})
