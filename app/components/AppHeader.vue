<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { messages, oppositeLocale, oppositeLocaleName, switchLocale } = useLocale()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isProductDropdownOpen = ref(false)

// 首页未滚动时使用深色主题（与深色 Hero 融合）
const isHome = computed(() => route.path === '/' || route.path === '/en')
const isDarkTheme = computed(() => isHome.value && !isScrolled.value && !isMenuOpen.value)
// 是否需要实色背景：首页未滚动时透明，其余情况实色
const isSolidBg = computed(() => isScrolled.value || !isHome.value || isMenuOpen.value)

function headerBgClass(): string {
  if (!isSolidBg.value)
    return 'bg-transparent'
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
  const localizedPath = localePath(path)
  if (path === '/')
    return route.path === localizedPath
  return route.path.startsWith(localizedPath)
}

const products = computed(() => messages.value.data.products)
const coreProducts = computed(() => products.value.filter(p => ['dimens', 'appthen'].includes(p.id)))
const enterpriseProducts = computed(() => products.value.filter(p => !p.isIndustry && !['dimens', 'appthen'].includes(p.id)))
const industryProducts = computed(() => products.value.filter(p => p.isIndustry))

const navItems = computed(() => [
  { label: messages.value.nav.solutions, path: '/solutions' },
  { label: messages.value.nav.blog, path: '/blog' },
  { label: messages.value.nav.about, path: '/about' },
])

function navTextClass(active: boolean): string {
  if (isDarkTheme.value) {
    return active ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/10'
  }
  return active ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
}
</script>

<template>
  <header
    class="w-full transition-all duration-300 left-0 top-0 fixed z-50"
    :class="headerBgClass()"
  >
    <div class="mx-auto px-4 max-w-7xl lg:px-8 sm:px-6">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="group flex gap-2 cursor-pointer items-center z-50">
          <div class="text-white rounded-lg flex h-8 w-8 shadow-lg transition-transform duration-500 items-center justify-center from-blue-600 to-purple-600 bg-gradient-to-br group-hover:rotate-12">
            <span class="i-carbon-cube text-lg" />
          </div>
          <span
            class="text-xl tracking-tight font-bold transition-colors"
            :class="headerTextClass()"
          >{{ messages.common.brandShort }}</span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="gap-1 hidden items-center lg:flex">
          <!-- 首页 -->
          <NuxtLink
            :to="localePath('/')"
            class="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            :class="navTextClass(isActive('/'))"
          >
            {{ messages.nav.home }}
          </NuxtLink>

          <!-- 产品中心 Mega Menu -->
          <div
            class="relative"
            @mouseenter="isProductDropdownOpen = true"
            @mouseleave="isProductDropdownOpen = false"
          >
            <NuxtLink
              :to="localePath('/products')"
              class="text-sm font-medium px-4 py-2 rounded-lg no-underline flex gap-1 transition-colors items-center"
              :class="navTextClass(isActive('/products') || isActive('/product'))"
            >
              {{ messages.nav.products }}
              <span
                class="i-carbon-chevron-down text-xs transition-transform duration-300"
                :class="{ 'rotate-180': isProductDropdownOpen }"
              />
            </NuxtLink>

            <!-- Mega Menu Dropdown -->
            <div
              class="pt-4 w-[820px] origin-top transform transition-all duration-300 left-1/2 top-full absolute -translate-x-1/2"
              :class="isProductDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'"
            >
              <div class="shine-on-hover border border-gray-100/80 rounded-2xl bg-white shadow-2xl overflow-hidden">
                <div class="flex">
                  <!-- 左栏: 核心平台 -->
                  <div class="p-6 shrink-0 w-[280px] from-slate-900 to-indigo-900 via-blue-900 bg-gradient-to-br">
                    <div class="mb-5 flex gap-2 items-center">
                      <div class="animate-breathe rounded-full bg-cyan-400 h-1.5 w-1.5" />
                      <span class="text-[11px] text-blue-300 tracking-widest font-semibold uppercase">{{ messages.nav.corePlatform }}</span>
                    </div>
                    <div class="space-y-3">
                      <NuxtLink
                        v-for="p in coreProducts"
                        :key="p.id"
                        :to="localePath(`/product/${p.id}`)"
                        class="group p-4 border border-white/[0.06] rounded-xl bg-white/[0.06] no-underline block transition-all hover:border-white/[0.12] hover:bg-white/[0.12]"
                        @click="isProductDropdownOpen = false"
                      >
                        <div class="mb-2 flex gap-3 items-center">
                          <div class="rounded-lg flex h-8 w-8 shadow-cyan-500/20 shadow-lg items-center justify-center from-blue-400 to-cyan-400 bg-gradient-to-br">
                            <span class="text-sm text-white" :class="[p.icon]" />
                          </div>
                          <div class="text-sm text-white font-bold transition-colors group-hover:text-cyan-300">
                            {{ p.shortName || p.title }}
                          </div>
                        </div>
                        <div class="text-xs text-blue-200/60 leading-relaxed pl-11 line-clamp-2">
                          {{ p.description }}
                        </div>
                      </NuxtLink>
                    </div>
                  </div>

                  <!-- 右栏: 企业产品 + 行业产品 -->
                  <div class="p-6 flex-1">
                    <!-- 企业产品 -->
                    <div class="mb-5">
                      <div class="mb-3 flex gap-2 items-center">
                        <div class="rounded-full bg-blue-500 h-4 w-1" />
                        <span class="text-[11px] text-gray-400 tracking-widest font-bold uppercase">{{ messages.nav.enterpriseProducts }}</span>
                      </div>
                      <div class="gap-0.5 grid grid-cols-2">
                        <NuxtLink
                          v-for="p in enterpriseProducts"
                          :key="p.id"
                          :to="localePath(`/product/${p.id}`)"
                          class="group p-2.5 rounded-xl no-underline flex gap-3 transition-colors items-center hover:bg-blue-50/60"
                          @click="isProductDropdownOpen = false"
                        >
                          <div class="rounded-lg bg-blue-50 flex shrink-0 h-7 w-7 transition-all duration-300 items-center justify-center group-hover:bg-blue-100 group-hover:scale-110">
                            <span class="text-sm text-blue-500 transition-colors group-hover:text-blue-600" :class="[p.icon]" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-[13px] text-gray-700 font-medium truncate transition-colors group-hover:text-blue-600">
                              {{ p.shortName || p.title }}
                            </div>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- 行业产品 -->
                    <div>
                      <div class="mb-3 flex gap-2 items-center">
                        <div class="rounded-full bg-amber-500 h-4 w-1" />
                        <span class="text-[11px] text-gray-400 tracking-widest font-bold uppercase">{{ messages.nav.openSourceProducts }}</span>
                      </div>
                      <div class="gap-0.5 grid grid-cols-2">
                        <NuxtLink
                          v-for="p in industryProducts"
                          :key="p.id"
                          :to="localePath(`/product/${p.id}`)"
                          class="group p-2.5 rounded-xl no-underline flex gap-3 transition-colors items-center hover:bg-amber-50/60"
                          @click="isProductDropdownOpen = false"
                        >
                          <div class="rounded-lg bg-amber-50 flex shrink-0 h-7 w-7 transition-all duration-300 items-center justify-center group-hover:bg-amber-100 group-hover:scale-110">
                            <span class="text-sm text-amber-500 transition-colors group-hover:text-amber-600" :class="[p.icon]" />
                          </div>
                          <div class="min-w-0">
                            <div class="text-[13px] text-gray-700 font-medium truncate transition-colors group-hover:text-amber-600">
                              {{ p.shortName || p.title }}
                            </div>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 底部: 查看全部 -->
                <div class="px-6 py-3 border-t border-gray-100 bg-gray-50/50">
                  <NuxtLink
                    :to="localePath('/products')"
                    class="group text-sm text-blue-600 font-medium no-underline flex gap-1 transition-colors items-center justify-center hover:text-blue-700"
                    @click="isProductDropdownOpen = false"
                  >
                    {{ messages.nav.viewAllProducts }}
                    <span class="i-carbon-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- 其他导航项 -->
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="localePath(item.path)"
            class="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            :class="navTextClass(isActive(item.path))"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- 联系我们按钮 -->
        <div class="gap-2 hidden items-center lg:flex">
          <button
            type="button"
            class="text-sm font-medium px-3 py-2 rounded-full flex gap-1.5 transition-all items-center"
            :class="headerBtnClass()"
            :aria-label="messages.nav.languageLabel"
            @click="switchLocale(oppositeLocale)"
          >
            <span class="i-carbon-language text-base" />
            {{ oppositeLocaleName }}
          </button>
          <a
            href="https://dimens.bintelai.com"
            target="_blank"
            rel="noopener noreferrer"
            class="shine-on-hover text-sm font-medium px-5 py-2 rounded-full flex gap-2 shadow-sm transition-all items-center"
            :class="isDarkTheme
              ? 'bg-white text-blue-900 hover:bg-blue-50'
              : 'bg-slate-900 text-white hover:bg-slate-800'"
          >
            {{ messages.nav.loginDimens }}
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="text-white p-2.5 rounded-full bg-black/30 cursor-pointer transition-all backdrop-blur-sm hover:bg-black/50 lg:hidden"
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
      class="bg-black/40 inset-0 fixed z-40 backdrop-blur-sm lg:hidden"
      @click="isMenuOpen = false"
    />

    <!-- Mobile Nav Dropdown -->
    <div
      v-if="isMenuOpen"
      class="p-6 border-t border-gray-100 bg-white flex flex-col gap-2 max-h-[80vh] shadow-lg relative z-50 overflow-y-auto lg:hidden"
    >
      <NuxtLink
        :to="localePath('/')"
        class="font-medium p-3 rounded-lg hover:bg-gray-50"
        :class="isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-900'"
        @click="isMenuOpen = false"
      >
        {{ messages.nav.home }}
      </NuxtLink>

      <!-- 产品中心 (mobile) -->
      <div class="p-3">
        <div class="text-sm text-gray-900 font-medium mb-3">
          {{ messages.nav.products }}
        </div>

        <div class="mb-4 pl-2">
          <div class="text-xs text-gray-400 tracking-wider mb-2 uppercase">
            {{ messages.nav.corePlatform }}
          </div>
          <div class="space-y-1">
            <NuxtLink
              v-for="p in coreProducts"
              :key="p.id"
              :to="localePath(`/product/${p.id}`)"
              class="text-sm text-gray-600 font-medium px-3 py-2 text-left rounded-lg w-full block hover:text-blue-600 hover:bg-blue-50"
              @click="isMenuOpen = false"
            >
              {{ p.title }}
            </NuxtLink>
          </div>
        </div>

        <div class="mb-4 pl-2">
          <div class="text-xs text-gray-400 tracking-wider mb-2 uppercase">
            {{ messages.nav.enterpriseProducts }}
          </div>
          <div class="space-y-1">
            <NuxtLink
              v-for="p in enterpriseProducts"
              :key="p.id"
              :to="localePath(`/product/${p.id}`)"
              class="text-sm text-gray-600 font-medium px-3 py-2 text-left rounded-lg w-full block hover:text-blue-600 hover:bg-blue-50"
              @click="isMenuOpen = false"
            >
              {{ p.title }}
            </NuxtLink>
          </div>
        </div>

        <div class="pl-2">
          <div class="text-xs text-gray-400 tracking-wider mb-2 uppercase">
            {{ messages.nav.openSourceProducts }}
          </div>
          <div class="space-y-1">
            <NuxtLink
              v-for="p in industryProducts"
              :key="p.id"
              :to="localePath(`/product/${p.id}`)"
              class="text-sm text-gray-600 font-medium px-3 py-2 text-left rounded-lg w-full block hover:text-blue-600 hover:bg-blue-50"
              @click="isMenuOpen = false"
            >
              {{ p.title }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <NuxtLink
        v-for="item in navItems"
        :key="item.path"
        :to="localePath(item.path)"
        class="font-medium p-3 rounded-lg hover:bg-gray-50"
        :class="isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'text-gray-900'"
        @click="isMenuOpen = false"
      >
        {{ item.label }}
      </NuxtLink>

      <hr class="my-2 border-gray-100">

      <button
        type="button"
        class="text-gray-700 font-medium p-3 text-center border border-gray-200 rounded-xl flex gap-2 transition-colors items-center justify-center hover:bg-gray-50"
        @click="switchLocale(oppositeLocale)"
      >
        <span class="i-carbon-language" />
        {{ oppositeLocaleName }}
      </button>

      <NuxtLink
        :to="localePath('/contact')"
        class="text-white font-medium p-3 text-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800"
        @click="isMenuOpen = false"
      >
        {{ messages.nav.contact }}
      </NuxtLink>
    </div>
  </header>
</template>
