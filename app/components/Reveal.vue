<script setup lang="ts">
const props = withDefaults(defineProps<{
  width?: 'fit-content' | '100%' | 'auto'
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  threshold?: number
}>(), {
  width: 'fit-content',
  delay: 0,
  direction: 'up',
  duration: 0.6,
  threshold: 0.1,
})

const isVisible = ref(false)
const elRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!elRef.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: props.threshold, rootMargin: '0px 0px -50px 0px' },
  )
  observer.observe(elRef.value)
})
</script>

<template>
  <div
    ref="elRef"
    :style="{
      width: width === '100%' ? '100%' : width,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0, 0, 0)' : direction === 'up' ? 'translate3d(0, 40px, 0)' : direction === 'down' ? 'translate3d(0, -40px, 0)' : direction === 'left' ? 'translate3d(40px, 0, 0)' : direction === 'right' ? 'translate3d(-40px, 0, 0)' : 'translate3d(0, 0, 0)',
      transition: `opacity ${duration}s cubic-bezier(0.5, 0, 0, 1) ${delay}s, transform ${duration}s cubic-bezier(0.5, 0, 0, 1) ${delay}s`,
    }"
  >
    <slot />
  </div>
</template>