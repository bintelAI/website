<script setup lang="ts">
import { blogPosts } from '~/constants'

definePageMeta({ layout: 'default' })

const route = useRoute()
const id = computed(() => Number(route.params.id))

const post = computed(() => {
  return blogPosts.find(p => p.id === id.value)
})

watchEffect(() => {
  if (post.value) {
    useSeo({
      title: post.value.title,
      description: post.value.description,
      keywords: post.value.tags,
      ogImage: post.value.coverImage,
    })
  }
})

const categoryStyles: Record<string, string> = {
  '产品动态': 'bg-blue-100 text-blue-700',
  '行业应用': 'bg-emerald-100 text-emerald-700',
  '技术洞察': 'bg-purple-100 text-purple-700',
}

function getCategoryStyle(category: string) {
  return categoryStyles[category] || 'bg-gray-100 text-gray-700'
}

const coverColors: Record<number, string> = {
  1: 'from-blue-500 to-indigo-600',
  2: 'from-teal-400 to-cyan-500',
  3: 'from-purple-500 to-pink-500',
}

function getCoverColor(idNum: number) {
  return coverColors[idNum] || 'from-blue-500 to-indigo-600'
}

// 补充分段内容
const fullContent = computed(() => {
  if (!post.value)
    return ''
  const contentMap: Record<number, string> = {
    1: '基于 LLaMA 3 与 YOLOv11 驱动的自适应采集引擎，方块智联 AI 云控采集系统 2.0 实现了对抖音、小红书、微博等复杂平台的零封禁深度采集。系统内置智能代理池管理，自动轮换 IP 与用户代理，有效规避反爬机制。\n\n新版本引入了多模态数据融合能力，不仅支持结构化文本数据的采集，还能对图片、视频进行智能识别与标签化处理，助力企业构建全方位的多模态数据资产。\n\n在数据质量方面，系统提供了可视化数据清洗管道，支持自定义规则引擎与 AI 辅助校验，确保采集数据的准确性与一致性。同时，基于角色的访问控制与全链路审计日志，让数据治理更加合规可控。\n\n未来，方块智联将持续迭代 AI 云控采集系统，计划在下一版本中加入实时数据流处理能力，进一步降低数据采集到分析的延迟，为企业提供更实时的数据洞察。',
    2: '方块智联运维智能问数系统正式上线，标志着政企运维从"被动响应"迈向"主动智能"的新阶段。系统深度集成了 SSE/MCP 协议与故障智能体，支持自然语言即时问数与自动化故障自愈。\n\n传统运维系统存在配置修改难、操作门槛高、故障定位慢等痛点。运维智能问数系统通过自然语言处理技术，让运维人员可以用日常语言查询系统状态、分析日志、诊断故障，无需记忆复杂的命令与查询语法。\n\n系统内置的知识图谱引擎持续学习运维数据，沉淀运维经验，实现故障根因的自动分析与推荐修复方案。结合自动化工作流引擎，常见故障可在分钟级内完成自动诊断与恢复，大幅降低 MTTR。\n\n目前该系统已在多个政企客户环境中成功部署，平均故障响应时间缩短了 80%，运维效率提升超过 3 倍。',
    3: 'Appthen 低代码平台深度集成 Trae 与 Cursor 等 AI 编程工具，通过代码双向同步技术，实现了可视化设计与 AI 辅助编程的完美融合。研发效率提升 10 倍以上，让开发者从重复性工作中解放出来。\n\n传统的低代码平台往往受限于预设组件与模板，难以满足复杂业务场景的定制需求。Appthen 通过开放架构与代码级扩展能力，让开发者可以在可视化编辑器的任意节点注入自定义代码，同时支持从代码反向生成可视化组件。\n\n这种双向同步机制意味着团队中的不同角色可以并行协作：产品经理使用可视化编辑器快速搭建原型，开发者使用 AI 编程工具编写复杂业务逻辑，两者实时同步、互不干扰。\n\nAppthen 目前已支持 Docker 一键私有化部署，并内置了完善的权限管理与版本控制功能，为企业级应用开发提供了完整的端到端解决方案。',
  }
  return contentMap[post.value.id] || post.value.description
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <!-- 返回按钮 -->
      <NuxtLink
        to="/blog"
        class="group inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors"
      >
        <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2 group-hover:bg-blue-100 transition-colors">
          <span class="i-carbon-arrow-left" />
        </div>
        返回新闻列表
      </NuxtLink>

      <!-- 文章内容 -->
      <template v-if="post">
        <article>
          <!-- 头部 -->
          <div class="mb-10 text-center">
            <span
              class="inline-block px-3 py-1 rounded-full text-sm font-bold mb-6"
              :class="getCategoryStyle(post.category)"
            >
              {{ post.category }}
            </span>
            <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {{ post.title }}
            </h1>

            <div class="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span class="i-carbon-user-avatar" />
                </div>
                <span>{{ post.author || '方块智联' }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="i-carbon-calendar" />
                <span>{{ post.date }}</span>
              </div>
              <button class="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <span class="i-carbon-share" />
                分享
              </button>
            </div>
          </div>

          <!-- 封面渐变图 -->
          <div
            class="rounded-2xl overflow-hidden shadow-xl mb-12 h-64 md:h-80 bg-gradient-to-br"
            :class="getCoverColor(post.id)"
          />

          <!-- 正文 -->
          <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              {{ post.description }}
            </p>
            <div class="border-t border-gray-100 pt-8">
              <p
                v-for="(paragraph, index) in fullContent.split('\n\n')"
                :key="index"
                class="text-gray-700 leading-relaxed mb-6"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>

          <!-- 标签 & 底部 -->
          <div class="border-t border-gray-100 pt-8 mt-12">
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tag in (post.tags || [])"
                :key="tag"
                class="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- 订阅区域 -->
            <div class="bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 class="font-bold text-gray-900 text-lg mb-2">订阅我们的新闻通讯</h4>
                <p class="text-gray-500">每周获取最新的科技资讯和产品动态，直接发送到您的邮箱。</p>
              </div>
              <div class="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder="输入您的邮箱"
                  class="px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 outline-none transition-all flex-grow md:w-56"
                >
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </article>
      </template>

      <!-- 未找到文章 -->
      <div v-else class="text-center py-20">
        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span class="i-carbon-document-unknown text-4xl text-gray-400" />
        </div>
        <h1 class="text-2xl font-bold text-gray-900 mb-2">文章未找到</h1>
        <p class="text-gray-500 mb-8">您要查看的文章可能已被移除或不存在</p>
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          <span class="i-carbon-arrow-left" />
          返回新闻列表
        </NuxtLink>
      </div>
    </div>
  </div>
</template>