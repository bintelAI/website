# Web官网项目架构提示语

## 一、项目概述

基于 **Nuxt 4** + **Vue 3** + **TypeScript** 的前端官网项目，使用 **UnoCSS** 原子化CSS方案，**Pinia** 状态管理，**VueUse** 工具库，支持 **PWA** 离线访问。

**技术栈**：Nuxt 4 / Vue 3 / TypeScript / UnoCSS / Pinia / VueUse / Vite / PNPM

---

## 二、目录结构与职责

```
web官网/
├── app/                          # 主应用代码
│   ├── components/               # Vue 组件（自动导入，无需手动注册）
│   │   ├── Counter.vue           #   计数器组件
│   │   ├── DarkToggle.vue        #   深色模式切换
│   │   ├── Footer.vue            #   页脚（Logo、GitHub链接、暗色切换）
│   │   ├── InputEntry.vue        #   输入框组件（导航到 /hi/:id）
│   │   ├── Logos.vue             #   Logo展示
│   │   └── PageView.vue          #   页面浏览量展示（调用API）
│   ├── composables/              # 组合式函数（自动导入）
│   │   ├── count.ts              #   useState 计数器逻辑
│   │   └── user.ts               #   Pinia store 用户状态管理
│   ├── config/
│   │   └── pwa.ts                # PWA 配置（Workbox缓存策略）
│   ├── constants/
│   │   └── index.ts              # 全局常量（appName, appDescription）
│   ├── layouts/
│   │   ├── default.vue           # 默认布局（含 Footer）
│   │   └── home.vue              # 首页布局（含 Footer）
│   ├── pages/                    # 文件路由
│   │   ├── hi/
│   │   │   └── [id].vue          #   动态路由 /hi/:id
│   │   ├── [...all].vue          #   404 通配路由
│   │   └── index.vue             #   首页 /
│   └── app.vue                   # 应用入口（PwaManifest + NuxtLayout + NuxtPage）
├── server/                       # Nitro 服务端
│   └── api/
│       └── pageview.ts           #   GET /api/pageview 接口
├── public/                       # 静态资源
├── nuxt.config.ts                # Nuxt 主配置
├── uno.config.ts                 # UnoCSS 配置
├── eslint.config.js              # ESLint 配置
├── pnpm-workspace.yaml           # PNPM 工作区 + Catalog 版本管理
├── Dockerfile                    # 构建为 SSR Docker 镜像
└── netlify.toml                  # Netlify 部署配置
```

---

## 三、核心架构模式

### 1. 文件路由系统
Nuxt 4 文件路由，pages 目录自动生成路由表：
| 文件路径 | 路由路径 | 说明 |
|---|---|---|
| `app/pages/index.vue` | `/` | 首页，使用 `home` 布局 |
| `app/pages/hi/[id].vue` | `/hi/:id` | 动态路由，使用 `home` 布局 |
| `app/pages/[...all].vue` | `/*` | 404 通配路由 |

**路由跳转方式**：
```vue
<!-- NuxtLink 组件 -->
<NuxtLink to="/">Back</NuxtLink>
<NuxtLink to="/hi/name">Hi Page</NuxtLink>

<!-- 编程式导航 -->
const router = useRouter()
router.push(`/hi/${encodeURIComponent(name.value)}`)
router.back()
```

### 2. 布局系统
- 通过 `definePageMeta` 指定使用哪个布局
- `default.vue` 为默认布局，可通过 `definePageMeta({ layout: 'home' })` 切换
- 布局组件包含 `<slot />` 用于渲染页面内容

### 3. 组件自动导入
`app/components/` 下的 Vue 组件**自动注册**，无需手动 import 即可在模板中使用：
```vue
<!-- 直接使用，PascalCase -->
<Logos />
<DarkToggle />
<Counter />
<PageView />
<InputEntry />
<Footer />
```

### 4. Composables 自动导入
`app/composables/` 下的组合式函数**自动导入**，可直接在 `script setup` 中使用：
```ts
const { count, inc, dec } = useCount()
const user = useUserStore()
```

### 5. 状态管理模式
本项目的状态管理同时使用了两种方式：

#### 方式一：useState（轻量级）
`app/composables/count.ts`
```ts
export function useCount() {
  const count = useState('count', () => Math.round(Math.random() * 20))
  function inc() { count.value += 1 }
  function dec() { count.value -= 1 }
  return { count, inc, dec }
}
```
- 适合组件内的简单状态
- `useState` 是 Nuxt 的内置 API，支持服务端渲染
- 通过 key 实现跨组件共享

#### 方式二：Pinia Store（复杂状态）
`app/composables/user.ts`
```ts
import { acceptHMRUpdate, defineStore } from 'pinia'
export const useUserStore = defineStore('user', () => {
  const savedName = ref('')
  const previousNames = ref(new Set<string>())
  const usedNames = computed(() => Array.from(previousNames.value))
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))
  function setNewName(name: string) { ... }
  return { setNewName, otherNames, savedName }
})
```
- 适合复杂跨组件状态（用户信息、全局状态）
- 支持 HMR（`acceptHMRUpdate`）
- 使用 `computed` 实现派生状态

### 6. 应用入口 app.vue
```vue
<script setup lang="ts">
import { appName } from '~/constants'
useHead({ title: appName })
</script>
<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```
- `VitePwaManifest` — PWA 清单注入
- `NuxtLayout` — 布局容器
- `NuxtPage` — 页面渲染出口

---

## 四、接口对接方式

### API 请求方式（Nuxt + Nitro）

#### 方式一：useFetch（推荐）
`app/components/PageView.vue`
```ts
const { data } = await useFetch('/api/pageview')
// data.value?.pageview / data.value?.startAt
```
- Nuxt 内置，支持 SSR
- 自动处理 loading/error 状态
- 返回 reactive 数据

#### 方式二：$fetch
```ts
const data = await $fetch('/api/pageview')
```
- Nuxt 内置的 fetch 封装
- 不自动跟踪响应式

### API 接口定义（Nitro Server）
`server/api/pageview.ts`
```ts
const startAt = Date.now()
let count = 0
export default defineEventHandler(() => ({
  pageview: count++,
  startAt,
}))
```
- 定义在 `server/api/` 目录下，自动生成路由
- 返回 JSON 对象
- 支持 `defineEventHandler` / `defineEventHandler({ query, params, body })`

### 创建新 API 的规范
```ts
// server/api/example.ts → GET /api/example
export default defineEventHandler((event) => {
  const query = getQuery(event)
  const params = getRouterParams(event)
  const body = await readBody(event)
  // 处理业务逻辑
  return { success: true, data: {} }
})
```

可用工具函数：
| 函数 | 用途 |
|---|---|
| `getQuery(event)` | 获取查询参数 |
| `getRouterParams(event)` | 获取路由参数 |
| `readBody(event)` | 读取请求体 |
| `setResponseStatus(event, code)` | 设置响应状态码 |
| `sendError(event, error)` | 发送错误响应 |

---

## 五、样式体系

### UnoCSS 原子化 CSS
`uno.config.ts` 配置的预设：
| 预设 | 用途 |
|---|---|
| `presetWind4()` | Tailwind/Wind 兼容 |
| `presetAttributify()` | 属性化模式 |
| `presetIcons()` | 图标支持（Iconify） |
| `presetTypography()` | 排版样式 |
| `presetWebFonts()` | Web字体（DM Sans/Serif/Mono） |

### 使用示例
```vue
<!-- 原子化类名 -->
<main class="px-10 py-20 text-center">
<div text="xl gray4" m-5 flex="~ gap3" justify-center>

<!-- 属性化模式 -->
<div text-gray:80>
<button btn p-2 rounded-full>

<!-- 图标（Carbon / Twemoji） -->
<div i-carbon-sun dark:i-carbon-moon />
<div i-twemoji:waving-hand text-4xl>
<div i-carbon-warning inline-block>

<!-- 自定义快捷方式 -->
<button btn> <!-- btn = px-4 py-1 rounded inline-block bg-teal-600 ... -->
<div icon-btn> <!-- icon-btn = inline-block cursor-pointer select-none ... -->
```

### 深色模式
通过 `@nuxtjs/color-mode` 实现，由 `DarkToggle.vue` 控制切换：
```ts
const color = useColorMode()
color.preference = 'dark' | 'light'
// 样式条件：dark:xxx
```

---

## 六、PWA 配置（app/config/pwa.ts）

| 特性 | 配置 |
|---|---|
| 注册策略 | `autoUpdate`（自动更新） |
| Workbox | 缓存 JS/CSS/HTML/图片 |
| 运行时缓存 | Google Fonts（365天） |
| 离线兜底 | `navigateFallback: '/'` |
| 开发模式 | 通过环境变量 `VITE_PLUGIN_PWA=true` 启用 |

---

## 七、开发规范

### 新增页面
1. 在 `app/pages/` 下创建对应的 `.vue` 文件
2. 使用 `definePageMeta` 指定布局（如需）
3. 使用 `<script setup lang="ts">`

### 新增组件
1. 在 `app/components/` 下创建 `.vue` 文件
2. 自动导入，无需手动注册
3. 组件名使用 PascalCase

### 新增 API
1. 在 `server/api/` 下创建 `.ts` 文件
2. 使用 `defineEventHandler` 包装
3. 文件路径即 API 路径

### 新增 Composables
1. 在 `app/composables/` 下创建 `.ts` 文件
2. 自动导入，直接使用
3. 命名使用 `useXxx` 格式

### ESLint 规范
- 使用 `@antfu/eslint-config` 配置
- VSCode 保存时自动修复（`source.fixAll.eslint`）
- 禁用了 Prettier，完全依赖 ESLint

---

## 八、构建与部署

| 命令 | 用途 |
|---|---|
| `pnpm dev` | 启动开发服务器（HMR） |
| `pnpm dev:pwa` | 启用 PWA 的开发模式 |
| `pnpm build` | 构建生产版本（SSR） |
| `pnpm generate` | 构建静态导出 |
| `pnpm preview` | 预览 SSR 构建结果 |
| `pnpm start` | 启动 SSR 服务 |

### Docker 部署
```dockerfile
FROM node:20-alpine
# pnpm install → pnpm build → node .output/server/index.mjs
```
监听端口：`3000`

---

## 九、常用模式速查

### 获取路由参数（动态路由）
```ts
const route = useRoute<'hi-id'>()
const id = route.params.id  // /hi/:id
```

### 使用 VueUse 工具
```ts
const online = useOnline()                   // 网络状态
const color = useColorMode()                 // 颜色模式
const { data } = await useFetch(url)         // 数据请求
const time = useTimeAgo(() => timestamp)     // 相对时间
```

### 404 页面实现
`app/pages/[...all].vue` 使用 Nuxt 通配路由捕获所有未匹配路径。

---

## 十、依赖管理

项目使用 **PNPM Catalog** 统一管理依赖版本（`pnpm-workspace.yaml`），分为：
- `build` — Nuxt/构建工具相关
- `dev` — 开发工具（ESLint/TypeScript）
- `frontend` — 前端运行时（Vue/Pinia/VueUse）
- `icons` — 图标库