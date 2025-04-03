<!-- layouts/default.vue -->
<template>
    <div class="min-h-screen" :class="isDashboardPage ? 'bg-gradient-to-br from-pink-900 to-red-900 text-white' : 'bg-gray-50'">
      <header class="bg-gradient-to-r from-orange-600 to-pink-600 shadow-md sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-1 sm:space-x-2">
              <img src="/bp-logo-new.svg" alt="Bloco Premiado" class="h-8 sm:h-10 drop-shadow-md" />
              <h1 class="text-lg sm:text-xl md:text-2xl font-bold text-white hidden xs:inline-block">BLOCO PREMIADO</h1>
            </NuxtLink>
          </div>
          <nav class="hidden md:block">
            <ul class="flex space-x-6">
              <li v-for="item in navItems" :key="item.path">
                <NuxtLink 
                  :to="item.path" 
                  class="px-3 py-2" 
                  :class="$route.path === item.path ? 'text-yellow-300 font-semibold' : 'text-white hover:text-yellow-200'"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden bg-gradient-to-br from-orange-700 to-pink-700 border-t border-orange-500 py-2 shadow-lg">
          <ul class="px-4 space-y-2">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink 
                :to="item.path" 
                class="block px-3 py-2 rounded-md"
                :class="$route.path === item.path ? 'bg-orange-600 bg-opacity-40 text-yellow-300 font-semibold' : 'text-white hover:bg-orange-600 hover:bg-opacity-30'"
                @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </header>
  
      <main class="max-w-7xl mx-auto px-4 py-4 sm:py-8">
        <slot />
      </main>
  
      <footer class="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-8 mt-12">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col sm:flex-row justify-between items-center">
            <div class="flex items-center mb-4 sm:mb-0">
              <img src="/bp-logo-new.svg" alt="Bloco Premiado" class="h-10 w-10 mr-3 rounded-lg shadow-md" />
              <h2 class="text-xl font-bold">BLOCO PREMIADO</h2>
            </div>
            <div class="text-center sm:text-right">
              <p class="text-gray-400 text-sm">© 2025 Bloco Premiado. Todos os direitos reservados.</p>
              <p class="text-gray-400 text-sm mt-1">Plataforma de staking com sorteios transparentes e escaláveis.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isDashboardPage = computed(() => route.path === '/dashboard');
  
  const mobileMenuOpen = ref(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Pré-Seed', path: '/preseed-new' },
    { name: 'Arquitetura', path: '/architecture' },
    { name: 'Sorteios', path: '/drawings' },
    { name: 'Investir', path: '/invest' }
  ];
  </script>