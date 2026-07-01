<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const { locale, messages } = useLocale()

useSeo({
  title: messages.value.home.seoTitle,
  description: messages.value.common.siteDescription,
  keywords: messages.value.common.keywords,
  ogImage: messages.value.common.defaultOgImage,
  locale: locale.value,
  siteName: messages.value.common.siteName,
})
</script>

<template>
  <div>
    <HeroSection />
    <DimensOverview />
    <ProductMatrix />
    <CaseStudies />
    <DimensDigitalStaff />
    <BlogSection />
    <CtaSection />
  </div>
</template>
