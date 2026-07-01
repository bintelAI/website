<script setup lang="ts">
definePageMeta({ layout: 'default' })

const { locale, messages } = useLocale()
const teamMembers = computed(() => messages.value.data.team)

useSeo({
  title: messages.value.aboutPage.seoTitle,
  description: messages.value.aboutPage.seoDescription,
  keywords: [messages.value.common.siteName, messages.value.aboutPage.teamTitle],
  locale: locale.value,
  siteName: messages.value.common.siteName,
})
</script>

<template>
  <div class="bg-white flex flex-col min-h-screen items-center">
    <Reveal variant="scale">
      <CompanyIntro />
    </Reveal>
    <Reveal variant="left" width="100%">
      <DualEngine />
    </Reveal>
    <Reveal variant="right" width="100%">
      <TrafficMatrix />
    </Reveal>
    <Reveal variant="up" width="100%">
      <AiGrowth />
    </Reveal>
    <!-- Team Section -->
    <section class="py-16 bg-slate-50">
      <div class="mx-auto px-6 max-w-7xl">
        <Reveal>
          <div class="mb-12 text-center">
            <h2 class="animate-text-shimmer text-3xl text-transparent font-bold mb-4 from-slate-900 to-slate-900 via-blue-500 bg-gradient-to-r bg-clip-text sm:text-4xl">
              {{ messages.aboutPage.teamTitle }}
            </h2>
            <p class="text-lg text-slate-500 mx-auto max-w-2xl">
              {{ messages.aboutPage.teamSubtitle }}
            </p>
          </div>
        </Reveal>
        <div class="text-center gap-6 grid md:grid-cols-4">
          <Reveal
            v-for="(member, index) in teamMembers"
            :key="member.name"
            variant="scale"
            :delay="index * 0.1"
            width="100%"
          >
            <div class="group h-full cursor-pointer">
              <div class="mx-auto mb-4 border-4 border-white rounded-full bg-gray-100 h-32 w-32 shadow-md transition-all overflow-hidden group-hover:border-blue-100">
                <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`" :alt="member.name" class="h-full w-full transition-transform duration-300 object-cover group-hover:scale-110">
              </div>
              <h4 class="text-slate-900 font-bold transition-colors group-hover:text-blue-600">
                {{ member.name }}
              </h4>
              <p class="text-sm text-slate-500 mb-2">
                {{ member.role }}
              </p>
              <p class="text-xs text-slate-400 mx-auto max-w-[150px]">
                {{ member.description }}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 border-t border-gray-100 bg-white">
      <div class="mx-auto px-6 max-w-7xl">
        <Reveal>
          <div class="mb-12 text-center">
            <h2 class="animate-text-shimmer text-3xl text-transparent font-bold mb-4 from-slate-900 to-slate-900 via-blue-500 bg-gradient-to-r bg-clip-text sm:text-4xl">
              {{ messages.aboutPage.contactTitle }}
            </h2>
            <p class="text-lg text-slate-500">
              {{ messages.aboutPage.contactSubtitle }}
            </p>
          </div>
          <div class="gap-12 grid lg:grid-cols-2">
            <div class="p-8 border border-gray-100 rounded-2xl bg-gray-50 h-full shadow-sm">
              <h3 class="text-xl text-slate-900 font-bold mb-8">
                {{ messages.contactPage.contactInfo }}
              </h3>
              <div class="space-y-8">
                <div class="group flex items-start">
                  <div class="text-blue-600 mr-4 rounded-full bg-white flex shrink-0 h-12 w-12 shadow-sm transition-transform duration-300 items-center justify-center group-hover:rotate-6 group-hover:scale-110">
                    <span class="i-carbon-location text-xl" />
                  </div>
                  <div>
                    <h4 class="text-slate-900 font-bold mb-1">
                      {{ messages.contactPage.addressLabel }}
                    </h4>
                    <p class="text-slate-600">
                      {{ messages.contactPage.addressValue }}
                    </p>
                  </div>
                </div>
                <div class="group flex items-start">
                  <div class="text-purple-600 mr-4 rounded-full bg-white flex shrink-0 h-12 w-12 shadow-sm transition-transform duration-300 items-center justify-center group-hover:rotate-6 group-hover:scale-110">
                    <span class="i-carbon-logo-wechat text-xl" />
                  </div>
                  <div>
                    <h4 class="text-slate-900 font-bold mb-1">
                      {{ messages.contactPage.wechatLabel }}
                    </h4>
                    <p class="text-slate-600">
                      l4537459
                    </p>
                    <img src="/static/wechat1.png" :alt="messages.contactPage.wechatLabel" class="mt-2 border border-gray-100 rounded-lg h-24 w-24 shadow-sm">
                  </div>
                </div>
                <div class="group flex items-start">
                  <div class="text-green-600 mr-4 rounded-full bg-white flex shrink-0 h-12 w-12 shadow-sm transition-transform duration-300 items-center justify-center group-hover:rotate-6 group-hover:scale-110">
                    <span class="i-carbon-mail-all text-xl" />
                  </div>
                  <div>
                    <h4 class="text-slate-900 font-bold mb-1">
                      {{ messages.contactPage.emailLabel }}
                    </h4>
                    <p class="text-slate-600">
                      lixiang@bintelai.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-8 text-center border border-gray-100 rounded-2xl bg-white flex flex-col shadow-lg items-center justify-center">
              <h3 class="text-xl text-slate-900 font-bold mb-6">
                {{ messages.contactPage.qrConsultTitle }}
              </h3>
              <div class="mb-8 p-4 border border-gray-200 rounded-2xl border-dashed bg-gray-50">
                <img src="/static/表单.png" :alt="messages.contactPage.qrConsultTitle" class="mx-auto h-48 w-48 shadow-sm object-contain">
                <p class="text-sm text-slate-500 mt-4">
                  {{ messages.contactPage.qrConsultDesc }}
                </p>
              </div>
              <a href="https://icn0866todip.feishu.cn/share/base/form/shrcnUHjyb4TY05cVEBXe1UitFf" target="_blank" rel="noopener noreferrer" class="w-full">
                <button class="text-lg text-white font-medium py-4 rounded-lg bg-blue-600 w-full shadow-blue-500/30 shadow-lg transition-all hover:bg-blue-700">
                  {{ messages.contactPage.qrConsultButton }}
                </button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>
