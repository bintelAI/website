<script setup lang="ts">
import { blogPosts } from '~/constants'

const coverGradients = [
  'from-blue-400 to-cyan-500',
  'from-purple-400 to-pink-500',
  'from-amber-400 to-orange-500',
]
</script>

<template>
  <section class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <Reveal>
        <SectionTitle
          title="最新动态与洞察"
          subtitle="掌握行业前沿资讯，了解方块智联最新进展"
          centered
        />
      </Reveal>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(post, index) in blogPosts"
          :key="post.id"
        >
          <Reveal :delay="index * 0.1">
            <NuxtLink
              :to="post.link"
              class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full border border-gray-100 flex flex-col block"
            >
              <!-- Cover Image -->
              <div class="h-52 overflow-hidden relative">
                <img
                  v-if="post.coverImage"
                  :src="post.coverImage"
                  :alt="post.title"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  v-else
                  :class="['w-full h-full bg-gradient-to-br transform group-hover:scale-105 transition-transform duration-700', coverGradients[index]]"
                >
                  <div class="w-full h-full flex items-center justify-center">
                    <span class="i-carbon-document text-7xl text-white/40 block" />
                  </div>
                </div>
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm border border-gray-100">
                  {{ post.category }}
                </div>
              </div>
              <div class="p-8 flex-1 flex flex-col">
                <div class="text-xs text-gray-400 mb-3 font-medium">{{ post.date }}</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {{ post.title }}
                </h3>
                <p class="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                  {{ post.description }}
                </p>
                <div class="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span class="inline-flex items-center text-blue-600 font-semibold text-sm gap-1 group-hover:underline">
                    阅读更多
                    <span class="i-carbon-arrow-right text-sm" />
                  </span>
                  <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <span class="i-carbon-chevron-right text-sm block" />
                  </div>
                </div>
              </div>
            </NuxtLink>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>