<script setup lang="ts">
import { teamMembers } from '~/constants'
</script>

<template>
  <section class="py-24 bg-slate-50 dark:bg-slate-900/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          核心团队
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          一群热爱技术与创新的伙伴，共同致力于数据智能的探索
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-8 text-center">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="group cursor-pointer"
        >
          <div class="w-32 h-32 mx-auto bg-gray-100 dark:bg-slate-700 rounded-full mb-4 overflow-hidden shadow-md border-4 border-white dark:border-slate-600 group-hover:border-blue-100 dark:group-hover:border-blue-800 transition-all">
            <img
              :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`"
              :alt="member.name"
              class="w-full h-full object-cover"
            >
          </div>
          <h4 class="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ member.name }}
          </h4>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">{{ member.role }}</p>
          <p class="text-xs text-slate-400 dark:text-slate-500 max-w-[150px] mx-auto">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>