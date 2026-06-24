<script setup lang="ts">
withDefaults(defineProps<{
  primary?: boolean
  secondary?: boolean
  disabled?: boolean
}>(), {
  primary: false,
  secondary: false,
  disabled: false,
})
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium transition-all duration-300',
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5',
      primary || (!secondary) ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' : '',
      secondary ? 'bg-white text-black border border-gray-200 hover:border-blue-500 hover:text-blue-600' : '',
    ]"
  >
    <slot />
  </button>
</template>