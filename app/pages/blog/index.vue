<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const localePath = useLocalePath()
const { locale, messages } = useLocale()

useSeo({
  title: messages.value.blogPage.seoTitle,
  description: messages.value.blogPage.seoDescription,
  keywords: messages.value.blogPage.seoKeywords,
  locale: locale.value,
  siteName: messages.value.common.siteName,
})

// 维表字段 ID 映射
const FIELD_TITLE = 'fld_9KGEYzaEaDQN'
const FIELD_TYPE = 'fld_zk7TfLFAjrLh'
const FIELD_COVER = 'fld_iRYy8hjGaB7h'
const FIELD_DESC = 'fld_qwXKLQOo2B1S'
const FIELD_TAGS = 'fld_suDboML1XPBo'
const FIELD_PUBLISH_DATE = 'fld_hhIdYUDEM6sT'

// "类型" 字段的选项 ID → 标签映射
const TYPE_OPTION_LABELS: Record<string, string> = {
  '0c0c64bc-2c25-4b44-b008-fc7dbcec6102': '产品动态',
  '6cef3b80-80f0-47c1-8e86-d90ccfa4fdf2': '行业应用',
  '0366017a-4cc5-4f66-9614-e82807f7981c': '技术洞察',
}

interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  category: string
  link: string
  coverImage?: string
  author: string
  tags: string[]
}

const activeCategory = ref(messages.value.blogPage.allCategory)

const { data: postsData, pending: loading, error, refresh } = await useFetch<any>('/api/dimens/news/list', {
  method: 'POST',
  body: { page: 1, size: 50 },
})

const errorMessage = computed(() => error.value ? messages.value.blogPage.listError : '')

function extractRows(payload: any): any[] {
  const root = payload?.data ?? payload
  const list = root?.list ?? root?.rows ?? root?.records ?? []
  return Array.isArray(list) ? list : []
}

function getTypeLabel(d: Record<string, any>) {
  const typeId = d[FIELD_TYPE]
  const rawCategory = typeId ? (TYPE_OPTION_LABELS[typeId] || typeId) : ''
  return rawCategory
}

function mapRow(row: any): BlogPost {
  const d = row.data || {}
  const coverArr = d[FIELD_COVER]
  return {
    id: row.rowId,
    title: d[FIELD_TITLE] || '',
    description: d[FIELD_DESC]?.previewText || '',
    date: d[FIELD_PUBLISH_DATE] || (row.createTime || '').split(' ')[0],
    category: getTypeLabel(d),
    link: localePath(`/blog/${row.rowId}`),
    coverImage: Array.isArray(coverArr) && coverArr.length > 0 ? coverArr[0].url : undefined,
    author: '',
    tags: d[FIELD_TAGS] ? d[FIELD_TAGS].split(',').map((t: string) => t.trim()) : [],
  }
}

const posts = computed(() => {
  const list = extractRows(postsData.value)
  return list.map(mapRow)
})

// 分类从实际数据中提取
const categories = computed(() => {
  const cats = posts.value.map(p => p.category).filter(Boolean)
  return [messages.value.blogPage.allCategory, ...Array.from(new Set(cats)).map(cat => getCategoryLabel(cat))]
})

const filteredPosts = computed(() => {
  if (activeCategory.value === messages.value.blogPage.allCategory)
    return posts.value
  return posts.value.filter(p => getCategoryLabel(p.category) === activeCategory.value)
})

const coverColors = [
  'from-blue-500/20 to-indigo-500/20',
  'from-teal-400/20 to-cyan-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-orange-500/20 to-red-500/20',
]

function getCoverColor(index: number) {
  return coverColors[index % coverColors.length] || coverColors[0]
}

// 动态分类颜色
const colorPalette = [
  'bg-blue-50 text-blue-700 border border-blue-200',
  'bg-emerald-50 text-emerald-700 border border-emerald-200',
  'bg-purple-50 text-purple-700 border border-purple-200',
  'bg-amber-50 text-amber-700 border border-amber-200',
  'bg-rose-50 text-rose-700 border border-rose-200',
  'bg-cyan-50 text-cyan-700 border border-cyan-200',
]
const fallbackCategoryColor = colorPalette[0]!

const categoryColorMap = ref<Record<string, string>>({})

function getCategoryColor(category: string) {
  if (!categoryColorMap.value[category]) {
    const idx = Object.keys(categoryColorMap.value).length
    categoryColorMap.value[category] = colorPalette[idx % colorPalette.length] || fallbackCategoryColor
  }
  return categoryColorMap.value[category] || fallbackCategoryColor
}

function refreshPosts() {
  refresh()
}

function getCategoryLabel(category: string) {
  return messages.value.blogPage.categories[category] || category || messages.value.blogPage.uncategorized
}

function scrollToTop() {
  window.scrollTo(0, 0)
}

onMounted(scrollToTop)
watch(() => route.path, scrollToTop)

watch(locale, () => {
  activeCategory.value = messages.value.blogPage.allCategory
})
</script>

<template>
  <div class="bg-white min-h-screen">
    <!-- Hero标题区 -->
    <div class="text-white pb-20 pt-32 bg-slate-900 relative overflow-hidden">
      <div class="rounded-full bg-blue-500/10 h-[500px] w-[500px] right-0 top-0 absolute blur-[120px]" />
      <div class="rounded-full bg-purple-500/10 h-[400px] w-[400px] bottom-0 left-0 absolute blur-[100px]" />
      <div class="mx-auto px-6 text-center max-w-5xl relative z-10">
        <div class="text-sm text-white/80 mb-6 px-4 py-1.5 border border-white/10 rounded-full bg-white/10 inline-flex gap-2 items-center backdrop-blur">
          <span class="rounded-full bg-blue-400 h-2 w-2 animate-pulse" />
          {{ messages.blogPage.badge }}
        </div>
        <h1 class="animate-text-shimmer text-4xl text-transparent leading-tight font-bold mb-6 from-white to-white via-blue-400 bg-gradient-to-r bg-clip-text lg:text-6xl md:text-5xl">
          {{ messages.blogPage.title }}
        </h1>
        <p class="text-lg text-slate-400 leading-relaxed mx-auto max-w-xl">
          {{ messages.blogPage.subtitle }}
        </p>
      </div>
    </div>

    <!-- 分类筛选 -->
    <div class="border-b border-gray-100 bg-white top-16 sticky z-20">
      <div class="mx-auto px-6 max-w-5xl">
        <div class="scrollbar-none py-4 flex gap-2 overflow-x-auto">
          <button
            v-for="cat in categories"
            :key="cat"
            class="text-sm font-medium px-5 py-2 rounded-lg whitespace-nowrap transition-all duration-200"
            :class="activeCategory === cat
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 animate-pop'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </div>

    <!-- 文章列表 -->
    <div class="mx-auto px-6 py-12 max-w-5xl">
      <!-- 加载中 -->
      <div v-if="loading" class="py-24 text-center">
        <div class="mx-auto mb-4 border-4 border-blue-200 border-t-blue-600 rounded-full h-12 w-12 animate-spin" />
        <p class="text-gray-400">
          {{ messages.blogPage.loading }}
        </p>
      </div>

      <!-- 加载失败 -->
      <div v-else-if="errorMessage" class="py-24 text-center">
        <div class="mx-auto mb-6 rounded-full bg-red-50 flex h-20 w-20 items-center justify-center">
          <span class="i-carbon-warning text-4xl text-red-400" />
        </div>
        <h3 class="text-xl text-gray-700 font-bold mb-2">
          {{ messages.blogPage.loadFailedTitle }}
        </h3>
        <p class="text-gray-400 mb-6">
          {{ errorMessage }}
        </p>
        <button
          class="text-sm text-white font-medium px-6 py-2 rounded-lg bg-blue-600 transition-colors hover:bg-blue-700"
          @click="refreshPosts"
        >
          {{ messages.common.retry }}
        </button>
      </div>

      <!-- 文章列表 -->
      <div v-else-if="filteredPosts.length > 0" class="divide-gray-100 divide-y">
        <article
          v-for="(post, index) in filteredPosts"
          :key="post.id"
          class="group shine-on-hover py-8"
        >
          <div class="flex flex-col gap-8 sm:flex-row">
            <!-- 左侧封面图 -->
            <NuxtLink :to="localePath(`/blog/${post.id}`)" class="group/image rounded-xl bg-gray-50 shrink-0 cursor-pointer relative overflow-hidden sm:h-36 sm:w-56">
              <img
                v-if="post.coverImage"
                :src="post.coverImage"
                :alt="post.title"
                class="h-48 w-full transition-transform duration-700 object-cover sm:h-full group-hover/image:scale-105"
              >
              <div
                v-else
                class="flex h-48 w-full transition-transform duration-700 items-center justify-center bg-gradient-to-br sm:h-full group-hover/image:scale-105"
                :class="getCoverColor(index)"
              >
                <span class="i-carbon-document text-5xl text-gray-300 block" />
              </div>
              <div class="bg-black/0 transition-colors inset-0 absolute group-hover/image:bg-black/5" />
            </NuxtLink>

            <!-- 右侧内容区 -->
            <div class="flex-1 min-w-0">
              <!-- Meta行 -->
              <div class="mb-3 flex gap-3 items-center">
                <span
                  class="text-xs font-medium px-2.5 py-0.5 rounded-md inline-block"
                  :class="getCategoryColor(post.category)"
                >
                  {{ getCategoryLabel(post.category) }}
                </span>
                <span class="text-sm text-gray-400 flex gap-1.5 items-center">
                  <span class="i-carbon-calendar text-xs" />
                  {{ post.date }}
                </span>
                <span v-if="post.author" class="text-sm text-gray-400 flex gap-1.5 items-center">
                  <span class="i-carbon-user-avatar text-xs" />
                  {{ post.author }}
                </span>
              </div>

              <!-- 标题 -->
              <h2 class="text-xl text-gray-900 leading-snug font-bold mb-3 md:text-2xl">
                <NuxtLink :to="localePath(`/blog/${post.id}`)" class="transition-colors duration-200 hover:text-blue-600">
                  {{ post.title }}
                </NuxtLink>
              </h2>

              <!-- 摘要 -->
              <p class="text-gray-500 leading-relaxed mb-4 line-clamp-2">
                {{ post.description }}
              </p>

              <!-- 底部：标签 + 阅读更多 -->
              <div class="flex items-center justify-between">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in (post.tags || []).slice(0, 3)"
                    :key="tag"
                    class="text-xs text-gray-500 px-2.5 py-1 border border-gray-100 rounded-md bg-gray-50 cursor-default transition-colors hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50"
                  >
                    #{{ tag }}
                  </span>
                </div>
                <NuxtLink
                  :to="localePath(`/blog/${post.id}`)"
                  class="text-sm text-blue-600 font-semibold opacity-0 flex shrink-0 gap-1.5 transition-all duration-200 items-center group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                >
                  {{ messages.blogPage.readFull }}
                  <span class="i-carbon-arrow-right text-sm transition-transform group-hover:translate-x-1" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- 空状态 -->
      <div v-else class="py-24 text-center">
        <div class="mx-auto mb-6 rounded-full bg-gray-50 flex h-20 w-20 items-center justify-center">
          <span class="i-carbon-document-unknown text-4xl text-gray-300" />
        </div>
        <h3 class="text-xl text-gray-700 font-bold mb-2">
          {{ messages.blogPage.emptyTitle }}
        </h3>
        <p class="text-gray-400 mb-6">
          {{ messages.blogPage.emptyDescription }}
        </p>
        <button
          class="text-sm text-white font-medium px-6 py-2 rounded-lg bg-blue-600 transition-colors hover:bg-blue-700"
          @click="activeCategory = messages.blogPage.allCategory"
        >
          {{ messages.blogPage.viewAll }}
        </button>
      </div>
    </div>
  </div>
</template>
