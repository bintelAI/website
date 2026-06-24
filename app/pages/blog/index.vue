<script setup lang="ts">
import { blogPosts } from '~/constants'

definePageMeta({ layout: 'default' })

const activeCategory = ref('全部')

const categories = computed(() => {
  const cats = blogPosts.map(p => p.category)
  return ['全部', ...Array.from(new Set(cats))]
})

const filteredPosts = computed(() => {
  if (activeCategory.value === '全部')
    return blogPosts
  return blogPosts.filter(p => p.category === activeCategory.value)
})

const coverColors = [
  'from-blue-500/20 to-indigo-500/20',
  'from-teal-400/20 to-cyan-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-orange-500/20 to-red-500/20',
]

function getCoverColor(index: number) {
  return coverColors[index % coverColors.length]
}

const categoryColors: Record<string, string> = {
  '全部': 'bg-blue-600 text-white',
  '产品动态': 'bg-blue-50 text-blue-700 border border-blue-200',
  '行业应用': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  '技术洞察': 'bg-purple-50 text-purple-700 border border-purple-200',
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero标题区 -->
    <div class="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm mb-6 backdrop-blur border border-white/10">
          <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          方块智联 · 技术博客
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          最新动态与洞察
        </h1>
        <p class="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
          掌握行业前沿资讯，了解方块智联最新技术进展与产品动态
        </p>
      </div>
    </div>

    <!-- 分类筛选 -->
    <div class="border-b border-gray-100 bg-white sticky top-16 z-20">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex gap-2 py-4 overflow-x-auto scrollbar-none">
          <button
            v-for="cat in categories"
            :key="cat"
            class="px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200"
            :class="activeCategory === cat
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </div>

    <!-- 文章列表 -->
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div v-if="filteredPosts.length > 0" class="divide-y divide-gray-100">
        <article
          v-for="(post, index) in filteredPosts"
          :key="post.id"
          class="py-8 first:pt-0 last:pb-0 group"
        >
          <div class="flex flex-col sm:flex-row gap-8">
            <!-- 左侧封面图 -->
            <NuxtLink :to="`/blog/${post.id}`" class="sm:w-56 sm:h-36 shrink-0 overflow-hidden rounded-xl bg-gray-50 relative group/image cursor-pointer">
              <img
                v-if="post.coverImage"
                :src="post.coverImage"
                :alt="post.title"
                class="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
              >
              <div
                v-else
                class="w-full h-48 sm:h-full bg-gradient-to-br flex items-center justify-center transition-transform duration-500 group-hover/image:scale-105"
                :class="getCoverColor(index)"
              >
                <span class="i-carbon-document text-5xl text-gray-300 block" />
              </div>
              <div class="absolute inset-0 bg-black/0 group-hover/image:bg-black/5 transition-colors" />
            </NuxtLink>

            <!-- 右侧内容区 -->
            <div class="flex-1 min-w-0">
              <!-- Meta行 -->
              <div class="flex items-center gap-3 mb-3">
                <span
                  class="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium"
                  :class="categoryColors[post.category] || 'bg-gray-100 text-gray-600'"
                >
                  {{ post.category }}
                </span>
                <span class="text-sm text-gray-400 flex items-center gap-1.5">
                  <span class="i-carbon-calendar text-xs" />
                  {{ post.date }}
                </span>
                <span v-if="post.author" class="text-sm text-gray-400 flex items-center gap-1.5">
                  <span class="i-carbon-user-avatar text-xs" />
                  {{ post.author }}
                </span>
              </div>

              <!-- 标题 -->
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                <NuxtLink :to="`/blog/${post.id}`" class="hover:text-blue-600 transition-colors duration-200">
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
                    class="text-xs bg-gray-50 text-gray-500 px-2.5 py-1 rounded-md border border-gray-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors cursor-default"
                  >
                    #{{ tag }}
                  </span>
                </div>
                <NuxtLink
                  :to="`/blog/${post.id}`"
                  class="text-blue-600 text-sm font-semibold flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                >
                  阅读全文
                  <span class="i-carbon-arrow-right text-sm" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- 空状态 -->
      <div v-else class="text-center py-24">
        <div class="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <span class="i-carbon-document-unknown text-4xl text-gray-300" />
        </div>
        <h3 class="text-xl font-bold text-gray-700 mb-2">暂无相关文章</h3>
        <p class="text-gray-400 mb-6">该分类下还没有文章，换个分类看看吧</p>
        <button
          class="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          @click="activeCategory = '全部'"
        >
          查看全部文章
        </button>
      </div>
    </div>
  </div>
</template>