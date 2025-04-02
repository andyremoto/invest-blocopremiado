// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'NostroLet - Tokenização de Imóveis',
      meta: [
        { name: 'description', content: 'NostroLet é um DApp premium que revoluciona o mercado imobiliário através da tokenização de imóveis.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  compatibilityDate: '2025-04-02'
})