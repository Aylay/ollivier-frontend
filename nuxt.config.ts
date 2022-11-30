// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
        dir: 'ltr'
      },
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.STRAPI_URL
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
    '@nuxtjs/strapi'
  ],
  
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  googleFonts: {
    display: 'swap',
    families: {
      Barlow: [700],
      Heebo: [400, 500]
    }
  },
  
  build: {
    transpile: ['@heroicons/vue']
  }
})
