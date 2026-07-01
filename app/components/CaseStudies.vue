<script setup lang="ts">
const localePath = useLocalePath()
const { messages } = useLocale()
const caseStudies = computed(() => messages.value.data.cases)
</script>

<template>
  <section class="text-white py-24 bg-slate-900 relative overflow-hidden">
    <div class="mx-auto px-6 container relative z-10">
      <Reveal>
        <div class="mb-16 flex flex-col gap-6 items-start justify-between md:flex-row md:items-end">
          <div>
            <h2 class="animate-text-shimmer text-3xl text-transparent font-bold mb-4 from-white to-white via-blue-400 bg-gradient-to-r bg-clip-text md:text-4xl">
              {{ messages.casesPage.title }}
            </h2>
            <p class="text-slate-400 max-w-2xl">
              {{ messages.casesPage.description }}
            </p>
          </div>
          <NuxtLink
            :to="localePath('/cases')"
            class="shine-on-hover text-sm text-white font-medium px-6 py-3 border border-blue-500/50 rounded-lg inline-flex gap-2 shadow-blue-900/30 shadow-xl transition-all duration-300 items-center relative overflow-hidden from-blue-600 to-indigo-600 bg-gradient-to-r hover:-translate-y-1"
          >
            {{ messages.casesPage.viewAll }}
            <span class="i-carbon-arrow-right text-sm" />
          </NuxtLink>
        </div>
      </Reveal>

      <div class="gap-6 grid lg:grid-cols-4 md:grid-cols-2">
        <div
          v-for="(item, index) in caseStudies"
          :key="item.title"
        >
          <Reveal :delay="index * 0.1" variant="scale">
            <div class="group shine-on-hover p-6 border border-slate-700/50 rounded-2xl h-full cursor-pointer transition-all duration-500 relative overflow-hidden from-slate-800/80 to-slate-900/80 bg-gradient-to-br backdrop-blur-sm hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2">
              <!-- Background effects -->
              <div class="opacity-0 transition-opacity duration-500 inset-0 absolute from-blue-600/10 to-purple-600/10 bg-gradient-to-br group-hover:opacity-100" />
              <div class="case-glow rounded-full bg-blue-500/20 h-40 w-40 absolute blur-3xl -right-20 -top-20" />

              <div class="relative z-10">
                <div class="mb-6 flex items-center justify-between">
                  <div class="rounded-xl bg-slate-700/80 flex h-12 w-12 transition-all duration-500 items-center justify-center group-hover:text-blue-400 group-hover:bg-blue-600/30 group-hover:rotate-6">
                    <span class="text-2xl" :class="[item.icon]" />
                  </div>
                  <div class="text-sm text-green-400 font-bold px-3 py-1.5 border border-green-400/30 rounded-full bg-green-400/15 transition-transform duration-300 group-hover:scale-110">
                    {{ item.metric }}
                  </div>
                </div>
                <h4 class="text-lg font-bold mb-2 transition-colors group-hover:text-blue-300">
                  {{ item.title }}
                </h4>
                <div class="text-xs text-slate-500 tracking-wider font-bold mb-3 uppercase">
                  {{ item.company }}
                </div>
                <p class="text-sm text-slate-400 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 案例卡片背景光晕：默认隐藏，hover 时呼吸（复用全局 breathe 关键帧） */
.case-glow {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.group:hover .case-glow {
  animation: breathe 2.4s ease-in-out infinite;
}
</style>
