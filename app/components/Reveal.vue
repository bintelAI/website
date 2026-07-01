<script setup lang="ts">
/**
 * Reveal - 滚动入场动画组件
 *
 * 设计：策略模式 — 将不同入场动效抽象为 variant 策略，
 * 通过 variant prop 切换。所有策略返回 { opacity, transform } 初始态。
 * 配合全局 animations.css 提供更丰富的动效。
 */

type Variant = 'up' | 'down' | 'left' | 'right' | 'none' | 'scale' | 'blur' | 'rotate' | 'flip'

const props = withDefaults(defineProps<{
  width?: 'fit-content' | '100%' | 'auto'
  delay?: number
  /** 入场策略：兼容旧版 direction，新增 scale/blur/rotate/flip */
  variant?: Variant
  /** 向后兼容：等同 variant */
  direction?: Variant
  duration?: number
  threshold?: number
  /** 是否只触发一次（默认 true）；false 时离开视口会重置 */
  once?: boolean
  /** 初始位移距离 (px) */
  distance?: number
}>(), {
  width: 'fit-content',
  delay: 0,
  variant: undefined,
  direction: 'up',
  duration: 0.7,
  threshold: 0.12,
  once: true,
  distance: 40,
})

// 旧调用方式优先 direction；新调用建议用 variant；variant 优先级更高
const effectiveVariant = computed<Variant>(() => props.variant ?? props.direction ?? 'up')

/**
 * 策略表：每种入场效果的初始 transform
 * visible 态统一为 translate3d(0,0,0) scale(1) rotate(0)
 */
function getInitialTransform(variant: Variant, dist: number): string {
  switch (variant) {
    case 'up': return `translate3d(0, ${dist}px, 0)`
    case 'down': return `translate3d(0, ${-dist}px, 0)`
    case 'left': return `translate3d(${dist}px, 0, 0)`
    case 'right': return `translate3d(${-dist}px, 0, 0)`
    case 'scale': return `scale(0.92)`
    case 'rotate': return `scale(0.95) rotate(-3deg)`
    case 'flip': return `perspective(800px) rotateX(12deg) scale(0.96)`
    case 'none': return 'translate3d(0, 0, 0)'
    default: return `translate3d(0, ${dist}px, 0)`
  }
}

function getVisibleTransform(variant: Variant): string {
  if (variant === 'flip') return 'perspective(800px) rotateX(0) scale(1)'
  return 'translate3d(0, 0, 0) scale(1) rotate(0)'
}

const isVisible = ref(false)
const elRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!elRef.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        if (props.once) observer.disconnect()
      }
      else if (!props.once) {
        isVisible.value = false
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
      transform: isVisible ? getVisibleTransform(effectiveVariant) : getInitialTransform(effectiveVariant, distance),
      filter: effectiveVariant === 'blur' && !isVisible ? 'blur(12px)' : 'blur(0)',
      transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, filter ${duration}s ease ${delay}s`,
      willChange: 'opacity, transform, filter',
    }"
  >
    <slot />
  </div>
</template>
