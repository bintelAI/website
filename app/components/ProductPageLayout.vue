<script setup lang="ts">
import type { ProductDetail } from '~/constants'

const props = defineProps<{
  product: ProductDetail
}>()

const router = useRouter()

function handlePrimaryAction() {
  if (props.product.githubUrl) {
    window.open(props.product.githubUrl, '_blank')
  }
  else if (props.product.externalUrl) {
    window.open(props.product.externalUrl, '_blank')
  }
}

function handleSecondaryAction() {
  if (props.product.githubUrl) {
    window.open(props.product.githubUrl, '_blank')
  }
  else if (props.product.externalUrl) {
    window.open(props.product.externalUrl, '_blank')
  }
}

function getStars(rating: string) {
  const num = Number.parseFloat(rating)
  return Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(num)) return 'full'
    if (i < num) return 'half'
    return 'empty'
  })
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero -->
    <div class="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div
          class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 opacity-20"
          :style="{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }"
        />
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900 opacity-20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <NuxtLink to="/products" class="flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
          <span class="i-carbon-arrow-left text-lg mr-2 group-hover:-translate-x-1 transition-transform" />
          返回产品中心
        </NuxtLink>

        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <!-- Status -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium mb-6 backdrop-blur-sm"
              :class="product.productStatus === 'online' ? 'bg-green-500/20 border-green-500/30' : product.productStatus === 'developing' ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-blue-500/20 border-blue-500/30'"
            >
              <span v-if="product.productStatus === 'online'" class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span v-else class="i-carbon-time text-sm" />
              {{ product.productStatus === 'online' ? '已上线运营' : product.productStatus === 'developing' ? '开发中' : '规划中' }}
            </div>

            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">{{ product.title }}</h1>
            <p class="text-xl text-gray-300 mb-8 leading-relaxed">
              {{ product.fullDescription || product.description }}
            </p>

            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                class="inline-flex items-center gap-2 px-8 py-3 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                @click="handlePrimaryAction"
              >
                {{ product.externalUrl || product.githubUrl ? '立即试用' : '敬请期待' }}
                <span v-if="product.externalUrl || product.githubUrl" class="i-carbon-launch text-base" />
              </button>
              <button
                v-if="product.externalUrl || product.githubUrl"
                class="inline-flex items-center gap-2 px-8 py-3 text-lg bg-white text-black border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                @click="handleSecondaryAction"
              >
                <span v-if="product.githubUrl" class="i-carbon-logo-github text-base" />
                {{ product.githubUrl ? '下载源码' : '预约演示' }}
              </button>
            </div>
          </div>

          <div class="md:w-1/2 flex justify-center">
            <div class="w-full max-w-2xl aspect-video rounded-3xl bg-gradient-to-br from-blue-400 to-purple-400 p-1 shadow-2xl opacity-90">
              <div class="w-full h-full bg-slate-800/90 backdrop-blur-xl rounded-[22px] flex items-center justify-center overflow-hidden p-4">
                <img v-if="product.imageUrl" :src="product.imageUrl" :alt="product.title" class="w-full h-full object-contain">
                <span v-else :class="[product.icon, 'text-8xl text-white/90']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Children slot -->
    <slot />

    <!-- Scenarios + Specs -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-16">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span class="i-carbon-cube text-blue-600 mr-3 text-xl" /> 适用场景
            </h3>
            <div class="space-y-4">
              <div v-for="(scene, i) in (product.scenarios || [])" :key="i" class="flex items-start p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                <span class="i-carbon-checkmark-filled text-blue-500 mt-1 mr-4 text-xl shrink-0" />
                <div>
                  <h4 class="font-bold text-gray-900">{{ scene }}</h4>
                  <p class="text-sm text-gray-500 mt-1">针对{{ scene }}的专业优化方案，满足特定业务需求。</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center md:justify-start">
              <span class="i-carbon-cpu text-purple-600 mr-3 text-xl" /> 技术规格
            </h3>
            <div class="bg-slate-900 rounded-2xl p-8 text-gray-300">
              <ul class="space-y-6">
                <li v-for="(spec, i) in (product.specs || [])" :key="i" class="flex items-center border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                  <span class="i-carbon-layers text-purple-400 mr-4 text-xl shrink-0" />
                  {{ spec }}
                </li>
              </ul>
              <div class="mt-8 pt-6 border-t border-gray-800 text-center">
                <button class="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-3 transition-colors">
                  下载技术白皮书
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-center text-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">准备好开始您的数智化之旅了吗？</h2>
        <p class="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          立即加入数千家领先企业的行列，使用方块智联的产品重塑您的业务流程。
        </p>
        <button class="bg-white text-blue-700 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-colors" @click="router.push('/contact')">
          联系销售顾问
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductPageLayout',
}
</script>