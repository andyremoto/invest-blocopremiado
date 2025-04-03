<!-- dashboard.vue component -->
<template>
  <div class="overflow-hidden">
    <!-- Premium Navigation Bar -->
    <nav class="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-4 sticky top-0 z-50 shadow-xl transition-all duration-300" :class="{'py-2': scrolled}">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <button @click="logout" type="button" class="flex items-center text-white hover:text-blue-200 transition-all duration-300 transform hover:scale-105 cursor-pointer bg-transparent border-0">
            <div class="bg-white bg-opacity-20 rounded-full p-2 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span class="ml-2 font-medium">Voltar</span>
          </button>
        </div>
        
        <div class="flex items-center space-x-8">
          <a href="/dashboard" class="hover:text-orange-200 transition-all duration-300">Visão Geral</a>
          <a href="#resumo" class="relative hover:text-orange-200 transition-all group py-1">
            <span>Resumo</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#arquitetura" class="relative hover:text-orange-200 transition-all group py-1">
            <span>Arquitetura</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#diferenciais" class="relative hover:text-orange-200 transition-all group py-1">
            <span>Diferenciais</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#investir" class="relative hover:text-orange-200 transition-all group py-1">
            <span>Investimento</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <!-- Investor Action Button -->
        <div class="hidden md:block">
          <a href="#investir" class="bg-white text-pink-600 font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Entrar em contato
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="bg-white bg-opacity-10 text-white p-2 rounded-lg focus:outline-none backdrop-blur-sm hover:bg-opacity-20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu with Animation -->
      <transition name="slide-down">
        <div v-if="mobileMenuOpen" class="md:hidden bg-pink-700 bg-opacity-95 backdrop-blur-md mt-4 mx-4 p-6 rounded-xl shadow-2xl border border-white border-opacity-10">
          <div class="flex flex-col space-y-5">
            <a href="#resumo" class="text-white hover:text-orange-200 transition-all py-2 text-lg font-medium border-b border-pink-600 pb-2">
              Resumo
            </a>
            <a href="#arquitetura" class="text-white hover:text-orange-200 transition-all py-2 text-lg font-medium border-b border-pink-600 pb-2">
              Arquitetura
            </a>
            <a href="#diferenciais" class="text-white hover:text-orange-200 transition-all py-2 text-lg font-medium border-b border-pink-600 pb-2">
              Diferenciais
            </a>
            <a href="#investir" class="text-white hover:text-orange-200 transition-all py-2 text-lg font-medium border-b border-pink-600 pb-2">
              Investir Agora
            </a>
            <a href="#investir" class="bg-white text-blue-800 font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-3 w-full text-center">
              Investir Agora
            </a>
          </div>
        </div>
      </transition>
    </nav>
    
    <!-- Main Content with Animation -->
    <div class="max-w-7xl mx-auto px-4 py-6 space-y-10">
      <!-- Hero Section with Animation and Parallax Effect -->
      <div class="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl shadow-2xl overflow-hidden transform-gpu">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute right-0 bottom-0 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl opacity-10 transform translate-x-1/4 translate-y-1/4"></div>
          <div class="absolute left-1/4 top-0 w-60 h-60 bg-pink-600 opacity-5 rounded-full"></div>
          <div class="absolute left-1/2 top-1/2 w-60 h-60 bg-orange-500 opacity-5 rounded-full"></div>
          <!-- Grid pattern -->
          <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div class="md:flex relative z-10">
          <div class="md:w-1/2 p-8 md:p-12">
            <div v-motion-fade-visible :delay="200">
              <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Rodada Pré-Seed<br />
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">Bloco Premiado</span>
              </h1>
              <p class="text-xl text-orange-100 mb-6 leading-relaxed">
                Plataforma de staking com sorteios baseada em blockchain, utilizando arquitetura Stateless Virtual Ticket (SVTA) para uma experiência totalmente transparente, escalável e sem custos de gas.
                <span class="block mt-3 font-semibold">
                  Transparência + Escalabilidade + Interatividade
                </span>
              </p>
            </div>
            
            <div v-motion-slide-visible-once :delay="600" class="space-y-3 md:space-y-0 md:space-x-4 md:flex items-center">
              <a 
                href="/preseed" 
                class="block md:inline-flex px-6 py-3 bg-white text-pink-600 font-bold rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mb-3 md:mb-0 text-center md:text-left"
                @mouseenter="hoverRound = 'preseed'"
                @mouseleave="hoverRound = null"
              >
                Detalhes da Rodada
              </a>
              <a 
                href="#arquitetura" 
                class="block md:inline-flex px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 md:ml-4 text-center md:text-left"
              >
                Arquitetura SVTA
              </a>
              
              <a href="#diferenciais" class="block md:inline-flex mt-4 md:mt-0 items-center justify-center text-white font-medium hover:text-orange-200 transition-all duration-300 py-3 px-6">
                <span>Diferenciais</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <!-- Hover Info Box -->
            <div v-if="hoverRound" v-motion-fade :delay="50" class="mt-6 bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-white border-opacity-10 shadow-lg">
              <div v-if="hoverRound === 'preseed'" class="text-white">
                <h4 class="font-semibold text-orange-100">Rodada Pré-Seed</h4>
                <div class="flex items-center justify-between mt-2">
                  <span>Valuation:</span>
                  <span class="font-bold">R$ 1.500.000</span>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <span>Captação:</span>
                  <span class="font-bold">R$ 225.000</span>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <span>Equity:</span>
                  <span class="font-bold">15%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="md:w-1/2 flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
            <!-- Animated background for logo -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-64 h-64 bg-white bg-opacity-10 rounded-full filter blur-md animate-pulse-slow"></div>
            </div>
            
            <!-- Logo with Glow Effect -->
            <div class="relative z-10 flex items-center justify-center bg-pink-700 bg-opacity-50 backdrop-blur-sm p-8 rounded-full border border-white border-opacity-10 shadow-2xl">
              <img src="/bp-logo-new.svg" alt="Bloco Premiado" class="max-h-64 md:max-h-80 drop-shadow-2xl" />
            </div>
          </div>
        </div>
        
        <!-- Investment Rounds Stats -->
        <div class="bg-orange-900 bg-opacity-50 backdrop-blur-md border-t border-white border-opacity-10 py-4 px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center">
              <p class="text-xs uppercase tracking-wider text-orange-200 font-medium">Tamanho da Rodada</p>
              <p class="text-2xl font-bold text-white">R$ 225K</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase tracking-wider text-orange-200 font-medium">Valuation</p>
              <p class="text-2xl font-bold text-white">R$ 1,5M</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase tracking-wider text-orange-200 font-medium">Equity</p>
              <p class="text-2xl font-bold text-white">15%</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase tracking-wider text-orange-200 font-medium">Meta de Usuários</p>
              <p class="text-2xl font-bold text-white">250K</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Resumo Section with Premium Design -->
      <div id="resumo" class="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl shadow-2xl overflow-hidden transform-gpu p-8 md:p-10">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -right-20 -top-20 w-60 h-60 bg-yellow-400 opacity-10 rounded-full"></div>
          <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-pink-500 opacity-10 rounded-full"></div>
          <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div class="relative z-10">
          <div class="flex items-center mb-8">
            <div class="bg-white bg-opacity-20 backdrop-blur-sm p-3 mr-5 rounded-xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-white">Resumo</h2>
          </div>
          
          <p class="text-lg text-orange-100 mb-10 max-w-3xl">
            O Bloco Premiado é uma plataforma de staking com sorteios baseada em blockchain, utilizando a arquitetura Stateless Virtual Ticket (SVTA) para oferecer uma experiência totalmente transparente, escalável e sem custos de gas.
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 mt-8">
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-7 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div class="text-orange-200 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Rodada Pré-Seed</h3>
              <p class="text-orange-100">Valuation de R$ 1.500.000 com captação de R$ 225.000 (15% de equity) para impulsionar o crescimento da plataforma e alcançar 250.000 usuários ativos.</p>
            </div>
            
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-7 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div class="text-orange-200 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Modelo de Receita</h3>
              <p class="text-orange-100">Taxa de 1% sobre o valor de staking (congelamento) e 5% sobre vendas e negociações secundárias, com receita estimada de R$ 150.000 no primeiro ano.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Arquitetura Section with Premium Design -->
      <div id="arquitetura" class="relative bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl shadow-2xl overflow-hidden transform-gpu p-8 md:p-10 mt-10">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -right-20 bottom-0 w-80 h-80 bg-yellow-500 opacity-10 rounded-full blur-3xl"></div>
          <div class="absolute left-0 top-0 w-60 h-60 bg-pink-400 opacity-10 rounded-full blur-2xl"></div>
          <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div class="relative z-10">
          <div class="flex items-center mb-8">
            <div class="bg-white bg-opacity-20 backdrop-blur-sm p-3 mr-5 rounded-xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-white">Arquitetura SVTA</h2>
          </div>
          
          <p class="text-lg text-orange-100 mb-10 max-w-3xl">
            A Arquitetura de Tickets Virtuais Stateless (SVTA) elimina a necessidade de armazenamento on-chain, alcançando máxima escalabilidade, transparência e eficiência.
          </p>
          
          <div class="space-y-10">
            <!-- IDs Determinísticos Card -->
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white">IDs Determinísticos de Tickets</h3>
                  <p class="text-orange-200 text-sm mt-1">Gerados matematicamente com base em dados imutáveis do stake</p>
                </div>
                <div class="bg-gradient-to-r from-yellow-500 to-orange-600 py-3 px-6 rounded-lg shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
              </div>
              <div class="mt-4 text-orange-100">
                <ul class="list-disc pl-5 space-y-1">
                  <li>Endereço da carteira do usuário</li>
                  <li>Timestamp do stake</li>
                  <li>Índice do stake (ordem do stake)</li>
                  <li>Índice do ticket (posição dentro do stake)</li>
                </ul>
              </div>
            </div>
            
            <!-- Computação Stateless Card -->
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white">Computação Stateless</h3>
                  <p class="text-orange-200 text-sm mt-1">Zero armazenamento, zero custo</p>
                </div>
                <div class="bg-gradient-to-r from-yellow-500 to-orange-600 py-3 px-6 rounded-lg shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div class="mt-4 text-orange-100">
                <ul class="list-disc pl-5 space-y-1">
                  <li>Nenhum mapeamento ou array necessário on-chain</li>
                  <li>Sem necessidade de criação de NFTs ou escrever estados</li>
                  <li>Reconstrução determinística a qualquer momento</li>
                </ul>
              </div>
            </div>
            
            <!-- Totalmente Auditável Card -->
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white">Totalmente Auditável</h3>
                  <p class="text-orange-200 text-sm mt-1">Transparência e segurança garantidas</p>
                </div>
                <div class="bg-gradient-to-r from-yellow-500 to-orange-600 py-3 px-6 rounded-lg shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div class="mt-4 text-orange-100">
                <ul class="list-disc pl-5 space-y-1">
                  <li>Todos os IDs de tickets podem ser derivados publicamente</li>
                  <li>Lista completa de IDs de tickets válidos para cada sorteio</li>
                  <li>Sem possibilidade de manipulação</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <NuxtLink 
              to="/architecture" 
              class="inline-flex items-center bg-white text-pink-600 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver Detalhes Completos
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
  
      <!-- Nossa Solução Section -->
      <div id="diferenciais" class="relative bg-gradient-to-r from-orange-700 to-pink-700 rounded-2xl shadow-2xl overflow-hidden transform-gpu p-8 md:p-10 mt-10">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -left-20 bottom-0 w-80 h-80 bg-yellow-600 opacity-10 rounded-full blur-3xl"></div>
          <div class="absolute right-0 top-0 w-60 h-60 bg-pink-400 opacity-10 rounded-full blur-2xl"></div>
          <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div class="relative z-10">
          <div class="flex items-center mb-8">
            <div class="bg-white bg-opacity-20 backdrop-blur-sm p-3 mr-5 rounded-xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-white">Nossa Solução</h2>
          </div>
          
          <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Staking Card -->
              <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-white">Staking de Criptomoedas</h3>
                </div>
                <p class="text-orange-100">Deposite ou compre direto suas criptomoedas na plataforma Bloco Premiado e obtenha rendimentos competitivos, com APY de 8-12% anuais e segurança garantida.</p>
              </div>
              
              <!-- Sorteios Card -->
              <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-white">Sorteios Regulares</h3>
                </div>
                <p class="text-orange-100">Além do rendimento do staking, você recebe tickets virtuais para participar de sorteios semanais, mensais e trimestrais com prêmios em cripto e prêmios materiais como Smartphone, carros, imovéis, etc..</p>
              </div>
              
              <!-- Tickets Virtuais Card -->
              <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-white">Tickets Virtuais</h3>
                </div>
                <p class="text-orange-100">Para cada 1000 EQ9 em stake, você recebe 1 ticket virtual para os sorteios. Quanto maior seu stake e mais tempo ele permanecer na plataforma, mais tickets você acumula.</p>
              </div>
              
              <!-- Zero Gas Fees Card -->
              <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
                <div class="flex items-center mb-4">
                  <div class="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-white">Zero Gas Fees</h3>
                </div>
                <p class="text-orange-100">Nossa arquitetura SVTA elimina o custo de gas para criação e gerenciar tickets. Você não paga pelos tickets somente a taxa de stake para participar dos sorteios - apenas guarde e ganhe tickets automaticamente.</p>
              </div>
            </div>
            
            <!-- Vantagem Competitiva -->
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 mt-8">
              <h3 class="text-xl font-bold text-white mb-4">Nossa Vantagem Competitiva</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div class="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-white font-medium">Staking + Sorteios</span>
                  </div>
                  <p class="text-orange-200 text-sm">Modelo de negócio inovador que combina staking tradicional com sorteios regidos por smart contracts.</p>
                </div>
                
                <div class="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div class="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-white font-medium">Arquitetura SVTA</span>
                  </div>
                  <p class="text-orange-200 text-sm">Tecnologia exclusiva que elimina custos de gas e permite escalabilidade infinita para bilhões de tickets.</p>
                </div>
                
                <div class="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div class="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-white font-medium">100% Transparência</span>
                  </div>
                  <p class="text-orange-200 text-sm">Todas as regras dos sorteios são governadas por smart contracts, com resultado verificável e auditável por qualquer pessoa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Enhanced CTA Links -->
      <div id="investir" class="text-center mt-10 space-y-6 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 p-8 rounded-2xl shadow-xl relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full"></div>
          <div class="absolute bottom-0 left-0 w-60 h-60 bg-yellow-400 opacity-10 rounded-full"></div>
          <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Investimento Pre-Seed</h2>
          <p class="text-xl text-orange-100 max-w-3xl mx-auto mb-10">Uma oportunidade única para investir na primeira plataforma de staking com sorteios baseada em blockchain do Brasil.</p>
          
          <div class="flex flex-col md:flex-row items-stretch justify-center gap-8 mb-10">
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 flex flex-col items-center md:w-1/3">
              <div class="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Valuation</h3>
              <p class="text-orange-100 text-center mb-4">Valor de mercado do Bloco Premiado na atual rodada de investimento pre-seed.</p>
              <div class="mt-auto pt-4">
                <span class="text-4xl font-bold text-yellow-300">R$ 1,5M</span>
                <span class="text-orange-200 block">valuation</span>
              </div>
            </div>
            
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 flex flex-col items-center md:w-1/3">
              <div class="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Captação</h3>
              <p class="text-orange-100 text-center mb-4">Valor total que estamos captando para desenvolver a plataforma e lançar o MVP.</p>
              <div class="mt-auto pt-4">
                <span class="text-4xl font-bold text-yellow-300">R$ 225K</span>
                <span class="text-orange-200 block">captação</span>
              </div>
            </div>
            
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 flex flex-col items-center md:w-1/3">
              <div class="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Equity</h3>
              <p class="text-orange-100 text-center mb-4">Porcentagem da empresa que estamos oferecendo aos investidores nesta rodada.</p>
              <div class="mt-auto pt-4">
                <span class="text-4xl font-bold text-yellow-300">15%</span>
                <span class="text-orange-200 block">da empresa</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 max-w-4xl mx-auto mb-10">
            <h3 class="text-2xl font-bold text-white mb-6">Alocação dos Recursos</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-center space-x-4">
                <div class="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <span class="text-2xl font-bold text-white">25%</span>
                </div>
                <div class="text-left">
                  <h4 class="text-xl font-semibold text-white">Desenvolvimento</h4>
                  <p class="text-orange-200">Criação da plataforma, desenvolvimento dos smart contracts e auditoria de segurança</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <span class="text-2xl font-bold text-white">40%</span>
                </div>
                <div class="text-left">
                  <h4 class="text-xl font-semibold text-white">Marketing</h4>
                  <p class="text-orange-200">Estratégia de lançamento, growth hacking e aquisição de usuários</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <span class="text-2xl font-bold text-white">15%</span>
                </div>
                <div class="text-left">
                  <h4 class="text-xl font-semibold text-white">Equipe</h4>
                  <p class="text-orange-200">Contratação de equipe comercial, administrativo e operacional</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <span class="text-2xl font-bold text-white">20%</span>
                </div>
                <div class="text-left">
                  <h4 class="text-xl font-semibold text-white">Jurídico</h4>
                  <p class="text-orange-200">Infraestrutura, legal e compliance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col md:flex-row gap-8 items-center justify-center">
            <NuxtLink 
              to="/preseed-new" 
              class="inline-flex items-center bg-white text-pink-600 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Rodada Pré-Seed
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          
            <NuxtLink 
              to="/architecture" 
              class="inline-flex items-center bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Arquitetura SVTA
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mobileMenuOpen = ref(false);
const scrolled = ref(false);
const hoverRound = ref(null);

function logout() {
  console.log('Logout function called');
  localStorage.removeItem('nostrolet-auth');
  console.log('Auth removed from localStorage');
  
  // Force navigation to login page
  window.location.href = '/';
  console.log('Navigating to home page');
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Animations */
.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.3;
  }
}

.blur-2xl {
  filter: blur(40px);
}

.blur-3xl {
  filter: blur(64px);
}

/* Mobile menu animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>