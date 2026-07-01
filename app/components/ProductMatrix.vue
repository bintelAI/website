<script setup lang="ts">
const localePath = useLocalePath()
const { messages } = useLocale()
const productMatrix = computed(() => messages.value.data.productMatrix)
const dimensBadges = computed(() => messages.value.home.dimensBadges)
</script>

<template>
  <section class="py-24 bg-gray-50/50">
    <div class="mx-auto px-6 container">
      <Reveal>
        <SectionTitle
          :title="messages.home.productMatrixTitle"
          :subtitle="messages.home.productMatrixSubtitle"
          centered
        />
      </Reveal>

      <!-- Bento Grid Layout -->
      <div class="gap-6 grid auto-rows-[180px] grid-cols-1 md:grid-cols-4">
        <!-- 1. Dimens 旗舰卡片 - col-span-2 row-span-2 -->
        <div class="group col-span-1 row-span-2 md:col-span-2">
          <Reveal width="100%" variant="scale" class="h-full">
            <NuxtLink
              :to="localePath(productMatrix[0]?.link ?? '/product/dimens')"
              class="shine-on-hover text-white p-8 border border-slate-800 rounded-3xl bg-[#0F172A] flex flex-col h-full w-full block cursor-pointer shadow-xl transition-all duration-500 justify-between relative overflow-hidden hover:shadow-2xl hover:-translate-y-1"
            >
              <!-- Animated Gradient Glow -->
              <div class="pointer-events-none inset-0 absolute">
                <div class="animate-glow-pulse rounded-full h-[400px] w-[400px] right-[-20%] top-[-20%] absolute from-blue-500/20 to-purple-500/20 bg-gradient-to-br blur-[80px]" />
                <div class="h-1/2 w-full bottom-0 left-0 absolute z-10 from-black/80 to-transparent bg-gradient-to-t" />
              </div>

              <!-- Floating Icon -->
              <div class="opacity-30 transition-all duration-500 right-6 top-6 absolute group-hover:opacity-100 group-hover:scale-110">
                <span class="i-carbon-ai-launch animate-float text-[140px] text-blue-300 block" />
              </div>

              <div class="relative z-20">
                <div class="text-xs text-blue-300 font-bold mb-4 px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/20 inline-flex gap-2 items-center backdrop-blur-md">
                  <span class="i-carbon-star-filled text-xs" /> {{ messages.home.flagship }}
                </div>
                <h3 class="text-3xl font-bold mb-2 transition-colors group-hover:text-blue-200">
                  {{ productMatrix[0]?.title }}
                </h3>
                <p class="text-sm text-slate-400 leading-relaxed max-w-xs">
                  {{ productMatrix[0]?.description }}
                </p>
              </div>

              <!-- Capability Badges -->
              <div class="mt-3 flex flex-wrap gap-2 relative z-20">
                <span
                  v-for="(badge, i) in dimensBadges"
                  :key="badge"
                  class="animate-pop text-xs text-slate-300 px-2.5 py-1 border border-white/10 rounded-full bg-white/10"
                  :style="{ animationDelay: `${i * 0.05}s` }"
                >{{ badge }}</span>
              </div>

              <!-- CTA -->
              <div class="text-sm text-blue-400 font-semibold mt-4 flex gap-2 transition-colors items-center relative z-20 group-hover:text-white">
                <span class="rounded-full bg-white/10 flex h-8 w-8 transition-colors items-center justify-center group-hover:bg-blue-600">
                  <span class="i-carbon-arrow-right text-sm" />
                </span>
                <span>{{ messages.home.learnDimens }}</span>
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 2. 智能画布系统 (col-span-2 row-span-1) -->
        <div class="col-span-1 row-span-1 md:col-span-2">
          <Reveal width="100%" :delay="0.1" class="h-full">
            <NuxtLink
              :to="localePath(productMatrix[1]?.link ?? '/products#canvas')"
              class="group shine-on-hover p-6 border border-gray-200 rounded-3xl bg-white flex h-full block cursor-pointer shadow-sm transition-all duration-300 items-center justify-between relative overflow-hidden hover:border-blue-200 hover:shadow-lg"
            >
              <div class="opacity-0 h-full w-32 transition-opacity right-0 top-0 absolute from-blue-50 to-transparent bg-gradient-to-l group-hover:opacity-100" />
              <div class="max-w-[60%] relative z-10">
                <div class="text-blue-600 mb-3 rounded-xl bg-blue-50 flex h-10 w-10 transition-transform items-center justify-center group-hover:scale-110">
                  <span class="i-carbon-dashboard text-xl" />
                </div>
                <h3 class="text-xl text-gray-900 font-bold mb-1">
                  {{ productMatrix[1]?.title }}
                </h3>
                <p class="text-xs text-gray-500 line-clamp-2">
                  {{ productMatrix[1]?.description }}
                </p>
              </div>
              <div class="border border-gray-100 rounded-lg bg-gray-50 flex h-16 w-24 shadow-inner transition-transform duration-500 items-center justify-center relative z-10 group-hover:translate-x-1 group-hover:rotate-3">
                <span class="i-carbon-dashboard text-2xl text-blue-300 opacity-50 block" />
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 3. 多维表格 (col-span-1 row-span-1) -->
        <div class="col-span-1 row-span-1 md:col-span-1">
          <Reveal width="100%" :delay="0.2" variant="scale" class="h-full">
            <NuxtLink
              :to="localePath(productMatrix[2]?.link ?? '/products#base')"
              class="group shine-on-hover p-6 border border-gray-200 rounded-3xl bg-white flex flex-col h-full block cursor-pointer shadow-sm transition-all duration-300 justify-between relative overflow-hidden hover:border-green-200 hover:shadow-lg"
            >
              <div class="text-green-600 rounded-xl bg-green-50 flex h-10 w-10 transition-transform duration-500 items-center justify-center group-hover:rotate-6 group-hover:scale-110">
                <span class="i-carbon-table text-xl" />
              </div>
              <div>
                <h3 class="text-gray-900 font-bold mb-1">
                  {{ productMatrix[2]?.title }}
                </h3>
                <p class="text-xs text-gray-500">
                  {{ productMatrix[2]?.description }}
                </p>
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 4. APIsql 引擎 (col-span-1 row-span-1) -->
        <div class="col-span-1 row-span-1 md:col-span-1">
          <Reveal width="100%" :delay="0.3" variant="scale" class="h-full">
            <NuxtLink
              :to="localePath(productMatrix[3]?.link ?? '/products#apisql')"
              class="group shine-on-hover p-6 border border-gray-200 rounded-3xl bg-white flex flex-col h-full block cursor-pointer shadow-sm transition-all duration-300 justify-between relative overflow-hidden hover:border-purple-200 hover:shadow-lg"
            >
              <div class="text-purple-600 rounded-xl bg-purple-50 flex h-10 w-10 transition-transform duration-500 items-center justify-center group-hover:rotate-6 group-hover:scale-110">
                <span class="i-carbon-code text-xl" />
              </div>
              <div>
                <h3 class="text-gray-900 font-bold mb-1">
                  {{ productMatrix[3]?.title }}
                </h3>
                <p class="text-xs text-gray-500">
                  {{ productMatrix[3]?.description }}
                </p>
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 5. 数字化大屏 (col-span-1 row-span-1) -->
        <div class="col-span-1 row-span-1 md:col-span-1">
          <Reveal width="100%" :delay="0.35" variant="scale" class="h-full">
            <NuxtLink
              :to="localePath(productMatrix[4]?.link ?? '/products#screen')"
              class="group shine-on-hover p-6 border border-gray-200 rounded-3xl bg-white flex flex-col h-full block cursor-pointer shadow-sm transition-all duration-300 justify-between relative overflow-hidden hover:border-orange-200 hover:shadow-lg"
            >
              <div class="text-orange-600 rounded-xl bg-orange-50 flex h-10 w-10 transition-transform duration-500 items-center justify-center group-hover:rotate-6 group-hover:scale-110">
                <span class="i-carbon-screen text-xl" />
              </div>
              <div>
                <h3 class="text-gray-900 font-bold mb-1">
                  {{ productMatrix[4]?.title }}
                </h3>
                <p class="text-xs text-gray-500">
                  {{ productMatrix[4]?.description }}
                </p>
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 6. Appthen 低代码 (col-span-2 row-span-1) -->
        <div class="col-span-1 row-span-1 md:col-span-2">
          <Reveal width="100%" :delay="0.4" class="h-full">
            <NuxtLink
              :to="localePath(productMatrix[5]?.link ?? '/products#appthen')"
              class="group shine-on-hover text-white p-6 rounded-3xl flex h-full block cursor-pointer shadow-md transition-all duration-300 items-center justify-between relative overflow-hidden from-indigo-600 to-violet-600 bg-gradient-to-r hover:shadow-xl"
            >
              <div class="max-w-[65%] relative z-10">
                <div class="mb-2 flex gap-2 items-center">
                  <div class="rounded-lg bg-white/20 flex h-8 w-8 items-center justify-center backdrop-blur-sm">
                    <span class="i-carbon-development text-base" />
                  </div>
                  <span class="text-xs font-bold px-2 py-0.5 border border-white/20 rounded-full bg-white/10">{{ messages.home.newBadge }}</span>
                </div>
                <h3 class="text-xl font-bold mb-1">
                  {{ productMatrix[5]?.title }}
                </h3>
                <p class="text-xs text-indigo-100 line-clamp-2">
                  {{ productMatrix[5]?.description }}
                </p>
              </div>
              <div class="p-3 border border-white/10 rounded-xl bg-white/10 transition-transform duration-500 relative z-10 group-hover:rotate-6 group-hover:scale-105">
                <span class="i-carbon-code text-2xl text-indigo-100 block" />
              </div>
            </NuxtLink>
          </Reveal>
        </div>

        <!-- 7. 品牌与营销矩阵 (col-span-2 row-span-1) -->
        <div class="col-span-1 row-span-1 md:col-span-2">
          <Reveal width="100%" :delay="0.45" class="h-full">
            <NuxtLink
              :to="localePath(productMatrix[6]?.link ?? '/products#marketing')"
              class="group shine-on-hover p-6 border border-gray-200 rounded-3xl bg-white flex h-full block cursor-pointer shadow-sm transition-all duration-300 items-center justify-between relative overflow-hidden hover:border-pink-200 hover:shadow-lg"
            >
              <div class="rounded-tl-full opacity-50 h-32 w-32 transition-opacity bottom-0 right-0 absolute from-pink-50 to-transparent bg-gradient-to-tl group-hover:opacity-100" />
              <div class="max-w-[70%] relative z-10">
                <div class="text-pink-600 mb-3 rounded-xl bg-pink-50 flex h-10 w-10 transition-transform items-center justify-center group-hover:rotate-12">
                  <span class="i-carbon-bring-forward text-xl" />
                </div>
                <h3 class="text-xl text-gray-900 font-bold mb-1">
                  {{ productMatrix[6]?.title }}
                </h3>
                <p class="text-xs text-gray-500 line-clamp-2">
                  {{ productMatrix[6]?.description }}
                </p>
              </div>
              <div class="relative z-10">
                <div class="border-2 border-pink-100 rounded-full flex h-12 w-12 transition-colors items-center justify-center group-hover:border-pink-200 group-hover:bg-pink-50">
                  <span class="i-carbon-arrow-up-right text-xl text-pink-400 block transition-transform duration-500 group-hover:text-pink-600 group-hover:rotate-45" />
                </div>
              </div>
            </NuxtLink>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.08);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 4s ease-in-out infinite;
}
</style>
