import { createSDK } from '@bintel/dimens-cli'

/**
 * 创建 dimens SDK 实例
 * - baseUrl 支持自定义后端，默认 http://127.0.0.1:8001
 * - token 由调用方传入，不在此处硬编码
 */
export function useDimensSDK(token?: string) {
  const baseUrl = getDimensBaseUrl()
  return createSDK({ baseUrl, token: token || '' })
}

/**
 * 获取 dimens 后端基础 URL
 */
export function getDimensBaseUrl() {
  return process.env.DIMENS_BASE_URL || 'http://127.0.0.1:8001'
}

/**
 * 获取团队 ID（团队隔离边界）
 * 如需切换团队，可覆盖此环境变量
 */
export function getDimensTeamId() {
  return process.env.DIMENS_TEAM_ID || ''
}

/**
 * 获取项目 ID（项目资源上下文）
 * 如需切换项目，可覆盖此环境变量
 */
export function getDimensProjectId() {
  return process.env.DIMENS_PROJECT_ID || ''
}

/**
 * 获取 dimens 市场接口的 token（服务端环境变量）
 */
export function getDimensMarketToken() {
  return process.env.DIMENS_MARKET_TOKEN || ''
}

/**
 * 维表智联线上市场 API 基础 URL
 * 默认与 DIMENS_BASE_URL 一致，也可单独通过 DIMENS_MARKET_BASE_URL 覆盖
 */
export function getDimensMarketBaseUrl() {
  return process.env.DIMENS_MARKET_BASE_URL || getDimensBaseUrl()
}
