<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeo({
  title: '联系我们',
  description: '与方块智联取得联系，获取企业级智能协作平台的咨询与试用服务。',
  keywords: ['方块智联', '联系我们', '商务咨询', '产品试用', '企业合作'],
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 标题区 -->
    <div class="bg-slate-900 text-white pt-32 pb-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          联系我们
        </h1>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          我们期待听到您的声音
        </p>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- 左列：联系方式 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
          <h3 class="text-2xl font-bold text-gray-900 mb-8">
            联系方式
          </h3>

          <div class="space-y-8">
            <!-- 公司地址 -->
            <div class="flex items-start">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 mr-4">
                <span class="i-carbon-location text-xl" />
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">公司地址</h4>
                <p class="text-gray-600">江西省南昌市中兴软件园 507 室</p>
              </div>
            </div>

            <!-- 联系微信 -->
            <div class="flex items-start">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0 mr-4">
                <span class="i-carbon-phone text-xl" />
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">联系微信</h4>
                <p class="text-gray-600">l4537459 (工作日 9:00-18:00)</p>
                <img
                  src="/static/wechat1.png"
                  alt="微信二维码"
                  class="mt-3 w-32 h-32 rounded-lg border border-gray-200 object-cover"
                  loading="lazy"
                >
              </div>
            </div>

            <!-- 商务邮箱 -->
            <div class="flex items-start">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0 mr-4">
                <span class="i-carbon-mail-all text-xl" />
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">商务邮箱</h4>
                <p class="text-gray-600">lixiang@bintelai.com</p>
              </div>
            </div>
          </div>

          <!-- 关注我们 -->
          <div class="mt-12 pt-8 border-t border-gray-100">
            <h4 class="font-bold text-gray-900 mb-4">关注我们</h4>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-gray-600" title="微信">
                <span class="i-carbon-logo-wechat" />
              </div>
              <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-gray-600" title="领英">
                <span class="i-carbon-logo-linkedin" />
              </div>
              <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-gray-600" title="Twitter">
                <span class="i-carbon-logo-twitter" />
              </div>
            </div>
          </div>
        </div>

        <!-- 右列：在线咨询表单 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-900 mb-8">
            在线咨询
          </h3>
          <form class="space-y-6" @submit.prevent>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                <input
                  type="text"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="您的称呼"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">电话</label>
                <input
                  type="tel"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="联系电话"
                >
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
              <input
                type="email"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="example@company.com"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">咨询内容</label>
              <textarea
                rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="请简单描述您的需求..."
              />
            </div>
            <button
              type="submit"
              class="w-full py-4 text-lg bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
            >
              提交咨询
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>