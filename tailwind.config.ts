import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './App.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'var(--md-sys-color-surface)',
          dim: 'var(--md-sys-color-surface-dim)',
          container: 'var(--md-sys-color-surface-container)',
          'container-high': 'var(--md-sys-color-surface-container-high)'
        },
        primary: {
          DEFAULT: 'var(--md-sys-color-primary)',
          on: 'var(--md-sys-color-on-primary)',
          container: 'var(--md-sys-color-primary-container)',
          'on-container': 'var(--md-sys-color-on-primary-container)'
        },
        secondary: {
          DEFAULT: 'var(--md-sys-color-secondary)'
        },
        tertiary: {
          DEFAULT: 'var(--md-sys-color-tertiary)'
        },
        'on-surface': {
          DEFAULT: 'var(--md-sys-color-on-surface)',
          variant: 'var(--md-sys-color-on-surface-variant)'
        },
        outline: 'var(--md-sys-color-outline)'
      },
      borderRadius: {
        'md-medium': 'var(--md-sys-shape-corner-medium)',
        'md-large': 'var(--md-sys-shape-corner-large)'
      }
    }
  },
  plugins: []
} satisfies Config
