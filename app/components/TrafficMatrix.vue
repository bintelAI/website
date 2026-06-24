<script setup lang="ts">
import { mediaChannels } from '~/constants'

const channelColors = [
  { hover: 'hover:border-green-200 hover:bg-green-50/30 dark:hover:bg-green-950/20', icon: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400', label: 'text-green-600 dark:text-green-400' },
  { hover: 'hover:border-red-200 hover:bg-red-50/30 dark:hover:bg-red-950/20', icon: 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400', label: 'text-red-600 dark:text-red-400' },
  { hover: 'hover:border-blue-200 hover:bg-blue-50/30 dark:hover:bg-blue-950/20', icon: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400', label: 'text-blue-600 dark:text-blue-400' },
  { hover: 'hover:border-pink-200 hover:bg-pink-50/30 dark:hover:bg-pink-950/20', icon: 'bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-400', label: 'text-pink-600 dark:text-pink-400' },
]
</script>

<template>
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between mb-16">
        <div>
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">自带流量的 AI 团队</h2>
          <p class="text-slate-500 dark:text-slate-400 max-w-lg">我们深知技术需要落地，产品需要增长。方块智联构建了跨平台的媒体影响力。</p>
        </div>
        <div class="flex gap-4 mt-6 md:mt-0">
          <div class="p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl text-center min-w-[120px]">
            <div class="text-3xl font-bold text-slate-900 dark:text-white">10w+</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">全网粉丝</div>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl text-center min-w-[120px]">
            <div class="text-3xl font-bold text-slate-900 dark:text-white">2000+</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">私域社群</div>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl text-center min-w-[120px]">
            <div class="text-3xl font-bold text-slate-900 dark:text-white">1w+</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">月均曝光</div>
          </div>
        </div>
      </div>

      <!-- Channels Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(channel, index) in mediaChannels"
          :key="channel.name"
          :class="[
            'group p-6 rounded-2xl border border-gray-100 dark:border-slate-700 transition-all cursor-pointer bg-white dark:bg-slate-800',
            channelColors[index]?.hover,
          ]"
        >
          <div
            :class="[
              'w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
              channelColors[index]?.icon,
            ]"
          >
            <span :class="[channel.icon, 'text-2xl']" />
          </div>
          <h4 class="font-bold text-slate-900 dark:text-white">{{ channel.name }}</h4>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">{{ channel.description }}</p>
          <div :class="['mt-4 text-xs font-bold', channelColors[index]?.label ?? '']">
            {{ channel.followers }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>