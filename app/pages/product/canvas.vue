<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({ layout: 'default' })

const product = productDetails.find(p => p.id === 'canvas')!

useSeo({
  title: product.title,
  description: product.description,
  keywords: product.tags,
  ogImage: product.imageUrl,
})
</script>

<template>
  <ProductPageLayout :product="product">
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          核心功能亮点
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, i) in product.features"
            :key="i"
            class="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
          >
            <span class="i-carbon-checkmark-outline text-3xl text-blue-500 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ feature }}
            </h3>
            <p class="text-gray-500">
              为{{ feature }}提供专业级解决方案，满足企业多样化需求。
            </p>
          </div>
        </div>
      </div>
    </section>
  </ProductPageLayout>
</template>