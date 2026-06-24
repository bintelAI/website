<script setup lang="ts">
import { caseStudies } from '~/constants'
</script>

<template>
  <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <Reveal>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">客户成功案例</h2>
            <p class="text-slate-400 max-w-2xl">见证 500+ 行业领军企业如何通过方块智联实现业务飞跃</p>
          </div>
          <NuxtLink
            to="/cases"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-500/50 shadow-xl shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 text-white text-sm"
          >
            查看所有案例
            <span class="i-carbon-arrow-right text-sm" />
          </NuxtLink>
        </div>
      </Reveal>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in caseStudies"
          :key="item.title"
        >
          <Reveal :delay="index * 0.1">
            <div class="group cursor-pointer relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 h-full">
              <!-- Background effects -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div class="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div class="relative z-10">
                <div class="flex items-center justify-between mb-6">
                  <div class="w-12 h-12 bg-slate-700/80 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 group-hover:text-blue-400 transition-all duration-300">
                    <span :class="[item.icon, 'text-2xl']" />
                  </div>
                  <div class="text-green-400 font-bold text-sm bg-green-400/15 px-3 py-1.5 rounded-full border border-green-400/30">
                    {{ item.metric }}
                  </div>
                </div>
                <h4 class="text-lg font-bold mb-2 group-hover:text-blue-300 transition-colors">{{ item.title }}</h4>
                <div class="text-xs text-slate-500 mb-3 uppercase tracking-wider font-bold">{{ item.company }}</div>
                <p class="text-slate-400 text-sm leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>