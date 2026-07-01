<script setup lang="ts">
const localePath = useLocalePath()
const { messages } = useLocale()
const dimensFeatures = computed(() => messages.value.home.features)
</script>

<template>
  <section class="text-white pb-24 pt-32 bg-[#0B1120] flex min-h-[90vh] items-center relative overflow-hidden md:pb-32 md:pt-48">
    <!-- Animated Background Elements -->
    <div class="pointer-events-none inset-0 absolute z-0">
      <div class="animate-float rounded-full bg-blue-600/20 h-[800px] w-[800px] left-[-10%] top-[-10%] absolute blur-[120px]" />
      <div class="animate-float-soft rounded-full bg-purple-600/20 h-[600px] w-[600px] bottom-[-10%] right-[-10%] absolute blur-[100px]" style="animation-delay: 1.5s" />
      <div class="animate-breathe rounded-full bg-cyan-500/10 h-[300px] w-[300px] left-[60%] top-[40%] absolute blur-[80px]" />
      <div class="bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] inset-0 absolute" />
    </div>

    <div class="mx-auto px-6 container relative z-10">
      <div class="flex flex-col gap-12 items-center lg:flex-row">
        <!-- Left Text Content -->
        <div class="text-left lg:w-1/2">
          <Reveal direction="down" :delay="0.1">
            <div class="animate-breathe text-sm text-emerald-300 font-medium mb-8 px-4 py-2 border border-emerald-500/20 rounded-full bg-emerald-500/10 inline-flex gap-2 cursor-pointer transition-colors items-center backdrop-blur-sm hover:bg-emerald-500/20">
              <span class="flex h-2 w-2 relative">
                <span class="rounded-full bg-emerald-400 opacity-75 inline-flex h-full w-full absolute animate-ping" />
                <span class="rounded-full bg-emerald-500 inline-flex h-2 w-2 relative" />
              </span>
              {{ messages.home.heroBadge }}
            </div>
          </Reveal>

          <Reveal :delay="0.2">
            <h1 class="text-5xl leading-[1.1] tracking-tight font-extrabold mb-6 md:text-7xl">
              <span class="animate-text-shimmer text-transparent from-blue-400 to-blue-400 via-cyan-400 via-purple-400 bg-gradient-to-r bg-clip-text">{{ messages.home.heroHeadline }}</span>
              <span class="text-slate-400"> | </span>
              {{ messages.common.brandShort }}
            </h1>
          </Reveal>

          <Reveal :delay="0.25">
            <h2 class="text-3xl leading-[1.2] tracking-tight font-bold mb-8 md:text-4xl">
              <span class="animate-text-shimmer text-transparent from-blue-400 to-purple-400 via-cyan-400 bg-gradient-to-r bg-clip-text">
                {{ messages.home.heroSubheadline }}
              </span>
            </h2>
          </Reveal>

          <Reveal :delay="0.3">
            <p class="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl md:text-xl">
              {{ messages.common.siteDescription }}
            </p>
          </Reveal>

          <Reveal :delay="0.4">
            <div class="flex flex-wrap gap-4">
              <div class="relative">
                <div class="animate-breathe rounded-lg bg-blue-500/30 pointer-events-none absolute blur-xl -inset-2" />
                <NuxtLink
                  :to="localePath('/product/dimens')"
                  class="shine-on-hover text-lg text-white font-medium px-8 py-4 rounded-lg bg-blue-600 inline-flex gap-2 shadow-blue-900/50 shadow-xl transition-all items-center relative hover:shadow-blue-600/50 hover:-translate-y-1"
                >
                  {{ messages.home.primaryCta }}
                  <span class="i-carbon-arrow-right text-xl" />
                </NuxtLink>
              </div>
              <NuxtLink
                :to="localePath('/contact')"
                class="group text-white font-medium px-8 py-4 border border-slate-700 rounded-lg inline-flex gap-2 transition-all items-center hover:border-slate-600 hover:bg-slate-800 hover:-translate-y-1"
              >
                <span class="i-carbon-play text-xl text-gray-400 transition-colors group-hover:text-white" />
                {{ messages.home.secondaryCta }}
              </NuxtLink>
            </div>
          </Reveal>

          <Reveal :delay="0.5">
            <div class="text-sm text-slate-500 mt-12 pt-8 border-t border-white/5 flex gap-6 items-center">
              <div class="flex -space-x-3">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="text-xs text-white border-2 border-[#0B1120] rounded-full bg-slate-700 flex h-10 w-10 cursor-pointer transition-transform duration-300 items-center justify-center relative z-0 overflow-hidden hover:scale-110 hover:z-10"
                >
                  <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=transparent`" alt="" class="rounded-full h-full w-full">
                </div>
                <div class="text-xs text-slate-300 font-medium border-2 border-[#0B1120] rounded-full bg-slate-800 flex h-10 w-10 items-center justify-center">
                  {{ messages.home.trustCount }}
                </div>
              </div>
              <div>
                <div class="text-base text-white font-bold">
                  {{ messages.home.trustCount }} {{ messages.home.trustTitle }}
                </div>
                <div class="text-yellow-500 mt-1 flex gap-0.5">
                  <span v-for="i in 5" :key="i" class="i-carbon-star-filled text-sm" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <!-- Right Feature Cards -->
        <div class="flex w-full items-center justify-center relative lg:w-1/2">
          <div class="mx-auto gap-4 grid grid-cols-1 max-w-xl w-full sm:grid-cols-2">
            <div
              v-for="(feature, index) in dimensFeatures"
              :key="feature.title"
              :class="index === dimensFeatures.length - 1 ? 'sm:col-span-2' : ''"
            >
              <Reveal variant="scale" :delay="0.6 + index * 0.05" width="100%">
                <div
                  class="group p-5 border border-white/10 rounded-xl bg-white/[0.03] transition-all duration-300 relative overflow-hidden backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-1"
                >
                  <!-- Card gradient glow on hover -->
                  <div
                    class="opacity-0 transition-opacity duration-500 absolute bg-gradient-to-r blur-xl group-hover:opacity-20 -inset-1" :class="[
                      feature.gradient,
                    ]"
                  />

                  <div
                    class="flex gap-4 items-start relative z-10" :class="[
                      index === dimensFeatures.length - 1 ? 'animate-float-soft' : '',
                    ]"
                  >
                    <div
                      class="text-xl rounded-xl flex shrink-0 h-12 w-12 transition-transform duration-500 items-center justify-center bg-gradient-to-br group-hover:rotate-6" :class="[
                        feature.gradient,
                      ]"
                    >
                      <span class="text-white" :class="[feature.icon]" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="text-base text-white font-semibold mb-1 transition-all group-hover:text-transparent group-hover:from-white group-hover:to-slate-300 group-hover:bg-gradient-to-r group-hover:bg-clip-text">
                        {{ feature.title }}
                      </h3>
                      <p class="text-sm text-slate-400 leading-relaxed">
                        {{ feature.desc }}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
