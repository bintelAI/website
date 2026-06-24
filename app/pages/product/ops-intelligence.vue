<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({
  layout: 'default',
})

const product = computed(() => productDetails.find(p => p.id === 'ops')!)
</script>

<template>
  <ProductPageLayout v-if="product" :product="product">
    <ProductOpsIntelligenceShowcase />
  </ProductPageLayout>
</template>