import type { NuxtPage } from '@nuxt/schema'

const routesWithEnglishPrefix = new Set([
  '/',
  '/about',
  '/blog',
  '/blog/:id()',
  '/cases',
  '/contact',
  '/products',
  '/solutions',
  '/product/:id()',
  '/product/ai-spider',
  '/product/ai-ssh',
  '/product/ai-workflow',
  '/product/apisql',
  '/product/appthen',
  '/product/canvas',
  '/product/dimens',
  '/product/ops-intelligence',
  '/product/report-system',
  '/product/screen',
  '/product/table',
  '/settings',
])

function cloneRouteForEnglish(page: NuxtPage): NuxtPage | null {
  if (!page.path || !page.file || page.path.startsWith('/en'))
    return null
  if (!routesWithEnglishPrefix.has(page.path))
    return null

  return {
    ...page,
    name: page.name ? `en-${String(page.name)}` : undefined,
    path: page.path === '/' ? '/en' : `/en${page.path}`,
    children: page.children?.map(child => ({ ...child })) ?? page.children,
  }
}

export function createEnglishRoutes(pages: NuxtPage[]) {
  const englishPages = pages
    .map(page => cloneRouteForEnglish(page))
    .filter((page): page is NuxtPage => Boolean(page))

  pages.push(...englishPages)
}
