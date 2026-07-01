<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const localePath = useLocalePath()
const { locale, messages } = useLocale()
const id = computed(() => route.params.id as string)

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
  body: string
  date: string
  category: string
  coverImage?: string
  author: string
  tags: string[]
}

const { data: postData, pending: loading, error } = await useFetch<any>(() => `/api/dimens/news/${id.value}`, {
  method: 'GET',
})

function getTypeLabel(d: Record<string, any>) {
  const typeId = d[FIELD_TYPE]
  return typeId ? (TYPE_OPTION_LABELS[typeId] || typeId) : ''
}

function mapRow(row: any): BlogPost {
  const d = row.data || {}
  const coverArr = d[FIELD_COVER]
  // included.richText.fld_qwXKLQOo2B1S.text 是 HTML 字符串
  const htmlBody = row.included?.richText?.[FIELD_DESC]?.text || ''
  return {
    id: row.rowId,
    title: d[FIELD_TITLE] || '',
    body: htmlBody,
    date: d[FIELD_PUBLISH_DATE] || (row.createTime || '').split(' ')[0],
    category: getTypeLabel(d),
    coverImage: Array.isArray(coverArr) && coverArr.length > 0 ? coverArr[0].url : undefined,
    author: '',
    tags: d[FIELD_TAGS] ? d[FIELD_TAGS].split(',').map((t: string) => t.trim()) : [],
  }
}

const post = computed(() => {
  const rowData = postData.value?.data
  return rowData ? mapRow(rowData) : null
})

const errorMessage = computed(() => {
  if (error.value)
    return messages.value.blogPage.detailError
  if (!loading.value && !post.value)
    return messages.value.blogPage.notFound
  return ''
})

useSeo({
  title: computed(() => post.value?.title || messages.value.blogPage.seoTitle),
  description: computed(() => post.value?.title || messages.value.blogPage.seoDescription),
  keywords: computed(() => post.value?.tags?.length ? post.value.tags : messages.value.blogPage.seoKeywords),
  ogImage: computed(() => post.value?.coverImage || undefined),
  locale: locale.value,
  siteName: messages.value.common.siteName,
})

const categoryColorPalette = [
  'bg-blue-100 text-blue-700',
  'bg-emerald-100 text-emerald-700',
  'bg-purple-100 text-purple-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
  'bg-gray-100 text-gray-700',
]
const fallbackCategoryColor = categoryColorPalette[0]!

const categoryColorCache: Record<string, string> = {}

function getCategoryStyle(category: string) {
  if (!categoryColorCache[category]) {
    const idx = Object.keys(categoryColorCache).length
    categoryColorCache[category] = categoryColorPalette[idx % categoryColorPalette.length] || fallbackCategoryColor
  }
  return categoryColorCache[category] || fallbackCategoryColor
}

const coverColorList = [
  'from-blue-500 to-indigo-600',
  'from-teal-400 to-cyan-500',
  'from-purple-500 to-pink-500',
]

function getCoverColor() {
  return coverColorList[Math.floor(Math.random() * coverColorList.length)] || coverColorList[0]
}

function getCategoryLabel(category: string) {
  return messages.value.blogPage.categories[category] || category || messages.value.blogPage.uncategorized
}

</script>

<template>
  <div class="bg-white min-h-screen">
    <div class="mx-auto px-6 pb-20 pt-24 max-w-4xl">
      <!-- 加载中 -->
      <div v-if="loading" class="py-20 text-center">
        <div class="mx-auto mb-4 border-4 border-blue-200 border-t-blue-600 rounded-full h-12 w-12 animate-spin" />
        <p class="text-gray-400">
          {{ messages.blogPage.loading }}
        </p>
      </div>

      <!-- 加载失败 -->
      <div v-else-if="errorMessage" class="py-20 text-center">
        <div class="mx-auto mb-6 rounded-full bg-red-50 flex h-20 w-20 items-center justify-center">
          <span class="i-carbon-warning text-4xl text-red-400" />
        </div>
        <h1 class="text-2xl text-gray-900 font-bold mb-2">
          {{ messages.blogPage.loadFailedTitle }}
        </h1>
        <p class="text-gray-500 mb-8">
          {{ errorMessage }}
        </p>
        <NuxtLink
          :to="localePath('/blog')"
          class="text-white font-medium px-6 py-3 rounded-lg bg-blue-600 inline-flex gap-2 transition-colors items-center hover:bg-blue-700"
        >
          <span class="i-carbon-arrow-left" />
          {{ messages.blogPage.backToList }}
        </NuxtLink>
      </div>

      <!-- 文章内容 -->
      <template v-else-if="post">
        <!-- 返回按钮 -->
        <NuxtLink
          :to="localePath('/blog')"
          class="group text-gray-500 mb-8 inline-flex transition-colors items-center hover:text-blue-600"
        >
          <div class="mr-2 rounded-full bg-gray-100 flex h-8 w-8 transition-colors items-center justify-center group-hover:bg-blue-100">
            <span class="i-carbon-arrow-left" />
          </div>
          {{ messages.blogPage.backToList }}
        </NuxtLink>

        <article>
          <!-- 头部 -->
          <div class="mb-10 text-center">
            <span
              class="text-sm font-bold mb-6 px-3 py-1 rounded-full inline-block"
              :class="getCategoryStyle(post.category)"
            >
              {{ getCategoryLabel(post.category) }}
            </span>
            <h1 class="text-3xl text-gray-900 leading-tight font-bold mb-6 md:text-5xl">
              {{ post.title }}
            </h1>

            <div class="text-sm text-gray-500 flex flex-wrap gap-6 items-center justify-center">
              <div class="flex gap-2 items-center">
                <div class="rounded-full bg-gray-200 flex h-8 w-8 items-center justify-center">
                  <span class="i-carbon-user-avatar" />
                </div>
                <span>{{ post.author || messages.blogPage.authorFallback }}</span>
              </div>
              <div class="flex gap-2 items-center">
                <span class="i-carbon-calendar" />
                <span>{{ post.date }}</span>
              </div>
              <button class="flex gap-2 transition-colors items-center hover:text-blue-600">
                <span class="i-carbon-share" />
                {{ messages.blogPage.share }}
              </button>
            </div>
          </div>

          <!-- 封面 -->
          <div
            v-if="post.coverImage"
            class="mb-12 rounded-2xl h-64 shadow-xl overflow-hidden md:h-80"
          >
            <img
              :src="post.coverImage"
              :alt="post.title"
              class="h-full w-full object-cover"
            >
          </div>
          <div
            v-else
            class="mb-12 rounded-2xl h-64 shadow-xl overflow-hidden bg-gradient-to-br md:h-80"
            :class="getCoverColor()"
          />

          <!-- 正文 HTML 富文本 -->
          <div
            class="article-content mb-12 max-w-none prose prose-lg"
            v-html="post.body"
          />

          <!-- 标签 & 底部 -->
          <div class="mt-12 pt-8 border-t border-gray-100">
            <div class="mb-8 flex flex-wrap gap-2">
              <span
                v-for="tag in (post.tags || [])"
                :key="tag"
                class="text-sm text-gray-600 px-3 py-1 rounded bg-gray-100 cursor-pointer transition-colors hover:bg-gray-200"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- 订阅区域 -->
            <div class="p-8 rounded-xl bg-gray-50 flex flex-col gap-6 items-center justify-between md:flex-row">
              <div>
                <h4 class="text-lg text-gray-900 font-bold mb-2">
                  {{ messages.blogPage.subscribeTitle }}
                </h4>
                <p class="text-gray-500">
                  {{ messages.blogPage.subscribeDesc }}
                </p>
              </div>
              <div class="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  :placeholder="messages.blogPage.emailPlaceholder"
                  class="px-4 py-2 outline-none border border-gray-200 rounded-lg flex-grow transition-all focus:border-blue-500 md:w-56"
                >
                <button class="text-white font-medium px-6 py-2 rounded-lg bg-blue-600 whitespace-nowrap transition-colors hover:bg-blue-700">
                  {{ messages.blogPage.subscribe }}
                </button>
              </div>
            </div>
          </div>
        </article>
      </template>
    </div>
  </div>
</template>

<style scoped>
.article-content {
  color: #374151;
  line-height: 1.75;
}
.article-content :deep(p) {
  margin-bottom: 1.25em;
  line-height: 1.75;
}
.article-content :deep(h1),
.article-content :deep(h2),
.article-content :deep(h3),
.article-content :deep(h4) {
  font-weight: 700;
  color: #111827;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3;
}
.article-content :deep(h2) {
  font-size: 1.5em;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5em;
}
.article-content :deep(h3) {
  font-size: 1.25em;
}
.article-content :deep(ul),
.article-content :deep(ol) {
  padding-left: 1.5em;
  margin-bottom: 1.25em;
}
.article-content :deep(li) {
  margin-bottom: 0.5em;
}
.article-content :deep(strong),
.article-content :deep(b) {
  font-weight: 700;
  color: #111827;
}
.article-content :deep(img) {
  border-radius: 0.75rem;
  margin: 1.5em auto;
  max-width: 100%;
  height: auto;
}
.article-content :deep(blockquote) {
  border-left: 4px solid #3b82f6;
  padding-left: 1em;
  margin: 1.5em 0;
  color: #6b7280;
  background: #f9fafb;
  padding: 1em 1em 1em 1.5em;
  border-radius: 0 0.5em 0.5em 0;
}
.article-content :deep(code) {
  background: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 0.25em;
  font-size: 0.875em;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
.article-content :deep(pre) {
  background: #1f2937;
  color: #e5e7eb;
  padding: 1.25em;
  border-radius: 0.75em;
  overflow-x: auto;
  margin: 1.5em 0;
}
.article-content :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
}
.article-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
  font-size: 0.95em;
}
.article-content :deep(th),
.article-content :deep(td) {
  border: 1px solid #e5e7eb;
  padding: 0.75em 1em;
  text-align: left;
}
.article-content :deep(th) {
  background: #f9fafb;
  font-weight: 600;
  color: #111827;
}
.article-content :deep(tr:nth-child(even)) {
  background: #f9fafb;
}
.article-content :deep(a) {
  color: #2563eb;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.article-content :deep(a:hover) {
  color: #1d4ed8;
}
.article-content :deep(hr) {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 2em 0;
}
</style>
