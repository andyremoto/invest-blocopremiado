<!-- pages/index.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Background elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600"></div>
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400 rounded-full filter blur-3xl opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pink-500 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/4 translate-y-1/4"></div>
      
      <!-- Login Form -->
      <div v-if="!authenticated" class="relative z-10 max-w-md w-full">
        <div class="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white border-opacity-20">
          <!-- Logo with animation -->
          <div class="flex justify-center mb-8 transform transition-all hover:scale-105 duration-300">
            <div class="p-3 bg-white rounded-2xl shadow-lg">
              <img src="/bp-logo-new.svg" alt="Bloco Premiado" class="h-20" />
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-center text-white mb-6">Acesso Restrito</h2>
          <p class="text-orange-100 mb-8 text-center">
            Digite a senha para acessar a apresentação da rodada de investimentos do Bloco Premiado.
          </p>
          
          <div class="mb-6">
            <div class="relative">
              <input 
                type="password" 
                v-model="password" 
                placeholder="Digite a senha" 
                class="w-full px-5 py-4 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                @keyup.enter="authenticate"
              />
              <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>
          
          <transition name="fade">
            <div v-if="error" class="text-red-300 text-sm mb-4 bg-red-900 bg-opacity-30 p-3 rounded-lg border border-red-400 border-opacity-30">
              {{ error }}
            </div>
          </transition>
          
          <button 
            @click="authenticate"
            class="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <span class="flex items-center justify-center">
              <span>Acessar Apresentação</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
          
          <div class="mt-6 text-center text-orange-200 text-sm">
            Entre em contato para solicitar acesso: <a href="tel:034984176363" class="text-white hover:underline">034984176363</a>
          </div>
        </div>
      </div>
  
      <div v-else>
        <DashboardComponent />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, defineAsyncComponent } from 'vue';

  const password = ref('');
  const authenticated = ref(false);
  const error = ref('');

  // Import the dashboard component
  const DashboardComponent = defineAsyncComponent(() => import('./dashboard.vue'));

  function authenticate() {
    if (password.value === '0747') {
      authenticated.value = true;
      localStorage.setItem('blocopremiado-auth', 'true');
    } else {
      error.value = 'Senha incorreta. Tente novamente.';
      // Clear password after error
      password.value = '';
      
      // Auto-hide error after 3 seconds
      setTimeout(() => {
        error.value = '';
      }, 3000);
    }
  }

  onMounted(() => {
    if (localStorage.getItem('blocopremiado-auth') === 'true') {
      authenticated.value = true;
    }
  });
  </script>
  
  <style scoped>
  .bg-grid-pattern {
    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  /* Animations */
  .fade-enter-active, 
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>