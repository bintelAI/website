import type { LocaleCode, LocaleMessages } from './schema'
import { enUS } from './locales/en-US'
import { zhCN } from './locales/zh-CN'

export const defaultLocale: LocaleCode = 'zh-CN'
export const supportedLocales: LocaleCode[] = ['zh-CN', 'en-US']
export const localeStorageKey = 'bintelai-locale'

export const localeNames: Record<LocaleCode, string> = {
  'zh-CN': '中文',
  'en-US': 'English',
}

export const localePrefixes: Record<LocaleCode, string> = {
  'zh-CN': '',
  'en-US': '/en',
}

export const localeMessages: Record<LocaleCode, LocaleMessages> = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const externalPathPattern = /^(?:[a-z]+:)?\/\//i

export function detectLocaleFromPath(path = '/'): LocaleCode {
  return path === '/en' || path.startsWith('/en/') ? 'en-US' : defaultLocale
}

export function stripLocalePrefix(path = '/'): string {
  if (path === '/en')
    return '/'
  if (path.startsWith('/en/'))
    return path.slice(3) || '/'
  return path || '/'
}

export function normalizePath(path = '/'): string {
  if (!path)
    return '/'
  return path.startsWith('/') ? path : `/${path}`
}

export function buildLocalePath(path = '/', locale: LocaleCode): string {
  const [pathnameWithQuery = '/', hash = ''] = path.split('#')
  const [pathname = '/', query = ''] = pathnameWithQuery.split('?')
  const cleanPath = stripLocalePrefix(normalizePath(pathname))
  const prefix = localePrefixes[locale]
  const localizedPath = locale === defaultLocale
    ? cleanPath
    : `${prefix}${cleanPath === '/' ? '' : cleanPath}`
  const queryPart = query ? `?${query}` : ''
  const hashPart = hash ? `#${hash}` : ''

  return `${localizedPath || '/'}${queryPart}${hashPart}`
}

export function getMessagesForLocale(locale: LocaleCode): LocaleMessages {
  return localeMessages[locale] ?? localeMessages[defaultLocale]
}

export function getOppositeLocale(locale: LocaleCode): LocaleCode {
  return locale === 'zh-CN' ? 'en-US' : 'zh-CN'
}

export function localizePath(path: string, locale: LocaleCode): string {
  if (isExternalPath(path))
    return path
  return buildLocalePath(path, locale)
}

export function isExternalPath(path: string): boolean {
  return externalPathPattern.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')
}

export function getNewsCategoryLabel(category: string, messages: LocaleMessages): string {
  return messages.blogPage.categories[category] || category || messages.blogPage.uncategorized
}
