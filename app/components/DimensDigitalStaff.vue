<script setup lang="ts">
const layers = [
  { level: 1, name: '灵魂设定', file: 'soul.md', desc: '身份、人格、声音、专长', icon: 'i-carbon-user-avatar', color: '#60a5fa' },
  { level: 2, name: '长期记忆', file: 'memory.md', desc: '记忆种子、业务上下文', icon: 'i-carbon-data-backup', color: '#34d399' },
  { level: 3, name: 'Aware 触发器', file: '', desc: '六种触发器类型', icon: 'i-carbon-alarm', color: '#fbbf24' },
  { level: 4, name: '关注点管理', file: '', desc: '待办/进行中/完成流转', icon: 'i-carbon-task-view', color: '#a78bfa' },
  { level: 5, name: '技能库', file: '', desc: '输入→处理→输出', icon: 'i-carbon-tools', color: '#fb7185' },
  { level: 6, name: '多 Agent 协作', file: '', desc: '多 Agent 协作协议', icon: 'i-carbon-collaborate', color: '#fb923c' },
  { level: 7, name: 'AI 场景蓝图', file: '', desc: 'AI 场景蓝图', icon: 'i-carbon-ai-status', color: '#818cf8' },
]

const roidata = [
  { metric: '核销时效', current: '2.5 天', target: '3 分钟', improvement: 98 },
  { metric: '风险识别', current: 'T+7 天', target: '实时', improvement: 99 },
  { metric: '排期冲突解决', current: '4 小时', target: '15 分钟', improvement: 94 },
  { metric: '客户流失发现', current: '事后', target: '事前 14 天', improvement: 90 },
  { metric: '合同审批周期', current: '3.2 天', target: '1.5 天', improvement: 53 },
  { metric: '数据一致性', current: '85%', target: '99.5%', improvement: 97 },
]

const decisionBranches = [
  { label: '客户等级重要', action: 'P0 预警 + 挽回方案', level: 'P0', variant: 'from-red-500 to-rose-600' },
  { label: '普通客户', action: 'P1 提醒 + 标准话术', level: 'P1', variant: 'from-amber-500 to-yellow-600' },
]

const executionSteps = [
  '分析该客户近 90 天数据',
  '生成挽回建议报告',
  '广场发布预警',
  '个人助手推送建议',
]
</script>

<template>
  <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
    <!-- Subtle background grain -->
    <div class="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none" />
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

    <div class="container mx-auto px-6 relative z-10">
      <!-- Header -->
      <Reveal>
        <div class="mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-bold mb-6">
            <span class="h-1.5 w-1.5 rounded-full bg-blue-400 animate-breathe" />
            <span class="i-carbon-ai-status text-base" />
            数字员工
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shimmer">
            专属数字员工，<br class="hidden sm:block" />每个项目独立的 AI 劳动力
          </h2>
          <p class="text-slate-400 max-w-2xl text-lg leading-relaxed">
            每个项目拥有专属数字员工，具有持久身份、长期记忆和独立工作空间。
            不再只是工具——是项目团队中真正的一员。
          </p>
        </div>
      </Reveal>

      <!-- Two-column: Left Timeline + Right Scenario -->
      <div class="grid lg:grid-cols-2 gap-12 mb-24">
        <!-- Left: 7-Layer Framework Timeline -->
        <Reveal width="100%">
          <div>
            <h3 class="text-xl font-bold mb-8 flex items-center gap-2">
              <span class="i-carbon-layer text-blue-400 text-2xl" />
              七层规格框架
            </h3>
            <div class="relative">
              <!-- Vertical timeline line -->
              <div class="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-slate-700 animate-gradient" />

              <div v-for="(layer, index) in layers" :key="layer.level" class="relative">
                <Reveal width="100%" :delay="index * 0.08" direction="left">
                  <div class="relative flex items-start gap-5 pb-8 group">
                    <!-- Timeline dot -->
                    <div class="relative z-10 flex-shrink-0">
                      <div class="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:border-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">
                        {{ layer.level }}
                      </div>
                    </div>

                    <!-- Content card -->
                    <div class="flex-1 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/90 hover:border-slate-600/50 transition-all duration-300 group-hover:-translate-y-0.5">
                      <div class="flex items-center gap-3 mb-2">
                        <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                          <span :class="[layer.icon, 'text-base']" :style="{ color: layer.color }" />
                        </div>
                        <h4 class="font-bold text-sm text-white">{{ layer.name }}</h4>
                        <span v-if="layer.file" class="text-[10px] font-mono bg-slate-700/80 text-slate-400 px-2 py-0.5 rounded border border-slate-600/50 ml-auto">{{ layer.file }}</span>
                      </div>
                      <p class="text-sm text-slate-400 leading-relaxed pl-11">{{ layer.desc }}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>

        <!-- Right: Scenario Flow -->
        <Reveal width="100%" :delay="0.15" direction="right">
          <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 h-full">
            <!-- Scenario Header -->
            <div class="flex items-start justify-between mb-8">
              <div>
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-bold border border-blue-500/20 mb-3">
                  <span class="i-carbon-flash text-xs" />
                  场景示例
                </div>
                <h3 class="text-xl font-bold">客户流失预警 + 挽回</h3>
              </div>
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-500/30 flex items-center justify-center">
                <span class="i-carbon-bot text-2xl text-blue-300" />
              </div>
            </div>

            <!-- Agent badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-700/50 border border-slate-600/50 mb-8 text-sm">
              <span class="i-carbon-user-avatar text-blue-400" />
              <span class="font-bold text-slate-200">客户运营助手</span>
              <span class="text-slate-500 mx-1">·</span>
              <span class="text-slate-400">「小客」</span>
            </div>

            <!-- Flow Diagram -->
            <div class="space-y-0">
              <!-- Trigger Node -->
              <div class="relative">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-black font-bold text-xs flex-shrink-0 animate-breathe">
                    <span class="i-carbon-alarm text-sm" />
                  </div>
                  <span class="text-sm font-bold text-amber-300 uppercase tracking-wider">触发</span>
                </div>
                <div class="ml-10 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-xl p-4 mb-6">
                  <p class="text-sm text-slate-300"><span class="text-amber-300 font-bold">Aware</span> 检测到客户 ≥ 14 天未跟进</p>
                </div>
              </div>

              <!-- Flow Arrow -->
              <div class="flex justify-center -my-1">
                <div class="w-px h-6 bg-gradient-to-b from-amber-500/60 to-violet-500/60 animate-gradient" />
              </div>

              <!-- Decision Node -->
              <div class="relative">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 animate-breathe" style="animation-delay: 0.5s">
                    <span class="i-carbon-decision-tree text-sm" />
                  </div>
                  <span class="text-sm font-bold text-violet-300 uppercase tracking-wider">决策</span>
                </div>
                <div class="ml-10 space-y-2 mb-6">
                  <div
                    v-for="(branch, idx) in decisionBranches"
                    :key="idx"
                    class="bg-gradient-to-r from-violet-500/10 to-transparent border border-violet-500/20 rounded-xl p-4"
                  >
                    <div class="flex items-center gap-2 mb-1.5">
                      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold" :class="branch.level === 'P0' ? 'bg-red-500/20 text-red-300' : 'bg-amber-500/20 text-amber-300'">
                        {{ branch.level }}
                      </span>
                      <span class="text-sm font-bold text-slate-200">{{ branch.label }}</span>
                    </div>
                    <p class="text-xs text-slate-400 pl-1">{{ branch.action }}</p>
                  </div>
                </div>
              </div>

              <!-- Flow Arrow -->
              <div class="flex justify-center -my-1">
                <div class="w-px h-6 bg-gradient-to-b from-violet-500/60 to-emerald-500/60 animate-gradient" />
              </div>

              <!-- Execution Node -->
              <div class="relative">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 animate-breathe" style="animation-delay: 1s">
                    <span class="i-carbon-play text-sm" />
                  </div>
                  <span class="text-sm font-bold text-emerald-300 uppercase tracking-wider">执行</span>
                </div>
                <div class="ml-10 bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl p-4">
                  <ol class="space-y-2">
                    <li
                      v-for="(step, idx) in executionSteps"
                      :key="idx"
                      class="flex items-start gap-3 text-sm"
                    >
                      <span class="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold flex items-center justify-center mt-0.5 animate-pop" :style="{ animationDelay: idx * 0.08 + 's' }">{{ idx + 1 }}</span>
                      <span class="text-slate-300">{{ step }}</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <!-- Bottom: ROI Comparison Table -->
      <Reveal>
        <div>
          <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
            <span class="i-carbon-chart-line text-blue-400 text-2xl" />
            ROI 量化指标
          </h3>
          <p class="text-slate-400 text-sm mb-8">人工 vs AI 效能对比</p>

          <div class="relative overflow-hidden shine-on-hover rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
            <!-- Table Header -->
            <div class="grid grid-cols-12 gap-4 px-6 py-4 bg-slate-800/80 border-b border-slate-700/50 text-xs font-bold uppercase tracking-wider text-slate-500">
              <div class="col-span-3 md:col-span-2">指标</div>
              <div class="col-span-3 md:col-span-2 text-right">当前（人工）</div>
              <div class="col-span-3 md:col-span-2 text-right text-blue-400">AI 目标</div>
              <div class="col-span-3 md:col-span-6 animate-breathe">提升幅度</div>
            </div>

            <!-- Table Rows -->
            <Reveal
              v-for="(row, index) in roidata"
              :key="row.metric"
              variant="none"
              width="100%"
              :delay="index * 0.08"
              once
            >
              <div
                class="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors"
                :class="{ 'border-b-0': index === roidata.length - 1 }"
              >
                <!-- Metric name -->
                <div class="col-span-3 md:col-span-2 text-sm font-bold text-slate-200">
                  {{ row.metric }}
                </div>

                <!-- Current value -->
                <div class="col-span-3 md:col-span-2 text-right text-sm text-slate-400">
                  {{ row.current }}
                </div>

                <!-- Target value -->
                <div class="col-span-3 md:col-span-2 text-right text-sm font-bold text-blue-300">
                  {{ row.target }}
                </div>

                <!-- Improvement bar -->
                <div class="col-span-3 md:col-span-6">
                  <div class="flex items-center gap-3">
                    <div class="flex-1 h-2.5 bg-slate-700/60 rounded-full overflow-hidden">
                      <div
                        class="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 transition-all duration-1000"
                        :style="{ width: row.improvement + '%' }"
                      />
                    </div>
                    <span class="text-xs font-bold text-emerald-300 flex-shrink-0 w-10 text-right">{{ row.improvement }}%</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <!-- Footnote -->
          <p class="text-slate-600 text-xs mt-4 flex items-center gap-1">
            <span class="i-carbon-information text-xs" />
            基于维表智联已交付客户项目的数据统计
          </p>
        </div>
      </Reveal>
    </div>
  </section>
</template>