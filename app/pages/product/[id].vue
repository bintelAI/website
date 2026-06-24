<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const id = computed(() => route.params.id as string)

const product = computed(() => {
  return productDetails.find(p => p.id === id.value)
})

const isAppthen = computed(() => id.value === 'appthen')
const isOpsIntelligence = computed(() => id.value === 'ops')

function scrollToTop() {
  window.scrollTo(0, 0)
}

onMounted(scrollToTop)
watch(id, scrollToTop)
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- 产品未找到 -->
    <div
      v-if="!product"
      class="min-h-screen flex items-center justify-center flex-col px-4"
    >
      <span class="i-carbon-document-unknown text-6xl text-gray-300 dark:text-gray-600 mb-4 inline-block" />
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        产品未找到
      </h1>
      <p class="text-gray-500 dark:text-gray-400 mb-6">
        您要查看的产品可能已被移除或不存在
      </p>
      <NuxtLink
        to="/products"
        class="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
      >
        <span class="i-carbon-arrow-left" />
        返回产品中心
      </NuxtLink>
    </div>

    <template v-else>
      <!-- Hero Section -->
      <div class="relative bg-slate-900 text-white pt-28 pb-20 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div
            class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br opacity-20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"
            :class="product.imageColor || 'from-blue-500 to-purple-600'"
          />
          <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900 opacity-20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NuxtLink
            to="/products"
            class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group text-sm"
          >
            <span class="i-carbon-arrow-left group-hover:-translate-x-1 transition-transform" />
            返回产品中心
          </NuxtLink>

          <div class="flex flex-col md:flex-row gap-12 items-center">
            <!-- 左侧文本 -->
            <div class="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-green-400" />
                企业级商业化版本
              </div>
              <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {{ product.title }}
              </h1>
              <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                {{ product.fullDescription || product.description }}
              </p>
              <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 font-medium text-lg"
                >
                  立即试用
                </NuxtLink>
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center px-8 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all font-medium text-lg"
                >
                  预约演示
                </NuxtLink>
              </div>
            </div>

            <!-- 右侧渐变色装饰块 -->
            <div class="md:w-1/2 flex justify-center">
              <div
                class="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br p-1 shadow-2xl opacity-90"
                :class="product.imageColor || 'from-blue-500 to-purple-600'"
              >
                <div class="w-full h-full bg-slate-800/90 backdrop-blur-xl rounded-[22px] flex items-center justify-center overflow-hidden">
                  <span :class="[product.icon, 'text-8xl text-white/80']" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 条件渲染：特殊布局 vs 标准布局 -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Appthen Showcase -->
        <div v-if="isAppthen">
          <ProductAppthenShowcase />
        </div>
        <!-- Ops Intelligence Showcase -->
        <div v-else-if="isOpsIntelligence">
          <ProductOpsIntelligenceShowcase />
        </div>
        <!-- 标准布局 -->
        <div v-else>
          <!-- 核心功能亮点 -->
          <section class="py-20">
            <div class="text-center max-w-3xl mx-auto mb-16">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                核心功能亮点
              </h2>
              <p class="text-gray-500 dark:text-gray-400">
                深度打磨每一个功能细节，为您提供极致的产品体验
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="(feature, idx) in product.features"
                :key="idx"
                class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 group"
              >
                <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="i-carbon-zap text-2xl" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {{ feature }}
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  提供行业领先的{{ feature }}解决方案，帮助企业大幅提升效率，降低运营成本。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- 适用场景 + 技术规格（所有产品共享） -->
      <section class="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-16">
            <!-- 适用场景 -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span class="i-carbon-box text-blue-600" />
                适用场景
              </h3>
              <div class="space-y-4">
                <div
                  v-for="(scene, i) in product.scenarios"
                  :key="i"
                  class="flex items-start p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors"
                >
                  <div class="mt-1 mr-4 text-blue-500 shrink-0">
                    <span class="i-carbon-checkmark text-xl" />
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 dark:text-white">
                      {{ scene }}
                    </h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      针对{{ scene }}的专业优化方案，满足特定业务需求。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 技术规格 -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 justify-center md:justify-start">
                <span class="i-carbon-cpu text-purple-600" />
                技术规格
              </h3>
              <div class="bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 text-gray-300">
                <ul class="space-y-6">
                  <li
                    v-for="(spec, i) in product.specs"
                    :key="i"
                    class="flex items-center border-b border-gray-800 pb-4 last:border-0 last:pb-0"
                  >
                    <span class="i-carbon-layers w-5 h-5 mr-4 text-purple-400 shrink-0" />
                    {{ spec }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-center text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            准备好开始您的数智化之旅了吗？
          </h2>
          <p class="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            立即加入数千家领先企业的行列，使用方块智联的产品重塑您的业务流程。
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-10 py-4 rounded-full bg-white text-blue-700 hover:bg-gray-100 transition-all text-lg font-bold shadow-lg"
          >
            联系销售顾问
          </NuxtLink>
        </div>
      </section>
    </template>
  </div>
</template>