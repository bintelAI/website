<script setup lang="ts">
import { appDescription } from '~/constants'

const dimensFeatures = [
  { title: '数字员工', desc: '持久身份 · 长期记忆 · 自主执行', icon: 'i-carbon-bot', gradient: 'from-blue-400 to-cyan-400' },
  { title: 'AI 工作流', desc: '17+ 节点类型 · 拖拽式编排', icon: 'i-carbon-flow', gradient: 'from-purple-400 to-pink-400' },
  { title: '多维表格', desc: 'Agent 原生数据容器 · 20+ 字段类型', icon: 'i-carbon-table', gradient: 'from-emerald-400 to-teal-400' },
  { title: '知识库', desc: 'RAG 智能检索 · 多格式支持', icon: 'i-carbon-book', gradient: 'from-amber-400 to-orange-400' },
  { title: '实时协作', desc: 'Yjs CRDT 算法 · 毫秒级同步', icon: 'i-carbon-collaborate', gradient: 'from-rose-400 to-indigo-400' },
]
</script>

<template>
  <section class="relative bg-[#0B1120] overflow-hidden text-white min-h-[90vh] flex items-center pt-32 pb-24 md:pt-48 md:pb-32">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style="animation-delay: 1s" />
      <div class="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]" />
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Left Text Content -->
        <div class="lg:w-1/2 text-left">
          <Reveal direction="down" :delay="0.1">
            <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium text-sm backdrop-blur-sm hover:bg-emerald-500/20 transition-colors cursor-pointer">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Dimens — AI 原生企业协作平台
            </div>
          </Reveal>

          <Reveal :delay="0.2">
            <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              维表智联 Dimens
            </h1>
          </Reveal>

          <Reveal :delay="0.25">
            <h2 class="text-3xl md:text-4xl font-bold mb-8 leading-[1.2] tracking-tight">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                AI 原生的企业级智能协作平台
              </span>
            </h2>
          </Reveal>

          <Reveal :delay="0.3">
            <p class="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              {{ appDescription }}
            </p>
          </Reveal>

          <Reveal :delay="0.4">
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/product/dimens"
                class="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-medium bg-blue-600 text-white shadow-xl shadow-blue-900/50 hover:shadow-blue-600/50 hover:-translate-y-1 transition-all"
              >
                了解维表智联
                <span class="i-carbon-arrow-right text-xl" />
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-white border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1"
              >
                <span class="i-carbon-play text-xl text-gray-400 group-hover:text-white transition-colors" />
                观看演示
              </NuxtLink>
            </div>
          </Reveal>

          <Reveal :delay="0.5">
            <div class="mt-12 flex items-center gap-6 text-sm text-slate-500 border-t border-white/5 pt-8">
              <div class="flex -space-x-3">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="w-10 h-10 rounded-full border-2 border-[#0B1120] bg-slate-700 flex items-center justify-center text-xs text-white relative z-0 hover:z-10 hover:scale-110 transition-transform cursor-pointer overflow-hidden"
                >
                  <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=transparent`" alt="" class="w-full h-full rounded-full">
                </div>
                <div class="w-10 h-10 rounded-full border-2 border-[#0B1120] bg-slate-800 flex items-center justify-center text-xs text-slate-300 font-medium">
                  +500
                </div>
              </div>
              <div>
                <div class="text-white font-bold text-base">500+ 企业信赖之选</div>
                <div class="flex text-yellow-500 mt-1 gap-0.5">
                  <span v-for="i in 5" :key="i" class="i-carbon-star-filled text-sm" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <!-- Right Feature Cards -->
        <div class="lg:w-1/2 w-full relative flex items-center justify-center">
          <Reveal direction="left" :delay="0.6" width="100%" class="w-full">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <div
                v-for="(feature, index) in dimensFeatures"
                :key="feature.title"
                :class="[
                  'group relative overflow-hidden rounded-xl p-5 border border-white/10 bg-white/[0.03] backdrop-blur-sm',
                  'hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300',
                  index === dimensFeatures.length - 1 ? 'sm:col-span-2' : '',
                ]"
              >
                <!-- Card gradient glow on hover -->
                <div
                  :class="[
                    'absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500',
                    feature.gradient,
                  ]"
                />

                <div class="relative z-10 flex items-start gap-4">
                  <div
                    :class="[
                      'shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br',
                      feature.gradient,
                    ]"
                  >
                    <span :class="[feature.icon, 'text-white']" />
                  </div>
                  <div class="min-w-0">
                    <h3 class="text-white font-semibold text-base mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                      {{ feature.title }}
                    </h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                      {{ feature.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>