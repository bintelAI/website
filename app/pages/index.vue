<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

useSeo({
  title: '首页',
  description: '维表智联（Dimens）— AI 原生的企业级智能协作平台。融合多维表格、富文本文档、AI 工作流、审批流、知识库与数字员工，为企业提供一站式数据管理、文档协作与 AI 自动化服务。',
  keywords: ['方块智联', '维表智联', 'Dimens', 'AI工作流', '多维表格', '企业协作', '数字员工'],
  ogImage: '/static/AI维表.jpeg',
})
</script>

<template>
  <HeroSection />
  <DimensOverview />
  <ProductMatrix />
  <CaseStudies />
  <DimensDigitalStaff />
  <BlogSection />
  <CtaSection />
</template>