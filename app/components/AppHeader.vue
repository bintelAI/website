<script setup lang="ts">
import { productDetails } from '~/constants'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isProductDropdownOpen = ref(false)

// 首页未滚动时使用深色主题（与深色 Hero 融合）
const isDarkTheme = computed(() => route.path === '/' && !isScrolled.value && !isMenuOpen.value)
// 是否需要实色背景：首页未滚动时透明，其余情况实色
const isSolidBg = computed(() => isScrolled.value || route.path !== '/' || isMenuOpen.value)

function headerBgClass(): string {
  if (!isSolidBg.value) return 'bg-transparent'
  return 'bg-white/95 backdrop-blur-md shadow-sm'
}

function headerTextClass(): string {
  return isDarkTheme.value ? 'text-white' : 'text-slate-900'
}

function headerBtnClass(): string {
  return isDarkTheme.value ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

watch(() => route.path, () => {
  isMenuOpen.value = false
  isProductDropdownOpen.value = false
})

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const coreProducts = computed(() => productDetails.filter(p => ['dimens', 'appthen'].includes(p.id)))
const enterpriseProducts = computed(() => productDetails.filter(p => !p.isIndustry && !['dimens', 'appthen'].includes(p.id)))
const industryProducts = computed(() => productDetails.filter(p => p.isIndustry))

const navItems = [
  { label: '解决方案', path: '/solutions' },
  { label: '新闻动态', path: '/blog' },
  { label: '关于我们', path: '/about' },
]

function navTextClass(active: boolean): string {
  if (isDarkTheme.value) {
    return active ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/10'
  }
  return active ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="headerBgClass()"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 cursor-pointer z-50">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <span class="i-carbon-cube text-lg" />
          </div>
          <span
            class="font-bold text-xl tracking-tight transition-colors"
            :class="headerTextClass()"
          >方块智联</span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1">
          <!-- 首页 -->
          <NuxtLink
            to="/"
            class="px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            :class="navTextClass(route.path === '/')"
          >首页</NuxtLink>

          <!-- 产品中心 Mega Menu -->
          <div
            class="relative"
            @mouseenter="isProductDropdownOpen = true"
            @mouseleave="isProductDropdownOpen = false"
          >
            <NuxtLink
              to="/products"
              class="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors no-underline"
              :class="navTextClass(isActive('/products') || isActive('/product'))"
            >
              产品中心
              <span
                class="i-carbon-chevron-down text-xs transition-transform duration-300"
                :class="{ 'rotate-180': isProductDropdownOpen }"
              />
            </NuxtLink>

            <!-- Mega Menu Dropdown -->
            <div
              class="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[820px] transition-all duration-300 transform origin-top"
              :class="isProductDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'"
            >
              <div class="bg-white rounded-2xl shadow-2xl border border-gray-100/80 overflow-hidden">
                <div class="flex">
                  <!-- 左栏: 核心平台 -->
                  <div class="w-[280px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6 shrink-0">
                    <div class="flex items-center gap-2 mb-5">
                      <div class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span class="text-[11px] font-semibold text-blue-300 uppercase tracking-widest">核心平台</span>
                    </div>
                    <div class="space-y-3">
                      <NuxtLink
                        v-for="p in coreProducts"
                        :key="p.id"
                        :to="`/product/${p.id}`"
                        class="block p-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.06] hover:border-white/[0.12] transition-all group no-underline"
                        @click="isProductDropdownOpen = false"
                      >
                        <div class="flex items-center gap-3 mb-2">
                          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <span :class="[p.icon, 'text-white text-sm']" />
                          </div>
                          <div class="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">{{ p.shortName || p.title }}</div>
                        </div>
                        <div class="text-xs text-blue-200/60 leading-relaxed line-clamp-2 pl-11">{{ p.description }}</div>
                      </NuxtLink>
                    </div>
                  </div>

                  <!-- 右栏: 企业产品 + 行业产品 -->
                  <div class="flex-1 p-6">
                    <!-- 企业产品 -->
                    <div class="mb-5">
                      <div class="flex items-center gap-2 mb-3">
                        <div class="w-1 h-4 bg-blue-500 rounded-full" />
                        <span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest">企业产品</span>
                      </div>
                      <div class="grid grid-cols-2 gap-0.5">
                        <NuxtLink
                          v-for="p in enterpriseProducts"
                          :key="p.id"
                          :to="`/product/${p.id}`"
                          class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group no-underline"
                          @click="isProductDropdownOpen = false"
                        >
                          <div class="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                            <span :class="[p.icon, 'text-sm text-blue-500 group-hover:text-blue-600 transition-colors']" />
                          </div>
                          <div class="min-w-0">
                            <div class="font-medium text-gray-700 text-[13px] group-hover:text-blue-600 transition-colors truncate">{{ p.shortName || p.title }}</div>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- 行业产品 -->
                    <div>
                      <div class="flex items-center gap-2 mb-3">
                        <div class="w-1 h-4 bg-amber-500 rounded-full" />
                        <span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest">开源产品</span>
                      </div>
                      <div class="grid grid-cols-2 gap-0.5">
                        <NuxtLink
                          v-for="p in industryProducts"
                          :key="p.id"
                          :to="`/product/${p.id}`"
                          class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-amber-50/60 transition-colors group no-underline"
                          @click="isProductDropdownOpen = false"
                        >
                          <div class="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                            <span :class="[p.icon, 'text-sm text-amber-500 group-hover:text-amber-600 transition-colors']" />
                          </div>
                          <div class="min-w-0">
                            <div class="font-medium text-gray-700 text-[13px] group-hover:text-amber-600 transition-colors truncate">{{ p.shortName || p.title }}</div>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 底部: 查看全部 -->
                <div class="border-t border-gray-100 px-6 py-3 bg-gray-50/50">
                  <NuxtLink
                    to="/products"
                    class="flex items-center justify-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors no-underline"
                    @click="isProductDropdownOpen = false"
                  >
                    查看全部产品
                    <span class="i-carbon-arrow-right text-xs" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- 其他导航项 -->
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            :class="navTextClass(isActive(item.path))"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- 联系我们按钮 -->
        <div class="hidden lg:flex items-center">
          <a
            href="https://dimens.bintelai.com"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm transition-all shadow-sm"
            :class="isDarkTheme
              ? 'bg-white text-blue-900 hover:bg-blue-50'
              : 'bg-slate-900 text-white hover:bg-slate-800'"
          >
            登入维表
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="lg:hidden p-2.5 rounded-full transition-all cursor-pointer text-white bg-black/30 backdrop-blur-sm hover:bg-black/50"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span v-if="isMenuOpen" class="i-carbon-close text-lg" />
          <span v-else class="i-carbon-overflow-menu-vertical text-lg" />
        </button>
      </div>
    </div>

    <!-- Mobile Overlay -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
      @click="isMenuOpen = false"
    />

    <!-- Mobile Nav Dropdown -->
    <div
      v-if="isMenuOpen"
      class="bg-white shadow-lg border-t border-gray-100 lg:hidden flex flex-col p-6 gap-2 max-h-[80vh] overflow-y-auto relative z-50"
    >
      <NuxtLink
        to="/"
        class="font-medium p-3 rounded-lg hover:bg-gray-50"
        :class="route.path === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-900'"
        @click="isMenuOpen = false"
      >首页</NuxtLink>

      <!-- 产品中心 (mobile) -->
      <div class="p-3">
        <div class="font-medium mb-3 text-gray-900 text-sm">产品中心</div>

        <div class="pl-2 mb-4">
          <div class="text-xs text-gray-400 mb-2 uppercase tracking-wider">核心平台</div>
          <div class="space-y-1">
            <NuxtLink
              v-for="p in coreProducts"
              :key="p.id"
              :to="`/product/${p.id}`"
              class="block w-full text-left py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 font-medium"
              @click="isMenuOpen = false"
            >{{ p.title }}</NuxtLink>
          </div>
        </div>

        <div class="pl-2 mb-4">
          <div class="text-xs text-gray-400 mb-2 uppercase tracking-wider">企业产品</div>
          <div class="space-y-1">
            <NuxtLink
              v-for="p in enterpriseProducts"
              :key="p.id"
              :to="`/product/${p.id}`"
              class="block w-full text-left py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 font-medium"
              @click="isMenuOpen = false"
            >{{ p.title }}</NuxtLink>
          </div>
        </div>

        <div class="pl-2">
          <div class="text-xs text-gray-400 mb-2 uppercase tracking-wider">开源产品</div>
          <div class="space-y-1">
            <NuxtLink
              v-for="p in industryProducts"
              :key="p.id"
              :to="`/product/${p.id}`"
              class="block w-full text-left py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 font-medium"
              @click="isMenuOpen = false"
            >{{ p.title }}</NuxtLink>
          </div>
        </div>
      </div>

      <NuxtLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="font-medium p-3 rounded-lg hover:bg-gray-50"
        :class="isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'text-gray-900'"
        @click="isMenuOpen = false"
      >{{ item.label }}</NuxtLink>

      <hr class="border-gray-100 my-2">

      <NuxtLink
        to="/contact"
        class="bg-slate-900 text-white text-center font-medium p-3 rounded-xl hover:bg-slate-800 transition-colors"
        @click="isMenuOpen = false"
      >联系我们</NuxtLink>
    </div>
  </header>
</template>