<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({
  layout: 'default',
})

const product = computed(() => productDetails.find(p => p.id === 'ssh')!)

watchEffect(() => {
  if (product.value) {
    useSeo({
      title: product.value.title,
      description: product.value.description,
      keywords: product.value.tags,
      ogImage: product.value.imageUrl,
    })
  }
})
</script>

<template>
  <div v-if="product" class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Hero 区域 -->
    <div class="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <NuxtLink to="/products" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group text-sm">
          <span class="i-carbon-arrow-left group-hover:-translate-x-1 transition-transform" />
          返回产品中心
        </NuxtLink>

        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-sm font-medium mb-6 backdrop-blur-sm">
              <span class="i-carbon-cube text-emerald-400" />
              <span class="text-emerald-300">新一代智能终端</span>
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span class="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">SSH 助手</span>
              <br />
              <span class="text-white/90">让服务器管理像聊天一样简单</span>
            </h1>

            <p class="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              {{ product.description }}
            </p>

            <div class="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://github.com/bintelAI/aissh"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
              >
                <span class="i-carbon-logo-github text-lg" />
                GitHub 仓库
                <span class="i-carbon-launch" />
              </a>
              <a
                href="https://github.com/bintelAI/aissh"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl font-semibold transition-all border border-white/20"
              >
                <span class="i-carbon-download text-lg" />
                立即下载
              </a>
            </div>

            <div class="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-400">
              <div class="flex items-center gap-2">
                <span class="i-carbon-star text-yellow-400" />
                <span>开源免费</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="i-carbon-user-multiple text-emerald-400" />
                <span>社区驱动</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="i-carbon-globe text-blue-400" />
                <span>跨平台</span>
              </div>
            </div>
          </div>

          <div class="lg:w-1/2 w-full">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-30" />
              <div class="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div class="flex items-center gap-2 px-4 py-3 bg-slate-700/50 border-b border-white/5">
                  <div class="w-3 h-3 rounded-full bg-red-400" />
                  <div class="w-3 h-3 rounded-full bg-yellow-400" />
                  <div class="w-3 h-3 rounded-full bg-green-400" />
                  <span class="ml-2 text-sm text-gray-400 font-mono">AI SSH 助手</span>
                </div>
                <div class="p-2">
                  <img
                    v-if="product.imageUrl"
                    :src="product.imageUrl"
                    :alt="product.title"
                    class="w-full h-auto rounded-lg"
                  >
                  <div v-else class="w-full aspect-video bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <span class="i-carbon-terminal text-6xl text-emerald-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 核心功能 3列网格 -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div class="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="i-carbon-checkmark text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {{ feature }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              提供行业领先的{{ feature }}解决方案，帮助企业大幅提升效率，降低运维成本。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 适用场景 + 技术规格 -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-16">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span class="i-carbon-box text-emerald-600" />
              适用场景
            </h3>
            <div class="space-y-4">
              <div
                v-for="(scene, i) in product.scenarios"
                :key="i"
                class="flex items-start p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 transition-colors"
              >
                <div class="mt-1 mr-4 text-emerald-500 shrink-0">
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
              <div class="mt-8 pt-6 border-t border-gray-800 text-center">
                <a
                  href="https://github.com/bintelAI/aissh"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-lg py-3 transition-colors"
                >
                  <span class="i-carbon-logo-github" />
                  查看源代码
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-center text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          准备好开始您的智能运维之旅了吗？
        </h2>
        <p class="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
          立即体验 AI SSH 助手，让运维工作更高效、更安全、更智能。
        </p>
        <a
          href="https://github.com/bintelAI/aissh"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-10 py-4 bg-white text-emerald-700 hover:bg-gray-100 rounded-full text-lg font-bold shadow-lg transition-all hover:scale-105"
        >
          <span class="i-carbon-logo-github text-xl" />
          立即体验
          <span class="i-carbon-arrow-right text-lg" />
        </a>
      </div>
    </section>
  </div>
</template>