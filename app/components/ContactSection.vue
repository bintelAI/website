<script setup lang="ts">
const { messages } = useLocale()
</script>

<template>
  <section class="py-24 border-t border-gray-100 bg-white dark:border-slate-800 dark:bg-gray-900">
    <div class="mx-auto px-4 max-w-7xl lg:px-8 sm:px-6">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="text-3xl text-slate-900 font-bold mb-4 sm:text-4xl dark:text-white">
          {{ messages.contactPage.title }}
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400">
          {{ messages.contactPage.subtitle }}
        </p>
      </div>

      <div class="gap-12 grid lg:grid-cols-2">
        <!-- Left: Contact Info -->
        <div class="p-8 border border-gray-100 rounded-2xl bg-gray-50 h-full shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 class="text-xl text-slate-900 font-bold mb-8 dark:text-white">
            {{ messages.contactPage.contactInfo }}
          </h3>

          <div class="space-y-8">
            <div class="flex items-start">
              <div class="text-blue-600 mr-4 rounded-full bg-white flex shrink-0 h-12 w-12 shadow-sm items-center justify-center dark:bg-slate-700">
                <span class="i-carbon-location text-xl" />
              </div>
              <div>
                <h4 class="text-slate-900 font-bold mb-1 dark:text-white">
                  {{ messages.contactPage.addressLabel }}
                </h4>
                <p class="text-slate-600 dark:text-slate-400">
                  {{ messages.contactPage.addressValue }}
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-purple-600 mr-4 rounded-full bg-white flex shrink-0 h-12 w-12 shadow-sm items-center justify-center dark:bg-slate-700">
                <span class="i-carbon-logo-wechat text-xl" />
              </div>
              <div>
                <h4 class="text-slate-900 font-bold mb-1 dark:text-white">
                  {{ messages.contactPage.wechatLabel }}
                </h4>
                <p class="text-slate-600 dark:text-slate-400">
                  l4537459
                </p>
                <img
                  src="/static/wechat1.png"
                  :alt="messages.contactPage.wechatLabel"
                  class="mt-2 border border-gray-100 rounded-lg h-24 w-24 shadow-sm dark:border-slate-600"
                >
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-green-600 mr-4 rounded-full bg-white flex shrink-0 h-12 w-12 shadow-sm items-center justify-center dark:bg-slate-700">
                <span class="i-carbon-mail-all text-xl" />
              </div>
              <div>
                <h4 class="text-slate-900 font-bold mb-1 dark:text-white">
                  {{ messages.contactPage.emailLabel }}
                </h4>
                <p class="text-slate-600 dark:text-slate-400">
                  lixiang@bintelai.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: QR Code & Button -->
        <div class="p-8 text-center border border-gray-100 rounded-2xl bg-white flex flex-col shadow-lg items-center justify-center dark:border-slate-700 dark:bg-slate-800">
          <h3 class="text-xl text-slate-900 font-bold mb-6 dark:text-white">
            {{ messages.contactPage.qrConsultTitle }}
          </h3>
          <div class="mb-8 p-4 border border-gray-200 rounded-2xl border-dashed bg-gray-50 dark:border-slate-600 dark:bg-slate-900">
            <img
              src="/static/表单.png"
              :alt="messages.contactPage.qrConsultTitle"
              class="mx-auto h-48 w-48 shadow-sm object-contain"
            >
            <p class="text-sm text-slate-500 mt-4 dark:text-slate-400">
              {{ messages.contactPage.qrConsultDesc }}
            </p>
          </div>
          <a
            href="https://icn0866todip.feishu.cn/share/base/form/shrcnUHjyb4TY05cVEBXe1UitFf"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full"
          >
            <button class="text-lg text-white font-medium py-4 rounded-lg bg-blue-600 w-full shadow-blue-500/30 shadow-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5">
              {{ messages.contactPage.qrConsultButton }}
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
