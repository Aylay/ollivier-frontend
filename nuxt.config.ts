// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
        dir: 'ltr'
      },
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      meta: [
        { name: 'og:locale', content: 'fr_FR' },
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'Carrosserie Ollivier' },
        { name: 'og:twitter_card', content: 'summary_large_image' },
        { name: 'msapplication-TileColor', content: '#FFFFFF' },
        { name: 'msapplication-TileImage', content: '/favicon/mstile-144x144.png' },
        { name: 'msapplication-square70x70logo', content: '/favicon/mstile-70x70.png' },
        { name: 'msapplication-square150x150logo', content: '/favicon/mstile-150x150.png' },
        { name: 'msapplication-square310x310logo', content: '/favicon/mstile-310x310.png' },
      ],
      link: [
        { rel:'icon', type:'image/png', href:'/favicon/favicon-196x196.png', sizes:'196x196' },
        { rel:'icon', type:'image/png', href:'/favicon/favicon-128x128.png', sizes:'128x128' },
        { rel:'icon', type:'image/png', href:'/favicon/favicon-96x96.png', sizes:'96x96' },
        { rel:'icon', type:'image/png', href:'/favicon/favicon-32x32.png', sizes:'32x32' },
        { rel:'icon', type:'image/png', href:'/favicon/favicon-16x16.png', sizes:'16x16' },
        { rel:'icon', type:'image/x-icon', href:'/favicon/favicon.ico' },
        { rel:'apple-touch-icon-precomposed', href:'/favicon/apple-touch-icon-57x57.png', sizes:'57x57' },
        { rel:'apple-touch-icon-precomposed', href:'/favicon/apple-touch-icon-114x114.png', sizes:'114x114' },
        { rel:'apple-touch-icon-precomposed', href:'/favicon/apple-touch-icon-72x72.png', sizes:'72x72' },
        { rel:'apple-touch-icon-precomposed', href:'/favicon/apple-touch-icon-144x144.png', sizes:'144x144' },
        { rel:'apple-touch-icon-precomposed', href:'/favicon/apple-touch-icon-60x60.png', sizes:'60x60' },
        { rel:'apple-touch-icon-precomposed', href:'/favicon/apple-touch-icon-120x120.png', sizes:'120x120' },
        { rel:'apple-touch-icon-precomposed', href:'/favicon/apple-touch-icon-76x76.png', sizes:'76x76' },
        { rel:'apple-touch-icon-precomposed', href:'/favicon/apple-touch-icon-152x152.png', sizes:'152x152' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.STRAPI_URL
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
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
