export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxtjs/sitemap'],
  site: { url: 'https://alfproduction.id/' },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      failOnError: true,
      ignore: [
        '/faq',
        '/kontak',
        '/kebijakan-privasi',
        '/syarat-ketentuan'
      ]
    }
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production'
        ? {
            '@fullhuman/postcss-purgecss': {
              content: [
                './components/**/*.{vue,js,ts}',
                './layouts/**/*.vue',
                './pages/**/*.vue',
                './composables/**/*.{js,ts}',
                './plugins/**/*.{js,ts}',
                './App.{vue,js,ts}',
                './app.{vue,js,ts}'
              ],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: {
                standard: [/^md-/, /^yt-/],
                deep: [/ytplayer/]
              }
            },
            cssnano: {
              preset: ['default', { discardComments: { removeAll: true } }]
            }
          }
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
        { name: 'geo.placename', content: 'Semarang' }
      ],
      link: [
        { rel: 'canonical', href: 'https://alfproduction.id/' },
        { rel: 'preconnect', href: 'https://www.youtube.com' }
      ]
    }
  }
})
