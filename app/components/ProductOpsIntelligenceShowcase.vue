<script setup lang="ts">
</script>

<template>
  <div class="space-y-24 py-12">
    <!-- 1. Hero / Core Concept: Fault Agent + APIsql -->
    <section>
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold mb-6">
          <span class="i-carbon-data-base text-purple-600" />
          Powered by APIsql
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          国企/政府级智能运维中台
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          告别僵化的定制开发。基于 <strong>APIsql</strong> 底座，集成 <strong>SSE/MCP</strong> 协议，
          打造"故障智能体"与"AI 问数"双引擎驱动的下一代运维平台。
        </p>
      </div>

      <!-- Cyberpunk/Tech Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[300px]">
        <!-- Card 1: Fault Agent (Dark Mode Terminal Style) -->
        <div class="lg:col-span-7 row-span-2 group">
          <div class="h-full w-full rounded-3xl bg-slate-900 border border-slate-700 p-8 flex flex-col relative overflow-hidden shadow-2xl">
            <div class="absolute top-0 right-0 p-6 opacity-20">
              <span class="i-carbon-alert-circle text-8xl text-red-500" />
            </div>

            <div class="relative z-10 flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 border border-red-500/30">
                <span class="i-carbon-bot text-2xl" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">故障智能体 (Fault Agent)</h3>
                <p class="text-slate-400 text-sm">全天候无人值守运维</p>
              </div>
            </div>

            <!-- Terminal Simulation -->
            <div class="flex-1 bg-black/50 rounded-xl border border-slate-700/50 p-4 font-mono text-xs text-green-400 overflow-hidden relative">
              <div class="absolute top-2 right-2 flex gap-1">
                <div class="w-2 h-2 rounded-full bg-red-500/50" />
                <div class="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div class="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div class="space-y-2 opacity-80">
                <div>[System] Connecting to server node-01 via SSH... <span class="text-white">Success</span></div>
                <div>[Agent] Scanning logs for error patterns...</div>
                <div class="text-red-400">[Alert] Detected High CPU Usage (98%) & OOM Killer triggered.</div>
                <div>[AI] Analyzing root cause... <span class="text-blue-400">Memory Leak in Process ID 4521</span></div>
                <div>[Action] Executing auto-repair script `restart_service.sh`...</div>
                <div class="text-white">[System] Service restarted. Health check passed. Issue Resolved.</div>
                <div class="animate-pulse">_</div>
              </div>

              <!-- Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
            </div>

            <div class="mt-6 flex gap-4">
              <div class="flex items-center gap-2 text-slate-300 text-sm bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <span class="i-carbon-shield text-sm text-green-400" />
                安全 SSH 托管
              </div>
              <div class="flex items-center gap-2 text-slate-300 text-sm bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <span class="i-carbon-workflow text-sm text-blue-400" />
                自动修复流
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Intelligent Questioning -->
        <div class="lg:col-span-5 row-span-2 group">
          <div class="h-full w-full rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 flex flex-col shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-teal-50 dark:bg-teal-900/20 rounded-full blur-3xl" />

            <div class="relative z-10 mb-6">
              <div class="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                <span class="i-carbon-message-question text-2xl" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">AI 自然语言问数</h3>
              <p class="text-gray-500 dark:text-gray-400 mt-2">
                基于 SSE + MCP 协议，实时流式响应。无需 SQL，直接对话查数据。
              </p>
            </div>

            <!-- Chat UI Mockup -->
            <div class="flex-1 space-y-4">
              <div class="flex justify-end">
                <div class="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm shadow-md max-w-[85%]">
                  帮我查询上个月服务器 CPU 平均负载超过 80% 的时段，并生成图表。
                </div>
              </div>
              <div class="flex justify-start">
                <div class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-2xl rounded-tl-sm text-sm shadow-sm max-w-[90%]">
                  <div class="flex items-center gap-2 mb-2 text-teal-600 dark:text-teal-400 text-xs font-bold">
                    <span class="i-carbon-data-base" /> SQL Generated
                  </div>
                  <p class="mb-2">已为您检索到 14 个异常时段。数据来源于 Prometheus 监控源。</p>
                  <!-- Fake Chart -->
                  <div class="h-24 w-full bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600 flex items-end justify-between px-2 pb-2 gap-1">
                    <div
                      v-for="(h, i) in [40, 60, 85, 90, 40, 30, 82, 50]"
                      :key="i"
                      class="w-full rounded-t-sm"
                      :class="h > 80 ? 'bg-red-400' : 'bg-teal-400'"
                      :style="{ height: `${h}%` }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: APIsql Engine -->
        <div class="lg:col-span-4 row-span-1">
          <div class="h-full w-full rounded-3xl bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-800 border border-purple-100 dark:border-purple-900/30 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center justify-center text-purple-600 dark:text-purple-400">
                <span class="i-carbon-cable text-xl" />
              </div>
              <span class="text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">Core Engine</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-1">接口/页面自动生成</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">APIsql 驱动，通过 SQL 直接生成 API 接口与前端 CRUD 页面。</p>
            </div>
          </div>
        </div>

        <!-- Card 4: Multi-Source -->
        <div class="lg:col-span-4 row-span-1">
          <div class="h-full w-full rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
            <div class="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
              <span class="i-carbon-layers text-xl" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-1">多源数据融合</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                MySQL, Oracle, PostgreSQL, 日志文件, 监控指标。AI 自动生成 ERD 关系图。
              </p>
            </div>
          </div>
        </div>

        <!-- Card 5: Security -->
        <div class="lg:col-span-4 row-span-1">
          <div class="h-full w-full rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-sm">
                <span class="i-carbon-lock text-xl" />
              </div>
              <span class="i-carbon-key text-slate-400" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-1">政企级安全管控</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">RBAC 细粒度权限，审计日志，私有化部署数据不出域。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Process Flow -->
    <section class="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
      <div class="absolute -left-20 top-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

      <div class="relative z-10 max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">极简的三步构建流程</h2>
          <p class="text-slate-400">从数据接入到智能应用，最快仅需 10 分钟</p>
        </div>

        <div class="space-y-12">
          <!-- Step 1 -->
          <div class="flex md:items-center gap-6 group">
            <div class="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-bold text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-lg">
              01
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
                <span class="i-carbon-data-base text-blue-400" />
                接入数据源
              </h3>
              <p class="text-slate-400 text-sm">
                连接企业现有数据库（SQL/NoSQL）或监控系统。系统自动扫描表结构，
                AI 智能补全字段备注，并生成实体关系图 (ERD)。
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex md:items-center gap-6 group">
            <div class="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-bold text-purple-400 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-lg">
              02
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
                <span class="i-carbon-wand text-purple-400" />
                配置智能模块
              </h3>
              <p class="text-slate-400 text-sm">
                选择需要分析的数据表组成"问数模块"。配置故障检测规则与自动修复脚本。
                利用 APIsql 引擎一键生成 CRUD 接口与管理后台页面。
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex md:items-center gap-6 group">
            <div class="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-bold text-green-400 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors shadow-lg">
              03
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
                <span class="i-carbon-monitor text-green-400" />
                启用智能体
              </h3>
              <p class="text-slate-400 text-sm">
                激活故障智能体，开始全自动巡检与修复。
                启用问数对话框，业务人员可通过自然语言实时查询报表数据。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Tech Specs Table -->
    <section class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[2rem] p-8 md:p-12 shadow-sm">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        企业级技术规格
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="space-y-4">
          <h3 class="font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-2">
            数据源支持
          </h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-green-500 shrink-0" />
              MySQL, PostgreSQL, Oracle
            </li>
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-green-500 shrink-0" />
              Redis, MongoDB
            </li>
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-green-500 shrink-0" />
              Prometheus, Zabbix (监控源)
            </li>
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-green-500 shrink-0" />
              ELK Stack (日志源)
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h3 class="font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-2">
            智能体能力
          </h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-blue-500 shrink-0" />
              多模态故障检测 (Metrics + Logs)
            </li>
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-blue-500 shrink-0" />
              自动 SSH 连接与脚本执行
            </li>
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-blue-500 shrink-0" />
              故障根因分析 (RCA) 报告
            </li>
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-blue-500 shrink-0" />
              MCP 协议微服务通信
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h3 class="font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-2">
            部署与安全
          </h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-purple-500 shrink-0" />
              纯私有化部署 (Air-gapped)
            </li>
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-purple-500 shrink-0" />
              细粒度 RBAC 权限体系
            </li>
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-purple-500 shrink-0" />
              操作审计与回滚机制
            </li>
            <li class="flex items-center gap-2">
              <span class="i-carbon-checkmark text-purple-500 shrink-0" />
              支持信创国产化环境
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>