import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    // 动效相关 shortcuts：所有动画 keyframes 定义在 ~/assets/css/animations.css
    ['anim-float', 'animate-float'],
    ['anim-float-soft', 'animate-float-soft'],
    ['anim-spin-slow', 'animate-spin-slow'],
    ['anim-pop', 'animate-pop'],
    ['anim-breathe', 'animate-breathe'],
    ['anim-gradient', 'animate-gradient'],
    ['anim-text-shimmer', 'animate-text-shimmer'],
    // 通用卡片悬浮抬升 + 阴影
    ['hover-lift', 'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl'],
    ['hover-lift-lg', 'transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl'],
    // 闪光扫过容器
    ['shine-hover', 'shine-on-hover'],
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
