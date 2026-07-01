<script setup lang="ts">
definePageMeta({ layout: 'default' })

const { locale, messages } = useLocale()

useSeo({
  title: messages.value.contactPage.seoTitle,
  description: messages.value.contactPage.seoDescription,
  keywords: [messages.value.common.siteName, messages.value.contactPage.seoTitle],
  locale: locale.value,
  siteName: messages.value.common.siteName,
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- 标题区 -->
    <div class="text-white pb-16 pt-32 bg-slate-900 relative overflow-hidden">
      <div class="animate-breathe rounded-full bg-blue-500/10 h-[480px] w-[480px] pointer-events-none left-1/2 top-1/2 absolute blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div class="mx-auto px-6 text-center max-w-7xl relative z-10">
        <h1 class="animate-text-shimmer text-4xl text-transparent font-bold mb-6 from-white to-white via-blue-400 bg-gradient-to-r bg-clip-text md:text-5xl">
          {{ messages.contactPage.title }}
        </h1>
        <p class="text-xl text-slate-400 mx-auto max-w-2xl">
          {{ messages.contactPage.subtitle }}
        </p>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="mx-auto px-6 py-16 max-w-7xl">
      <div class="gap-12 grid lg:grid-cols-2">
        <!-- 左列：联系方式 -->
        <div class="p-8 border border-gray-100 rounded-2xl bg-white h-full shadow-sm">
          <h3 class="text-2xl text-gray-900 font-bold mb-8">
            {{ messages.contactPage.contactInfo }}
          </h3>

          <div class="space-y-8">
            <!-- 公司地址 -->
            <div class="group flex items-start">
              <div class="text-blue-600 mr-4 rounded-full bg-blue-100 flex shrink-0 h-12 w-12 transition-transform duration-300 items-center justify-center group-hover:rotate-6 group-hover:scale-110">
                <span class="i-carbon-location text-xl" />
              </div>
              <div>
                <h4 class="text-gray-900 font-bold mb-1">
                  {{ messages.contactPage.addressLabel }}
                </h4>
                <p class="text-gray-600">
                  {{ messages.contactPage.addressValue }}
                </p>
              </div>
            </div>

            <!-- 联系微信 -->
            <div class="group flex items-start">
              <div class="text-purple-600 mr-4 rounded-full bg-purple-100 flex shrink-0 h-12 w-12 transition-transform duration-300 items-center justify-center group-hover:rotate-6 group-hover:scale-110">
                <span class="i-carbon-phone text-xl" />
              </div>
              <div>
                <h4 class="text-gray-900 font-bold mb-1">
                  {{ messages.contactPage.wechatLabel }}
                </h4>
                <p class="text-gray-600">
                  {{ messages.contactPage.wechatValue }}
                </p>
                <img
                  src="/static/wechat1.png"
                  :alt="messages.contactPage.wechatLabel"
                  class="hover-lift mt-3 border border-gray-200 rounded-lg h-32 w-32 object-cover"
                  loading="lazy"
                >
              </div>
            </div>

            <!-- 商务邮箱 -->
            <div class="group flex items-start">
              <div class="text-green-600 mr-4 rounded-full bg-green-100 flex shrink-0 h-12 w-12 transition-transform duration-300 items-center justify-center group-hover:rotate-6 group-hover:scale-110">
                <span class="i-carbon-mail-all text-xl" />
              </div>
              <div>
                <h4 class="text-gray-900 font-bold mb-1">
                  {{ messages.contactPage.emailLabel }}
                </h4>
                <p class="text-gray-600">
                  lixiang@bintelai.com
                </p>
              </div>
            </div>
          </div>

          <!-- 关注我们 -->
          <div class="mt-12 pt-8 border-t border-gray-100">
            <h4 class="text-gray-900 font-bold mb-4">
              {{ messages.contactPage.followUs }}
            </h4>
            <div class="flex gap-4">
              <div class="text-gray-600 rounded-full bg-gray-100 flex h-10 w-10 cursor-pointer transition-colors items-center justify-center hover:text-white hover:bg-blue-600" title="微信">
                <span class="i-carbon-logo-wechat" />
              </div>
              <div class="text-gray-600 rounded-full bg-gray-100 flex h-10 w-10 cursor-pointer transition-colors items-center justify-center hover:text-white hover:bg-blue-600" title="领英">
                <span class="i-carbon-logo-linkedin" />
              </div>
              <div class="text-gray-600 rounded-full bg-gray-100 flex h-10 w-10 cursor-pointer transition-colors items-center justify-center hover:text-white hover:bg-blue-600" title="Twitter">
                <span class="i-carbon-logo-twitter" />
              </div>
            </div>
          </div>
        </div>

        <!-- 右列：在线咨询表单 -->
        <div class="shine-on-hover p-8 border border-gray-100 rounded-2xl bg-white shadow-sm">
          <h3 class="text-2xl text-gray-900 font-bold mb-8">
            {{ messages.contactPage.consultation }}
          </h3>
          <form class="space-y-6" @submit.prevent>
            <div class="gap-6 grid grid-cols-2">
              <div>
                <label class="text-sm text-gray-700 font-medium mb-2 block">{{ messages.contactPage.name }}</label>
                <input
                  type="text"
                  class="px-4 py-3 outline-none border border-gray-200 rounded-lg w-full transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  :placeholder="messages.contactPage.namePlaceholder"
                >
              </div>
              <div>
                <label class="text-sm text-gray-700 font-medium mb-2 block">{{ messages.contactPage.phone }}</label>
                <input
                  type="tel"
                  class="px-4 py-3 outline-none border border-gray-200 rounded-lg w-full transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  :placeholder="messages.contactPage.phonePlaceholder"
                >
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-700 font-medium mb-2 block">{{ messages.contactPage.email }}</label>
              <input
                type="email"
                class="px-4 py-3 outline-none border border-gray-200 rounded-lg w-full transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                :placeholder="messages.contactPage.emailPlaceholder"
              >
            </div>
            <div>
              <label class="text-sm text-gray-700 font-medium mb-2 block">{{ messages.contactPage.message }}</label>
              <textarea
                rows="4"
                class="px-4 py-3 outline-none border border-gray-200 rounded-lg w-full resize-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                :placeholder="messages.contactPage.messagePlaceholder"
              />
            </div>
            <button
              type="submit"
              class="shine-on-hover text-lg text-white font-semibold py-4 rounded-xl bg-blue-600 w-full shadow-blue-500/30 shadow-lg transition-all hover:bg-blue-700 hover:scale-105"
            >
              {{ messages.contactPage.submit }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
