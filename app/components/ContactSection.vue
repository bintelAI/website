<script setup lang="ts">
</script>

<template>
  <section class="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          联系我们
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400">
          我们期待听到您的声音
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Left: Contact Info -->
        <div class="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 h-full">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-8">联系方式</h3>

          <div class="space-y-8">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-blue-600 shrink-0 mr-4 shadow-sm">
                <span class="i-carbon-location text-xl" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white mb-1">公司地址</h4>
                <p class="text-slate-600 dark:text-slate-400">江西省南昌市中兴软件园 507 室</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-purple-600 shrink-0 mr-4 shadow-sm">
                <span class="i-carbon-logo-wechat text-xl" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white mb-1">联系微信</h4>
                <p class="text-slate-600 dark:text-slate-400">l4537459</p>
                <img
                  src="/static/wechat1.png"
                  alt="微信二维码"
                  class="w-24 h-24 rounded-lg shadow-sm border border-gray-100 dark:border-slate-600 mt-2"
                >
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-green-600 shrink-0 mr-4 shadow-sm">
                <span class="i-carbon-mail-all text-xl" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white mb-1">商务邮箱</h4>
                <p class="text-slate-600 dark:text-slate-400">lixiang@bintelai.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: QR Code & Button -->
        <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6">扫码咨询或在线填写</h3>
          <div class="mb-8 p-4 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-dashed border-gray-200 dark:border-slate-600">
            <img
              src="/static/表单.png"
              alt="咨询二维码"
              class="w-48 h-48 object-contain mx-auto shadow-sm"
            >
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-4">扫描上方二维码快速咨询</p>
          </div>
          <a
            href="https://icn0866todip.feishu.cn/share/base/form/shrcnUHjyb4TY05cVEBXe1UitFf"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full"
          >
            <button class="w-full py-4 text-lg bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-blue-500/30">
              咨询填写
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>