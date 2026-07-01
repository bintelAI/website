import { buildLocalePath, detectLocaleFromPath, getMessagesForLocale } from '~/i18n/utils'
import type { MaybeRefOrGetter } from 'vue'
import type { LocaleCode } from '~/i18n/schema'

export interface SeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  keywords?: MaybeRefOrGetter<string[] | undefined>
  ogImage?: MaybeRefOrGetter<string | undefined>
  locale?: MaybeRefOrGetter<LocaleCode | string | undefined>
  siteName?: MaybeRefOrGetter<string | undefined>
}

export function useSeo(options: SeoOptions) {
  const route = useRoute()
  const locale = computed(() => (toValue(options.locale) as LocaleCode | undefined) || detectLocaleFromPath(route.path))
  const messages = computed(() => getMessagesForLocale(locale.value))
  const title = computed(() => toValue(options.title))
  const description = computed(() => toValue(options.description))
  const keywords = computed(() => toValue(options.keywords) || [])
  const ogImage = computed(() => toValue(options.ogImage))
  const siteName = computed(() => toValue(options.siteName) || messages.value.common.siteName)
  const defaultOgImage = messages.value.common.defaultOgImage
  const finalOgImage = computed(() => ogImage.value || defaultOgImage)
  const siteUrl = 'https://dimens.cn'
  const canonicalPath = computed(() => buildLocalePath(route.fullPath, locale.value))
  const canonicalUrl = computed(() => `${siteUrl}${canonicalPath.value}`)
  const zhUrl = computed(() => `${siteUrl}${buildLocalePath(route.fullPath, 'zh-CN')}`)
  const enUrl = computed(() => `${siteUrl}${buildLocalePath(route.fullPath, 'en-US')}`)

  useHead({
    htmlAttrs: {
      lang: computed(() => locale.value === 'en-US' ? 'en' : 'zh-CN'),
    },
    title: computed(() => `${title.value} | ${siteName.value}`),
    link: [
      { rel: 'canonical', href: canonicalUrl },
      { rel: 'alternate', hreflang: 'zh-CN', href: zhUrl },
      { rel: 'alternate', hreflang: 'en', href: enUrl },
      { rel: 'alternate', hreflang: 'x-default', href: zhUrl },
    ],
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: computed(() => keywords.value.join(', ')) },
      { name: 'author', content: siteName },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '1 days' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: siteName },
      { property: 'og:title', content: computed(() => `${title.value} | ${siteName.value}`) },
      { property: 'og:description', content: description },
      { property: 'og:image', content: finalOgImage },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:locale', content: computed(() => locale.value === 'en-US' ? 'en_US' : 'zh_CN') },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: computed(() => `${title.value} | ${siteName.value}`) },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: finalOgImage },
      { name: 'twitter:site', content: '@dimens' },
    ],
  })
}
