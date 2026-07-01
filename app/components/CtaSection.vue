<script setup lang="ts">
const localePath = useLocalePath()
const { messages } = useLocale()
</script>

<template>
  <section class="py-20 bg-white">
    <div class="mx-auto px-6 container">
      <Reveal variant="scale" width="100%">
        <div class="animate-gradient text-white p-12 text-center rounded-[2.5rem] bg-[length:200%_200%] shadow-2xl shadow-blue-900/20 relative overflow-hidden from-blue-600 to-blue-600 via-indigo-600 via-purple-600 bg-gradient-to-r md:p-24">
          <!-- Decorative circles -->
          <div class="animate-spin-slow border border-white/10 rounded-full h-[300px] w-[300px] right-[-10%] top-[-20%] absolute" />
          <div class="animate-spin-reverse border border-white/10 rounded-full h-[400px] w-[400px] bottom-[-20%] left-[-10%] absolute" />
          <!-- Floating light dot -->
          <div class="animate-float rounded-full bg-white/50 h-3 w-3 pointer-events-none left-1/4 top-1/3 absolute blur-sm" />

          <div class="mx-auto max-w-3xl relative z-10">
            <h2 class="text-4xl tracking-tight font-bold mb-8 md:text-5xl">
              <span class="animate-text-shimmer text-transparent from-white to-white via-blue-200 bg-gradient-to-r bg-clip-text">
                {{ messages.home.ctaTitle }}
              </span>
            </h2>
            <p class="text-xl text-blue-100 leading-relaxed mb-10">
              {{ messages.home.ctaDescription }}
            </p>
            <div class="flex flex-col gap-4 justify-center sm:flex-row">
              <NuxtLink
                :to="localePath('/contact')"
                class="shine-on-hover text-lg text-blue-700 font-bold px-10 py-4 rounded-lg bg-white inline-flex gap-2 shadow-blue-900/20 shadow-lg transform transition-all items-center relative overflow-hidden hover:bg-gray-100 hover:scale-105"
              >
                {{ messages.home.ctaPrimary }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/contact')"
                class="group text-lg text-white font-medium px-10 py-4 border-2 border-white/30 rounded-lg bg-transparent inline-flex gap-2 transition-all items-center hover:bg-white/10"
              >
                <span class="i-carbon-chat text-xl transition-transform duration-300 group-hover:rotate-12" />
                {{ messages.home.ctaSecondary }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</template>
