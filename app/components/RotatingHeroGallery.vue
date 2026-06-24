<script setup lang="ts">
const cards = [
  { title: 'AI报表', icon: 'i-carbon-chart-bar', gradient: 'from-blue-500 to-cyan-500', image: '/static/report.jpeg' },
  { title: 'AI流程', icon: 'i-carbon-flow', gradient: 'from-purple-500 to-pink-500', image: '/static/aiflow.jpeg' },
  { title: 'AI画布', icon: 'i-carbon-dashboard', gradient: 'from-amber-500 to-orange-500', image: '/static/canvas.jpeg' },
  { title: 'AI维表', icon: 'i-carbon-table', gradient: 'from-green-500 to-teal-500', image: '/static/AI维表.jpeg' },
  { title: '智能问数', icon: 'i-carbon-chat', gradient: 'from-rose-500 to-indigo-500', image: '/static/1766670365240.png' },
]

const itemWidth = 260
const itemHeight = 160
const radius = 320
</script>

<template>
  <div class="relative w-full h-[400px] flex items-center justify-center z-10 perspective-container">
    <div
      class="absolute top-[60%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-[100%] blur-[100px] pointer-events-none"
    />

    <div class="carousel-track">
      <div
        v-for="(card, index) in cards"
        :key="card.title"
        class="carousel-item-wrapper group/item"
        :style="{
          transform: `rotateY(${(360 / cards.length) * index}deg) translateZ(${radius}px)`,
        }"
      >
        <div class="carousel-item-inner cursor-pointer relative">
          <div
            class="absolute inset-0 bg-gradient-to-br"
            :class="card.gradient"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
          <div class="absolute inset-0 flex items-center justify-center overflow-hidden">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-br" :class="card.gradient" style="mix-blend-mode: overlay; opacity: 0.5" />
          </div>

          <div class="absolute bottom-0 left-0 w-full p-4 z-10 transform translate-y-1 group-hover/item:translate-y-0 transition-transform duration-300">
            <div class="flex items-center gap-1.5 mb-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 delay-75">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span class="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Interactive</span>
            </div>
            <div class="text-white font-bold text-lg leading-none tracking-tight">
              {{ card.title }}
            </div>
            <div class="hidden">
              <div class="flex items-center gap-1.5 mb-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 delay-75">
                <div class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span class="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Interactive</span>
              </div>
              <div class="text-white font-bold text-lg leading-none tracking-tight">
                {{ card.title }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="absolute top-full left-0 w-full h-full opacity-30 pointer-events-none"
          style="transform: scaleY(-1) translateY(10px); mask-image: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 60%); -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 60%)"
        >
          <div :class="['w-full h-full bg-gradient-to-br rounded-xl blur-[2px]', card.gradient]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-container {
  perspective: 1200px;
  perspective-origin: 50% 45%;
}

.carousel-track {
  position: relative;
  width: v-bind(itemWidth + 'px');
  height: v-bind(itemHeight + 'px');
  transform-style: preserve-3d;
  animation: spin 25s infinite linear;
}

.perspective-container:hover .carousel-track {
  animation-play-state: paused;
}

.carousel-item-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.carousel-item-inner {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.carousel-item-wrapper:hover .carousel-item-inner {
  transform: scale(1.3) translateY(-10px);
  background: rgba(30, 41, 59, 0.9);
  border-color: rgba(96, 165, 250, 0.6);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(59, 130, 246, 0.3);
  z-index: 100;
}

@keyframes spin {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}
</style>