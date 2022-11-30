import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(
    createGtm({
      id: 'GTM-MLL86GC',
      defer: false,
      compatibility: false,
      // nonce: '2726c7f26c', // Will add `nonce` to the script tag
      enabled: true,
      debug: true,
      loadScript: true,
      trackOnNextTick: false,
    })
  )
})