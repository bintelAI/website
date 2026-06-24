// 网站基础信息
export const appName = '方块智联'
export const appDescription = '维表智联（Dimens）— AI 原生的企业级智能协作平台。融合多维表格、富文本文档、AI 工作流、审批流、知识库与数字员工，为企业提供一站式数据管理、文档协作与 AI 自动化服务。'

// 导航菜单
export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export const headerNav: NavItem[] = [
  { label: '首页', path: '/' },
  {
    label: '产品',
    path: '/products',
    children: [
      { label: '维表智联 Dimens', path: '/product/dimens' },
      { label: 'Appthen 低代码', path: '/products#appthen' },
      { label: '智能画布', path: '/products#canvas' },
      { label: '多维表格', path: '/products#base' },
      { label: 'APIsql 引擎', path: '/products#apisql' },
      { label: 'AI 工作流', path: '/products#workflow' },
      { label: '报表系统', path: '/products#bi' },
      { label: '数字化大屏', path: '/products#screen' },
      { label: '运维问数', path: '/products#ops' },
      { label: 'AI 云控采集', path: '/products#collector' },
      { label: 'SSH 助手', path: '/products#ssh' },
    ],
  },
  { label: '关于', path: '/about' },
  { label: '博客', path: '/blog' },
  { label: '案例', path: '/cases' },
  { label: '解决方案', path: '/solutions' },
  { label: '联系我们', path: '/contact' },
]

// 首页 - 产品特性
export interface ProductFeature {
  title: string
  description: string
  icon: string
}

export const productFeatures: ProductFeature[] = [
  { title: '维表智联 Dimens', description: 'AI 原生企业级智能协作平台，融合多维表格、文档、AI 工作流与数字员工', icon: 'i-carbon-ai-launch' },
  { title: '数字员工', description: '项目级 AI 团队成员，持久身份、长期记忆、自主感知与执行', icon: 'i-carbon-bot' },
  { title: 'AI 工作流', description: '拖拽式 AI 任务编排，17+ 节点类型，零代码实现业务自动化', icon: 'i-carbon-flow' },
  { title: '多维表格', description: 'Agent 原生的智能数据容器，20+ 字段类型与多视图', icon: 'i-carbon-table' },
  { title: '多智能体协作', description: '基于 AI AGENT 引擎，多 Agent 自主感知、委派任务、协作工作', icon: 'i-carbon-collaborate' },
]

// 首页 - 产品矩阵
export interface ProductMatrixItem {
  title: string
  description: string
  tag?: string
  isNew?: boolean
  link?: string
  icon: string
}

export const productMatrix: ProductMatrixItem[] = [
  { title: '维表智联 Dimens', description: 'AI 原生的企业级智能协作平台，融合多维表格、文档、AI 工作流、审批流、知识库与数字员工。', icon: 'i-carbon-ai-launch', link: '/product/dimens', isNew: true },
  { title: '智能画布系统', description: '无限画布交互引擎，构建下一代知识图谱与创意协作平台。', icon: 'i-carbon-dashboard', link: '#canvas' },
  { title: '多维表格', description: '新一代数据协作平台，支持甘特图、看板等多种视图。', icon: 'i-carbon-table', link: '#base' },
  { title: 'APIsql 引擎', description: 'SQL 转 API 一键发布。', icon: 'i-carbon-code', link: '#apisql' },
  { title: '数字化大屏', description: '基于 Appthen 构建。', icon: 'i-carbon-screen', tag: '行业方案', link: '#screen' },
  { title: 'Appthen 低代码', description: 'React 风格可视化编辑器，支持代码双向同步与私有化部署。', icon: 'i-carbon-development', link: '#appthen' },
  { title: '品牌与营销矩阵', description: '拥有百万级流量的自媒体矩阵，提供全案营销推广服务。', icon: 'i-carbon-bring-forward', link: '#marketing' },
]

// 客户案例
export interface CaseStudy {
  title: string
  company: string
  description: string
  metric: string
  metricLabel: string
  icon: string
}

export const caseStudies: CaseStudy[] = [
  {
    title: '构建个性化AI学习平台',
    company: '未来教育集团',
    description: '利用画布商业化系统，为20万学生提供个性化学习路径，学习效率提升40%。',
    metric: '40%',
    metricLabel: '效率提升',
    icon: 'i-carbon-education',
  },
  {
    title: '物流数据可视化指挥中心',
    company: '全球通物流',
    description: '接入大屏管理系统，实时监控全球3000+节点物流状态，调度响应速度缩短至分钟级。',
    metric: '300%',
    metricLabel: '响应提速',
    icon: 'i-carbon-delivery',
  },
  {
    title: '研发效能倍增计划',
    company: '极客科技',
    description: '采用APIsql管理系统重构后端架构，接口开发时间从平均3天缩短至2小时。',
    metric: '65%',
    metricLabel: '研发降本',
    icon: 'i-carbon-develop',
  },
  {
    title: '全渠道库存与销售管理',
    company: '新零售连锁',
    description: '使用多维表格打通线上线下库存数据，实现自动补货与智能调拨。',
    metric: '25%',
    metricLabel: '库存周转 +',
    icon: 'i-carbon-shopping-cart',
  },
]

// 博客文章
export interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  category: string
  link: string
  coverImage?: string
  author?: string
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '方块智联发布 AI 云控采集系统 2.0，重构社交媒体数据获取方式',
    description: '基于 LLaMA 3 与 YOLOv11 驱动的自适应采集引擎，实现了对抖音、小红书等复杂平台的零封禁深度采集，助力企业构建多模态数据资产。',
    date: '2023-12-20',
    category: '产品动态',
    link: '/blog/1',
    coverImage: '/static/1766709836408.png',
    author: 'AI Spider 研发团队',
    tags: ['AI 采集', '大数据', 'LLM', '社交媒体'],
  },
  {
    id: 2,
    title: '运维智能问数系统上线，助力政企实现数字化运维闭环',
    description: '集成 SSE/MCP 协议与故障智能体，支持自然语言即时问数与自动化故障自愈，解决传统运维系统修改难、门槛高的痛点。',
    date: '2023-11-15',
    category: '行业应用',
    link: '/blog/2',
    coverImage: '/static/1766670365240.png',
    author: 'GovTech 事业部',
    tags: ['AIOps', '智能运维', '政企数字化'],
  },
  {
    id: 3,
    title: 'Appthen 低代码平台深度集成 Trae/Cursor，开启 AI 编程新范式',
    description: '通过代码双向同步技术，Appthen 实现了可视化设计与 AI 辅助编程的完美融合，研发效率提升 10 倍以上。',
    date: '2023-10-28',
    category: '技术洞察',
    link: '/blog/3',
    coverImage: '/static/1766707067150.png',
    author: 'Appthen 技术专家',
    tags: ['低代码', 'AI 编程', 'DevOps', 'React'],
  },
]

// 关于页面 - 团队
export interface TeamMember {
  name: string
  role: string
  description: string
  avatar: string
}

export const teamMembers: TeamMember[] = [
  { name: '墨羽', role: '联合创始人 / CTO', description: '原阿里高级工程师', avatar: '' },
  { name: '追风', role: '首席产品官', description: '全栈工程师', avatar: '' },
  { name: '灵犀', role: '全栈工程师', description: '多年全栈能力', avatar: '' },
  { name: '破浪', role: '售前&运营负责人', description: '多年售前以及运营经验', avatar: '' },
]

// 关于页面 - 自媒体矩阵
export interface MediaChannel {
  name: string
  description: string
  followers: string
  icon: string
}

export const mediaChannels: MediaChannel[] = [
  { name: '微信公众号', description: '深度技术与行业洞察', followers: '2w+ 订阅', icon: 'i-carbon-chat' },
  { name: '视频号/B站', description: '硬核教程与产品演示', followers: '30w+ 播放', icon: 'i-carbon-play' },
  { name: '技术社区', description: '掘金/知乎/CSDN', followers: 'Top 20 影响力', icon: 'i-carbon-network-3' },
  { name: '抖音/TikTok', description: 'AI 前沿资讯速递', followers: '1w+ 粉丝', icon: 'i-carbon-music' },
]

// 产品页面
export interface ProductDetail {
  id: string
  title: string
  shortName?: string
  team: string
  description: string
  fullDescription?: string
  features?: string[]
  specs?: string[]
  scenarios?: string[]
  rating: string
  downloads?: string
  tags: string[]
  icon: string
  isIndustry?: boolean
  imageColor?: string
  content?: string
  productStatus?: 'online' | 'developing' | 'planned'
  developer?: string
  externalUrl?: string
  githubUrl?: string
  imageUrl?: string
}

export const productDetails: ProductDetail[] = [
  {
    id: 'dimens',
    title: '维表智联 Dimens',
    shortName: 'Dimens',
    team: '维表智联团队',
    description: '维表智联（Dimens）是一款 AI 原生的企业级智能协作工作平台，融合了多维表格、富文本文档、AI 工作流、审批流、知识库等核心能力。基于 AI AGENT 多智能体协作引擎，为每个项目注入数字员工、为每个团队配备个人助手，让 AI 从工具层跃升为组织层——成为真正的数字化团队成员。',
    fullDescription: '维表智联（Dimens）是 AI 原生的企业级智能协作平台，融合多维表格、富文本文档、AI 工作流、审批流、知识库等核心能力，为企业提供一站式数据管理、文档协作、AI 自动化、审批流程和应用扩展服务。\n\n产品采用四层架构设计——入口层（utool 集成）连接各行各业的产品与场景，业务场景层覆盖 B 端企业与 C 端个人需求，产品能力层提供多维表格、文档协作、AI 工作流、审批流、知识库、微模块系统等六大核心能力，平台与 AI 引擎层依托 AI AGENT 多智能体协作引擎和产品基座，为平台注入数字员工与个人助手两大 AI 角色。\n\n小龙虾（Crayfish）是维表智联的 SaaS 服务版本，采用私有化部署模式，深度集成多智能体协作引擎，让平台从"工具"进化为一支 AI 原生的数字化团队。',
    features: ['AI 原生多维表格', '富文本文档协作', 'AI 工作流编排', '多级审批流引擎', 'RAG 知识库', '数字员工与个人助手', 'AI AGENT 多智能体引擎', '实时协作编辑'],
    specs: ['基于 Yjs CRDT 的多人实时协同编辑', '20+ 种字段类型的多维表格', '17+ 种节点类型的 AI 工作流', '多租户 RBAC 权限体系', '支持 Chroma/FAISS/pgvector 向量存储', '支持 MCP 协议工具调用'],
    scenarios: ['项目管理 — 多维表格搭建项目看板，配合甘特图跟踪进度', '数据管理 — 替代传统 Excel，支持多用户实时协作编辑', '知识管理 — 构建企业知识库，智能问答与知识检索', '审批流程 — 自定义审批流，与多维表格数据联动', '自动化办公 — AI 工作流将重复性工作自动化', 'AI 驱动决策 — 向个人助手询问跨项目数据洞察'],
    rating: '5.0',
    tags: ['AI', '协作平台', '企业级'],
    icon: 'i-carbon-ai-launch',
    imageColor: 'from-blue-600 via-cyan-500 to-purple-600',
    productStatus: 'online',
    developer: '维表智联团队',
    imageUrl: '/static/AI维表.jpeg',
  },
  {
    id: 'appthen',
    title: 'Appthen 低代码开发平台',
    shortName: 'Appthen',
    team: 'Cube Appthen Team',
    description: 'Appthen 是一个接近「常规开发」的低/无代码应用程序可视化开发工具，使用 Taro、React Native、antd、Nextjs 框架构建。它不仅提供极致的可视化拖放编辑体验，还支持代码全量/增量导出与双向同步。内置 Docker 一键私有化部署方案，无缝对接 Cursor 等 AI 编程工具。',
    fullDescription: 'Appthen 是一个接近「常规开发」的低/无代码应用程序可视化开发工具。它基于 React 生态体系，提供极致的可视化拖放编辑体验，同时支持代码全量/增量导出与双向同步。内置 Docker 一键私有化部署方案，无缝对接 Cursor 等 AI 编程工具，让团队协作效率提升 10 倍。',
    features: ['可视化拖拽编辑', '代码双向同步', '模型驱动开发', '多端适配发布', 'Figma 一键粘贴'],
    specs: ['基于 React / Taro / React Native 技术栈', '支持代码全量/增量导出与双向同步', '内置 Docker 一键私有化部署', '对接 Cursor/Trae AI 编程工具', '支持微信小程序、鸿蒙、Web 等多端'],
    scenarios: ['企业级中后台系统快速开发', '移动端多平台应用统一构建', '低代码快速原型与迭代', '传统开发团队向低代码模式迁移'],
    rating: '4.9',
    tags: ['Low-Code', 'DevTools', 'React'],
    icon: 'i-carbon-development',
    imageColor: 'from-indigo-500 to-purple-600',
    productStatus: 'online',
    developer: 'Cube Appthen Team',
    externalUrl: 'https://appthen.com',
    imageUrl: '/static/appthen.png',
  },
  {
    id: 'canvas',
    title: '企业画布系统',
    shortName: '画布系统',
    team: 'Cube EduTech',
    description: '方块智联 C 端画布系统是一款革命性的在线学习与创作平台。它打破了传统线性的学习模式，采用无限画布作为载体，允许用户在二维空间中自由组织知识节点。内置的 AI 助手能够根据用户的思维路径实时生成相关内容、推荐学习资源，并自动构建知识图谱。',
    fullDescription: '方块智联企业画布系统是一款革命性的在线学习与创作平台。它打破传统线性模式，采用无限画布作为载体，允许用户在二维空间中自由组织知识节点。内置 AI 助手根据用户思维路径实时生成内容、推荐学习资源，自动构建知识图谱，让学习与创作过程更加高效和智能。',
    features: ['无限画布创作', 'AI 知识图谱构建', '多模态内容支持', '实时多人协作'],
    specs: ['基于 WebGL 高性能渲染引擎', '支持 Markdown 与富文本编辑', 'AI 智能推荐与路径规划', '实时协同编辑与版本管理'],
    scenarios: ['在线教育与知识培训', '个人知识管理与笔记', '创意头脑风暴与思维导图', '项目规划与架构设计'],
    rating: '4.7',
    tags: ['教育', '创意', '思维导图'],
    icon: 'i-carbon-dashboard',
    imageColor: 'from-teal-400 to-cyan-500',
    productStatus: 'online',
    developer: 'Cube EduTech',
    imageUrl: '/static/canvas.jpeg',
  },
  {
    id: 'base',
    title: '企业知识库多维表格系统',
    shortName: '多维表格',
    team: 'Cube Base Team',
    description: '这不是一张普通的表格，而是一个强大的业务应用构建平台。方块多维表格将结构化数据与非结构化文档完美融合，支持甘特图、看板、日历等多种视图。通过低代码的方式，业务人员可以搭建属于自己的 CRM、ERP 或项目管理系统。',
    fullDescription: '这不是一张普通的表格，而是一个强大的业务应用构建平台。方块多维表格将结构化数据与非结构化文档完美融合，支持甘特图、看板、日历等多种视图。通过低代码的方式，业务人员无需编写代码即可搭建属于自己的 CRM、ERP 或项目管理系统，大幅提升业务敏捷性。',
    features: ['多维数据视图', '自动化工作流', '关联与引用', '细粒度权限管理'],
    specs: ['支持甘特图/看板/日历/表格多种视图', '自定义公式与自动化规则', '百万级数据流畅处理', '开放 API 与 Webhook 集成'],
    scenarios: ['敏捷项目管理与任务跟踪', 'CRM 客户信息管理', '库存与供应链管理', '人事与行政流程管理'],
    rating: '4.9',
    tags: ['SaaS', '效率工具', 'No-Code'],
    icon: 'i-carbon-table',
    imageColor: 'from-blue-500 to-indigo-600',
    productStatus: 'online',
    developer: 'Cube Base Team',
    imageUrl: '/static/AI维表.jpeg',
  },
  {
    id: 'apisql',
    title: 'APIsql 引擎',
    shortName: 'APIsql',
    team: 'Cube DevTools',
    description: 'APIsql 管理系统专为后端开发者和数据工程师设计，它允许用户通过简单的 SQL 配置直接生成高性能的 RESTful API。系统内置了强大的查询优化器和安全网关，支持细粒度的权限控制和实时流量监控，极大地缩短了后端服务的开发周期。',
    fullDescription: 'APIsql 管理系统专为后端开发者和数据工程师设计，允许通过简单的 SQL 配置直接生成高性能的 RESTful API。内置强大的查询优化器和安全网关，支持细粒度权限控制和实时流量监控，极大地缩短了后端服务开发周期，让数据服务化变得前所未有的简单。',
    features: ['SQL 转 API 一键发布', '智能查询优化', '安全网关与鉴权', '实时流量监控'],
    specs: ['RESTful API 自动生成', '内置查询优化器', '细粒度 RBAC 权限控制', '实时流量监控与限流'],
    scenarios: ['后端服务快速开发', '数据中台 API 服务', '微服务架构 API 网关', '多数据源统一接口'],
    rating: '4.8',
    tags: ['开发者工具', '后端', 'API网关'],
    icon: 'i-carbon-code',
    imageColor: 'from-violet-500 to-purple-600',
    productStatus: 'online',
    developer: 'Cube DevTools',
    imageUrl: '/static/1766709836408.png',
  },
  {
    id: 'workflow',
    title: '企业 AI 工作流',
    shortName: 'AI 工作流',
    team: 'Cube AI Workflow Team',
    description: 'AI 工作流是一款基于 ReactFlow 的可视化、低代码 AI 任务编排平台。它通过图形化界面，将复杂的 AI 模型调用、数据库操作、外部 API 集成及业务逻辑控制串联成自动化流程。',
    fullDescription: 'AI 工作流是一款基于 ReactFlow 的可视化、低代码 AI 任务编排平台。通过图形化界面，将复杂的 AI 模型调用、数据库操作、外部 API 集成及业务逻辑控制串联成自动化流程，让非技术用户也能轻松构建智能化业务应用。',
    features: ['可视化流程编排', '多 AI 模型调用', '条件分支逻辑', '定时任务调度'],
    specs: ['基于 ReactFlow 可视化引擎', '支持 OpenAI / 文心 / 通义等模型', '丰富的外部 API 集成', '条件分支与循环逻辑'],
    scenarios: ['AI 任务编排与自动化', '智能审批与流程自动化', '数据 ETL 处理管道', '智能客服与问答系统'],
    rating: '4.9',
    tags: ['AI', 'Workflow', 'No-Code'],
    icon: 'i-carbon-flow',
    imageColor: 'from-orange-500 to-pink-500',
    productStatus: 'online',
    developer: 'Cube AI Workflow Team',
    imageUrl: '/static/aiflow.jpeg',
  },
  {
    id: 'bi',
    title: '企业级报表系统',
    shortName: '报表系统',
    team: 'Cube BI Team',
    description: '企业级报表系统是可视化报表设计平台，支持多数据源接入、自定义报表设计、智能数据分析等功能，帮助企业快速构建数据报表体系。',
    fullDescription: '企业级报表系统是可视化报表设计平台，支持多数据源接入、自定义报表设计、智能数据分析等功能。通过拖拽式操作即可构建专业的数据报表与可视化大屏，帮助企业管理层快速洞察业务趋势。',
    features: ['多数据源接入', '拖拽式报表设计', '丰富图表库', '智能数据分析'],
    specs: ['支持 MySQL / PostgreSQL / API 等多数据源', '拖拽式可视化报表编辑', '内置 20+ 种图表类型', '定时报表生成与邮件推送'],
    scenarios: ['企业经营分析报告', '财务数据分析与报表', '运营数据实时监控', '销售业绩看板'],
    rating: '4.6',
    tags: ['报表', 'BI', '数据分析'],
    icon: 'i-carbon-chart-bar',
    imageColor: 'from-emerald-500 to-teal-500',
    productStatus: 'online',
    developer: 'Cube BI Team',
    imageUrl: '/static/report.jpeg',
  },
  {
    id: 'screen',
    title: '数字化大屏',
    shortName: '数字化大屏',
    team: '行业方案',
    description: '基于 Appthen 引擎构建，拖拽式 3D 数据指挥中心。',
    fullDescription: '基于 Appthen 引擎构建的拖拽式 3D 数据指挥中心。支持多种数据源接入，提供丰富的可视化组件与 3D 场景模板，帮助企业快速搭建专业级数据可视化大屏，实现数据驱动的指挥决策。',
    features: ['拖拽式可视化编辑', '3D 场景渲染', '实时数据推送', '多屏联动控制'],
    specs: ['基于 Appthen 可视化引擎', '支持 3D 模型与场景', 'WebSocket 实时数据推送', '多分辨率自适应'],
    scenarios: ['运维指挥中心', '数据监控大屏', '展厅演示大屏', '会议汇报展示'],
    rating: '4.6',
    downloads: '8000+ 下载',
    tags: ['行业方案'],
    icon: 'i-carbon-screen',
    isIndustry: true,
    imageColor: 'from-rose-500 to-pink-600',
    productStatus: 'online',
    developer: '行业方案',
    imageUrl: '/static/1766707067150.png',
  },
  {
    id: 'ops',
    title: '运维问数',
    shortName: '运维问数',
    team: '行业方案',
    description: '基于 APIsql 开发，集成故障智能体与 AI 问数的政企级运维平台。',
    fullDescription: '基于 APIsql 底座开发，集成故障智能体与 AI 自然语言问数的政企级智能运维平台。告别僵化的定制开发，通过 SSE/MCP 协议构建"故障智能体"与"AI 问数"双引擎，实现运维全流程智能化。',
    features: ['故障智能体自动修复', 'AI 自然语言问数', 'SSH 自动化运维', '多源数据融合分析'],
    specs: ['集成 SSE/MCP 协议', '支持自然语言查询数据', '自动故障诊断与修复', '纯私有化部署 (Air-gapped)'],
    scenarios: ['政企 IT 运维中心', '数据中心监控与管理', '运维数据分析与报表', '自动化运维与故障自愈'],
    rating: '4.8',
    downloads: '5000+ 下载',
    tags: ['行业方案'],
    icon: 'i-carbon-network-3',
    isIndustry: true,
    imageColor: 'from-slate-600 to-blue-800',
    productStatus: 'online',
    developer: '行业方案',
    imageUrl: '/static/1766670365240.png',
  },
  {
    id: 'collector',
    title: 'AI 云控采集',
    shortName: '云控采集',
    team: '行业方案',
    description: '基于 AI 驱动的强力采集系统，专注于社交媒体数据采集，具备高度智能化与自适应能力。',
    fullDescription: '基于 AI 驱动的强力采集系统，专注于社交媒体数据采集。基于 LLaMA 3 与 YOLOv11 驱动自适应采集引擎，实现对抖音、小红书等复杂平台的零封禁深度采集，助力企业构建多模态数据资产。',
    features: ['AI 驱动自适应采集', '智能代理池管理', '多模态数据识别', '可视化数据管道'],
    specs: ['基于 LLaMA 3 + YOLOv11 引擎', '智能 IP 轮换与代理管理', '支持抖音/小红书/微博等多平台', '可视化数据清洗与校验'],
    scenarios: ['社交媒体舆情监测', '竞品数据采集分析', '市场调研与趋势分析', '品牌口碑监控'],
    rating: '4.9',
    downloads: '2万+ 下载',
    tags: ['行业方案'],
    icon: 'i-carbon-cloud-download',
    isIndustry: true,
    imageColor: 'from-amber-500 to-orange-600',
    productStatus: 'online',
    developer: '行业方案',
    imageUrl: '/static/1766709836408.png',
  },
  {
    id: 'ssh',
    title: 'SSH 助手',
    shortName: 'SSH 助手',
    team: 'Cube DevTools',
    description: '新一代智能 SSH 终端工具，集成 AI 对话、Agent 自动化、日志分析等功能。',
    fullDescription: '新一代智能 SSH 终端工具，集成 AI 对话、Agent 自动化、日志分析等功能。让服务器管理从命令行操作升级为智能对话交互，大幅降低运维门槛，提升故障排查与修复效率。',
    features: ['AI 智能对话', 'Agent 自动化操作', '日志智能分析', '多会话管理'],
    specs: ['智能 SSH 终端', 'AI 辅助诊断与修复', '自动化脚本执行引擎', '多会话标签页管理'],
    scenarios: ['服务器日常运维', '故障快速排查与修复', '远程服务器管理', '自动化运维任务'],
    rating: '4.7',
    downloads: '5000+ 下载',
    tags: ['DevOps', '运维工具', 'SSH'],
    icon: 'i-carbon-terminal',
    isIndustry: false,
    imageColor: 'from-slate-600 to-blue-700',
    productStatus: 'online',
    developer: 'Cube DevTools',
    imageUrl: '/static/aissh.png',
  },
]

// 解决方案页面 - 解决方案数据
export interface Solution {
  id: string
  title: string
  subtitle: string
  desc: string
  points: string[]
  icon: string
}

export const solutions: Solution[] = [
  {
    id: 'knowledge',
    title: '数据与知识管理平台',
    subtitle: '全行业通用方向',
    desc: '以多维表格引擎为核心，结合智能画布系统，为企业构建统一的数据与知识管理体系。打通数据孤岛，实现从数据采集、存储、分析到知识沉淀的全链路闭环。',
    points: ['统一数据建模与维度管理', 'AI 驱动的智能知识图谱', '无限画布协作与内容共创', '毫秒级数据聚合与查询'],
    icon: 'i-carbon-layers',
  },
  {
    id: 'marketing',
    title: '智能营销管理解决方案',
    subtitle: '营销行业方向',
    desc: '整合全域营销数据资产，借助 AI 工作流与多维表格构建智能营销中台。从用户画像到精准触达，从效果分析到策略优化，全方位提升营销 ROI。',
    points: ['全渠道用户画像与分层', 'AI 智能投放策略优化', '营销效果实时 BI 分析', '自动化营销工作流编排'],
    icon: 'i-carbon-activity',
  },
  {
    id: 'ops',
    title: '智能运维与监控平台',
    subtitle: '运维行业方向',
    desc: '基于 APIsql 引擎与运维智能体，打造新一代智能运维平台。融合 AI 问数、故障自愈、SSH 自动化等能力，实现运维全流程的数字化与智能化。',
    points: ['故障智能体自动诊断与修复', 'AI 自然语言查询运维数据', 'SSH 自动化运维脚本编排', '多数据源融合实时监控大屏'],
    icon: 'i-carbon-cpu',
  },
]