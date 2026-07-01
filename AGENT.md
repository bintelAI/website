# 方块智联 Web 官网 — 项目架构与开发范式

## 一、项目概述

**方块智联**（BinterAi）的企业官方网站，基于 **Nuxt 4 + Vue 3 + TypeScript** 构建，用于展示公司产品矩阵、技术博客、解决方案与团队信息。

- **启动端口**: 3333（`nuxt dev --port 3333`）
- **包管理**: pnpm (v10.32.1)
- **构建模式**: SSR（默认）/ 静态导出（generate）
- **部署平台**: Docker / Netlify / GitHub Pages

### AI 执行总则

本文件是给 AI Agent 使用的项目提示语。执行任何开发任务时，优先遵守以下约束：

- 不主动删除文件；确需移除时，先创建项目根目录 `backupDel/`，再把目标文件迁移进去。
- 项目已经支持热加载，除非确认没有运行中的本项目 dev 服务，否则不要反复执行 `pnpm run dev`，避免端口冲突。
- 默认使用 `pnpm`，不要混用 npm/yarn。
- 改动要小而清晰，只触碰和需求直接相关的文件。
- 新增可见文案必须走国际化字典，不要直接硬编码在模板中。
- 新增站内链接必须走 `useLocalePath()`，不要手写 `/en`。
- 新增页面必须同时考虑 SEO、中文默认路由、英文 `/en` 镜像路由和移动端样式。
- 单文件超过 700 行时优先拆分组件或样式文件；Markdown 文档不受此限制。

---

## 二、技术栈

| 层级 | 技术选型 | 用途 |
|------|---------|------|
| 框架 | **Nuxt 4** | 服务端渲染 + 文件路由 + 自动导入 |
| UI 框架 | **Vue 3** (`<script setup>` + Composition API) | 组件化开发 |
| 语言 | **TypeScript** | 类型安全 |
| 样式 | **UnoCSS** (Wind4 + Attributify + Icons + WebFonts) | 原子化 CSS |
| 状态管理 | **Pinia** + Nuxt `useState` | 复杂/简单状态 |
| 工具库 | **VueUse** (nuxt 模块自动导入) | Composition 工具函数 |
| 服务端 | **Nitro** (Nuxt 内置) | API 代理层 |
| PWA | **@vite-pwa/nuxt** | 离线访问 / 自动更新 |
| 深色模式 | **@nuxtjs/color-mode** | 明暗主题切换 |
| 代码规范 | **@antfu/eslint-config** | ESLint + 保存时自动修复 |

---

## 三、目录结构与职责

```
web官网/
├── app/                             # 主应用代码（前端）
│   ├── components/                  # Vue 组件（自动导入，无需手动注册）
│   │   ├── AppHeader.vue           # 导航栏（滚动态、Mega Menu、响应式）
│   │   ├── AppFooter.vue           # 页脚
│   │   ├── HeroSection.vue         # 首页 Hero（Dimens 主推）
│   │   ├── DimensOverview.vue      # Dimens 产品概览
│   │   ├── ProductMatrix.vue       # 产品矩阵展示
│   │   ├── ProductPageLayout.vue   # 产品详情页共用布局模板
│   │   ├── BlogSection.vue         # 博客区块
│   │   ├── CaseStudies.vue         # 客户案例
│   │   ├── CtaSection.vue          # CTA 号召区块
│   │   ├── SectionTitle.vue        # 通用区块标题组件
│   │   ├── DarkToggle.vue          # 深色模式切换
│   │   ├── Reveal.vue             # 滚动入场动画容器
│   │   ├── Counter.vue             # 计数器（演示）
│   │   ├── PageView.vue            # 页面浏览量展示
│   │   └── ...                     # 其他业务组件
│   ├── composables/                 # 组合式函数（自动导入）
│   │   ├── useSeo.ts               # SEO 元数据统一设置
│   │   ├── useLocale.ts            # 当前语言、文案、语言切换
│   │   ├── useLocalePath.ts        # 当前语言下的站内链接生成
│   │   ├── user.ts                 # Pinia Store - 用户状态
│   │   └── count.ts                # useState - 计数器逻辑
│   ├── i18n/                        # 轻量自研国际化
│   │   ├── schema.ts               # LocaleMessages 类型定义
│   │   ├── utils.ts                # 语言判断、路径处理、文案获取
│   │   └── locales/
│   │       ├── zh-CN.ts            # 中文文案与中文业务数据
│   │       └── en-US.ts            # 英文文案与英文业务数据
│   ├── config/
│   │   └── pwa.ts                  # PWA 配置（Workbox 缓存策略）
│   ├── constants/
│   │   └── index.ts                # 全局数据常量（导航、产品、案例、博客、团队等）
│   ├── layouts/
│   │   ├── default.vue             # 默认布局（含 AppHeader + AppFooter）
│   │   └── home.vue                # 首页布局（含 AppHeader + AppFooter，无 padding-top）
│   ├── pages/                       # 文件路由（自动生成路由表）
│   │   ├── index.vue               # 首页 /
│   │   ├── products.vue            # 产品中心 /products
│   │   ├── blog/
│   │   │   ├── index.vue           # 博客列表 /blog（调用 Dimens API 获取动态数据）
│   │   │   └── [id].vue            # 博客详情 /blog/:id
│   │   ├── product/
│   │   │   ├── [id].vue            # 通用产品详情 /product/:id（动态路由兜底）
│   │   │   ├── dimens.vue          # Dimens 产品详情（特制页面）
│   │   │   ├── ai-spider.vue       # AI 云控采集详情
│   │   │   ├── ai-ssh.vue          # SSH 助手详情
│   │   │   ├── ai-workflow.vue     # AI 工作流详情
│   │   │   └── ...                 # 其他产品详情页
│   │   ├── hi/[id].vue             # 示例动态路由 /hi/:id
│   │   ├── about.vue               # 关于我们 /about
│   │   ├── cases.vue               # 案例 /cases
│   │   ├── contact.vue             # 联系我们 /contact
│   │   ├── solutions.vue           # 解决方案 /solutions
│   │   ├── settings.vue            # 设置 /settings
│   │   └── [...all].vue            # 404 通配路由
│   ├── utils/
│   │   └── localized-routes.ts     # 为现有页面生成 /en 镜像路由
│   └── app.vue                     # 应用入口（PwaManifest + NuxtLayout + NuxtPage）
├── server/                          # Nitro 服务端
│   ├── api/
│   │   ├── pageview.ts             # GET /api/pageview（页面计数器）
│   │   ├── dimens/
│   │   │   └── news/
│   │   │       ├── list.post.ts    # POST /api/dimens/news/list（博客列表代理）
│   │   │       └── [id].get.ts     # GET /api/dimens/news/:id（博客详情代理）
│   │   └── open/
│   │       └── market/
│   │           └── resource/
│   │               └── list.get.ts # GET /api/open/market/resource/list（市场资源代理）
│   └── utils/
│       └── dimens.ts               # Dimens SDK 封装（useDimensSDK / getDimensBaseUrl / 等）
├── public/                          # 静态资源
│   ├── static/                     # 图片资源
│   ├── favicon.ico / robots.txt / sitemap.xml
│   └── pwa-*.png                   # PWA 图标
├── .env.example                    # 环境变量模板
├── nuxt.config.ts                  # Nuxt 主配置
├── uno.config.ts                   # UnoCSS 配置
├── eslint.config.js                # ESLint 配置（@antfu/eslint-config）
├── pnpm-workspace.yaml             # PNPM Workspace + Catalog 版本管理
├── Dockerfile                      # SSR Docker 镜像构建
├── netlify.toml                    # Netlify 部署配置
├── tsconfig.json                   # TypeScript 配置（引用 .nuxt 生成配置）
└── .github/workflows/ci.yml       # CI 流水线（lint + typecheck）
```

---

## 四、核心架构模式

### 4.1 文件路由系统

Nuxt 4 文件路由，`app/pages/` 目录自动生成路由表：

| 文件路径 | 路由路径 | 说明 |
|---------|---------|------|
| `app/pages/index.vue` | `/` | 首页，使用 `home` 布局 |
| `app/pages/products.vue` | `/products` | 产品中心 |
| `app/pages/product/dimens.vue` | `/product/dimens` | Dimens 产品页 |
| `app/pages/product/[id].vue` | `/product/:id` | 通用产品详情（兜底） |
| `app/pages/blog/index.vue` | `/blog` | 博客列表 |
| `app/pages/blog/[id].vue` | `/blog/:id` | 博客详情 |
| `app/pages/hi/[id].vue` | `/hi/:id` | 示例动态路由 |
| `app/pages/[...all].vue` | `/*` | 404 通配路由 |

国际化路由由 `app/utils/localized-routes.ts` 在 `nuxt.config.ts` 的 `pages:extend` 钩子中自动生成：

- 中文为默认语言，不加前缀：`/`、`/products`、`/product/dimens`。
- 英文统一加 `/en` 前缀：`/en`、`/en/products`、`/en/product/dimens`。
- 不需要手动创建 `app/pages/en/**` 文件。
- 新增页面后，如需英文路由，必须把页面路径加入 `localized-routes.ts` 的 `routesWithEnglishPrefix`。

**路由导航方式**：
```vue
<script setup lang="ts">
const localePath = useLocalePath()
</script>

<!-- NuxtLink 组件：站内链接必须走 localePath -->
<NuxtLink :to="localePath('/products')">产品中心</NuxtLink>
<NuxtLink :to="localePath(`/blog/${id}`)">详情</NuxtLink>

<!-- 编程式导航 -->
const router = useRouter()
router.push(localePath('/contact'))
router.back()
```

不要在组件中手写 `/en/products`，也不要通过字符串判断 `route.path.includes('/en')`。语言判断统一使用 `useLocale()` 或 `detectLocaleFromPath()`。

### 4.2 布局系统

- 通过 `definePageMeta` 指定布局
- **`default.vue`**：默认布局，`pt-16`（为固定导航栏留空间），适用于所有详情页
- **`home.vue`**：首页布局，无 `pt-16`，适用于首页（Hero 全屏沉浸体验）
- 布局组件包含 `<slot />` 渲染页面内容
- 所有布局均包含 `AppHeader` 和 `AppFooter`

```vue
<script setup>
definePageMeta({
  layout: 'home'     // 可选: 'default' | 'home'，省略则使用 default
})
</script>
```

### 4.3 组件自动导入

`app/components/` 下的 Vue 组件**自动注册**，无需手动 import：

```vue
<!-- 直接使用，PascalCase 命名 -->
<AppHeader />
<HeroSection />
<SectionTitle title="核心能力" subtitle="产品特性说明" centered />
<Reveal direction="down" :delay="0.2">内容</Reveal>
<ProductPageLayout :product="product">子内容</ProductPageLayout>
```

### 4.4 Composables 自动导入

`app/composables/` 下的组合式函数**自动导入**：

```ts
// SEO 元数据设置
const { locale, messages } = useLocale()

useSeo({
  title: messages.value.productsPage.seoTitle,
  description: messages.value.productsPage.seoDescription,
  keywords: messages.value.productsPage.seoKeywords,
  locale: locale.value,
  siteName: messages.value.common.siteName,
})

// 国际化与站内链接
const localePath = useLocalePath()
localePath('/products') // zh-CN => /products, en-US => /en/products

// Pinia Store
const user = useUserStore()
user.setNewName('张三')

// useState
const { count, inc, dec } = useCount()
```

### 4.5 状态管理模式

**方式一：useState（轻量级，SSR 友好）**
```ts
// app/composables/count.ts
export function useCount() {
  const count = useState('count', () => Math.round(Math.random() * 20))
  function inc() { count.value += 1 }
  function dec() { count.value -= 1 }
  return { count, inc, dec }
}
```

**方式二：Pinia Store（复杂状态）**
```ts
// app/composables/user.ts
export const useUserStore = defineStore('user', () => {
  const savedName = ref('')
  const previousNames = ref(new Set<string>())
  const usedNames = computed(() => Array.from(previousNames.value))
  function setNewName(name: string) { /* ... */ }
  return { setNewName, otherNames, savedName }
})
// 支持 HMR
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
```

### 4.6 SEO 范式

所有页面统一通过 `useSeo` composable 设置元数据，并从国际化文案读取标题、描述、关键词：

```ts
const { locale, messages } = useLocale()

useSeo({
  title: messages.value.home.seoTitle,
  description: messages.value.common.siteDescription,
  keywords: messages.value.common.keywords,
  ogImage: messages.value.common.defaultOgImage,
  locale: locale.value,
  siteName: messages.value.common.siteName,
})
```

`useSeo()` 会负责写入：

- 页面标题、description、keywords。
- `html lang`。
- canonical。
- `alternate`：`zh-CN`、`en`、`x-default`。
- Open Graph / Twitter 基础元数据。

不要在页面里重复手写 canonical、alternate 或 `og:locale`。

### 4.7 应用入口（app.vue）

```vue
<script setup lang="ts">
const { locale, messages } = useLocale()

useHead({
  title: computed(() => messages.value.common.siteTitle),
  htmlAttrs: {
    lang: computed(() => locale.value === 'en-US' ? 'en' : 'zh-CN'),
  },
})
</script>
<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

### 4.8 常量数据驱动

产品数据、导航菜单、博客、案例、团队等数据集中管理在 `app/constants/index.ts`：

```ts
// TypeScript 接口定义
export interface ProductDetail {
  id: string
  title: string
  description: string
  features: string[]
  specs: string[]
  scenarios: string[]
  tags: string[]
  icon: string
  // ...
}

// 实际数据
export const productDetails: ProductDetail[] = [
  { id: 'dimens', title: '维表智联 Dimens', /* ... */ },
  { id: 'appthen', title: 'Appthen 低代码', /* ... */ },
  // ...
]
```

页面通过 `productDetails.find(p => p.id === 'xxx')` 获取数据，保证了数据源唯一。

### 4.9 国际化方案

项目采用轻量自研国际化，不引入额外 i18n 模块。核心策略是“路由即语言状态”：

- 默认语言：`zh-CN`，路径无前缀。
- 英文语言：`en-US`，路径统一加 `/en`。
- 当前语言由 `detectLocaleFromPath(route.path)` 判断。
- 页面文案、导航文案、SEO 文案和英文业务数据统一放在 `app/i18n/locales/*`。

文件职责：

| 文件 | 职责 |
|------|------|
| `app/i18n/schema.ts` | 定义 `LocaleMessages`，保证中英文文案结构一致 |
| `app/i18n/locales/zh-CN.ts` | 中文文案与中文业务展示数据 |
| `app/i18n/locales/en-US.ts` | 英文文案与英文业务展示数据 |
| `app/i18n/utils.ts` | 语言常量、路径前缀、文案获取、分类映射等工具 |
| `app/composables/useLocale.ts` | 当前语言、文案、语言切换入口 |
| `app/composables/useLocalePath.ts` | 当前语言下的站内链接生成 |
| `app/utils/localized-routes.ts` | 自动生成 `/en` 镜像路由 |

标准用法：

```ts
const { locale, messages, switchLocale, oppositeLocale } = useLocale()
const localePath = useLocalePath()

const products = computed(() => messages.value.data.products)

function goContact() {
  return navigateTo(localePath('/contact'))
}

function toggleLanguage() {
  return switchLocale(oppositeLocale.value)
}
```

模板用法：

```vue
<NuxtLink :to="localePath('/products')">
  {{ messages.nav.products }}
</NuxtLink>

<h1>{{ messages.productsPage.title }}</h1>
```

新增国际化文案流程：

1. 先在 `app/i18n/schema.ts` 增加字段类型。
2. 再在 `app/i18n/locales/zh-CN.ts` 补中文。
3. 再在 `app/i18n/locales/en-US.ts` 补英文。
4. 组件或页面中通过 `messages.value.xxx` 使用。
5. 新增站内链接时使用 `localePath('/xxx')`。
6. 页面 SEO 使用 `useSeo()` 并传入当前 `locale` 和 `siteName`。

新增国际化页面流程：

1. 在 `app/pages/xxx.vue` 创建中文默认路由页面。
2. 将页面路径加入 `app/utils/localized-routes.ts` 的 `routesWithEnglishPrefix`。
3. 在 i18n schema 和双语 locale 文件中补页面文案。
4. 页面内所有可见文案读取 `messages`。
5. 页面内所有站内链接读取 `localePath()`。
6. 执行 `pnpm exec nuxi prepare`，确认 `.nuxt/types/typed-router.d.ts` 出现对应 `/en` 路由。

动态内容处理：

- 博客分类等接口返回的中文枚举，通过 `messages.blogPage.categories` 映射成当前语言展示。
- 接口原始内容如果没有英文数据，可以先保留原文，但页面壳层、按钮、状态、错误提示必须国际化。
- 产品、案例、团队等静态业务数据优先放在 `messages.value.data` 下，不直接从 `constants` 读展示文案。

禁止事项：

- 不要在模板中硬编码可翻译文案。
- 不要手写 `/en` 链接。
- 不要在组件里用 `route.path.startsWith('/en')` 分散判断语言。
- 不要复制一套英文页面文件来维护同样的业务逻辑。
- 不要只补中文不补英文；`LocaleMessages` 类型必须保持双语同步。

### 4.10 已知高频 bug 约束

本项目官网已接近完工，后续排查问题时，优先按下面几类常见 bug 处理：

- **路由机制跳转问题**
  - 站内跳转必须走 `useLocalePath()`，禁止手写 `/en/...`。
  - 动态详情页、博客页、产品页跳转时，注意中文默认路由与英文镜像路由是否一致。
  - 新增页面后，要同步检查 `app/utils/localized-routes.ts`，否则会出现中文能进、英文 404 的情况。
  - 兜底路由 `[...all].vue` 只能做 404 收口，不要拿它兼容业务跳转。

- **挂载路径 / 部署路径问题**
  - 所有资源引用优先使用 Nuxt 解析后的路径，不要写死依赖当前域名的绝对地址。
  - 如果项目部署在子路径或静态托管环境，要重点检查 `baseURL`、`app.baseURL`、静态资源前缀和 `router` 跳转是否一致。
  - 不能依赖浏览器当前地址栏推断路由根路径，避免刷新后页面丢失或资源 404。

- **SSR 渲染与前端渲染混用问题**
  - 首屏内容、列表、详情、SEO 元数据必须服务端渲染，优先使用 `await useFetch()` / `await useAsyncData()`。
  - 不能把关键内容放进 `onMounted()` 再请求，否则会出现“页面能看但源码里没有内容”的问题。
  - 能在后端返回的数据，不要在前端二次拼接成页面主体。
  - 纯客户端逻辑只用于交互、动画、埋点、主题切换等，不承担首屏内容生成职责。

- **布局与挂载时机问题**
  - 首页和内页布局不同，切换布局时要确认头部、留白、首屏高度没有错位。
  - 组件挂载后再测量尺寸或滚动位置时，必须考虑 SSR 首次渲染与客户端水合差异。
  - 有些“看起来像样式问题”的 bug，本质是客户端水合后 DOM 结构变化，排查时要同时看服务端输出和前端运行结果。

- **数据来源混乱问题**
  - 页面文案、导航、SEO、产品展示数据优先从 `app/i18n/locales/*` 读取，不要散落在页面里硬编码。
  - 后端代理接口与前端 mock 不要同时混用，避免页面在不同环境下表现不一致。
  - 路由参数、接口返回字段、展示字段名要保持一致，避免“页面进来了但内容没渲染”的假正常状态。

---

## 五、API 层（Nitro Server）

### 5.1 API 代理模式

所有对外部服务的请求通过 `server/api/` 代理，不在客户端直接调用第三方 API：

```
server/api/
├── pageview.ts                   # GET /api/pageview — 页面计数器（演示）
├── dimens/
│   └── news/
│       ├── list.post.ts          # POST /api/dimens/news/list — 博客列表
│       └── [id].get.ts           # GET /api/dimens/news/:id — 博客详情
└── open/
    └── market/
        └── resource/
            └── list.get.ts       # GET /api/open/market/resource/list — 市场资源
```

**标准 API Handler 模板**：
```ts
export default defineEventHandler(async (event) => {
  // 获取参数
  const query = getQuery(event)           // URL 查询参数
  const params = event.context.params!     // 路由参数
  const body = await readBody(event)       // 请求体

  try {
    const data = await $fetch('https://external-api.com/endpoint', {
      method: 'POST',
      body: { /* ... */ },
      headers: { /* ... */ },
    })
    return data
  }
  catch (error: any) {
    const status = error?.statusCode || 500
    const message = error?.statusMessage || error?.message || '请求失败'
    throw createError({ statusCode: status, statusMessage: message })
  }
})
```

### 5.2 Dimens SDK 集成

Dimens SDK（`@bintel/dimens-cli`）在服务端使用，封装在 `server/utils/dimens.ts`：

```ts
// server/utils/dimens.ts
// 所有环境变量读取统一封装在此文件中

// 创建 SDK 实例
export function useDimensSDK(token?: string) {
  const baseUrl = getDimensBaseUrl()
  return createSDK({ baseUrl, token: token || '' })
}

// 环境变量读取函数
export function getDimensBaseUrl()      // DIMENS_BASE_URL
export function getDimensTeamId()       // DIMENS_TEAM_ID
export function getDimensProjectId()    // DIMENS_PROJECT_ID
export function getDimensMarketToken()  // DIMENS_MARKET_TOKEN
export function getDimensMarketBaseUrl()// DIMENS_MARKET_BASE_URL
```

**API 代理中调用 SDK 的示例**（`server/api/dimens/news/list.post.ts`）：
```ts
export default defineEventHandler(async (event) => {
  const baseUrl = getDimensBaseUrl()
  const token = getDimensMarketToken()
  const body = await readBody(event)
  const teamId = process.env.DIMENS_TEAM_ID || 'TTFFEN'
  const projectId = process.env.DIMENS_PROJECT_ID || 'PJXD24D'
  const sheetId = 'sh_MLPRYzivYSJIEDD9'

  const data = await $fetch(
    `${baseUrl}/open/mul/${teamId}/${projectId}/sheet/${sheetId}/row/page`,
    {
      method: 'POST',
      body: { page: body?.page || 1, size: body?.size || 20 },
      headers: { ...(token ? { authorization: `Bearer ${token}` } : {}) },
    }
  )
  return data
})
```

**硬约束**:
- Dimens SDK 只能在 `server/` 目录下使用
- 环境变量通过 `server/utils/dimens.ts` 中的函数读取，不直接 `process.env`
- API 接口统一通过代理方式暴露给前端（`useFetch('/api/dimens/news/list')`）

### 5.3 前端数据请求

**默认规则：未特别注明的接口数据，全部按服务端获取处理。**

- 页面首屏依赖的接口数据，默认使用 `await useFetch()` / `await useAsyncData()` 在 Nuxt SSR 阶段获取。
- 后端渲染时必须把关键业务数据写入返回给前端的 HTML，方便搜索引擎和 AI 抓取器直接读取页面内容。
- 不要把列表页、详情页、SEO 内容等关键数据放到 `onMounted()` 里再请求；`onMounted()` 只适合纯客户端交互、埋点、浏览器能力检测等非首屏内容。
- 如果某个接口确实只能客户端请求，必须在代码注释或需求说明中明确标注“客户端请求”，否则一律按 SSR 获取实现。

```ts
// 方式一：useFetch（推荐，SSR 友好）
const { data } = await useFetch('/api/pageview')

// 方式二：$fetch（仅用于明确标注的客户端请求）
const res = await $fetch('/api/dimens/news/list', {
  method: 'POST',
  body: { page: 1, size: 50 },
})
```

### 5.4 API 代理接收/过滤参数规范

对外部 API 的代理接口支持以下标准参数（以 market resource 接口为例）：
- `page` — 页码
- `size` — 每页条数
- `sideFilter` — 侧边栏筛选
- `keyword` — 关键字搜索
- `teamId` — 团队 ID

---

## 六、样式体系

### 6.1 样式分层

项目样式分为四层，新增样式时必须先判断归属：

| 层级 | 位置 | 职责 |
|------|------|------|
| 全局基础层 | `app/assets/css/theme.css`（规划/可新增） | CSS 变量、基础重置、容器、按钮、卡片、标签等通用 UI 语言 |
| 全局动效层 | `app/assets/css/animations.css` | keyframes、页面过渡类、可复用动画工具类 |
| 工具类层 | `uno.config.ts` | UnoCSS preset、图标、字体、shortcuts |
| 组件/页面层 | Vue `<style scoped>` 或独立 CSS | 单个组件/页面的专属布局、视觉和交互状态 |

当前 `nuxt.config.ts` 已加载：

```ts
css: ['~/assets/css/animations.css']
```

如果新增 `theme.css`，应改为：

```ts
css: ['~/assets/css/theme.css', '~/assets/css/animations.css']
```

加载顺序要求：`theme.css` 先提供 token 和通用类，`animations.css` 后提供动效能力。

### 6.2 全局 CSS 使用方案

`app/assets/css/animations.css` 已提供全局动画能力，常见类包括：

- `.animate-float`
- `.animate-float-soft`
- `.animate-gradient`
- `.animate-text-shimmer`
- `.animate-breathe`
- `.animate-pop`
- `.shine-on-hover`
- Nuxt 页面/布局过渡：`.page-enter-*`、`.page-leave-*`、`.layout-enter-*`、`.layout-leave-*`

使用原则：

- 通用 keyframes 放 `animations.css`。
- 单个组件专属动画放组件 `<style scoped>`。
- 不在多个组件中复制同一段 keyframes。
- 动效要服务信息层级，不要为了装饰滥用。

如果新增 `theme.css`，建议包含：

- CSS 变量：品牌色、文本色、背景色、边框色、间距、圆角、阴影、过渡。
- 基础重置：`html`、`body`、链接、图片、按钮。
- 通用结构：`.container`、`.section`、`.section-title`、`.section-subtitle`。
- 通用组件类：`.btn`、`.card`、`.tag`、`.divider`。
- 响应式基础：通过变量在 `768px`、`480px` 下收紧 section 间距和容器留白。

### 6.3 UnoCSS 配置

`uno.config.ts` 配置了以下预设：

| 预设 | 用途 |
|------|------|
| `presetWind4()` | Tailwind v4 兼容语法 |
| `presetAttributify()` | 属性化模式（如 `<div text="xl" />`） |
| `presetIcons()` | Iconify 图标（Carbon / Twemoji） |
| `presetTypography()` | 排版样式（prose） |
| `presetWebFonts()` | Web 字体 |

UnoCSS 的定位：

- 用于局部布局、间距、颜色、响应式和 hover 状态。
- 用于 Iconify 图标，例如 `i-carbon-arrow-right`。
- 用于短小稳定的组合类 shortcuts。
- 不替代复杂页面的 scoped CSS，也不承载大段设计 token。

### 6.4 自定义快捷方式

```ts
// uno.config.ts
shortcuts: [
  ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white ...'],
  ['icon-btn', 'inline-block cursor-pointer select-none ...'],
  ['hover-lift', 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'],
]
```

### 6.5 样式编写风格

```vue
<!-- 1. 原子化类名 -->
<div class="px-10 py-20 text-center" />
<div class="text-xl gray4 m-5 flex gap-3 justify-center" />

<!-- 2. 属性化模式 -->
<div text="xl gray4" m-5 flex="~ gap3" />

<!-- 3. Iconify 图标 -->
<div i-carbon-sun dark:i-carbon-moon />
<div i-twemoji:waving-hand text-4xl />

<!-- 4. 自定义快捷方式 -->
<button btn />
<div icon-btn />

<!-- 5. 深色模式 -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" />

<!-- 6. 渐变背景 -->
<div class="from-blue-600 via-cyan-500 to-purple-600 bg-gradient-to-r" />

<!-- 7. 渐隐文字 -->
<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" />
```

### 6.6 组件样式放置规则

新增样式按以下规则放置：

| 场景 | 推荐位置 |
|------|----------|
| 品牌色、字号、间距、圆角、阴影等 token | `theme.css` |
| 多个页面复用的按钮、卡片、标签、标题模式 | `theme.css` |
| 多页面复用动画 | `animations.css` |
| 单个组件专属布局 | 组件 `<style scoped>` |
| 单页样式很长，影响 SFC 阅读 | 独立 CSS 文件并通过 scoped src 引入 |
| 一次性布局和状态组合 | UnoCSS 类 |

约束：

- 不要为了单个页面新增全局 class。
- 不要在组件中重复定义全局已有 token。
- 不要把大段业务视觉塞进 `uno.config.ts` shortcuts。
- 文本必须在移动端和桌面端都不溢出、不遮挡。
- 固定格式 UI（卡片、网格、按钮组、工具栏）应有稳定尺寸或响应式约束，避免 hover 或语言切换导致布局跳动。

### 6.7 深色模式

通过 `@nuxtjs/color-mode` 实现，`classSuffix: ''` 表示使用 `dark:` 前缀：

```ts
const color = useColorMode()
color.preference = 'dark'      // 切换到深色
color.preference = 'light'     // 切换到浅色
// 样式条件: dark:bg-gray-900 dark:text-white
```

---

## 七、PWA 配置

配置位于 `app/config/pwa.ts`：

| 特性 | 配置 |
|------|------|
| 注册策略 | `autoUpdate`（自动更新） |
| Workbox 缓存 | JS/CSS/HTML/图片（`**/*.{js,css,html,txt,png,ico,svg}`） |
| 运行时缓存 | Google Fonts（CacheFirst，365 天过期） |
| 离线兜底 | `navigateFallback: '/'` |
| API 排除 | `navigateFallbackDenylist: [/^\/api\//]` |
| 开发模式 | 环境变量 `VITE_PLUGIN_PWA=true` 启用 |

---

## 八、环境变量

参见 `.env.example`：

```env
# Dimens SDK 基础配置
DIMENS_BASE_URL=https://dimens.bintelai.com/api

# 团队与项目上下文
DIMENS_TEAM_ID=your_team_id
DIMENS_PROJECT_ID=your_project_id

# 市场接口配置
DIMENS_MARKET_BASE_URL=https://dimens.bintelai.com/api
DIMENS_MARKET_TOKEN=your_market_token
```

---

## 九、开发规范

### 9.1 新增页面

1. 在 `app/pages/` 下创建对应的 `.vue` 文件（路径即中文默认路由）。
2. 使用 `<script setup lang="ts">`。
3. 使用 `definePageMeta` 指定布局。
4. 在 `app/i18n/schema.ts` 增加页面文案类型。
5. 在 `zh-CN.ts` 和 `en-US.ts` 补齐双语文案。
6. 页面中通过 `useLocale()` 读取 `messages`、`locale`。
7. 页面中通过 `useLocalePath()` 生成站内链接。
8. 使用 `useSeo()` 设置国际化 SEO。
9. 如需英文访问，把路径加入 `app/utils/localized-routes.ts`。
10. 执行 `pnpm exec nuxi prepare`、`pnpm exec vue-tsc --noEmit --pretty false` 验证。

页面模板：

```vue
<script setup lang="ts">
definePageMeta({ layout: 'default' })

const localePath = useLocalePath()
const { locale, messages } = useLocale()

useSeo({
  title: messages.value.examplePage.seoTitle,
  description: messages.value.examplePage.seoDescription,
  keywords: messages.value.common.keywords,
  locale: locale.value,
  siteName: messages.value.common.siteName,
})
</script>

<template>
  <main>
    <h1>{{ messages.examplePage.title }}</h1>
    <NuxtLink :to="localePath('/contact')">
      {{ messages.nav.contact }}
    </NuxtLink>
  </main>
</template>
```

### 9.2 新增组件

1. 在 `app/components/` 下创建 `.vue` 文件
2. 自动导入，无需手动注册
3. 组件名使用 PascalCase
4. 通用组件（如 `SectionTitle`）接收 props 配置
5. 可见文案优先由父级传入，或在组件内读取 `messages`
6. 站内链接使用 `localePath`
7. 组件专属样式使用 `<style scoped>`

### 9.3 新增 API

1. 在 `server/api/` 下创建 `.ts` 文件
2. 使用 `defineEventHandler` 包装
3. 文件路径即 API 路径
4. 调用外部 API 时统一通过代理模式，不直接在前端调用
5. 错误处理使用 `createError`

### 9.4 新增 Composables

1. 在 `app/composables/` 下创建 `.ts` 文件
2. 自动导入，直接使用
3. 命名使用 `useXxx` 格式

### 9.5 新增常量数据

1. 纯业务类型仍可在 `app/constants/index.ts` 中定义 TypeScript 接口。
2. 展示型中英文数据优先放到 `messages.value.data`。
3. 如果数据不需要翻译，可继续从 `constants` 导出。
4. 如果数据会出现在页面上，必须同时考虑 `zh-CN.ts` 和 `en-US.ts`。
5. 页面和组件优先读取 `messages.value.data.products`、`messages.value.data.cases` 等国际化数据。

### 9.6 ESLint 规范

- 使用 `@antfu/eslint-config` 配置
- VSCode 保存时自动修复（`source.fixAll.eslint`）
- 禁用了 Prettier，完全依赖 ESLint
- 支持 Vue / TS / JSON / YAML / Markdown

### 9.7 代码结构约束

- 单文件代码不超过 700 行，超过时拆分为多个文件
- 使用设计模式（单例、工厂、策略等）进行合理的架构抽象
- 不可删除文件，需删除的文件迁移至 `backupDel` 目录

---

## 十、构建与部署

| 命令 | 用途 |
|------|------|
| `pnpm dev` | 开发模式（HMR，端口 3333） |
| `pnpm dev:pwa` | 启用 PWA 的开发模式 |
| `pnpm build` | 构建生产版本（SSR） |
| `pnpm generate` | 构建静态导出 |
| `pnpm preview` | 预览 SSR 构建结果 |
| `pnpm start` | 启动 SSR 服务 |
| `pnpm lint` | ESLint 检查 |
| `pnpm typecheck` | TypeScript 类型检查 |
| `pnpm exec nuxi prepare` | 生成 Nuxt 类型和路由类型 |

开发服务规则：

- 如果本项目已有 dev 服务在运行，不要再次启动。
- 如果需要确认端口，先执行 `lsof -nP -iTCP:3333 -sTCP:LISTEN`。
- 只有确认没有运行中的本项目 dev 服务时，才执行 `pnpm run dev`。
- 不要执行 `pnpm run build` 作为日常热加载验证，除非任务明确要求构建检查。

推荐验证顺序：

```bash
pnpm exec nuxi prepare
pnpm exec vue-tsc --noEmit --pretty false
pnpm exec eslint <本次修改的文件> --no-error-on-unmatched-pattern
```

说明：当前仓库可能存在历史文档或旧文件 lint 问题。若完整 `pnpm run lint` 失败，需要区分是否由本次修改引入；不要为了通过全量 lint 大规模改无关文件。

### Docker 部署

```dockerfile
FROM node:20-alpine
# pnpm install → pnpm build → node .output/server/index.mjs
# 暴露端口 3333
```

### Netlify 部署

```toml
[build]
publish = "dist"
command = "pnpm run build"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

### CI 流水线

GitHub Actions（`.github/workflows/ci.yml`）：
- main 分支 push / PR 时执行
- 步骤：lint → typecheck

---

## 十一、产品页面架构

产品详情页有两种模式：

### 模式一：使用 ProductPageLayout 模板（标准模式）

适用于大多数产品（AI 工作流、报表系统、Appthen 等）：

```vue
<script setup>
const product = productDetails.find(p => p.id === 'workflow')!
useSeo({ title: product.title, description: product.description })
</script>
<template>
  <ProductPageLayout :product="product">
    <!-- 自定义核心功能区块 -->
    <section>自定义内容</section>
  </ProductPageLayout>
</template>
```

`ProductPageLayout` 自动渲染：Hero → slot（自定义） → 场景+规格 → CTA

### 模式二：完全自定义页面

适用于需要特殊布局的产品（Dimens、SSH 助手等），完全自行编排页面结构：

```vue
<template>
  <div>
    <!-- 自定义 Hero -->
    <section>...</section>
    <!-- 产品架构图 -->
    <section>...</section>
    <!-- 核心能力 -->
    <section>...</section>
    <!-- 应用场景 -->
    <section>...</section>
    <!-- 技术规格 -->
    <section>...</section>
    <!-- CTA -->
    <section>...</section>
  </div>
</template>
```

---

## 十二、动画与交互模式

### Reveal 组件

滚动入场动画容器，用于页面区块的渐入/滑入效果：

```vue
<Reveal direction="down" :delay="0.2">
  <div>滚动时该元素会以动画方式进入</div>
</Reveal>
```

### AppHeader 滚动态

导航栏根据滚动位置动态切换样式：
- 首页顶部：透明背景 + 白色文字（与 Hero 融合）
- 滚动后 / 其他页面：白色背景 + 阴影 + 深色文字
- 桌面端：产品导航提供 Mega Menu 下拉

---

## 十三、常用模式速查

```ts
// 1. 获取路由参数
const route = useRoute()
const id = route.params.id

// 2. 国际化
const { locale, messages } = useLocale()
const localePath = useLocalePath()

// 3. 页面 SEO
useSeo({
  title: messages.value.home.seoTitle,
  description: messages.value.common.siteDescription,
  locale: locale.value,
  siteName: messages.value.common.siteName,
})

// 4. 站内链接
localePath('/products')
localePath(`/product/${id}`)

// 5. 数据请求（服务端）
const { data } = await useFetch('/api/pageview')
// 数据请求（客户端）
const res = await $fetch('/api/dimens/news/list', { method: 'POST', body: {} })

// 6. 深色模式
const color = useColorMode()
color.preference = 'dark'

// 7. 计算属性
const filtered = computed(() => items.value.filter(...))

// 8. 生命周期
onMounted(() => { /* ... */ })
onUnmounted(() => { /* ... */ })

// 9. watch
watch(() => route.path, () => { /* ... */ })

// 10. VueUse 工具
const online = useOnline()
const time = useTimeAgo(() => timestamp)

// 11. 404 页面
// app/pages/[...all].vue — Nuxt 通配路由

// 12. Dimens 环境变量读取（仅服务端）
import { getDimensBaseUrl, getDimensMarketToken } from '~/utils/dimens'
```
