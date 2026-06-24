<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const language = ref<'zh' | 'en'>('zh')
const emailNotify = ref(true)
const siteNotify = ref(true)
const publicProfile = ref(true)
const anonymousMode = ref(false)
const theme = ref<'system' | 'light' | 'dark'>('system')

function handleSave() {
  // TODO: 保存设置到后端
  console.log('保存设置:', {
    language: language.value,
    emailNotify: emailNotify.value,
    siteNotify: siteNotify.value,
    publicProfile: publicProfile.value,
    anonymousMode: anonymousMode.value,
    theme: theme.value,
  })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 pb-20">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        设置与偏好
      </h1>
      <p class="text-gray-500 dark:text-gray-400 mb-10">
        管理您的应用偏好与通知设置
      </p>

      <div class="space-y-6">
        <!-- 语言偏好 -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                <span class="i-carbon-translate text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white">语言偏好</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">选择您偏好的界面语言</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input v-model="language" type="radio" value="zh" class="sr-only peer" />
                <span class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 flex items-center justify-center transition-colors">
                  <span v-if="language === 'zh'" class="w-2.5 h-2.5 rounded-full bg-white" />
                </span>
                <span class="text-sm text-gray-700 dark:text-gray-300">中文</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer ml-4">
                <input v-model="language" type="radio" value="en" class="sr-only peer" />
                <span class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 flex items-center justify-center transition-colors">
                  <span v-if="language === 'en'" class="w-2.5 h-2.5 rounded-full bg-white" />
                </span>
                <span class="text-sm text-gray-700 dark:text-gray-300">English</span>
              </label>
            </div>
          </div>
        </div>

        <!-- 通知设置 -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center shrink-0">
                <span class="i-carbon-notification text-xl text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white">通知设置</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">管理您接收通知的方式</p>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <label class="flex items-center gap-3 cursor-pointer">
                <span class="text-sm text-gray-700 dark:text-gray-300">邮件通知</span>
                <button
                  type="button"
                  role="switch"
                  :aria-checked="emailNotify"
                  :class="emailNotify ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                  @click="emailNotify = !emailNotify"
                >
                  <span
                    :class="emailNotify ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 rounded-full bg-white transition-transform"
                  />
                </button>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <span class="text-sm text-gray-700 dark:text-gray-300">站内信</span>
                <button
                  type="button"
                  role="switch"
                  :aria-checked="siteNotify"
                  :class="siteNotify ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                  @click="siteNotify = !siteNotify"
                >
                  <span
                    :class="siteNotify ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 rounded-full bg-white transition-transform"
                  />
                </button>
              </label>
            </div>
          </div>
        </div>

        <!-- 隐私设置 -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center shrink-0">
                <span class="i-carbon-security text-xl text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white">隐私设置</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">控制您的个人资料可见性</p>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <label class="flex items-center gap-3 cursor-pointer">
                <span class="text-sm text-gray-700 dark:text-gray-300">公开资料</span>
                <button
                  type="button"
                  role="switch"
                  :aria-checked="publicProfile"
                  :class="publicProfile ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                  @click="publicProfile = !publicProfile"
                >
                  <span
                    :class="publicProfile ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 rounded-full bg-white transition-transform"
                  />
                </button>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <span class="text-sm text-gray-700 dark:text-gray-300">匿名使用</span>
                <button
                  type="button"
                  role="switch"
                  :aria-checked="anonymousMode"
                  :class="anonymousMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                  @click="anonymousMode = !anonymousMode"
                >
                  <span
                    :class="anonymousMode ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 rounded-full bg-white transition-transform"
                  />
                </button>
              </label>
            </div>
          </div>
        </div>

        <!-- 主题偏好 -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-teal-50 dark:bg-teal-900/30 rounded-lg flex items-center justify-center shrink-0">
                <span class="i-carbon-layers text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white">主题偏好</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">选择您喜欢的界面主题</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input v-model="theme" type="radio" value="system" class="sr-only peer" />
                <span class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 flex items-center justify-center transition-colors">
                  <span v-if="theme === 'system'" class="w-2.5 h-2.5 rounded-full bg-white" />
                </span>
                <span class="text-sm text-gray-700 dark:text-gray-300">跟随系统</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer ml-4">
                <input v-model="theme" type="radio" value="light" class="sr-only peer" />
                <span class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 flex items-center justify-center transition-colors">
                  <span v-if="theme === 'light'" class="w-2.5 h-2.5 rounded-full bg-white" />
                </span>
                <span class="text-sm text-gray-700 dark:text-gray-300">浅色</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer ml-4">
                <input v-model="theme" type="radio" value="dark" class="sr-only peer" />
                <span class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 flex items-center justify-center transition-colors">
                  <span v-if="theme === 'dark'" class="w-2.5 h-2.5 rounded-full bg-white" />
                </span>
                <span class="text-sm text-gray-700 dark:text-gray-300">深色</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- 保存按钮 -->
      <div class="mt-10 flex justify-end">
        <button
          class="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-blue-500/25"
          @click="handleSave"
        >
          <span class="i-carbon-checkmark text-lg" />
          保存设置
        </button>
      </div>
    </div>
  </div>
</template>