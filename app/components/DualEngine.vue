<script setup lang="ts">
</script>

<template>
  <section class="bg-slate-50 dark:bg-slate-900/50 py-16 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full bg-[url('/noise.svg')] opacity-20 pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          双引擎驱动战略
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          硬核技术与全域流量的完美融合，为企业提供全方位的增长动力
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- 技术引擎 -->
        <div class="bg-white dark:bg-slate-800 rounded-3xl p-10 border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
          <div class="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <div class="relative z-10">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/30">
              <span class="i-carbon-cpu text-3xl" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">技术引擎：AI 产品矩阵</h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              依托 APIsql、Appthen、Canvas 等核心自研产品，构建强大的底层技术壁垒。
              汇聚来自顶尖各个领域的产品经理与全栈工程师，持续突破技术边界。
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                <span class="i-carbon-sparkles text-blue-500 text-base" /> 自研低代码渲染引擎
              </li>
              <li class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                <span class="i-carbon-sparkles text-blue-500 text-base" /> 企业级私有化大模型
              </li>
            </ul>
          </div>
        </div>

        <!-- 流量引擎 -->
        <div class="bg-slate-900 rounded-3xl p-10 border border-slate-800 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 text-white">
          <div class="absolute top-0 right-0 w-64 h-64 bg-purple-900/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-900/50">
              <span class="i-carbon-trending-up text-3xl" />
            </div>
            <h3 class="text-2xl font-bold mb-4">流量引擎：自媒体矩阵</h3>
            <p class="text-slate-300 leading-relaxed mb-6">
              我们不仅是技术团队，更是营销专家。拥有全网百万级粉丝的自媒体矩阵，
              具备强大的内容生产与流量获取能力，帮助客户解决"有好产品却没流量"的痛点。
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-2 text-sm font-bold text-slate-200">
                <span class="i-carbon-target text-pink-500 text-base" /> 10W+ 全网粉丝
              </li>
              <li class="flex items-center gap-2 text-sm font-bold text-slate-200">
                <span class="i-carbon-target text-pink-500 text-base" /> 1w+ 月均曝光
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>