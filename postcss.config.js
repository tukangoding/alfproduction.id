module.exports = {
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
}
