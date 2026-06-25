<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({ layout: 'default' })

const product = productDetails.find(p => p.id === 'appthen')!

useSeo({
  title: product.title,
  description: product.description,
  keywords: product.tags,
  ogImage: product.imageUrl,
})
</script>

<template>
  <ProductPageLayout :product="product">
    <ProductAppthenShowcase />
  </ProductPageLayout>
</template>