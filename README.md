# Web官网

基于 **Nuxt 4** + **Vue 3** + **TypeScript** 的企业官网项目，支持 PWA 离线访问。

## 技术栈

- **框架**: Nuxt 4 / Vue 3
- **语言**: TypeScript
- **样式**: UnoCSS (原子化CSS)
- **状态管理**: Pinia
- **工具库**: VueUse
- **构建工具**: Vite
- **包管理**: PNPM

## 快速开始

### 环境要求

- Node.js >= 18
- PNPM >= 8

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:3333

### PWA 开发模式

```bash
pnpm dev:pwa
```

## 项目结构

```
web官网/
├── app/                    # 主应用代码
│   ├── components/         # Vue组件 (自动导入)
│   ├── composables/        # 组合式函数 (自动导入)
│   ├── config/             # 配置文件
│   ├── constants/          # 全局常量
│   ├── layouts/            # 布局组件
│   └── pages/              # 页面路由
├── server/                 # Nitro服务端
│   ├── api/                # API接口
│   │   └── dimens/         # Dimens SDK代理接口
│   └── utils/              # 服务端工具
├── public/                 # 静态资源
└── nuxt.config.ts          # Nuxt配置
```

## 开发指南

### 新增页面

在 `app/pages/` 下创建 `.vue` 文件，自动生成路由：

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'default' // 可选: default | home
})
</script>

<template>
  <div>
    <!-- 页面内容 -->
  </div>
</template>
```

### 新增组件

在 `app/components/` 下创建 `.vue` 文件，自动注册：

```vue
<!-- app/components/MyComponent.vue -->
<template>
  <div>My Component</div>
</template>

<!-- 使用 -->
<MyComponent />
```

### 新增API

在 `server/api/` 下创建 `.ts` 文件：

```ts
// server/api/example.ts
export default defineEventHandler((event) => {
  const query = getQuery(event)
  return { success: true, data: query }
})
```

### 状态管理

**方式一：useState** (简单状态)

```ts
// app/composables/count.ts
export function useCount() {
  const count = useState('count', () => 0)
  return { count }
}
```

**方式二：Pinia Store** (复杂状态)

```ts
// app/composables/user.ts
export const useUserStore = defineStore('user', () => {
  const name = ref('')
  return { name }
})
```

### 样式规范

使用 UnoCSS 原子化类名：

```vue
<template>
  <!-- 原子化类名 -->
  <div class="px-4 py-2 text-center bg-blue-500">
    Content
  </div>

  <!-- 属性化模式 -->
  <div text="xl gray4" m-5 flex="~ gap3">
    Content
  </div>

  <!-- 图标 -->
  <div i-carbon-sun />
</template>
```

## 构建部署

### 构建生产版本

```bash
pnpm build
```

### 静态导出

```bash
pnpm generate
```

### 预览构建结果

```bash
pnpm preview
```

### Docker 部署

```bash
docker build -t web-official .
docker run -p 3000:3000 web-official

mmac 打包
docker buildx build --platform linux/amd64 -t bintelweb:v1.0 --load .


docker buildx build --pull=false --platform linux/amd64 -t registry.cn-hangzhou.aliyuncs.com/eagleme/bintel_web:v12 --push .


```

## 环境变量

创建 `.env` 文件配置环境变量：

```env
# Dimens SDK 配置
DIMENS_BASE_URL=http://127.0.0.1:8001
DIMENS_MARKET_TOKEN=your_token_here
```

## 代码规范

- 使用 `@antfu/eslint-config` 规则
- VSCode 保存时自动修复
- 禁用 Prettier，完全依赖 ESLint

## 相关文档

- [项目架构详解](./.trae/project-architecture.md)
- [Nuxt 4 文档](https://nuxt.com)
- [UnoCSS 文档](https://unocss.dev)
- [VueUse 文档](https://vueuse.org)

## License

MIT
