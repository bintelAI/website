<script setup lang="ts">
const localePath = useLocalePath()
const { messages } = useLocale()
const currentYear = new Date().getFullYear()
const productDetails = computed(() => messages.value.data.products)
</script>

<template>
  <footer class="text-slate-400 py-12 bg-[#0B1120] relative md:py-16">
    <div class="animate-gradient bg-[length:200%_100%] h-px left-0 right-0 top-0 absolute from-transparent to-transparent via-blue-500/30 bg-gradient-to-r" />
    <div class="mx-auto px-4 max-w-7xl lg:px-8 sm:px-6">
      <div class="gap-8 grid grid-cols-2 md:gap-12 lg:grid-cols-4 sm:grid-cols-2">
        <!-- 品牌介绍 -->
        <div class="col-span-2 lg:col-span-1 sm:col-span-2">
          <div class="group text-white mb-4 flex gap-2 items-center md:mb-6">
            <div class="text-white rounded-lg flex h-8 w-8 shadow-lg transition-transform duration-500 items-center justify-center from-blue-600 to-purple-600 bg-gradient-to-br group-hover:rotate-12">
              <span class="i-carbon-cube text-lg" />
            </div>
            <span class="text-lg font-bold">{{ messages.common.brandShort }}</span>
          </div>
          <p class="text-sm text-slate-500 leading-relaxed mb-4 md:mb-6">
            {{ messages.footer.intro }}
          </p>
        </div>

        <!-- 产品服务 -->
        <div>
          <h4 class="text-white font-bold mb-4 md:mb-6">
            {{ messages.footer.productServices }}
          </h4>
          <ul class="text-sm space-y-2 md:space-y-3">
            <li v-for="p in productDetails" :key="p.id">
              <NuxtLink
                :to="localePath(`/product/${p.id}`)"
                class="text-slate-400 no-underline transition-all duration-200 hover:text-blue-400 hover:translate-x-1"
              >
                {{ p.shortName || p.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 解决方案 -->
        <div>
          <h4 class="text-white font-bold mb-4 md:mb-6">
            {{ messages.footer.solutions }}
          </h4>
          <ul class="text-sm space-y-2 md:space-y-3">
            <li v-for="item in messages.footer.solutionLinks" :key="item">
              <NuxtLink :to="localePath('/solutions')" class="text-slate-400 no-underline transition-all duration-200 hover:text-blue-400 hover:translate-x-1">
                {{ item }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 关注公众号 -->
        <div class="col-span-2 sm:col-span-1">
          <h4 class="text-white font-bold mb-4 md:mb-6">
            {{ messages.footer.followWechat }}
          </h4>
          <p class="text-sm text-slate-500 mb-3 md:mb-4">
            {{ messages.footer.followWechatDesc }}
          </p>
          <div class="rounded-lg h-20 w-20 overflow-hidden md:h-24 md:w-24">
            <img src="/static/qode.jpg" :alt="messages.footer.qrAlt" class="h-full w-full object-cover">
          </div>
        </div>
      </div>

      <!-- 底部 -->
      <div class="text-sm text-slate-600 mt-10 pt-6 border-t border-slate-800 flex flex-col gap-4 items-center justify-between md:mt-16 md:pt-8 md:flex-row">
        <div class="text-center flex flex-col gap-2 items-center sm:flex-row sm:gap-4">
          <span>&copy; <span class="animate-breathe inline-block">{{ currentYear }}</span> {{ messages.common.brandShort }} Technology Co., Ltd. All rights reserved.</span>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-white"
          >赣ICP备17006950号-1</a>
        </div>
        <div class="flex gap-4 items-center">
          <NuxtLink :to="localePath('/privacy')" class="text-slate-600 no-underline transition-colors hover:text-white">
            {{ messages.footer.privacy }}
          </NuxtLink>
          <span class="bg-slate-700 h-3 w-px" />
          <NuxtLink :to="localePath('/terms')" class="text-slate-600 no-underline transition-colors hover:text-white">
            {{ messages.footer.terms }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
