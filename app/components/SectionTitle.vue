<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  centered?: boolean
}>()
</script>

<template>
  <div :class="['mb-16', centered ? 'text-center' : '']">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-gray-500 dark:text-gray-400 max-w-2xl" :class="centered ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>