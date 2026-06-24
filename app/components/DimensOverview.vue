<script setup lang="ts">
interface LayerItem {
  icon: string
  label: string
  highlight?: boolean
  badge?: string
}

interface Layer {
  level: number
  icon: string
  title: string
  subtitle: string
  accent: string
  bgGradient: string
  borderGlow: string
  items: LayerItem[]
  columns: number
}

const layers: Layer[] = [
  {
    level: 1,
    icon: 'i-carbon-launch',
    title: '🚪 入口层',
    subtitle: 'utool 集成 — 多元场景无缝接入',
    accent: 'from-blue-500 to-cyan-400',
    bgGradient: 'from-slate-800/80 to-slate-800/40',
    borderGlow: 'border-blue-500/30 hover:border-blue-400/60',
    columns: 4,
    items: [
      { icon: 'i-carbon-ibm-cloud', label: '垂直行业 SaaS/软件', badge: '电商 医疗 金融 教育 智能制造' },
      { icon: 'i-carbon-enterprise', label: '企业定制解决方案', badge: 'OA ERP CRM 进销存 人力资源' },
      { icon: 'i-carbon-tool-kit', label: '独立产品工具链', badge: '数据分析 项目管理 文档协作 看板' },
      { icon: 'i-carbon-connection--two-way', label: '第三方平台集成', badge: '企业微信 飞书 钉钉 自建平台' },
    ],
  },
  {
    level: 2,
    icon: 'i-carbon-building',
    title: '🏢 业务场景层',
    subtitle: 'B 端 & C 端全覆盖，AI 驱动私有化数据',
    accent: 'from-emerald-500 to-teal-400',
    bgGradient: 'from-slate-800/80 to-slate-800/40',
    borderGlow: 'border-emerald-500/30 hover:border-emerald-400/60',
    columns: 4,
    items: [
      { icon: 'i-carbon-collaborate', label: 'B 端企业场景', badge: '项目管理 审批流程 知识管理 自动化办公' },
      { icon: 'i-carbon-user-avatar', label: 'C 端个人场景', badge: '个人数据管理 个人助手 洞察卡片 数据故事', highlight: true },
      { icon: 'i-carbon-data-private', label: 'AI 私有化数据', badge: '企业专属数据资产 私有知识库 多租户隔离 数据安全' },
      { icon: 'i-carbon-application', label: '应用与生态', badge: 'Agent 市场 模板市场 设计师经济 第三方集成' },
    ],
  },
  {
    level: 3,
    icon: 'i-carbon-assembly-cluster',
    title: '🟢 产品能力层',
    subtitle: '六大核心产品模块，构建企业数字战斗力',
    accent: 'from-violet-500 to-purple-400',
    bgGradient: 'from-slate-800/80 to-slate-800/40',
    borderGlow: 'border-violet-500/30 hover:border-violet-400/60',
    columns: 3,
    items: [
      { icon: 'i-carbon-table-split', label: '多维表格', badge: '20+ 字段 多视图 行列权限 计算字段' },
      { icon: 'i-carbon-document', label: '文档协作', badge: '富文本 Mermaid 版本控制 实时协作' },
      { icon: 'i-carbon-workflow', label: 'AI 工作流', badge: '拖拽编排 17+ 节点 MCP 工具 流式输出' },
      { icon: 'i-carbon-checklist', label: '审批流', badge: '多级审批 会签或签 条件分支 多维表联动' },
      { icon: 'i-carbon-tree-view-alt', label: '知识库', badge: 'RAG 检索 向量存储 知识图谱 重排序' },
      { icon: 'i-carbon-puzzle', label: '微模块系统', badge: '可视化搭建 组件注册 热插拔 数据源绑定' },
    ],
  },
  {
    level: 4,
    icon: 'i-carbon-platform',
    title: '🔴 平台与 AI 引擎层',
    subtitle: '坚实基座 · 智能引擎 · 多智能体协作',
    accent: 'from-rose-500 to-orange-400',
    bgGradient: 'from-slate-800/90 to-slate-900/60',
    borderGlow: 'border-rose-500/40 hover:border-rose-400/70',
    columns: 3,
    items: [
      { icon: 'i-carbon-ibm-z-os', label: '维表智联产品基座', badge: '权限与安全 实时协作 计费系统' },
      { icon: 'i-carbon-cloud-satellite', label: '小龙虾 SaaS 平台', badge: '数字员工 个人助手 Plaza 广场', highlight: true },
      { icon: 'i-carbon-ai-status', label: 'AI AGENT 多智能体协作引擎', badge: '自主感知 六种触发器 自我进化', highlight: true },
    ],
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-24">
    <!-- 背景纹理与光晕 -->
    <div class="pointer-events-none absolute inset-0 opacity-[0.03]" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)" />
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(59,130,246,0.12),transparent_60%)]" />
    <div class="pointer-events-none absolute bottom-0 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-t from-violet-600/10 to-transparent blur-3xl" />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-20 text-center">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-700/30 bg-blue-900/30 px-4 py-1.5 text-sm font-bold text-blue-300">
          <span class="i-carbon-architecture text-lg" />
          Dimens 产品架构
        </div>
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          四层架构体系
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-slate-400">
          从底层 AI 引擎到上层应用入口，构建完整的企业数字化底座
        </p>
      </div>

      <!-- Architecture Layers -->
      <div class="relative mx-auto max-w-5xl">
        <!-- 中央连接线 -->
        <div class="absolute bottom-24 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/20 via-purple-500/30 to-rose-500/40 lg:block" />

        <div class="space-y-10 lg:space-y-14">
          <template v-for="(layer, idx) in layers" :key="layer.level">
            <!-- 层与层之间的连接箭头 -->
            <div v-if="idx > 0" class="flex justify-center">
              <Reveal direction="none" width="100%">
                <div class="flex flex-col items-center gap-1">
                  <div class="h-6 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
                  <div class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-500">
                    <span class="i-carbon-chevron-down text-lg" />
                  </div>
                  <div class="h-6 w-px bg-gradient-to-t from-transparent via-slate-600 to-transparent" />
                </div>
              </Reveal>
            </div>

            <!-- Layer Card -->
            <Reveal :delay="(layer.level - 1) * 0.1" direction="up" width="100%">
              <div
                class="group relative overflow-hidden rounded-2xl border bg-gradient-to-br transition-all duration-500 hover:-translate-y-1"
                :class="[layer.bgGradient, layer.borderGlow]"
              >
                <!-- 背景光晕 -->
                <div
                  class="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-3xl"
                  :class="layer.accent"
                />

                <!-- Level Badge -->
                <div class="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-slate-700/50 bg-slate-800/60 px-2.5 py-1 text-xs font-bold text-slate-400 backdrop-blur-sm">
                  <span :class="`h-2 w-2 rounded-full bg-gradient-to-r ${layer.accent}`" />
                  LAYER {{ layer.level }}
                </div>

                <!-- Card Header -->
                <div class="border-b border-slate-700/30 p-6 sm:p-8">
                  <div class="flex items-center gap-4">
                    <div
                      class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                      :class="layer.accent"
                    >
                      <span :class="[layer.icon, 'text-xl']" />
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-white sm:text-2xl">
                        {{ layer.title }}
                      </h3>
                      <p class="mt-0.5 text-sm text-slate-400">
                        {{ layer.subtitle }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Card Body: Items Grid -->
                <div
                  class="p-6 sm:p-8"
                  :class="{
                    'grid grid-cols-1 gap-4 sm:grid-cols-2': layer.columns === 4,
                    'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3': layer.columns === 3,
                  }"
                >
                  <div
                    v-for="item in layer.items"
                    :key="item.label"
                    class="group/item relative overflow-hidden rounded-xl border bg-slate-900/40 p-4 transition-all duration-300 hover:bg-slate-800/60"
                    :class="[
                      item.highlight
                        ? 'border-amber-500/30 hover:border-amber-400/60'
                        : 'border-slate-700/50 hover:border-slate-600/60',
                    ]"
                  >
                    <!-- Highlight glow -->
                    <div
                      v-if="item.highlight"
                      class="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full bg-amber-500/10 blur-2xl"
                    />

                    <div class="relative z-10">
                      <div class="mb-2 flex items-center gap-2">
                        <span
                          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base"
                          :class="item.highlight ? 'bg-gradient-to-br from-amber-500/20 to-amber-600/20 text-amber-400' : 'bg-slate-700/50 text-slate-400'"
                        >
                          <span :class="item.icon" />
                        </span>
                        <span
                          class="text-sm font-bold leading-tight"
                          :class="item.highlight ? 'text-amber-200' : 'text-slate-200'"
                        >
                          {{ item.label }}
                        </span>
                        <!-- Highlight badge -->
                        <span
                          v-if="item.highlight"
                          class="ml-auto shrink-0 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300"
                        >
                          CORE
                        </span>
                      </div>
                      <p class="text-xs leading-relaxed text-slate-500">
                        {{ item.badge }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </template>
        </div>

        <!-- 底部基石标注 -->
        <Reveal :delay="0.5" direction="up" width="100%">
          <div class="mt-12 text-center">
            <div class="inline-flex items-center gap-3 rounded-2xl border border-slate-700/30 bg-slate-800/50 px-6 py-4 backdrop-blur-sm">
              <span class="i-carbon-data--structured text-slate-500 text-lg" />
              <span class="text-sm text-slate-400">
                <strong class="text-slate-300">四层架构</strong>  ·  从入口到引擎，层层赋能  ·  <strong class="text-slate-300">Dimens</strong> 驱动企业智能升级
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>