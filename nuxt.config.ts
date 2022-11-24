// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi'
  ],

  strapi: {
    // Options
  },
  
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  }
})
