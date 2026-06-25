<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({
  layout: 'default',
})

const product = computed(() => productDetails.find(p => p.id === 'collector')!)

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
  <ProductPageLayout v-if="product" :product="product">
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
            <div class="w-12 h-12 bg-amber-50 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="i-carbon-checkmark text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {{ feature }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              提供行业领先的{{ feature }}解决方案，帮助企业大幅提升效率，降低运营成本。
            </p>
          </div>
        </div>
      </div>
    </section>
  </ProductPageLayout>
</template>