<script setup lang="ts">
interface MarketResource {
  id: number
  name: string
  description: string
  cover: string
  logo: string
  resourceType: string
  sourceTable: string
  isFree: boolean
  price: string
  tags: string[]
  meta: {
    industry?: string[]
    scene?: string[]
  }
  status: number
  scope: string
  sourceVersion: string
  teamId: string
  projectId: string | null
}

interface MarketResponse {
  code: number
  data: {
    list: MarketResource[]
    pagination: { page: number, size: number, total: number }
  }
}

definePageMeta({ layout: 'default' })

useSeo({
  title: '解决方案',
  description: '方块智联提供数据与知识管理、智能营销、智能运维等全行业解决方案，助力企业数字化转型。',
  keywords: ['方块智联', '解决方案', '数据管理', '智能营销', '智能运维', '企业数字化'],
})

const PAGE_SIZE = 40
const currentPage = ref(1)
const activeFilter = ref('all')
const searchKeyword = ref('')
const searchInput = ref('')
const isSearching = ref(false)

const { data: marketData, pending, error, refresh } = await useFetch<MarketResponse>('/api/open/market/resource/list', {
  params: computed(() => ({
    page: currentPage.value,
    size: PAGE_SIZE,
    sideFilter: activeFilter.value,
    keyword: searchKeyword.value,
  })),
})

const resourceTypeMap: Record<string, { label: string, icon: string, color: string }> = {
  application: { label: '应用', icon: 'i-carbon-application', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  flow_plugin: { label: 'AI 工作流', icon: 'i-carbon-flow', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  template: { label: '模板', icon: 'i-carbon-document', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
}

const industryMap: Record<string, string> = {
  internet_technology: '互联网科技',
  education_training: '教育培训',
  finance: '金融',
  manufacturing: '制造业',
  healthcare: '医疗健康',
  retail: '零售电商',
  government: '政务',
  logistics: '物流',
  energy: '能源',
}

const sceneMap: Record<string, string> = {
  project_collaboration: '项目协作',
  after_sales_service: '售后服务',
  finance_approval: '财务审批',
  data_analysis: '数据分析',
  marketing: '营销管理',
  hr_management: '人事管理',
  asset_management: '资产管理',
}

const filterOptions = [
  { key: 'all', label: '全部', icon: 'i-carbon-grid' },
  { key: 'featured', label: '精选', icon: 'i-carbon-star' },
  { key: 'application', label: '应用', icon: 'i-carbon-application' },
  { key: 'flow_plugin', label: 'AI 工作流', icon: 'i-carbon-flow' },
  { key: 'template', label: '模板', icon: 'i-carbon-document' },
]

const totalItems = computed(() => marketData.value?.data?.pagination?.total || 0)
const totalPages = computed(() => Math.ceil(totalItems.value / PAGE_SIZE))
const currentList = computed(() => marketData.value?.data?.list || [])

const paginationRange = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  const delta = 2
  const pages: (number | string)[] = []
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      pages.push(i)
    }
    else if (pages.at(-1) !== '...') {
      pages.push('...')
    }
  }
  return pages
})

function handleSearch() {
  searchKeyword.value = searchInput.value.trim()
  currentPage.value = 1
  isSearching.value = !!searchKeyword.value
}

function clearSearch() {
  searchInput.value = ''
  searchKeyword.value = ''
  currentPage.value = 1
  isSearching.value = false
}

function setFilter(key: string) {
  activeFilter.value = key
  currentPage.value = 1
}

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value || page === currentPage.value)
    return
  currentPage.value = page
  window.scrollTo({ top: 300, behavior: 'smooth' })
}

function getTypeTag(type: string) {
  return resourceTypeMap[type] || { label: type, icon: 'i-carbon-application', color: 'bg-gray-50 text-gray-600 border-gray-100' }
}

function getIndustryLabel(key: string) {
  return industryMap[key] || key
}

function getSceneLabel(key: string) {
  return sceneMap[key] || key
}

const MARKET_URL = 'https://dimens.bintelai.com/#/market'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px]" />
        <div class="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[120px]" />
      </div>
      <div class="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-[320px]">
        <Reveal>
          <div class="text-center max-w-3xl mx-auto">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-sm font-bold mb-6 border border-white/10 backdrop-blur-sm">
              <span class="i-carbon-catalog text-base" />
              应用市场
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent animate-text-shimmer">
              发现数智化应用
            </h1>
            <p class="text-lg md:text-xl text-blue-200/70 leading-relaxed mb-10">
              从开箱即用的应用模板到 AI 工作流插件，一站式赋能企业数字化转型
            </p>

            <!-- Big Search -->
            <div class="max-w-2xl mx-auto">
              <div class="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden focus-within:border-white/25 transition-colors">
                <span class="pl-5 i-carbon-search text-white/50 text-xl" />
                <input
                  v-model="searchInput"
                  type="text"
                  placeholder="搜索应用、工作流、模板..."
                  class="flex-1 bg-transparent px-4 py-4 text-white placeholder-white/40 text-base focus:outline-none"
                  @keyup.enter="handleSearch"
                >
                <button
                  v-if="searchInput"
                  class="px-3 py-2 text-white/40 hover:text-white/70 transition-colors"
                  @click="clearSearch"
                >
                  <span class="i-carbon-close text-lg" />
                </button>
                <button
                  class="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors"
                  @click="handleSearch"
                >
                  搜索
                </button>
              </div>
              <p v-if="isSearching" class="mt-3 text-sm text-blue-200/50">
                搜索 "{{ searchKeyword }}" 的结果
                <button class="ml-2 text-cyan-300 hover:text-cyan-200 underline" @click="clearSearch">
                  清除
                </button>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- Filter Bar -->
    <section class="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div class="container mx-auto px-6 py-3">
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 overflow-x-auto">
            <button
              v-for="opt in filterOptions"
              :key="opt.key"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap"
              :class="activeFilter === opt.key
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 animate-pop'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'"
              @click="setFilter(opt.key)"
            >
              <span :class="[opt.icon]" class="text-sm" />
              {{ opt.label }}
            </button>
          </div>
          <span class="text-xs text-gray-400 whitespace-nowrap">
            共 {{ totalItems }} 个
          </span>
        </div>
      </div>
    </section>

    <!-- Loading -->
    <section v-if="pending" class="py-16">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="i in 8" :key="i" class="animate-pulse rounded-2xl border border-gray-100 overflow-hidden">
            <div class="h-36 bg-gray-100" />
            <div class="p-4 space-y-2.5">
              <div class="h-4 bg-gray-100 rounded w-3/4" />
              <div class="h-3 bg-gray-100 rounded w-1/2" />
              <div class="h-3 bg-gray-100 rounded w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Error -->
    <section v-else-if="error" class="py-24">
      <div class="container mx-auto px-6 text-center">
        <div class="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4 animate-breathe">
          <span class="i-carbon-warning-alt text-3xl" />
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">加载失败</h3>
        <p class="text-gray-500 mb-4">无法获取应用市场数据，请稍后重试</p>
        <button
          class="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          @click="refresh()"
        >
          <span class="i-carbon-renew text-sm" />
          重试
        </button>
      </div>
    </section>

    <!-- Empty -->
    <section v-else-if="currentList.length === 0" class="py-24">
      <div class="container mx-auto px-6 text-center">
        <div class="w-16 h-16 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center mx-auto mb-4 animate-breathe">
          <span class="i-carbon-no-ticket text-3xl" />
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">暂无匹配应用</h3>
        <p class="text-gray-500">尝试调整筛选条件或搜索关键词</p>
      </div>
    </section>

    <!-- Resource Cards -->
    <section v-else class="py-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Reveal
            v-for="(item, index) in currentList"
            :key="item.id"
            variant="scale"
            width="100%"
            :delay="index * 0.05"
          >
            <div
              class="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-600/5 hover:-translate-y-1 transition-all duration-500 flex flex-col shine-on-hover"
            >
              <!-- Cover -->
              <div class="relative h-36 bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden">
                <img
                  v-if="item.cover"
                  :src="item.cover"
                  :alt="item.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                <div v-else class="w-full h-full flex items-center justify-center">
                  <div class="w-14 h-14 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center">
                    <span :class="[getTypeTag(item.resourceType).icon]" class="text-2xl text-blue-400" />
                  </div>
                </div>

                <!-- Type Badge -->
                <div
                  class="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-bold border backdrop-blur-sm"
                  :class="getTypeTag(item.resourceType).color"
                >
                  <span :class="[getTypeTag(item.resourceType).icon]" class="text-[9px]" />
                  {{ getTypeTag(item.resourceType).label }}
                </div>

                <!-- Free Badge -->
                <div
                  v-if="item.isFree"
                  class="absolute top-2.5 right-2.5 inline-flex items-center gap-0.5 px-2 py-0.5 rounded-lg text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100"
                >
                  <span class="i-carbon-checkmark-filled text-[9px]" />
                  免费
                </div>
              </div>

              <!-- Content -->
              <div class="p-4 flex flex-col flex-grow">
                <div class="flex items-start gap-2.5 mb-2">
                  <div
                    v-if="item.logo"
                    class="w-9 h-9 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden"
                  >
                    <img :src="item.logo" :alt="item.name" class="w-6 h-6 object-contain">
                  </div>
                  <div class="min-w-0">
                    <h3 class="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors truncate">
                      {{ item.name }}
                    </h3>
                    <p class="text-[11px] text-gray-400 mt-0.5">
                      v{{ item.sourceVersion }}
                    </p>
                  </div>
                </div>

                <p class="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2 flex-grow">
                  {{ item.description || '暂无描述' }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1 mb-3">
                  <span
                    v-for="ind in (item.meta?.industry || []).slice(0, 2)"
                    :key="ind"
                    class="inline-flex items-center px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 text-[10px] font-medium border border-slate-100"
                  >
                    {{ getIndustryLabel(ind) }}
                  </span>
                  <span
                    v-for="sc in (item.meta?.scene || []).slice(0, 1)"
                    :key="sc"
                    class="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-50/60 text-blue-500 text-[10px] font-medium border border-blue-100/60"
                  >
                    {{ getSceneLabel(sc) }}
                  </span>
                </div>

                <!-- Footer -->
                <div class="flex items-center justify-between pt-2.5 border-t border-gray-50">
                  <span class="text-[11px] text-gray-400">
                    {{ item.scope === 'public' ? '公开' : item.scope === 'public_read' ? '只读' : '私有' }}
                  </span>
                  <a
                    :href="MARKET_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20 hover:shadow-blue-600/30 transition-all no-underline"
                  >
                    <span class="i-carbon-launch text-[10px]" />
                    导入
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="flex items-center justify-center gap-1.5 mt-12">
          <button
            :disabled="currentPage <= 1"
            class="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm transition-colors"
            :class="currentPage <= 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'"
            @click="goToPage(currentPage - 1)"
          >
            <span class="i-carbon-chevron-left" />
          </button>

          <template v-for="p in paginationRange" :key="p">
            <button
              v-if="p !== '...'"
              class="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium transition-all hover:scale-105"
              :class="p === currentPage
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'"
              @click="goToPage(p as number)"
            >
              {{ p }}
            </button>
            <span v-else class="px-1 text-gray-400 text-sm">...</span>
          </template>

          <button
            :disabled="currentPage >= totalPages"
            class="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm transition-colors"
            :class="currentPage >= totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'"
            @click="goToPage(currentPage + 1)"
          >
            <span class="i-carbon-chevron-right" />
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gray-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03]">
        <div class="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px]" />
        <div class="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px]" />
      </div>
      <div class="container mx-auto px-6 relative z-10">
        <Reveal direction="up" width="100%">
          <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              为您的企业量身定制数智化解决方案
            </h2>
            <p class="text-gray-400 text-lg mb-10 leading-relaxed">
              我们的专家团队将深入分析您的业务场景，提供从咨询规划到落地交付的全流程服务
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all"
            >
              <span class="i-carbon-chat text-lg" />
              联系我们
            </NuxtLink>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>
