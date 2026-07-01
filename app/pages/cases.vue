<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const localePath = useLocalePath()
const { locale, messages } = useLocale()
const caseStudies = computed(() => messages.value.data.cases)

useSeo({
  title: messages.value.casesPage.seoTitle,
  description: messages.value.casesPage.seoDescription,
  keywords: [messages.value.common.siteName, messages.value.casesPage.seoTitle],
  locale: locale.value,
  siteName: messages.value.common.siteName,
})
</script>

<template>
  <div class="bg-white min-h-screen dark:bg-gray-900">
    <!-- 标题区 -->
    <div class="border-b border-gray-100 from-teal-50 to-white bg-gradient-to-br dark:border-gray-800 dark:from-gray-900 dark:to-gray-900">
      <div class="mx-auto px-4 py-20 max-w-7xl lg:px-8 sm:px-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 class="animate-text-shimmer text-4xl text-transparent font-bold mb-4 from-gray-900 to-gray-900 via-teal-500 bg-gradient-to-r bg-clip-text sm:text-5xl dark:from-white dark:to-white dark:via-teal-400">
              {{ messages.casesPage.title }}
            </h1>
            <p class="text-xl text-gray-500 max-w-2xl dark:text-gray-400">
              {{ messages.casesPage.description }}
            </p>
          </div>
          <NuxtLink
            :to="localePath('/contact')"
            class="shine-on-hover text-white font-medium px-6 py-3 rounded-xl bg-teal-600 inline-flex shrink-0 gap-2 transition-colors items-center hover:bg-teal-700"
          >
            {{ messages.casesPage.viewAll }}
            <span class="i-carbon-arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 案例列表 -->
    <div class="mx-auto px-4 py-16 max-w-7xl lg:px-8 sm:px-6">
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2">
        <Reveal
          v-for="(item, index) in caseStudies"
          :key="item.title"
          variant="scale"
          :delay="index * 0.08"
          width="100%"
        >
          <div
            class="group shine-on-hover p-8 border border-gray-100 rounded-2xl bg-white h-full transition-all duration-300 dark:border-gray-700 hover:border-teal-200 dark:bg-gray-800 hover:shadow-xl dark:hover:border-teal-700 hover:-translate-y-1"
          >
            <!-- Metric -->
            <div class="mb-6 flex items-start justify-between">
              <div>
                <div class="animate-pop text-4xl text-teal-600 font-bold sm:text-5xl dark:text-teal-400">
                  {{ item.metric }}
                </div>
                <div class="text-sm text-gray-500 font-medium mt-1 dark:text-gray-400">
                  {{ item.metricLabel }}
                </div>
              </div>
              <div class="text-2xl text-teal-600 rounded-xl bg-teal-50 flex h-12 w-12 transition-transform items-center justify-center dark:text-teal-400 dark:bg-teal-900/20 group-hover:scale-110">
                <span :class="item.icon" />
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-xl text-gray-900 font-bold mb-2 transition-colors dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
              {{ item.title }}
            </h3>
            <p class="text-sm text-teal-600 font-medium mb-3 dark:text-teal-400">
              {{ item.company }}
            </p>
            <p class="text-gray-500 leading-relaxed dark:text-gray-400">
              {{ item.description }}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</template>
