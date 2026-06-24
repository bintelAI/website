<script setup lang="ts">
const metrics = [
  { label: 'AI 生成内容数', val: '12,450', bar: 85, color: 'bg-blue-500' },
  { label: '全渠道触达人数', val: '1.2M+', bar: 92, color: 'bg-purple-500' },
  { label: '潜客转化率', val: '4.8%', bar: 65, color: 'bg-green-500' },
]
</script>

<template>
  <section class="py-16 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/50 text-blue-300 text-sm font-bold mb-6 border border-blue-500/30">
            <span class="i-carbon-rocket text-base" /> AI Growth
          </div>
          <h2 class="text-4xl font-bold mb-6">AI 驱动的全域营销解决方案</h2>
          <p class="text-slate-300 text-lg leading-relaxed mb-8">
            我们不仅提供产品，还提供增长服务。利用自研的 AI 内容生成引擎，
            批量生产高质量的营销文案、短视频脚本与海报，帮助客户实现低成本获客。
          </p>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                <span class="i-carbon-zap text-yellow-400 text-2xl" />
              </div>
              <div>
                <h4 class="font-bold text-lg">自动化内容工厂</h4>
                <p class="text-slate-400 text-sm">基于大模型，日产 1000+ 篇 SEO 软文与社媒种草文案。</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                <span class="i-carbon-chart-bar text-green-400 text-2xl" />
              </div>
              <div>
                <h4 class="font-bold text-lg">精准数据获客</h4>
                <p class="text-slate-400 text-sm">通过数据分析与用户画像，实现广告投放的精准触达与转化。</p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <button class="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-900 hover:bg-slate-200 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5">
              咨询营销合作
            </button>
          </div>
        </div>

        <!-- Right: Dashboard -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-3 opacity-50 blur-lg" />
          <div class="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
            <div class="flex justify-between items-center mb-6 pb-6 border-b border-slate-700">
              <div>
                <div class="text-xs text-slate-400 uppercase tracking-wider">Marketing Dashboard</div>
                <div class="font-bold text-xl">AI 投放转化监控</div>
              </div>
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500" />
                <div class="w-3 h-3 rounded-full bg-yellow-500" />
                <div class="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>

            <div class="space-y-4">
              <div v-for="(item, i) in metrics" :key="i">
                <div class="flex justify-between text-sm mb-2 text-slate-300">
                  <span>{{ item.label }}</span>
                  <span class="font-mono font-bold">{{ item.val }}</span>
                </div>
                <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div :class="['h-full', item.color]" :style="{ width: `${item.bar}%` }" />
                </div>
              </div>
            </div>

            <div class="mt-8 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 text-xs font-mono text-green-400">
              &gt; Generating daily report...<br>
              &gt; Optimization complete. ROI increased by 15%.<br>
              &gt; Ready for next campaign.
              <span class="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>