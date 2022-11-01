export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
      [
        '@storyblok/nuxt',
        {
                  accessToken: 'X2nlnfYMkVnwBbDGtyHP6Qtt',
                  // If Server Location === US then:
                  apiOptions: { region: 'us' }
              }
      ],
      
    ],
    i18n: {
        strategy: 'prefix_except_default',
        locales: ['en', 'es'],
        defaultLocale: 'en', // default locale
      }
  })