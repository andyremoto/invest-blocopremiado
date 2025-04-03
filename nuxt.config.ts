// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Bloco Premiado - Sorteios na Blockchain',
      meta: [
        { name: 'description', content: 'Bloco Premiado é um DApp premium que revoluciona a maneira de fazer rifas e loterias, de forma segura, transparente e auditável.' },
        // Theme color for browser tabs/address bars (Chrome, Firefox, etc)
        { name: 'theme-color', content: '#831843' },
        
        // iOS status bar - ensure dark text on light status bar
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        
        // For specific pages (dashboard) - can use JS to change this dynamically
        { name: 'apple-mobile-web-app-title', content: 'Bloco Premiado' },
        
        // For Safari iOS status bar
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2025-04-02'
})