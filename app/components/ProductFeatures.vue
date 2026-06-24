<script setup lang="ts">
import { productFeatures } from '~/constants'
</script>

<template>
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          核心产品特性
        </h2>
        <p class="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          五大 AI 驱动能力，赋能企业全面数智化转型
        </p>
      </div>

      <!-- 产品特性网格 -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div
          v-for="feature in productFeatures"
          :key="feature.title"
          class="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:border-teal-200 dark:hover:border-teal-700 hover:shadow-lg hover:shadow-teal-100/50 dark:hover:shadow-teal-900/20 transition-all duration-300"
        >
          <!-- 图标 -->
          <div class="w-14 h-14 flex items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 text-3xl group-hover:bg-teal-600 dark:group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
            <span :class="feature.icon" />
          </div>

          <!-- 标题 -->
          <h3 class="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
            {{ feature.title }}
          </h3>

          <!-- 描述 -->
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>