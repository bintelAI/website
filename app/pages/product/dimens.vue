<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({ layout: 'default' })

useHead({
  title: '维表智联 Dimens - 方块智联',
})

const product = productDetails.find(p => p.id === 'dimens')!

interface Layer {
  name: string
  items: string[]
  desc: string
}

const layers: Layer[] = [
  {
    name: '入口层',
    items: ['utool 集成', 'Web 端', '移动端'],
    desc: '连接各行各业的产品与场景入口',
  },
  {
    name: '业务场景层',
    items: ['项目管理', '数据管理', '知识管理', '审批流程', '自动化办公', 'AI 决策'],
    desc: '覆盖 B 端企业与 C 端个人需求',
  },
  {
    name: '产品能力层',
    items: ['多维表格', '文档协作', 'AI 工作流', '审批流', '知识库', '微模块系统'],
    desc: '六大核心产品能力矩阵',
  },
  {
    name: '平台与 AI 引擎层',
    items: ['AI AGENT 多智能体引擎', '数字员工', '个人助手', '产品基座'],
    desc: '依托 AI AGENT 引擎注入 AI 角色',
  },
]

const featureIcons: Record<string, string> = {
  'AI 原生多维表格': 'i-carbon-table-split',
  '富文本文档协作': 'i-carbon-document',
  'AI 工作流编排': 'i-carbon-flow',
  '多级审批流引擎': 'i-carbon-checklist',
  'RAG 知识库': 'i-carbon-book',
  '数字员工与个人助手': 'i-carbon-bot',
  'AI AGENT 多智能体引擎': 'i-carbon-collaborate',
  '实时协作编辑': 'i-carbon-group',
}

const specIcons: Record<string, string> = {
  '基于 Yjs CRDT 的多人实时协同编辑': 'i-carbon-network-3',
  '20+ 种字段类型的多维表格': 'i-carbon-table',
  '17+ 种节点类型的 AI 工作流': 'i-carbon-flow',
  '多租户 RBAC 权限体系': 'i-carbon-security',
  '支持 Chroma/FAISS/pgvector 向量存储': 'i-carbon-database',
  '支持 MCP 协议工具调用': 'i-carbon-toolbox',
}

const scenarioIcons: Record<string, string> = {
  '项目管理': 'i-carbon-diagram',
  '数据管理': 'i-carbon-data-vis-1',
  '知识管理': 'i-carbon-knowledge',
  '审批流程': 'i-carbon-checklist',
  '自动化办公': 'i-carbon-settings',
  'AI 驱动决策': 'i-carbon-decision-tree',
}
</script>

<template>
  <div class="bg-white min-h-screen">
    <!-- ==================== 1. Hero ==================== -->
    <section class="text-white pb-24 pt-28 bg-slate-900 relative overflow-hidden">
      <!-- 背景光晕 -->
      <div class="inset-0 absolute z-0">
        <div
          class="rounded-full opacity-25 h-[700px] w-[700px] translate-x-1/4 right-0 top-0 absolute blur-[150px] -translate-y-1/4"
          :class="`bg-gradient-to-br ${product.imageColor || 'from-blue-600 via-cyan-500 to-purple-600'}`"
        />
        <div class="rounded-full bg-blue-900 opacity-20 h-[500px] w-[500px] translate-y-1/4 bottom-0 left-0 absolute blur-[120px] -translate-x-1/4" />
        <div class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] inset-0 absolute from-transparent to-slate-900 via-slate-900/80" />
      </div>

      <div class="mx-auto px-6 max-w-7xl relative z-10">
        <NuxtLink
          to="/products"
          class="group text-sm text-gray-400 mb-10 inline-flex gap-2 transition-colors items-center hover:text-white"
        >
          <span class="i-carbon-arrow-left transition-transform group-hover:-translate-x-1" />
          返回产品中心
        </NuxtLink>

        <div class="max-w-4xl">
          <!-- 标签 -->
          <div class="mb-6 flex flex-wrap gap-2">
            <span
              v-for="tag in product.tags"
              :key="tag"
              class="text-sm font-medium px-3 py-1 border rounded-full backdrop-blur-sm"
              :class="tag === 'AI' ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300' : tag === '协作平台' ? 'bg-blue-500/20 border-blue-400/40 text-blue-300' : 'bg-purple-500/20 border-purple-400/40 text-purple-300'"
            >
              {{ tag }}
            </span>
          </div>

          <!-- 大标题 -->
          <h1 class="text-5xl leading-tight font-bold mb-4 md:text-6xl">
            {{ product.title }}
          </h1>

          <!-- 副标题 -->
          <p class="text-2xl text-blue-300 font-semibold mb-6 md:text-3xl">
            AI 原生的企业级智能协作平台
          </p>

          <!-- 描述 -->
          <p class="text-lg text-gray-300 leading-relaxed max-w-3xl">
            {{ product.description }}
          </p>

          <!-- 按钮 -->
          <div class="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.bintelai.com/app/dimens/"
              target="_blank"
              class="text-lg text-white font-semibold px-8 py-3.5 rounded-xl inline-flex gap-2 shadow-blue-500/30 shadow-lg transition-all items-center from-blue-600 to-cyan-500 bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400"
            >
              <span class="i-carbon-launch" />
              开源
            </a>
            <button
              disabled
              class="text-lg text-white/50 font-semibold px-8 py-3.5 border border-white/20 rounded-xl bg-white/10 inline-flex gap-2 items-center backdrop-blur-sm cursor-not-allowed"
            >
              <span class="i-carbon-logo-github" />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 2. 产品架构图 ==================== -->
    <section class="py-24 bg-gray-50">
      <div class="mx-auto px-6 max-w-7xl">
        <!-- 标题 -->
        <div class="mb-16 text-center">
          <h2 class="text-3xl text-gray-900 font-bold mb-4 md:text-4xl">
            产品架构
          </h2>
          <p class="text-lg text-gray-500 mx-auto max-w-2xl">
            四层架构设计，从入口到 AI 引擎，构建完整的智能协作平台
          </p>
        </div>

        <!-- 架构图 -->
        <div class="relative">
          <!-- 垂直连接线 -->
          <div class="w-0.5 hidden bottom-0 left-1/2 top-0 absolute from-blue-400 to-purple-400 via-cyan-400 bg-gradient-to-b lg:block -translate-x-1/2" />

          <div class="relative space-y-6 lg:gap-4 lg:grid lg:grid-cols-4 lg:space-y-0 lg:space-y-0">
            <div
              v-for="(layer, idx) in layers"
              :key="idx"
              class="group relative"
            >
              <!-- 箭头（桌面端在卡片右侧，移动端在卡片下方） -->
              <div
                v-if="idx < layers.length - 1"
                class="text-2xl text-blue-400 hidden top-1/2 absolute z-10 lg:flex -translate-y-1/2 -right-3"
              >
                <span class="i-carbon-chevron-right" />
              </div>

              <div
                class="p-6 border rounded-2xl h-full transition-all duration-300 hover:shadow-xl"
                :class="[
                  idx === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400'
                  : idx === 1 ? 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 hover:border-cyan-400'
                    : idx === 2 ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400'
                      : 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 hover:border-indigo-400',
                ]"
              >
                <!-- 层标识 -->
                <div
                  class="text-sm font-semibold mb-4 px-3 py-1 rounded-full inline-flex gap-1.5 items-center"
                  :class="[
                    idx === 0 ? 'bg-blue-500 text-white'
                    : idx === 1 ? 'bg-cyan-500 text-white'
                      : idx === 2 ? 'bg-purple-500 text-white'
                        : 'bg-indigo-500 text-white',
                  ]"
                >
                  <span
                    :class="[
                      idx === 0 ? 'i-carbon-layers'
                      : idx === 1 ? 'i-carbon-category'
                        : idx === 2 ? 'i-carbon-tools'
                          : 'i-carbon-chip',
                    ]"
                  />
                  {{ layer.name }}
                </div>

                <!-- 层级描述 -->
                <p class="text-sm text-gray-500 leading-relaxed mb-4">
                  {{ layer.desc }}
                </p>

                <!-- 能力项 -->
                <div class="space-y-2">
                  <div
                    v-for="(item, i) in layer.items"
                    :key="i"
                    class="text-sm text-gray-700 font-medium px-3 py-2 rounded-lg bg-white/70 flex gap-2 shadow-sm items-center backdrop-blur-sm"
                  >
                    <span
                      class="rounded-full shrink-0 h-1.5 w-1.5"
                      :class="[
                        idx === 0 ? 'bg-blue-500'
                        : idx === 1 ? 'bg-cyan-500'
                          : idx === 2 ? 'bg-purple-500'
                            : 'bg-indigo-500',
                      ]"
                    />
                    {{ item }}
                  </div>
                </div>
              </div>

              <!-- 移动端箭头 -->
              <div
                v-if="idx < layers.length - 1"
                class="text-gray-400 my-2 flex justify-center lg:hidden"
              >
                <span class="i-carbon-chevron-down text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 3. 核心能力卡片 ==================== -->
    <section class="text-white py-24 bg-slate-900">
      <div class="mx-auto px-6 max-w-7xl">
        <div class="mb-16 text-center">
          <h2 class="text-3xl font-bold mb-4 md:text-4xl">
            核心能力
          </h2>
          <p class="text-lg text-gray-400 mx-auto max-w-2xl">
            八大核心能力，重塑企业智能协作新范式
          </p>
        </div>

        <div class="gap-5 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
          <div
            v-for="(feature, idx) in product.features"
            :key="idx"
            class="group p-6 border border-white/10 rounded-2xl bg-white/5 transition-all duration-300 relative overflow-hidden hover:border-blue-400/30 hover:bg-white/[0.08] hover:-translate-y-1"
          >
            <!-- 序号装饰 -->
            <div class="text-6xl text-white/5 font-bold pointer-events-none select-none absolute -right-4 -top-4">
              {{ String(idx + 1).padStart(2, '0') }}
            </div>

            <div
              class="text-xl mb-5 rounded-xl flex h-11 w-11 transition-transform duration-300 items-center justify-center bg-gradient-to-br group-hover:scale-110"
              :class="[
                idx % 4 === 0 ? 'from-blue-500 to-cyan-400'
                : idx % 4 === 1 ? 'from-purple-500 to-pink-400'
                  : idx % 4 === 2 ? 'from-amber-500 to-orange-400'
                    : 'from-emerald-500 to-teal-400',
              ]"
            >
              <span class="text-white" :class="[featureIcons[feature] || 'i-carbon-unknown']" />
            </div>

            <h3 class="text-lg font-bold mb-2">
              {{ feature }}
            </h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              {{ idx === 0 ? '20+ 字段类型，支持甘特图、看板、日历多种视图，AI 智能填充与数据分析。'
                : idx === 1 ? '实时协同编辑，支持 Markdown 与富文本，AI 辅助写作与内容生成。'
                  : idx === 2 ? '拖拽式可视化编排，17+ 节点类型，零代码实现复杂业务自动化。'
                    : idx === 3 ? '自定义多级审批流程，与多维表格数据联动，支持条件分支与会签。'
                      : idx === 4 ? '构建企业专属知识库，支持智能问答、语义检索与知识图谱。'
                        : idx === 5 ? '项目级 AI 团队成员，持久身份与长期记忆，自主感知与执行任务。'
                          : idx === 6 ? '多 Agent 自主感知、委派任务、协作工作，从工具跃升为团队。'
                            : '基于 Yjs CRDT 算法，毫秒级同步，支持离线编辑与冲突自动合并。' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 4. 应用场景 ==================== -->
    <section class="py-24 bg-gray-50">
      <div class="mx-auto px-6 max-w-7xl">
        <div class="mb-16 text-center">
          <h2 class="text-3xl text-gray-900 font-bold mb-4 md:text-4xl">
            应用场景
          </h2>
          <p class="text-lg text-gray-500 mx-auto max-w-2xl">
            覆盖企业核心业务场景，驱动全链路数字化升级
          </p>
        </div>

        <div class="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <div
            v-for="(scenario, idx) in product.scenarios"
            :key="idx"
            class="group p-6 border border-gray-100 rounded-2xl bg-white shadow-sm transition-all duration-300 relative hover:border-blue-200 hover:shadow-lg"
          >
            <div class="flex gap-4 items-start">
              <div
                class="text-xl rounded-xl flex shrink-0 h-12 w-12 transition-transform items-center justify-center bg-gradient-to-br group-hover:scale-110"
                :class="[
                  idx % 3 === 0 ? 'from-blue-500 to-cyan-400'
                  : idx % 3 === 1 ? 'from-violet-500 to-purple-400'
                    : 'from-amber-500 to-orange-400',
                ]"
              >
                <span class="text-white" :class="[scenarioIcons[scenario.split(' — ')[0] ?? ''] || 'i-carbon-cube']" />
              </div>
              <div>
                <h3 class="text-lg text-gray-900 font-bold mb-1">
                  {{ scenario.split(' — ')[0] }}
                </h3>
                <p class="text-sm text-gray-500 leading-relaxed">
                  {{ scenario.split(' — ')[1] || scenario }}
                </p>
              </div>
            </div>

            <!-- 底部装饰线 -->
            <div
              class="rounded-full h-0.5 origin-left scale-x-0 transition-transform duration-500 bottom-0 left-6 right-6 absolute group-hover:scale-x-100"
              :class="[
                idx % 3 === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                : idx % 3 === 1 ? 'bg-gradient-to-r from-violet-500 to-purple-400'
                  : 'bg-gradient-to-r from-amber-500 to-orange-400',
              ]"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 5. 技术规格 ==================== -->
    <section class="py-24 bg-white">
      <div class="mx-auto px-6 max-w-7xl">
        <div class="mb-16 text-center">
          <h2 class="text-3xl text-gray-900 font-bold mb-4 md:text-4xl">
            技术规格
          </h2>
          <p class="text-lg text-gray-500 mx-auto max-w-2xl">
            领先的技术架构，为企业级应用保驾护航
          </p>
        </div>

        <div class="flex flex-wrap gap-4 justify-center">
          <div
            v-for="(spec, idx) in product.specs"
            :key="idx"
            class="group px-6 py-4 border border-gray-200 rounded-xl bg-white flex gap-3 shadow-sm transition-all duration-300 items-center relative overflow-hidden hover:border-blue-300 hover:shadow-md"
          >
            <!-- 渐变角标 -->
            <div
              class="h-16 w-16 translate-x-8 rotate-45 right-0 top-0 absolute bg-gradient-to-br -translate-y-8" :class="[
                idx % 3 === 0 ? 'from-blue-500 to-cyan-400'
                : idx % 3 === 1 ? 'from-violet-500 to-purple-400'
                  : 'from-amber-500 to-orange-400',
              ]"
            />

            <span
              class="text-xl shrink-0"
              :class="[
                specIcons[spec] || 'i-carbon-cube',
                idx % 3 === 0 ? 'text-blue-500'
                : idx % 3 === 1 ? 'text-purple-500'
                  : 'text-amber-500',
              ]"
            />
            <span class="text-sm text-gray-700 font-medium">{{ spec }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 6. CTA ==================== -->
    <section class="py-24 relative overflow-hidden">
      <div class="inset-0 absolute from-blue-600 to-purple-700 via-cyan-600 bg-gradient-to-r" />
      <div class="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] inset-0 absolute from-white/10 to-transparent via-transparent" />

      <div class="mx-auto px-6 text-center max-w-7xl relative z-10">
        <h2 class="text-3xl text-white font-bold mb-4 md:text-4xl">
          开启您的智能协作之旅
        </h2>
        <p class="text-lg text-blue-100 mx-auto mb-10 max-w-2xl">
          与维表智联一起，让 AI 成为您真正的数字化团队成员
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="text-lg text-blue-700 font-bold px-10 py-4 rounded-full bg-white inline-flex gap-2 shadow-xl transition-all items-center hover:bg-gray-100 hover:shadow-2xl"
          >
            <span class="i-carbon-chat" />
            联系销售团队
          </NuxtLink>
          <NuxtLink
            to="/solutions"
            class="text-lg text-white font-semibold px-10 py-4 border border-white/30 rounded-full bg-white/10 inline-flex gap-2 transition-all items-center backdrop-blur-sm hover:bg-white/20"
          >
            <span class="i-carbon-document" />
            了解更多
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
