import type { LocaleCode } from '~/i18n/schema'
import {
  buildLocalePath,
  detectLocaleFromPath,
  getMessagesForLocale,
  getOppositeLocale,
  localeNames,
  localeStorageKey,
  supportedLocales,
} from '~/i18n/utils'

export function useLocale() {
  const route = useRoute()

  const locale = computed<LocaleCode>(() => detectLocaleFromPath(route.path))
  const messages = computed(() => getMessagesForLocale(locale.value))
  const isEnglish = computed(() => locale.value === 'en-US')
  const oppositeLocale = computed(() => getOppositeLocale(locale.value))
  const currentLocaleName = computed(() => localeNames[locale.value])
  const oppositeLocaleName = computed(() => localeNames[oppositeLocale.value])

  function switchLocale(targetLocale: LocaleCode) {
    if (import.meta.client) {
      localStorage.setItem(localeStorageKey, targetLocale)
    }
    return navigateTo(buildLocalePath(route.fullPath, targetLocale))
  }

  return {
    locale,
    messages,
    isEnglish,
    supportedLocales,
    localeNames,
    currentLocaleName,
    oppositeLocale,
    oppositeLocaleName,
    switchLocale,
  }
}
