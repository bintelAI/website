<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({ layout: 'default' })

const product = productDetails.find(p => p.id === 'dimens')!

useSeo({
  title: product.title,
  description: product.description,
  keywords: product.tags,
  ogImage: product.imageUrl,
})

interface Feature {
  title: string
  desc: string
  icon: string
  gradient: string
}

const features: Feature[] = [
  { title: 'AI 原生多维表格', desc: '20+ 字段类型，AI 智能填充。甘特图、看板、日历多视图，让数据自动流转。', icon: 'i-carbon-table-split', gradient: 'from-blue-500 to-cyan-400' },
  { title: '富文本文档协作', desc: '实时协同编辑，Markdown 与富文本支持，AI 辅助写作。每一次编辑，都是团队共识。', icon: 'i-carbon-document', gradient: 'from-amber-500 to-orange-400' },
  { title: 'AI 工作流编排', desc: '拖拽式可视化编排，17+ 节点类型。把重复交给 AI，释放团队创造力。', icon: 'i-carbon-flow', gradient: 'from-purple-500 to-pink-400' },
  { title: '多级审批流引擎', desc: '自定义多级流程，与多维表格数据联动，支持条件分支与会签。审批，从不卡点。', icon: 'i-carbon-checklist', gradient: 'from-emerald-500 to-teal-400' },
  { title: 'RAG 知识库', desc: '构建企业专属知识中枢，智能问答、语义检索。让知识不再沉睡，24h 在线。', icon: 'i-carbon-book', gradient: 'from-violet-500 to-purple-400' },
  { title: '数字员工与个人助手', desc: '7×24h 在线的 AI 同事。持久身份、长期记忆，自主感知与执行任务。', icon: 'i-carbon-bot', gradient: 'from-pink-500 to-rose-400' },
  { title: 'AI AGENT 多智能体引擎', desc: '多 Agent 自主感知、委派任务、协作工作。从工具进化为团队，AI 成为组织成员。', icon: 'i-carbon-collaborate', gradient: 'from-indigo-500 to-blue-400' },
  { title: '实时协作编辑', desc: '基于 Yjs CRDT 算法，毫秒级同步，支持离线编辑与冲突自动合并。零摩擦协作。', icon: 'i-carbon-group', gradient: 'from-cyan-500 to-blue-400' },
]

interface Layer {
  name: string
  items: string[]
  desc: string
  icon: string
  border: string
  badge: string
}

const layers: Layer[] = [
  { name: '入口层', items: ['utool 集成', 'Web 端', '移动端'], desc: '连接各行各业的产品与场景入口', icon: 'i-carbon-layers', border: 'border-blue-500/20', badge: 'bg-blue-500/15 text-blue-300' },
  { name: '业务场景层', items: ['项目管理', '数据管理', '知识管理', '审批流程', '自动化办公', 'AI 决策'], desc: '覆盖 B 端企业与 C 端个人需求', icon: 'i-carbon-category', border: 'border-cyan-500/20', badge: 'bg-cyan-500/15 text-cyan-300' },
  { name: '产品能力层', items: ['多维表格', '文档协作', 'AI 工作流', '审批流', '知识库', '微模块系统'], desc: '六大核心产品能力矩阵', icon: 'i-carbon-tools', border: 'border-purple-500/20', badge: 'bg-purple-500/15 text-purple-300' },
  { name: '平台与 AI 引擎层', items: ['AI AGENT 引擎', '数字员工', '个人助手', '产品基座'], desc: '依托 AI AGENT 引擎注入 AI 角色', icon: 'i-carbon-chip', border: 'border-indigo-500/20', badge: 'bg-indigo-500/15 text-indigo-300' },
]

interface Scenario {
  title: string
  desc: string
  icon: string
}

const scenarios: Scenario[] = [
  { title: '项目管理', desc: '多维表格搭建看板，甘特图跟踪进度，AI 自动提醒风险。', icon: 'i-carbon-diagram' },
  { title: '数据管理', desc: '替代传统 Excel，多用户实时协作，权限分级管控。', icon: 'i-carbon-data-vis-1' },
  { title: '知识管理', desc: '构建企业知识库，智能问答与语义检索，知识随手可得。', icon: 'i-carbon-knowledge' },
  { title: '审批流程', desc: '自定义审批流，与表格数据联动，智能路由自动催办。', icon: 'i-carbon-checklist' },
  { title: '自动化办公', desc: 'AI 工作流将重复性工作编排自动化，释放创造力。', icon: 'i-carbon-settings' },
  { title: 'AI 驱动决策', desc: '向 AI 助手询问跨项目数据洞察，决策有据可依。', icon: 'i-carbon-decision-tree' },
]
</script>

<template>
  <div class="bg-white">
    <!-- ==================== HERO ==================== -->
    <section class="relative min-h-[88vh] bg-slate-950 overflow-hidden flex items-center">
      <!-- 动画网格背景 -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black,transparent)]" />

      <!-- 渐变光晕 -->
      <div class="absolute -top-40 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent rounded-full blur-[120px]" />
      <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 via-indigo-500/10 to-transparent rounded-full blur-[120px]" />
      <div class="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/5 to-transparent rounded-full blur-[100px]" />

      <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <NuxtLink to="/products" class="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 mb-12 transition-colors group">
          <span class="i-carbon-arrow-left transition-transform group-hover:-translate-x-1" />
          返回产品中心
        </NuxtLink>

        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <div class="flex-1 max-w-2xl">
            <Reveal variant="up">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-8 backdrop-blur-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-breathe" />
                AI 原生 · 企业级智能协作
              </div>
            </Reveal>

            <Reveal variant="up" :delay="0.08">
              <h1 class="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                维表智联
                <br>
                <span class="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Dimens</span>
              </h1>
            </Reveal>

            <Reveal variant="up" :delay="0.14">
              <p class="text-xl md:text-2xl text-blue-200/80 font-medium mb-5 leading-snug">
                让 AI 成为您真正的数字化团队成员
              </p>
            </Reveal>

            <Reveal variant="up" :delay="0.2">
              <p class="text-base text-gray-400 leading-relaxed max-w-xl mb-10">
                融合多维表格、富文本文档、AI 工作流、审批流、知识库与数字员工。
                基于 AI AGENT 多智能体引擎，AI 从工具层跃升为组织层，成为真正的数字化团队成员。
              </p>
            </Reveal>

            <Reveal variant="up" :delay="0.26">
              <div class="flex flex-wrap gap-4">
                <a href="https://www.bintelai.com/app/dimens/" target="_blank" class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-400 transition-all hover:-translate-y-0.5">
                  <span class="i-carbon-launch" />
                  免费使用
                </a>
                <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-base bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5">
                  <span class="i-carbon-chat" />
                  预约演示
                </NuxtLink>
              </div>
            </Reveal>
          </div>

          <!-- 右侧产品预览卡片 -->
          <Reveal variant="scale" :delay="0.2" class="flex-1 hidden lg:block">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div class="relative rounded-3xl overflow-hidden bg-slate-900/80 border border-white/10 shadow-2xl backdrop-blur-xl">
                <!-- 窗口装饰 -->
                <div class="h-9 bg-slate-800/80 border-b border-white/5 flex items-center px-4 gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500/60" />
                  <div class="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div class="w-3 h-3 rounded-full bg-green-500/60" />
                  <div class="ml-4 text-[11px] text-gray-500 font-mono">dimens — 维表智联</div>
                </div>
                <!-- 产品预览内容 -->
                <div class="p-6 space-y-4">
                  <div class="grid grid-cols-4 gap-3">
                    <div v-for="_ in 4" :key="_" class="h-8 rounded-lg bg-white/5 border border-white/5" />
                  </div>
                  <div class="grid grid-cols-3 gap-3">
                    <div class="h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/10 flex items-center justify-center">
                      <span class="i-carbon-table-split text-2xl text-blue-400/60" />
                    </div>
                    <div class="h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/10 flex items-center justify-center">
                      <span class="i-carbon-flow text-2xl text-purple-400/60" />
                    </div>
                    <div class="h-20 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/10 flex items-center justify-center">
                      <span class="i-carbon-document text-2xl text-amber-400/60" />
                    </div>
                  </div>
                  <div class="h-2 rounded-full bg-white/5" />
                  <div class="h-2 rounded-full bg-white/5 w-2/3" />
                </div>
              </div>

              <!-- 浮动标签 -->
              <div class="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-xs font-bold shadow-lg shadow-blue-500/30">
                AI Native
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ==================== STATS ==================== -->
    <section class="py-16 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <Reveal variant="up" width="100%">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="stat in [
              { value: '8', label: '核心能力', icon: 'i-carbon-tools' },
              { value: '20+', label: '字段类型', icon: 'i-carbon-table' },
              { value: '17+', label: '工作流节点', icon: 'i-carbon-flow' },
              { value: '6', label: '应用场景', icon: 'i-carbon-category' },
            ]" :key="stat.label" class="text-center">
              <div class="text-4xl md:text-5xl font-bold bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-400 flex items-center justify-center gap-1.5">
                <span :class="[stat.icon, 'text-gray-300']" />
                {{ stat.label }}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- ==================== 核心能力 ==================== -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <Reveal variant="up">
            <div class="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5">
              Core Capabilities
            </div>
          </Reveal>
          <Reveal variant="up" :delay="0.08">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              从工具进化为团队
            </h2>
          </Reveal>
          <Reveal variant="up" :delay="0.14">
            <p class="text-lg text-gray-500 max-w-2xl mx-auto">
              八项核心能力，覆盖数据管理、文档协作、AI 自动化与智能决策全链路
            </p>
          </Reveal>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Reveal v-for="(f, i) in features" :key="f.title" variant="up" :delay="0.04 * i" width="100%" :class="i === 0 || i === 2 ? 'lg:col-span-2' : ''">
            <div class="group relative h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
              <!-- 顶部渐变线 -->
              <div class="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" :class="f.gradient" />

              <div class="w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300" :class="f.gradient">
                <span :class="[f.icon, 'text-lg']" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2.5">{{ f.title }}</h3>
              <p class="text-sm text-gray-500 leading-relaxed">{{ f.desc }}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ==================== 产品架构 ==================== -->
    <section class="py-24 bg-slate-950 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[80px]" />

      <div class="max-w-5xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <Reveal variant="up">
            <div class="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold mb-5 backdrop-blur-sm">
              Architecture
            </div>
          </Reveal>
          <Reveal variant="up" :delay="0.08">
            <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              四层架构，从入口到智能
            </h2>
          </Reveal>
          <Reveal variant="up" :delay="0.14">
            <p class="text-lg text-gray-500 max-w-2xl mx-auto">
              为每一次协作提供坚实的技术底座
            </p>
          </Reveal>
        </div>

        <div class="relative">
          <!-- 中心连接线 -->
          <div class="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-indigo-500/40 hidden md:block" />

          <div class="space-y-6">
            <Reveal v-for="(layer, idx) in layers" :key="layer.name" variant="up" :delay="0.08 * idx" width="100%">
              <div class="group relative pl-0 md:pl-16">
                <!-- 连接点 -->
                <div class="absolute left-[7px] md:left-[44px] top-8 w-3 h-3 rounded-full bg-white/10 border-2 border-white/20 hidden md:group-hover:bg-white/25 transition-colors" />

                <div class="relative rounded-2xl border p-6 transition-all duration-300" :class="[layer.border, 'bg-white/[0.03] hover:bg-white/[0.06]']">
                  <div class="flex flex-col md:flex-row gap-5 items-start">
                    <div class="flex items-center gap-4 shrink-0 min-w-[180px]">
                      <div class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                        <span :class="[layer.icon, 'text-xl']" />
                      </div>
                      <div>
                        <div class="font-semibold text-sm text-white">{{ layer.name }}</div>
                        <div class="text-xs text-gray-500 mt-0.5">{{ layer.desc }}</div>
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="item in layer.items" :key="item" class="text-xs px-3 py-1.5 rounded-lg border text-gray-400 transition-colors cursor-default" :class="[layer.badge, 'border-white/5 hover:border-white/20']">
                        {{ item }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal variant="up" :delay="0.4" width="100%">
          <div class="mt-10 text-center">
            <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
              <span class="w-2 h-2 rounded-full bg-green-400 animate-breathe" />
              AI AGENT 引擎 · 持续运行中
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- ==================== 应用场景 ==================== -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <Reveal variant="up">
            <div class="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5">
              Use Cases
            </div>
          </Reveal>
          <Reveal variant="up" :delay="0.08">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              覆盖全业务场景
            </h2>
          </Reveal>
          <Reveal variant="up" :delay="0.14">
            <p class="text-lg text-gray-500 max-w-2xl mx-auto">
              从项目管理到 AI 决策，驱动企业全链路数字化升级
            </p>
          </Reveal>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Reveal v-for="(s, i) in scenarios" :key="s.title" variant="up" :delay="0.05 * i" width="100%">
            <div class="group relative p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
              <div class="flex gap-4 items-start">
                <div class="w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm" :class="[i % 3 === 0 ? 'from-blue-500 to-cyan-400' : i % 3 === 1 ? 'from-violet-500 to-purple-400' : 'from-amber-500 to-orange-400']">
                  <span :class="[s.icon, 'text-lg']" />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-bold text-gray-900 mb-1.5">{{ s.title }}</h3>
                  <p class="text-sm text-gray-500 leading-relaxed">{{ s.desc }}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ==================== 技术规格 ==================== -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <Reveal variant="up">
            <div class="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-semibold mb-5">
              Tech Specs
            </div>
          </Reveal>
          <Reveal variant="up" :delay="0.08">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              企业级技术底座
            </h2>
          </Reveal>
          <Reveal variant="up" :delay="0.14">
            <p class="text-lg text-gray-500 max-w-2xl mx-auto">
              为稳定性与性能而生，经得起企业级考验
            </p>
          </Reveal>
        </div>

        <Reveal variant="up" width="100%">
          <div class="flex flex-wrap gap-3 justify-center">
            <div v-for="(spec, idx) in product.specs" :key="spec" class="group relative px-5 py-3 rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 overflow-hidden" :class="[idx % 3 === 0 ? 'border-blue-200/60 hover:border-blue-300' : idx % 3 === 1 ? 'border-purple-200/60 hover:border-purple-300' : 'border-amber-200/60 hover:border-amber-300']">
              <div class="absolute top-0 right-0 w-12 h-12 rounded-full opacity-[0.08] blur-xl" :class="[idx % 3 === 0 ? 'bg-blue-500' : idx % 3 === 1 ? 'bg-purple-500' : 'bg-amber-500']" />
              <span :class="[
                'text-base shrink-0 mr-2.5',
                idx % 3 === 0 ? 'i-carbon-cube text-blue-500' : idx % 3 === 1 ? 'i-carbon-cube text-purple-500' : 'i-carbon-cube text-amber-500',
              ]" />
              <span class="text-sm text-gray-700 font-medium">{{ spec }}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- ==================== SaaS 版本介绍 ==================== -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-6">
        <Reveal variant="up" width="100%">
          <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100/60 p-10 md:p-14">
            <div class="absolute -top-20 -right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-[80px]" />
            <div class="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-200/20 rounded-full blur-[80px]" />

            <div class="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div class="flex-1">
                <div class="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-4">
                  SaaS Edition
                </div>
                <h2 class="text-2xl font-bold text-gray-900 mb-3">小龙虾 Crayfish</h2>
                <p class="text-gray-600 leading-relaxed text-sm">
                  维表智联的 SaaS 服务版本，采用私有化部署模式，深度集成多智能体协作引擎。让平台从"工具"进化为一支 AI 原生的数字化团队。
                </p>
                <div class="flex flex-wrap gap-2 mt-5">
                  <span class="text-xs px-3 py-1.5 rounded-lg bg-white/80 border border-gray-200 text-gray-500">私有化部署</span>
                  <span class="text-xs px-3 py-1.5 rounded-lg bg-white/80 border border-gray-200 text-gray-500">多智能体引擎</span>
                  <span class="text-xs px-3 py-1.5 rounded-lg bg-white/80 border border-gray-200 text-gray-500">AI 原生团队</span>
                </div>
              </div>
              <div class="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg animate-float-soft">
                <span class="i-carbon-cafe text-3xl text-white" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- ==================== CTA ==================== -->
    <section class="py-24 bg-slate-950 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)]" />

      <div class="max-w-3xl mx-auto px-6 text-center relative z-10">
        <Reveal variant="up">
          <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            开启您的 AI 协作之旅
          </h2>
        </Reveal>
        <Reveal variant="up" :delay="0.08">
          <p class="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            与维表智联一起，让 AI 成为您真正的数字化团队成员
          </p>
        </Reveal>
        <Reveal variant="up" :delay="0.14">
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="https://www.bintelai.com/app/dimens/" target="_blank" class="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-400 transition-all hover:-translate-y-0.5 hover:shadow-xl">
              <span class="i-carbon-launch" />
              免费使用
            </a>
            <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-white/20 text-white font-bold text-base bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5">
              <span class="i-carbon-chat" />
              联系销售团队
            </NuxtLink>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>