<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({
  layout: 'default',
})

const product = computed(() => productDetails.find(p => p.id === 'ops')!)

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
    <ProductOpsIntelligenceShowcase />
  </ProductPageLayout>
</template>