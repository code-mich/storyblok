export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
      [
        '@storyblok/nuxt',
        {
                  accessToken: 'X2nlnfYMkVnwBbDGtyHP6Qtt',
                  // If Server Location === US then:
                  apiOptions: { region: 'us' }
              }
      ]
    ],
  })