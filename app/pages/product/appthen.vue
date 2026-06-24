<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({ layout: 'default' })

const product = productDetails.find(p => p.id === 'appthen')!
</script>

<template>
  <ProductPageLayout :product="product">
    <ProductAppthenShowcase />
  </ProductPageLayout>
</template>