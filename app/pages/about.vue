<script setup lang="ts">
import { teamMembers } from '~/constants'
definePageMeta({ layout: 'default' })
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col items-center">
    <Reveal>
      <CompanyIntro />
    </Reveal>
    <Reveal width="100%">
      <DualEngine />
    </Reveal>
    <Reveal width="100%">
      <TrafficMatrix />
    </Reveal>
    <Reveal width="100%">
      <AiGrowth />
    </Reveal>
    <!-- Team Section -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6">
        <Reveal>
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">核心团队</h2>
            <p class="text-lg text-slate-500 max-w-2xl mx-auto">一群热爱技术与创新的伙伴，共同致力于数据智能的探索</p>
          </div>
          <div class="grid md:grid-cols-4 gap-6 text-center">
            <div v-for="member in teamMembers" :key="member.name" class="group cursor-pointer">
              <div class="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-4 overflow-hidden shadow-md border-4 border-white group-hover:border-blue-100 transition-all">
                <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`" :alt="member.name" class="w-full h-full object-cover">
              </div>
              <h4 class="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{{ member.name }}</h4>
              <p class="text-sm text-slate-500 mb-2">{{ member.role }}</p>
              <p class="text-xs text-slate-400 max-w-[150px] mx-auto">{{ member.description }}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="border-t border-gray-100 py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <Reveal>
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">联系我们</h2>
            <p class="text-lg text-slate-500">我们期待听到您的声音</p>
          </div>
          <div class="grid lg:grid-cols-2 gap-12">
            <div class="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h3 class="text-xl font-bold text-slate-900 mb-8">联系方式</h3>
              <div class="space-y-8">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shrink-0 mr-4 shadow-sm">
                    <span class="i-carbon-location text-xl" />
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 mb-1">公司地址</h4>
                    <p class="text-slate-600">江西省南昌市中兴软件园 507 室</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 shrink-0 mr-4 shadow-sm">
                    <span class="i-carbon-logo-wechat text-xl" />
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 mb-1">联系微信</h4>
                    <p class="text-slate-600">l4537459</p>
                    <img src="/static/wechat1.png" alt="微信二维码" class="w-24 h-24 rounded-lg shadow-sm border border-gray-100 mt-2">
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 shrink-0 mr-4 shadow-sm">
                    <span class="i-carbon-mail-all text-xl" />
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 mb-1">商务邮箱</h4>
                    <p class="text-slate-600">lixiang@bintelai.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center">
              <h3 class="text-xl font-bold text-slate-900 mb-6">扫码咨询或在线填写</h3>
              <div class="mb-8 p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <img src="/static/表单.png" alt="咨询二维码" class="w-48 h-48 object-contain mx-auto shadow-sm">
                <p class="text-sm text-slate-500 mt-4">扫描上方二维码快速咨询</p>
              </div>
              <a href="https://icn0866todip.feishu.cn/share/base/form/shrcnUHjyb4TY05cVEBXe1UitFf" target="_blank" rel="noopener noreferrer" class="w-full">
                <button class="w-full py-4 text-lg bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30">
                  咨询填写
                </button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>