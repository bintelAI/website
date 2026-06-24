<script setup lang="ts">
import { productMatrix } from '~/constants'
</script>

<template>
  <section class="py-24 bg-gray-50/50">
    <div class="container mx-auto px-6">
      <Reveal>
        <SectionTitle
          title="全链路产品矩阵"
          subtitle="从底层数据引擎到上层交互应用，构建完整的数智化生态"
          centered
        />
      </Reveal>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px]">
        <!-- 1. Dimens 旗舰卡片 - col-span-2 row-span-2 -->
        <div class="col-span-1 md:col-span-2 row-span-2 group">
          <Reveal width="100%" class="h-full">
            <NuxtLink
              :to="productMatrix[0]?.link ?? '/product/dimens'"
              class="relative h-full w-full rounded-3xl overflow-hidden bg-[#0F172A] text-white cursor-pointer shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border border-slate-800 flex flex-col justify-between p-8 block"
            >
              <!-- Animated Gradient Glow -->
              <div class="absolute inset-0 pointer-events-none">
                <div class="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[80px] animate-glow-pulse" />
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
              </div>

              <!-- Floating Icon -->
              <div class="absolute right-6 top-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <span class="i-carbon-ai-launch text-[140px] text-blue-300 block" />
              </div>

              <div class="relative z-20">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold mb-4 backdrop-blur-md">
                  <span class="i-carbon-star-filled text-xs" /> 旗舰产品
                </div>
                <h3 class="text-3xl font-bold mb-2 group-hover:text-blue-200 transition-colors">维表智联 Dimens</h3>
                <p class="text-slate-400 text-sm max-w-xs leading-relaxed">
                  AI 原生的企业级智能协作平台，融合多维表格、文档、AI 工作流、审批流、知识库与数字员工。
                </p>
              </div>

              <!-- Capability Badges -->
              <div class="relative z-20 flex flex-wrap gap-2 mt-3">
                <span class="px-2.5 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-slate-300">多维表格</span>
                <span class="px-2.5 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-slate-300">文档协作</span>
                <span class="px-2.5 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-slate-300">AI 工作流</span>
                <span class="px-2.5 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-slate-300">审批流</span>
                <span class="px-2.5 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-slate-300">知识库</span>
                <span class="px-2.5 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-slate-300">数字员工</span>
              </div>

              <!-- CTA -->
              <div class="relative z-20 flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-white transition-colors mt-4">
                <span class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <span class="i-carbon-arrow-right text-sm" />
                </span>
                <span>了解 Dimens</span>
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 2. 智能画布系统 (col-span-2 row-span-1) -->
        <div class="col-span-1 md:col-span-2 row-span-1">
          <Reveal width="100%" :delay="0.1" class="h-full">
            <NuxtLink
              :to="productMatrix[1]?.link ?? '/products#canvas'"
              class="group relative h-full bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 cursor-pointer overflow-hidden flex items-center justify-between block"
            >
              <div class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div class="relative z-10 max-w-[60%]">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span class="i-carbon-dashboard text-xl" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">智能画布系统</h3>
                <p class="text-xs text-gray-500 line-clamp-2">无限画布交互引擎，构建下一代知识图谱与创意协作平台。</p>
              </div>
              <div class="relative z-10 w-24 h-16 bg-gray-50 rounded-lg border border-gray-100 shadow-inner group-hover:translate-x-1 transition-transform flex items-center justify-center">
                <span class="i-carbon-dashboard text-2xl text-blue-300 opacity-50 block" />
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 3. 多维表格 (col-span-1 row-span-1) -->
        <div class="col-span-1 md:col-span-1 row-span-1">
          <Reveal width="100%" :delay="0.2" class="h-full">
            <NuxtLink
              :to="productMatrix[2]?.link ?? '/products#base'"
              class="group relative h-full bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-200 cursor-pointer overflow-hidden flex flex-col justify-between block"
            >
              <div class="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span class="i-carbon-table text-xl" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">多维表格</h3>
                <p class="text-xs text-gray-500">新一代数据协作平台，支持甘特图、看板等多种视图。</p>
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 4. APIsql 引擎 (col-span-1 row-span-1) -->
        <div class="col-span-1 md:col-span-1 row-span-1">
          <Reveal width="100%" :delay="0.3" class="h-full">
            <NuxtLink
              :to="productMatrix[3]?.link ?? '/products#apisql'"
              class="group relative h-full bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-200 cursor-pointer overflow-hidden flex flex-col justify-between block"
            >
              <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span class="i-carbon-code text-xl" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">APIsql 引擎</h3>
                <p class="text-xs text-gray-500">SQL 转 API 一键发布。</p>
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 5. 数字化大屏 (col-span-1 row-span-1) -->
        <div class="col-span-1 md:col-span-1 row-span-1">
          <Reveal width="100%" :delay="0.35" class="h-full">
            <NuxtLink
              :to="productMatrix[4]?.link ?? '/products#screen'"
              class="group relative h-full bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-200 cursor-pointer overflow-hidden flex flex-col justify-between block"
            >
              <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span class="i-carbon-screen text-xl" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">数字化大屏</h3>
                <p class="text-xs text-gray-500">基于 Appthen 构建。</p>
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 6. Appthen 低代码 (col-span-2 row-span-1) -->
        <div class="col-span-1 md:col-span-2 row-span-1">
          <Reveal width="100%" :delay="0.4" class="h-full">
            <NuxtLink
              :to="productMatrix[5]?.link ?? '/products#appthen'"
              class="group relative h-full bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-between text-white block"
            >
              <div class="relative z-10 max-w-[65%]">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <span class="i-carbon-development text-base" />
                  </div>
                  <span class="text-xs font-bold bg-white/10 px-2 py-0.5 rounded-full border border-white/20">NEW</span>
                </div>
                <h3 class="text-xl font-bold mb-1">Appthen 低代码</h3>
                <p class="text-xs text-indigo-100 line-clamp-2">React 风格可视化编辑器，支持代码双向同步与私有化部署。</p>
              </div>
              <div class="relative z-10 bg-white/10 p-3 rounded-xl border border-white/10 group-hover:scale-105 transition-transform">
                <span class="i-carbon-code text-2xl text-indigo-100 block" />
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 7. 品牌与营销矩阵 (col-span-2 row-span-1) -->
        <div class="col-span-1 md:col-span-2 row-span-1">
          <Reveal width="100%" :delay="0.45" class="h-full">
            <NuxtLink
              :to="productMatrix[6]?.link ?? '/products#marketing'"
              class="group relative h-full bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-pink-200 cursor-pointer overflow-hidden flex items-center justify-between block"
            >
              <div class="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl from-pink-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity rounded-tl-full" />
              <div class="relative z-10 max-w-[70%]">
                <div class="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform">
                  <span class="i-carbon-bring-forward text-xl" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">品牌与营销矩阵</h3>
                <p class="text-xs text-gray-500 line-clamp-2">拥有百万级流量的自媒体矩阵，提供全案营销推广服务，助力产品快速触达核心用户。</p>
              </div>
              <div class="relative z-10">
                <div class="w-12 h-12 rounded-full border-2 border-pink-100 flex items-center justify-center group-hover:bg-pink-50 group-hover:border-pink-200 transition-colors">
                  <span class="i-carbon-arrow-up-right text-xl text-pink-400 group-hover:text-pink-600 block" />
                </div>
              </div>
            </NuxtLink>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.08); }
}

.animate-glow-pulse {
  animation: glow-pulse 4s ease-in-out infinite;
}
</style>