export interface SeoOptions {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

export function useSeo(options: SeoOptions) {
  const { title, description, keywords, ogImage } = options
  const siteName = '方块智联'

  useHead({
    title: `${title} | ${siteName}`,
    meta: [
      { name: 'description', content: description },
      ...(keywords?.length ? [{ name: 'keywords', content: keywords.join(', ') }] : []),
      { property: 'og:title', content: `${title} | ${siteName}` },
      { property: 'og:description', content: description },
      ...(ogImage ? [{ property: 'og:image', content: ogImage }] : []),
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  })
}