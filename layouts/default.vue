<!-- layouts/default.vue -->
<template>
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow-md sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div class="flex items-center">
            <NuxtLink to="/dashboard" class="flex items-center">
              <img src="/logo.png" alt="NostroLet" class="h-10 mr-3" />
              <h1 class="text-2xl font-bold text-gray-900">NOSTROLET</h1>
            </NuxtLink>
          </div>
          <nav class="hidden md:block">
            <ul class="flex space-x-6">
              <li v-for="item in navItems" :key="item.path">
                <NuxtLink 
                  :to="item.path" 
                  class="px-3 py-2" 
                  :class="$route.path === item.path ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500'"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200 py-2">
          <ul class="px-4 space-y-2">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink 
                :to="item.path" 
                class="block px-3 py-2 rounded-md"
                :class="$route.path === item.path ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'"
                @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </header>
  
      <main class="max-w-7xl mx-auto px-4 py-8">
        <slot />
      </main>
  
      <footer class="bg-gray-800 text-white py-8 mt-12">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center mb-6 md:mb-0">
              <img src="/logo.png" alt="NostroLet" class="h-10 mr-3 bg-white p-1 rounded" />
              <h2 class="text-xl font-bold">NOSTROLET</h2>
            </div>
            <div class="text-center md:text-right">
              <p class="text-gray-400 text-sm">© 2025 NostroLet. Todos os direitos reservados.</p>
              <p class="text-gray-400 text-sm mt-1">Tokenizando o futuro do mercado imobiliário.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  const mobileMenuOpen = ref(false);
  
  const navItems = [
    { name: 'Visão Geral', path: '/dashboard' },
    { name: 'Rodada Fundadora', path: '/founder' },
    { name: 'Pré-Seed', path: '/preseed' },
    { name: 'Mercado', path: '/market' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Investir', path: '/invest' }
  ];
  </script>