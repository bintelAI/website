<script setup lang="ts">
import { productDetails } from '~/constants'

definePageMeta({
  layout: 'default',
})

const activeTab = ref<'all' | 'core' | 'enterprise' | 'industry'>('all')
const searchTerm = ref('')

const tabs = [
  { id: 'all', label: '全部产品', icon: 'i-carbon-grid' },
  { id: 'core', label: '核心平台', icon: 'i-carbon-cube' },
  { id: 'enterprise', label: '企业产品', icon: 'i-carbon-enterprise' },
  { id: 'industry', label: '开源产品', icon: 'i-carbon-code' },
] as const

const coreIds = ['dimens', 'appthen']

const filteredProducts = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return productDetails.filter((p) => {
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

const statusConfig: Record<string, { label: string; cls: string; dot: string }> = {
  online: { label: '已上线', cls: 'text-emerald-600 bg-emerald-50', dot: 'bg-emerald-500' },
  developing: { label: '开发中', cls: 'text-amber-600 bg-amber-50', dot: 'bg-amber-500' },
  planned: { label: '规划中', cls: 'text-blue-600 bg-blue-50', dot: 'bg-blue-500' },
}

function clearFilters() {
  searchTerm.value = ''
  activeTab.value = 'all'
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero -->
    <div class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <!-- 装饰 -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div class="absolute bottom-10 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        <div class="text-center max-w-2xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-blue-200 text-sm font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            产品矩阵
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            构建企业智能化<br>全栈产品体系
          </h1>
          <p class="text-blue-200/70 text-lg leading-relaxed">
            从核心平台到行业方案，覆盖数据管理、AI 自动化、低代码开发与智能运维全场景
          </p>

          <!-- 统计 -->
          <div class="flex items-center justify-center gap-8 mt-10">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">{{ productDetails.length }}</div>
              <div class="text-xs text-blue-300/60 mt-1">款产品</div>
            </div>
            <div class="w-px h-10 bg-white/10" />
            <div class="text-center">
              <div class="text-3xl font-bold text-white">{{ productDetails.filter(p => p.productStatus === 'online').length }}</div>
              <div class="text-xs text-blue-300/60 mt-1">已上线</div>
            </div>
            <div class="w-px h-10 bg-white/10" />
            <div class="text-center">
              <div class="text-3xl font-bold text-white">4</div>
              <div class="text-xs text-blue-300/60 mt-1">大品类</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部圆角过渡 -->
      <div class="absolute bottom-0 left-0 right-0 h-6 bg-slate-50 rounded-t-3xl" />
    </div>

    <!-- 筛选栏 -->
    <div class="sticky top-16 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <!-- Tab -->
          <div class="flex p-1 bg-gray-100/80 rounded-xl self-start">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="activeTab === tab.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'"
              @click="activeTab = tab.id"
            >
              <span :class="[tab.icon, 'text-xs']" />
              {{ tab.label }}
            </button>
          </div>

          <!-- 搜索 -->
          <div class="relative w-full sm:w-64">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 i-carbon-search text-sm" />
            <input
              v-model="searchTerm"
              type="text"
              placeholder="搜索产品..."
              class="w-full bg-gray-100/80 border-none rounded-xl pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 主内容 -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">

      <!-- 核心平台 -->
      <div v-if="coreProducts.length > 0">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full" />
          <h2 class="text-xl font-bold text-gray-900">核心平台</h2>
          <span class="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Core Platform</span>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="p in coreProducts"
            :key="p.id"
            :to="`/product/${p.id}`"
            class="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 no-underline"
          >
            <!-- 顶部渐变条 -->
            <div class="h-1 bg-gradient-to-r" :class="p.imageColor || 'from-blue-500 to-cyan-500'" />

            <div class="p-6">
              <div class="flex items-start gap-5">
                <!-- 图标 -->
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg shrink-0" :class="p.imageColor || 'from-blue-500 to-cyan-500'">
                  <span :class="[p.icon, 'text-2xl text-white']" />
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{{ p.shortName || p.title }}</h3>
                    <span
                      v-if="p.productStatus"
                      class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                      :class="statusConfig[p.productStatus]?.cls"
                    >
                      <span class="w-1 h-1 rounded-full" :class="statusConfig[p.productStatus]?.dot" />
                      {{ statusConfig[p.productStatus]?.label }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">{{ p.description }}</p>

                  <!-- 标签 -->
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="tag in p.tags.slice(0, 3)"
                      :key="tag"
                      class="text-[11px] px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 font-medium"
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
                    class="text-[11px] text-gray-400 flex items-center gap-1"
                  >
                    <span class="i-carbon-checkmark text-emerald-500 text-[10px]" />
                    {{ f }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- 企业产品 -->
      <div v-if="enterpriseProducts.length > 0">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
          <h2 class="text-xl font-bold text-gray-900">企业产品</h2>
          <span class="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Enterprise</span>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <NuxtLink
            v-for="p in enterpriseProducts"
            :key="p.id"
            :to="`/product/${p.id}`"
            class="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 no-underline flex flex-col"
          >
            <!-- 图标 + 状态 -->
            <div class="flex items-start justify-between mb-4">
              <div class="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <span :class="[p.icon, 'text-lg text-blue-500']" />
              </div>
              <span
                v-if="p.productStatus"
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                :class="statusConfig[p.productStatus]?.cls"
              >
                <span class="w-1 h-1 rounded-full" :class="statusConfig[p.productStatus]?.dot" />
                {{ statusConfig[p.productStatus]?.label }}
              </span>
            </div>

            <h3 class="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{{ p.shortName || p.title }}</h3>
            <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-3 flex-grow">{{ p.description }}</p>

            <!-- 标签 -->
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tag in p.tags.slice(0, 2)"
                :key="tag"
                class="text-[10px] px-1.5 py-0.5 rounded bg-gray-50 text-gray-500 font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- 行业产品 -->
      <div v-if="industryProducts.length > 0">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
          <h2 class="text-xl font-bold text-gray-900">开源产品</h2>
          <span class="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Open Source</span>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink
            v-for="p in industryProducts"
            :key="p.id"
            :to="`/product/${p.id}`"
            class="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-amber-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 no-underline flex flex-col"
          >
            <!-- 图标 -->
            <div class="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
              <span :class="[p.icon, 'text-lg text-amber-500']" />
            </div>

            <h3 class="font-bold text-gray-900 text-sm mb-1 group-hover:text-amber-600 transition-colors">{{ p.shortName || p.title }}</h3>
            <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-3 flex-grow">{{ p.description }}</p>

            <!-- 标签 -->
            <div class="flex items-center justify-between">
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-600 font-medium">行业方案</span>
              <span v-if="p.downloads" class="text-[10px] text-gray-400">{{ p.downloads }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredProducts.length === 0" class="py-24 text-center">
        <div class="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
          <span class="i-carbon-search text-2xl text-gray-300" />
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">未找到相关产品</h3>
        <p class="text-gray-400 text-sm mb-6">请尝试更换关键词搜索，或浏览全部产品分类</p>
        <button
          class="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          @click="clearFilters"
        >
          清除筛选
        </button>
      </div>
    </div>
  </div>
</template>
