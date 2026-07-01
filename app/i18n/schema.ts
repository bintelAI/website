import type { CaseStudy, ProductDetail, ProductMatrixItem, Solution, TeamMember } from '~/constants'

export type LocaleCode = 'zh-CN' | 'en-US'

export interface LocaleMessages {
  common: {
    siteName: string
    siteTitle: string
    siteDescription: string
    keywords: string[]
    author: string
    brandShort: string
    brandFull: string
    defaultOgImage: string
    readMore: string
    loading: string
    loadFailed: string
    retry: string
    notFound: string
  }
  nav: {
    home: string
    products: string
    solutions: string
    blog: string
    about: string
    cases: string
    contact: string
    loginDimens: string
    corePlatform: string
    enterpriseProducts: string
    openSourceProducts: string
    viewAllProducts: string
    languageLabel: string
  }
  footer: {
    intro: string
    productServices: string
    solutions: string
    followWechat: string
    followWechatDesc: string
    qrAlt: string
    privacy: string
    terms: string
    solutionLinks: string[]
  }
  home: {
    seoTitle: string
    heroBadge: string
    heroHeadline: string
    heroSubheadline: string
    primaryCta: string
    secondaryCta: string
    trustTitle: string
    trustCount: string
    features: Array<{
      title: string
      desc: string
      icon: string
      gradient: string
    }>
    productMatrixTitle: string
    productMatrixSubtitle: string
    flagship: string
    newBadge: string
    learnDimens: string
    dimensBadges: string[]
    ctaTitle: string
    ctaDescription: string
    ctaPrimary: string
    ctaSecondary: string
  }
  productsPage: {
    seoTitle: string
    seoDescription: string
    seoKeywords: string[]
    badge: string
    title: string
    description: string
    statsProducts: string
    statsOnline: string
    statsCategories: string
    categoriesCount: string
    searchPlaceholder: string
    emptyTitle: string
    emptyDescription: string
    clearFilters: string
    tabs: Array<{ id: 'all' | 'core' | 'enterprise' | 'industry', label: string, icon: string }>
    sections: {
      core: string
      enterprise: string
      industry: string
    }
    status: Record<'online' | 'developing' | 'planned', string>
    industryTag: string
  }
  productDetailPage: {
    notFoundTitle: string
    notFoundDesc: string
    backToProducts: string
    commercialBadge: string
    primaryCta: string
    secondaryCta: string
    featuresTitle: string
    featuresSubtitle: string
    featureDescriptionPrefix: string
    featureDescriptionSuffix: string
    scenariosTitle: string
    scenarioDescriptionPrefix: string
    scenarioDescriptionSuffix: string
    specsTitle: string
    ctaTitle: string
    ctaDescription: string
    ctaButton: string
  }
  casesPage: {
    seoTitle: string
    seoDescription: string
    title: string
    description: string
    viewAll: string
  }
  contactPage: {
    seoTitle: string
    seoDescription: string
    title: string
    subtitle: string
    contactInfo: string
    addressLabel: string
    addressValue: string
    wechatLabel: string
    wechatValue: string
    emailLabel: string
    followUs: string
    consultation: string
    name: string
    phone: string
    email: string
    message: string
    namePlaceholder: string
    phonePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    submit: string
    qrConsultTitle: string
    qrConsultDesc: string
    qrConsultButton: string
  }
  aboutPage: {
    seoTitle: string
    seoDescription: string
    teamTitle: string
    teamSubtitle: string
    contactTitle: string
    contactSubtitle: string
  }
  blogPage: {
    seoTitle: string
    seoDescription: string
    seoKeywords: string[]
    badge: string
    title: string
    subtitle: string
    allCategory: string
    uncategorized: string
    loading: string
    loadFailedTitle: string
    listError: string
    detailError: string
    notFound: string
    backToList: string
    readFull: string
    authorFallback: string
    share: string
    subscribeTitle: string
    subscribeDesc: string
    emailPlaceholder: string
    subscribe: string
    emptyTitle: string
    emptyDescription: string
    viewAll: string
    categories: Record<string, string>
  }
  data: {
    products: ProductDetail[]
    productMatrix: ProductMatrixItem[]
    cases: CaseStudy[]
    team: TeamMember[]
    solutions: Solution[]
  }
}
