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
      title: 'Jasa Bikin Mars & Hymne Sekolah / Yayasan | ALF Production',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Jasa profesional pembuatan lagu Mars & Hymne khusus Sekolah Islam Terpadu (SIT), Yayasan Pendidikan, & Perguruan Tinggi di Semarang & Jakarta. Audio kualitas studio profesional.'
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
        { property: 'og:image', content: 'https://alfproduction.id/og-cover.jpg' },
        { name: 'geo.region', content: 'ID-JT' },
        { name: 'geo.placename', content: 'Semarang' },
        { name: 'twitter:card', content: 'summary_large_image' }
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
