const SOCIAL_IMAGE_URL = 'https://alfproduction.id/alf-production-social-v1.jpg'
const SOCIAL_IMAGE_ALT = 'ALF Production — Spesialis Produksi Mars & Hymne Lembaga'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-27',
  ssr: true,
  runtimeConfig: {
    public: {
      gaMeasurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID ?? ''
    }
  },
  modules: ['@nuxtjs/sitemap'],
  site: { url: 'https://alfproduction.id/' },
  sitemap: {
    exclude: ['/kebijakan-privasi', '/syarat-ketentuan']
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      failOnError: true
    }
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production'
        ? { cssnano: { preset: ['default', { discardComments: { removeAll: true } }] } }
        : {})
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Spesialis Produksi Mars & Hymne Lembaga | ALF Production',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Produksi Mars & Hymne profesional untuk sekolah, yayasan, pesantren, organisasi, perusahaan, dan instansi di Indonesia.'
        },
        {
          name: 'keywords',
          content:
            'jasa bikin mars hymne semarang, jasa bikin lagu mars jakarta, jasa bikin lagu hymne jakarta, komposer mars sekolah islam'
        },
        { property: 'og:title', content: 'ALF Production — Komposer Spesialis Mars & Hymne Institusi' },
        {
          property: 'og:description',
          content: 'Ciptakan identitas dan kebanggaan institusi Anda dengan lagu Mars & Hymne aransemen studio profesional.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://alfproduction.id/' },
        { property: 'og:site_name', content: 'ALF Production' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:image', content: SOCIAL_IMAGE_URL },
        { property: 'og:image:secure_url', content: SOCIAL_IMAGE_URL },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: SOCIAL_IMAGE_ALT },
        { name: 'geo.region', content: 'ID-JT' },
        { name: 'geo.placename', content: 'Semarang' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ALF Production — Komposer Spesialis Mars & Hymne Institusi' },
        {
          name: 'twitter:description',
          content: 'Ciptakan identitas dan kebanggaan institusi Anda dengan lagu Mars & Hymne aransemen studio profesional.'
        },
        { name: 'twitter:image', content: SOCIAL_IMAGE_URL },
        { name: 'twitter:image:alt', content: SOCIAL_IMAGE_ALT }
      ],
      link: [
        { rel: 'canonical', href: 'https://alfproduction.id/' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://www.youtube.com' }
      ]
    }
  }
})
