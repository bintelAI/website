<script setup lang="ts">
import { buildLocalePath } from '~/i18n/utils'

const route = useRoute()
const { locale, messages } = useLocale()
const siteUrl = 'https://dimens.cn'

useHead({
  title: computed(() => messages.value.common.siteTitle),
  htmlAttrs: {
    lang: computed(() => locale.value === 'en-US' ? 'en' : 'zh-CN'),
  },
  link: [
    { rel: 'canonical', href: computed(() => `${siteUrl}${buildLocalePath(route.fullPath, locale.value)}`) },
    { rel: 'alternate', hreflang: 'zh-CN', href: computed(() => `${siteUrl}${buildLocalePath(route.fullPath, 'zh-CN')}`) },
    { rel: 'alternate', hreflang: 'en', href: computed(() => `${siteUrl}${buildLocalePath(route.fullPath, 'en-US')}`) },
    { rel: 'alternate', hreflang: 'x-default', href: computed(() => `${siteUrl}${buildLocalePath(route.fullPath, 'zh-CN')}`) },
  ],
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  color-scheme: dark;
}
</style>
