<script setup lang="ts">
import { caseStudies } from '~/constants'

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- 标题区 -->
    <div class="bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              客户成功案例
            </h1>
            <p class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
              见证 500+ 行业领军企业如何通过方块智联实现业务飞跃
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium transition-colors shrink-0"
          >
            查看所有案例
            <span class="i-carbon-arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 案例列表 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="item in caseStudies"
          :key="item.title"
          class="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 transition-all duration-300 hover:shadow-xl hover:border-teal-200 dark:hover:border-teal-700 hover:-translate-y-1"
        >
          <!-- Metric -->
          <div class="flex items-start justify-between mb-6">
            <div>
              <div class="text-4xl sm:text-5xl font-bold text-teal-600 dark:text-teal-400">
                {{ item.metric }}
              </div>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                {{ item.metricLabel }}
              </div>
            </div>
            <div class="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl">
              <span :class="item.icon" />
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {{ item.title }}
          </h3>
          <p class="text-sm font-medium text-teal-600 dark:text-teal-400 mb-3">
            {{ item.company }}
          </p>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>