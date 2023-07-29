// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/hospella/',
    head: {
      title: "Hospella",
      htmlAttrs: {
        'data-theme': 'lofi'
      },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    }
  }, modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  devtools: { enabled: true }
})
