<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const localePath = useLocalePath()
const { locale, messages } = useLocale()

useSeo({
  title: messages.value.productsPage.seoTitle,
  description: messages.value.productsPage.seoDescription,
  keywords: messages.value.productsPage.seoKeywords,
  ogImage: messages.value.common.defaultOgImage,
  locale: locale.value,
  siteName: messages.value.common.siteName,
})

const activeTab = ref<'all' | 'core' | 'enterprise' | 'industry'>('all')
const searchTerm = ref('')

const tabs = computed(() => messages.value.productsPage.tabs)

const coreIds = ['dimens', 'appthen']
const productDetails = computed(() => messages.value.data.products)

const filteredProducts = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return productDetails.value.filter((p) => {
    const name = (p.shortName || p.title).toLowerCase()
    const desc = p.description.toLowerCase()
    const tags = p.tags.map(t => t.toLowerCase())
    const matchesSearch = !term || name.includes(term) || desc.includes(term) || tags.some(t => t.includes(term))

    if (activeTab.value === 'core')
      return matchesSearch && coreIds.includes(p.id)
    if (activeTab.value === 'enterprise')
      return matchesSearch && !p.isIndustry && !coreIds.includes(p.id)
    if (activeTab.value === 'industry')
      return matchesSearch && p.isIndustry
    return matchesSearch
  })
})

const coreProducts = computed(() => filteredProducts.value.filter(p => coreIds.includes(p.id)))
const enterpriseProducts = computed(() => filteredProducts.value.filter(p => !p.isIndustry && !coreIds.includes(p.id)))
const industryProducts = computed(() => filteredProducts.value.filter(p => p.isIndustry))

const statusConfig = computed<Record<string, { label: string, cls: string, dot: string }>>(() => ({
  online: { label: messages.value.productsPage.status.online, cls: 'text-emerald-600 bg-emerald-50', dot: 'bg-emerald-500' },
  developing: { label: messages.value.productsPage.status.developing, cls: 'text-amber-600 bg-amber-50', dot: 'bg-amber-500' },
  planned: { label: messages.value.productsPage.status.planned, cls: 'text-blue-600 bg-blue-50', dot: 'bg-blue-500' },
}))

function clearFilters() {
  searchTerm.value = ''
  activeTab.value = 'all'
}
</script>

<template>
  <div class="bg-slate-50 min-h-screen">
    <!-- Hero -->
    <div class="relative overflow-hidden from-slate-900 to-indigo-900 via-blue-900 bg-gradient-to-br">
      <!-- 装饰 -->
      <div class="inset-0 absolute">
        <div class="animate-float rounded-full bg-blue-500/10 h-72 w-72 left-10 top-20 absolute blur-3xl" />
        <div class="animate-float-soft rounded-full bg-indigo-500/10 h-96 w-96 bottom-10 right-20 absolute blur-3xl" style="animation-delay: 1s" />
        <div class="left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/2">
          <div class="animate-breathe rounded-full bg-cyan-500/5 h-[600px] w-[600px] blur-3xl" />
        </div>
      </div>

      <div class="mx-auto px-4 pb-16 pt-28 max-w-6xl relative sm:px-6">
        <div class="mx-auto text-center max-w-2xl">
          <div class="text-sm text-blue-200 font-medium mb-6 px-4 py-1.5 border border-white/10 rounded-full bg-white/10 inline-flex gap-2 items-center">
            <span class="animate-breathe rounded-full bg-cyan-400 h-1.5 w-1.5" />
            {{ messages.productsPage.badge }}
          </div>
          <h1 class="animate-text-shimmer text-4xl text-transparent tracking-tight font-bold mb-4 from-white to-white via-cyan-300 bg-gradient-to-r bg-clip-text md:text-5xl">
            {{ messages.productsPage.title.split('\n')[0] }}<br>{{ messages.productsPage.title.split('\n')[1] }}
          </h1>
          <p class="text-lg text-blue-200/70 leading-relaxed">
            {{ messages.productsPage.description }}
          </p>

          <!-- 统计 -->
          <div class="mt-10 flex gap-8 items-center justify-center">
            <div class="text-center">
              <div class="animate-pop text-3xl text-white font-bold" style="animation-delay: 0.1s">
                {{ productDetails.length }}
              </div>
              <div class="text-xs text-blue-300/60 mt-1">
                {{ messages.productsPage.statsProducts }}
              </div>
            </div>
            <div class="bg-white/10 h-10 w-px" />
            <div class="text-center">
              <div class="animate-pop text-3xl text-white font-bold" style="animation-delay: 0.2s">
                {{ productDetails.filter(p => p.productStatus === 'online').length }}
              </div>
              <div class="text-xs text-blue-300/60 mt-1">
                {{ messages.productsPage.statsOnline }}
              </div>
            </div>
            <div class="bg-white/10 h-10 w-px" />
            <div class="text-center">
              <div class="animate-pop text-3xl text-white font-bold" style="animation-delay: 0.3s">
                {{ messages.productsPage.categoriesCount }}
              </div>
              <div class="text-xs text-blue-300/60 mt-1">
                {{ messages.productsPage.statsCategories }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部圆角过渡 -->
      <div class="rounded-t-3xl bg-slate-50 h-6 bottom-0 left-0 right-0 absolute" />
    </div>

    <!-- 筛选栏 -->
    <div class="border-b border-gray-200/60 bg-white/80 top-16 sticky z-30 backdrop-blur-xl">
      <div class="mx-auto px-4 py-3 max-w-6xl sm:px-6">
        <div class="flex flex-col gap-3 justify-between sm:flex-row sm:items-center">
          <!-- Tab -->
          <div class="p-1 rounded-xl bg-gray-100/80 flex self-start">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="text-sm font-medium px-4 py-2 rounded-lg flex gap-1.5 transition-all duration-200 items-center"
              :class="activeTab === tab.id ? 'bg-white text-gray-900 shadow-sm animate-pop' : 'text-gray-500 hover:text-gray-700'"
              @click="activeTab = tab.id"
            >
              <span class="text-xs" :class="[tab.icon]" />
              {{ tab.label }}
            </button>
          </div>

          <!-- 搜索 -->
          <div class="w-full relative sm:w-64">
            <span class="i-carbon-search text-sm text-gray-400 left-3 top-1/2 absolute -translate-y-1/2" />
            <input
              v-model="searchTerm"
              type="text"
              :placeholder="messages.productsPage.searchPlaceholder"
              class="text-sm py-2 pl-9 pr-4 outline-none rounded-xl border-none bg-gray-100/80 w-full transition-all focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 主内容 -->
    <div class="mx-auto px-4 py-10 max-w-6xl space-y-16 sm:px-6">
      <!-- 核心平台 -->
      <div v-if="coreProducts.length > 0">
        <div class="mb-8 flex gap-3 items-center">
          <div class="animate-breathe rounded-full h-6 w-1 from-blue-600 to-cyan-500 bg-gradient-to-b" />
          <h2 class="text-xl text-gray-900 font-bold">
            {{ messages.productsPage.sections.core }}
          </h2>
          <span class="text-xs text-gray-400 px-2 py-0.5 rounded-full bg-gray-100">Core Platform</span>
        </div>

        <div class="gap-6 grid md:grid-cols-2">
          <Reveal
            v-for="p in coreProducts"
            :key="p.id"
            variant="scale"
            width="100%"
          >
            <NuxtLink
              :to="localePath(`/product/${p.id}`)"
              class="group shine-on-hover border border-gray-100 rounded-2xl bg-white no-underline transition-all duration-300 relative overflow-hidden hover:border-blue-200 hover:shadow-xl"
            >
              <!-- 顶部渐变条 -->
              <div class="h-1 bg-gradient-to-r" :class="p.imageColor || 'from-blue-500 to-cyan-500'" />

              <div class="p-6">
                <div class="flex gap-5 items-start">
                  <!-- 图标 -->
                  <div class="rounded-2xl flex shrink-0 h-14 w-14 shadow-lg transition-transform duration-500 items-center justify-center bg-gradient-to-br group-hover:rotate-6" :class="p.imageColor || 'from-blue-500 to-cyan-500'">
                    <span class="text-2xl text-white" :class="[p.icon]" />
                  </div>

                  <div class="flex-1 min-w-0">
                    <div class="mb-1 flex gap-2 items-center">
                      <h3 class="text-lg text-gray-900 font-bold transition-colors group-hover:text-blue-600">
                        {{ p.shortName || p.title }}
                      </h3>
                      <span
                        v-if="p.productStatus"
                        class="text-[10px] font-bold px-2 py-0.5 rounded-full inline-flex gap-1 items-center"
                        :class="statusConfig[p.productStatus]?.cls"
                      >
                        <span class="rounded-full h-1 w-1" :class="statusConfig[p.productStatus]?.dot" />
                        {{ statusConfig[p.productStatus]?.label }}
                      </span>
                    </div>
                    <p class="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                      {{ p.description }}
                    </p>

                    <!-- 标签 -->
                    <div class="flex flex-wrap gap-1.5">
                      <span
                        v-for="tag in p.tags.slice(0, 3)"
                        :key="tag"
                        class="text-[11px] text-blue-600 font-medium px-2 py-0.5 rounded-md bg-blue-50"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- 底部特性 -->
                <div v-if="p.features?.length" class="mt-5 pt-4 border-t border-gray-50">
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="f in p.features.slice(0, 4)"
                      :key="f"
                      class="text-[11px] text-gray-400 flex gap-1 items-center"
                    >
                      <span class="i-carbon-checkmark text-[10px] text-emerald-500" />
                      {{ f }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </Reveal>
        </div>
      </div>

      <!-- 企业产品 -->
      <div v-if="enterpriseProducts.length > 0">
        <div class="mb-8 flex gap-3 items-center">
          <div class="animate-breathe rounded-full h-6 w-1 from-blue-500 to-indigo-500 bg-gradient-to-b" />
          <h2 class="text-xl text-gray-900 font-bold">
            {{ messages.productsPage.sections.enterprise }}
          </h2>
          <span class="text-xs text-gray-400 px-2 py-0.5 rounded-full bg-gray-100">Enterprise</span>
        </div>

        <div class="gap-4 grid grid-cols-2 md:grid-cols-3">
          <Reveal
            v-for="(p, index) in enterpriseProducts"
            :key="p.id"
            variant="up"
            :delay="0.05 * index"
            width="100%"
          >
            <NuxtLink
              :to="localePath(`/product/${p.id}`)"
              class="group shine-on-hover p-5 border border-gray-100 rounded-2xl bg-white no-underline flex flex-col transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <!-- 图标 + 状态 -->
              <div class="mb-4 flex items-start justify-between">
                <div class="rounded-xl bg-blue-50 flex h-11 w-11 transition-colors items-center justify-center group-hover:bg-blue-100">
                  <span class="text-lg text-blue-500" :class="[p.icon]" />
                </div>
                <span
                  v-if="p.productStatus"
                  class="text-[10px] font-bold px-2 py-0.5 rounded-full inline-flex gap-1 items-center"
                  :class="statusConfig[p.productStatus]?.cls"
                >
                  <span class="rounded-full h-1 w-1" :class="statusConfig[p.productStatus]?.dot" />
                  {{ statusConfig[p.productStatus]?.label }}
                </span>
              </div>

              <h3 class="text-sm text-gray-900 font-bold mb-1 transition-colors group-hover:text-blue-600">
                {{ p.shortName || p.title }}
              </h3>
              <p class="text-xs text-gray-400 leading-relaxed mb-3 flex-grow line-clamp-2">
                {{ p.description }}
              </p>

              <!-- 标签 -->
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="tag in p.tags.slice(0, 2)"
                  :key="tag"
                  class="text-[10px] text-gray-500 font-medium px-1.5 py-0.5 rounded bg-gray-50"
                >
                  {{ tag }}
                </span>
              </div>
            </NuxtLink>
          </Reveal>
        </div>
      </div>

      <!-- 行业产品 -->
      <div v-if="industryProducts.length > 0">
        <div class="mb-8 flex gap-3 items-center">
          <div class="animate-breathe rounded-full h-6 w-1 from-amber-500 to-orange-500 bg-gradient-to-b" />
          <h2 class="text-xl text-gray-900 font-bold">
            {{ messages.productsPage.sections.industry }}
          </h2>
          <span class="text-xs text-gray-400 px-2 py-0.5 rounded-full bg-gray-100">Open Source</span>
        </div>

        <div class="gap-4 grid grid-cols-2 md:grid-cols-4">
          <Reveal
            v-for="(p, index) in industryProducts"
            :key="p.id"
            variant="rotate"
            :delay="0.05 * index"
            width="100%"
          >
            <NuxtLink
              :to="localePath(`/product/${p.id}`)"
              class="group shine-on-hover p-5 border border-gray-100 rounded-2xl bg-white no-underline flex flex-col transition-all duration-300 hover:border-amber-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <!-- 图标 -->
              <div class="mb-4 rounded-xl bg-amber-50 flex h-11 w-11 transition-colors items-center justify-center group-hover:bg-amber-100">
                <span class="text-lg text-amber-500" :class="[p.icon]" />
              </div>

              <h3 class="text-sm text-gray-900 font-bold mb-1 transition-colors group-hover:text-amber-600">
                {{ p.shortName || p.title }}
              </h3>
              <p class="text-xs text-gray-400 leading-relaxed mb-3 flex-grow line-clamp-2">
                {{ p.description }}
              </p>

              <!-- 标签 -->
              <div class="flex items-center justify-between">
                <span class="text-[10px] text-amber-600 font-medium px-1.5 py-0.5 rounded bg-amber-50">{{ messages.productsPage.industryTag }}</span>
                <span v-if="p.downloads" class="text-[10px] text-gray-400">{{ p.downloads }}</span>
              </div>
            </NuxtLink>
          </Reveal>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredProducts.length === 0" class="py-24 text-center">
        <div class="animate-breathe mx-auto mb-4 rounded-2xl bg-gray-100 flex h-16 w-16 items-center justify-center">
          <span class="i-carbon-search text-2xl text-gray-300" />
        </div>
        <h3 class="text-lg text-gray-900 font-bold mb-2">
          {{ messages.productsPage.emptyTitle }}
        </h3>
        <p class="text-sm text-gray-400 mb-6">
          {{ messages.productsPage.emptyDescription }}
        </p>
        <button
          class="text-sm text-white font-medium px-6 py-2.5 rounded-xl bg-blue-600 transition-colors hover:bg-blue-700"
          @click="clearFilters"
        >
          {{ messages.productsPage.clearFilters }}
        </button>
      </div>
    </div>
  </div>
</template>
