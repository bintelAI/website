<script setup lang="ts">
import { productDetails } from '~/constants'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#0B1120] text-slate-400 py-12 md:py-16 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <!-- 品牌介绍 -->
        <div class="col-span-2 sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-2 mb-4 md:mb-6 text-white">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <span class="i-carbon-cube text-lg" />
            </div>
            <span class="font-bold text-lg">方块智联</span>
          </div>
          <p class="text-sm leading-relaxed mb-4 md:mb-6 text-slate-500">
            致力于构建新一代企业级数据智能基础设施，让每一次决策都充满智慧。
          </p>
        </div>

        <!-- 产品服务 -->
        <div>
          <h4 class="text-white font-bold mb-4 md:mb-6">产品服务</h4>
          <ul class="space-y-2 md:space-y-3 text-sm">
            <li v-for="p in productDetails" :key="p.id">
              <NuxtLink
                :to="`/product/${p.id}`"
                class="hover:text-blue-400 transition-colors text-slate-400 no-underline"
              >{{ p.shortName || p.title }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 解决方案 -->
        <div>
          <h4 class="text-white font-bold mb-4 md:mb-6">解决方案</h4>
          <ul class="space-y-2 md:space-y-3 text-sm">
            <li>
              <NuxtLink to="/solutions" class="hover:text-blue-400 transition-colors text-slate-400 no-underline">数据与知识管理</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/solutions" class="hover:text-blue-400 transition-colors text-slate-400 no-underline">智能营销</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/solutions" class="hover:text-blue-400 transition-colors text-slate-400 no-underline">智能运维</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 关注公众号 -->
        <div class="col-span-2 sm:col-span-1">
          <h4 class="text-white font-bold mb-4 md:mb-6">关注公众微信号</h4>
          <p class="text-sm mb-3 md:mb-4 text-slate-500">扫码关注「方块 AI」，获取最新资讯。</p>
          <div class="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden">
            <img src="/static/qode.jpg" alt="关注方块 AI" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- 底部 -->
      <div class="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center text-slate-600 gap-4">
        <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
          <span>&copy; {{ currentYear }} 方块智联 Technology Co., Ltd. All rights reserved.</span>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-white transition-colors"
          >赣ICP备17006950号-1</a>
        </div>
        <div class="flex gap-4 items-center">
          <NuxtLink to="/privacy" class="hover:text-white transition-colors text-slate-600 no-underline">隐私政策</NuxtLink>
          <span class="w-px h-3 bg-slate-700" />
          <NuxtLink to="/terms" class="hover:text-white transition-colors text-slate-600 no-underline">服务条款</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>