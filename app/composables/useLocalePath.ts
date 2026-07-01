import { localizePath } from '~/i18n/utils'

export function useLocalePath() {
  const { locale } = useLocale()

  return (path = '/') => localizePath(path, locale.value)
}
