<script setup lang="ts">
</script>

<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <Reveal direction="up" width="100%">
        <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20 group">
          <!-- Decorative circles -->
          <div class="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] border border-white/10 rounded-full" />
          <div class="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] border border-white/10 rounded-full" />

          <div class="relative z-10 max-w-3xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold mb-8 tracking-tight">准备好革新您的业务了吗？</h2>
            <p class="text-blue-100 text-xl mb-10 leading-relaxed">
              加入方块智联，与我们一起探索 AI 时代的无限可能。现在注册，即可获得 14 天高级版免费试用。
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-2 px-10 py-4 rounded-lg text-lg font-bold bg-white text-blue-700 hover:bg-gray-100 shadow-lg shadow-blue-900/20 hover:scale-105 transform transition-all"
              >
                免费开始试用
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-2 px-10 py-4 rounded-lg text-lg font-medium bg-transparent text-white border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                <span class="i-carbon-chat text-xl" />
                联系销售团队
              </NuxtLink>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</template>