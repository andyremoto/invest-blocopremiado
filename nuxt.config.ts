// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Bloco Premiado - Sorteios na Blockchain',
      meta: [
        { name: 'description', content: 'NostroLet é um DApp premium que revoluciona o mercado imobiliário através da tokenização de imóveis.' }
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2025-04-02'
})