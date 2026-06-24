<script setup lang="ts">
</script>

<template>
  <div class="space-y-24 py-12">
    <!-- 1. Core Capability - Bento Grid -->
    <section>
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          重新定义低代码开发体验
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          打破传统低代码的黑盒限制，提供接近原生开发的灵活性与性能。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
        <!-- Card 1: Visual Editor (Large) -->
        <div class="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 group">
          <div class="relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-8 flex flex-col justify-between shadow-2xl border border-indigo-500/30">
            <div class="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/30 rounded-full blur-[80px]" />
            <div class="relative z-10">
              <div class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/20 text-indigo-300">
                <span class="i-carbon-dashboard text-2xl" />
              </div>
              <h3 class="text-3xl font-bold mb-3">React 风格可视化编排</h3>
              <p class="text-indigo-200 text-lg leading-relaxed max-w-md">
                基于 Flex 布局的像素级还原。既可获得与「传统开发相同标准的代码产出」，亦可享受拖拽带来的极致效率。
              </p>
            </div>

            <!-- Visual Decoration -->
            <div class="absolute right-0 bottom-0 w-2/3 h-1/2 bg-slate-800/80 rounded-tl-2xl border-t border-l border-white/10 p-4 transform translate-y-4 translate-x-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 shadow-2xl">
              <div class="flex gap-2 mb-3">
                <div class="w-3 h-3 rounded-full bg-red-500" />
                <div class="w-3 h-3 rounded-full bg-yellow-500" />
                <div class="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div class="space-y-2">
                <div class="h-2 w-3/4 bg-slate-600 rounded" />
                <div class="h-2 w-1/2 bg-slate-600 rounded" />
                <div class="grid grid-cols-2 gap-2 mt-4">
                  <div class="h-16 bg-indigo-500/20 rounded border border-indigo-500/30" />
                  <div class="h-16 bg-indigo-500/20 rounded border border-indigo-500/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Code Sync -->
        <div class="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 group">
          <div class="relative h-full w-full rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-xl transition-all overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 dark:from-blue-900/30 to-transparent rounded-bl-full opacity-50" />
            <div class="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <span class="i-carbon-terminal text-blue-600" />
                  代码双向同步
                </h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                  支持 Cursor, Trae, VSCode。可视化修改实时同步至本地源码，拒绝黑盒。
                </p>
              </div>
              <div class="mt-4 bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-xs text-green-400 border border-gray-800 shadow-inner group-hover:scale-[1.02] transition-transform">
                <div>$ git commit -m "feat: visual update"</div>
                <div class="text-blue-400 mt-1">Syncing with Appthen... Done.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: Data Model -->
        <div class="col-span-1 md:col-span-1 row-span-1">
          <div class="h-full w-full rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors flex flex-col justify-between group">
            <div class="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:rotate-12 transition-transform">
              <span class="i-carbon-data-base text-xl" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-2">模型驱动开发</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">TypeScript 类型提示，组件参数自动绑定。</p>
            </div>
          </div>
        </div>

        <!-- Card 4: Copy Paste -->
        <div class="col-span-1 md:col-span-1 row-span-1">
          <div class="h-full w-full rounded-3xl bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/30 dark:to-orange-950/30 border border-pink-100 dark:border-pink-900/30 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div class="flex justify-between items-start">
              <div class="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-pink-500 shadow-sm">
                <span class="i-carbon-copy text-xl" />
              </div>
              <span class="text-[10px] font-bold bg-white/50 dark:bg-white/10 px-2 py-1 rounded text-pink-600 dark:text-pink-400">Magic</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-2">Figma 一键粘贴</h3>
              <p class="text-xs text-gray-600 dark:text-gray-400">从 Figma/MasterGo 复制，直接粘贴为可编辑组件。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Platform Support -->
    <section class="bg-slate-50 dark:bg-gray-800/50 rounded-[3rem] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-6">
            Multi-Platform
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">一次设计，多端运行</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
            无论是微信小程序、鸿蒙应用，还是复杂的 Web 中后台系统，Appthen 都能提供完美支持。
            基于 Taro 与 React Native 技术栈，确保原生级的性能体验。
          </p>

          <div class="flex flex-col gap-4">
            <div
              v-for="(item, i) in [
                { icon: 'i-carbon-mobile', title: '移动端', desc: '支持小程序、iOS、Android、鸿蒙 Next' },
                { icon: 'i-carbon-globe', title: 'Web 端', desc: '基于 Ant Design 5 构建企业级中后台' },
                { icon: 'i-carbon-box', title: '资产扩展', desc: '兼容所有 React npm 包，无限扩展能力' },
              ]"
              :key="i"
              class="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
            >
              <div class="w-10 h-10 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 shrink-0">
                <span :class="[item.icon, 'text-xl']" />
              </div>
              <div>
                <div class="font-bold text-gray-900 dark:text-white">{{ item.title }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative h-[500px] w-full">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800/30 dark:to-purple-800/30 rounded-full blur-[100px] opacity-50" />
          <!-- Abstract Device Representations -->
          <div class="absolute top-0 left-10 w-48 h-96 bg-gray-900 rounded-[2rem] border-8 border-gray-800 shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-500 z-20">
            <div class="w-full h-full bg-slate-800 rounded-[1.5rem] overflow-hidden relative">
              <div class="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl" />
              <div class="p-4 pt-12">
                <div class="space-y-3">
                  <div class="h-32 bg-blue-500/20 rounded-xl" />
                  <div class="h-4 bg-gray-700 rounded w-3/4" />
                  <div class="h-4 bg-gray-700 rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
          <div class="absolute top-20 right-0 w-[400px] h-[300px] bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl transform rotate-3 hover:rotate-1 transition-transform duration-500 z-10 flex flex-col overflow-hidden">
            <div class="h-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center px-4 gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400" />
              <div class="w-3 h-3 rounded-full bg-yellow-400" />
              <div class="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div class="flex-1 p-6 flex gap-6">
              <div class="w-16 h-full bg-gray-50 dark:bg-gray-900 rounded-lg" />
              <div class="flex-1 space-y-4">
                <div class="h-8 bg-gray-100 dark:bg-gray-700 rounded w-1/3" />
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-24 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800" />
                  <div class="h-24 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800" />
                  <div class="h-24 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Deployment & Private Cloud -->
    <section>
      <div class="bg-[#0B1120] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />

        <div class="relative z-10 text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">企业级私有化部署</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            基于 Docker 容器化架构，支持一键部署到企业内网。数据完全私有，安全可控。
            支持对接 Cursor 等 AI 编程工具，构建内部智能化研发中台。
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 relative z-10">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
              <span class="i-carbon-server text-2xl" />
            </div>
            <h3 class="font-bold text-lg mb-2">Docker 容器化</h3>
            <p class="text-sm text-gray-400">
              MongoDB + Node.js + APINTO 网关。通过 docker-compose 一键拉起完整环境。
            </p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
              <span class="i-carbon-wand text-2xl" />
            </div>
            <h3 class="font-bold text-lg mb-2">AI 编程集成</h3>
            <p class="text-sm text-gray-400">
              无缝对接 Cursor/Trae。AI 生成的代码可实时同步至线上环境，研发效率提升 10 倍。
            </p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-4">
              <span class="i-carbon-shield text-2xl" />
            </div>
            <h3 class="font-bold text-lg mb-2">多租户中台</h3>
            <p class="text-sm text-gray-400">
              支持多租户模式与独立域名绑定。一套系统即可管理企业内部所有前端项目。
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>