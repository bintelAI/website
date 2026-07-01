<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const route = useRoute()
const localePath = useLocalePath()
const { locale, messages } = useLocale()
const id = computed(() => route.params.id as string)
const productDetails = computed(() => messages.value.data.products)

const product = computed(() => {
  return productDetails.value.find(p => p.id === id.value)
})

watchEffect(() => {
  if (product.value) {
    useSeo({
      title: product.value.title,
      description: product.value.description,
      keywords: product.value.tags,
      ogImage: product.value.imageUrl,
      locale: locale.value,
      siteName: messages.value.common.siteName,
    })
  }
})

const isAppthen = computed(() => id.value === 'appthen')
const isOpsIntelligence = computed(() => id.value === 'ops')

function scrollToTop() {
  window.scrollTo(0, 0)
}

onMounted(scrollToTop)
watch(id, scrollToTop)
</script>

<template>
  <div class="bg-white min-h-screen dark:bg-gray-900">
    <!-- 产品未找到 -->
    <div
      v-if="!product"
      class="px-4 flex flex-col min-h-screen items-center justify-center"
    >
      <span class="i-carbon-document-unknown text-6xl text-gray-300 mb-4 inline-block dark:text-gray-600" />
      <h1 class="text-2xl text-gray-900 font-bold mb-4 dark:text-white">
        {{ messages.productDetailPage.notFoundTitle }}
      </h1>
      <p class="text-gray-500 mb-6 dark:text-gray-400">
        {{ messages.productDetailPage.notFoundDesc }}
      </p>
      <NuxtLink
        :to="localePath('/products')"
        class="text-white font-medium px-6 py-2.5 rounded-lg bg-blue-600 inline-flex gap-2 transition-colors items-center hover:bg-blue-700"
      >
        <span class="i-carbon-arrow-left" />
        {{ messages.productDetailPage.backToProducts }}
      </NuxtLink>
    </div>

    <template v-else>
      <!-- Hero Section -->
      <div class="text-white pb-20 pt-28 bg-slate-900 relative overflow-hidden">
        <div class="inset-0 absolute z-0">
          <div
            class="rounded-full opacity-20 h-[600px] w-[600px] translate-x-1/3 right-0 top-0 absolute bg-gradient-to-br blur-[120px] -translate-y-1/4"
            :class="product.imageColor || 'from-blue-500 to-purple-600'"
          />
          <div class="rounded-full bg-blue-900 opacity-20 h-[400px] w-[400px] translate-y-1/4 bottom-0 left-0 absolute blur-[100px] -translate-x-1/3" />
        </div>

        <div class="mx-auto px-4 max-w-7xl relative z-10 lg:px-8 sm:px-6">
          <NuxtLink
            :to="localePath('/products')"
            class="group text-sm text-gray-400 mb-8 inline-flex gap-2 transition-colors items-center hover:text-white"
          >
            <span class="i-carbon-arrow-left transition-transform group-hover:-translate-x-1" />
            {{ messages.productDetailPage.backToProducts }}
          </NuxtLink>

          <div class="flex flex-col gap-12 items-center md:flex-row">
            <!-- 左侧文本 -->
            <div class="text-center flex flex-col items-center md:text-left md:w-1/2 md:items-start">
              <div class="text-sm font-medium mb-6 px-3 py-1 border border-white/20 rounded-full bg-white/10 inline-flex gap-2 items-center backdrop-blur-sm">
                <span class="rounded-full bg-green-400 h-2 w-2" />
                {{ messages.productDetailPage.commercialBadge }}
              </div>
              <h1 class="text-4xl leading-tight font-bold mb-6 md:text-5xl">
                {{ product.title }}
              </h1>
              <p class="text-xl text-gray-300 leading-relaxed mb-8">
                {{ product.fullDescription || product.description }}
              </p>
              <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                <NuxtLink
                  :to="localePath('/contact')"
                  class="text-lg text-white font-medium px-8 py-3 rounded-lg bg-blue-600 inline-flex shadow-blue-500/30 shadow-lg transition-all items-center hover:bg-blue-700"
                >
                  {{ messages.productDetailPage.primaryCta }}
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/contact')"
                  class="text-lg text-white font-medium px-8 py-3 border border-white/20 rounded-lg bg-white/10 inline-flex transition-all items-center hover:bg-white/20"
                >
                  {{ messages.productDetailPage.secondaryCta }}
                </NuxtLink>
              </div>
            </div>

            <!-- 右侧渐变色装饰块 -->
            <div class="flex justify-center md:w-1/2">
              <div
                class="p-1 rounded-3xl opacity-90 max-w-md w-full aspect-square shadow-2xl bg-gradient-to-br"
                :class="product.imageColor || 'from-blue-500 to-purple-600'"
              >
                <div class="rounded-[22px] bg-slate-800/90 flex h-full w-full items-center justify-center overflow-hidden backdrop-blur-xl">
                  <span class="text-8xl text-white/80" :class="[product.icon]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 条件渲染：特殊布局 vs 标准布局 -->
      <div class="mx-auto px-4 max-w-7xl lg:px-8 sm:px-6">
        <!-- Appthen Showcase -->
        <div v-if="isAppthen">
          <ProductAppthenShowcase />
        </div>
        <!-- Ops Intelligence Showcase -->
        <div v-else-if="isOpsIntelligence">
          <ProductOpsIntelligenceShowcase />
        </div>
        <!-- 标准布局 -->
        <div v-else>
          <!-- 核心功能亮点 -->
          <section class="py-20">
            <div class="mx-auto mb-16 text-center max-w-3xl">
              <h2 class="text-3xl text-gray-900 font-bold mb-4 dark:text-white">
                {{ messages.productDetailPage.featuresTitle }}
              </h2>
              <p class="text-gray-500 dark:text-gray-400">
                {{ messages.productDetailPage.featuresSubtitle }}
              </p>
            </div>

            <div class="gap-8 grid lg:grid-cols-3 md:grid-cols-2">
              <div
                v-for="(feature, idx) in product.features"
                :key="idx"
                class="group p-8 border border-gray-100 rounded-2xl bg-white shadow-sm transition-all dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg"
              >
                <div class="text-blue-600 mb-6 rounded-lg bg-blue-50 flex h-12 w-12 transition-transform duration-300 items-center justify-center dark:text-blue-400 dark:bg-blue-900/30 group-hover:scale-110">
                  <span class="i-carbon-zap text-2xl" />
                </div>
                <h3 class="text-xl text-gray-900 font-bold mb-3 dark:text-white">
                  {{ feature }}
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  {{ messages.productDetailPage.featureDescriptionPrefix }}{{ feature }}{{ messages.productDetailPage.featureDescriptionSuffix }}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- 适用场景 + 技术规格（所有产品共享） -->
      <section class="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div class="mx-auto px-4 max-w-7xl lg:px-8 sm:px-6">
          <div class="gap-16 grid md:grid-cols-2">
            <!-- 适用场景 -->
            <div>
              <h3 class="text-2xl text-gray-900 font-bold mb-8 flex gap-3 items-center dark:text-white">
                <span class="i-carbon-box text-blue-600" />
                {{ messages.productDetailPage.scenariosTitle }}
              </h3>
              <div class="space-y-4">
                <div
                  v-for="(scene, i) in product.scenarios"
                  :key="i"
                  class="p-4 border border-gray-100 rounded-xl bg-white flex shadow-sm transition-colors items-start dark:border-gray-700 hover:border-blue-200 dark:bg-gray-800 dark:hover:border-blue-700"
                >
                  <div class="text-blue-500 mr-4 mt-1 shrink-0">
                    <span class="i-carbon-checkmark text-xl" />
                  </div>
                  <div>
                    <h4 class="text-gray-900 font-bold dark:text-white">
                      {{ scene }}
                    </h4>
                    <p class="text-sm text-gray-500 mt-1 dark:text-gray-400">
                      {{ messages.productDetailPage.scenarioDescriptionPrefix }}{{ scene }}{{ messages.productDetailPage.scenarioDescriptionSuffix }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 技术规格 -->
            <div>
              <h3 class="text-2xl text-gray-900 font-bold mb-8 flex gap-3 items-center justify-center dark:text-white md:justify-start">
                <span class="i-carbon-cpu text-purple-600" />
                {{ messages.productDetailPage.specsTitle }}
              </h3>
              <div class="text-gray-300 p-8 rounded-2xl bg-slate-900 dark:bg-slate-950">
                <ul class="space-y-6">
                  <li
                    v-for="(spec, i) in product.specs"
                    :key="i"
                    class="pb-4 border-b border-gray-800 flex items-center last:pb-0 last:border-0"
                  >
                    <span class="i-carbon-layers text-purple-400 mr-4 shrink-0 h-5 w-5" />
                    {{ spec }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="text-white py-24 text-center from-blue-600 to-indigo-700 bg-gradient-to-r">
        <div class="mx-auto px-4 max-w-7xl lg:px-8 sm:px-6">
          <h2 class="text-3xl font-bold mb-6 md:text-4xl">
            {{ messages.productDetailPage.ctaTitle }}
          </h2>
          <p class="text-lg text-blue-100 mx-auto mb-10 max-w-2xl">
            {{ messages.productDetailPage.ctaDescription }}
          </p>
          <NuxtLink
            :to="localePath('/contact')"
            class="text-lg text-blue-700 font-bold px-10 py-4 rounded-full bg-white inline-flex shadow-lg transition-all items-center hover:bg-gray-100"
          >
            {{ messages.productDetailPage.ctaButton }}
          </NuxtLink>
        </div>
      </section>
    </template>
  </div>
</template>
