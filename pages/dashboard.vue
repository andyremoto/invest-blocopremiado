<!-- dashboard.vue component -->
<template>
  <div class="overflow-hidden">
    <!-- Premium Navigation Bar -->
    <nav class="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 sticky top-0 z-50 shadow-xl transition-all duration-300" :class="{'py-2': scrolled}">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="flex items-center text-white hover:text-blue-200 transition-all duration-300 transform hover:scale-105">
            <div class="bg-white bg-opacity-20 rounded-full p-2 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span class="ml-2 font-medium">Voltar</span>
          </NuxtLink>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <a href="#visao" class="relative hover:text-blue-200 transition-all group py-1">
            <span>Visão Geral</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#mercado" class="relative hover:text-blue-200 transition-all group py-1">
            <span>Mercado</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#solucao" class="relative hover:text-blue-200 transition-all group py-1">
            <span>Solução</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#investir" class="relative hover:text-blue-200 transition-all group py-1">
            <span>Investir</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <!-- Investor Action Button -->
        <div class="hidden md:block">
          <a href="#investir" class="bg-white text-blue-800 font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Investir Agora
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
        <div v-if="mobileMenuOpen" class="md:hidden bg-blue-800 bg-opacity-95 backdrop-blur-md mt-4 mx-4 p-6 rounded-xl shadow-2xl border border-white border-opacity-10">
          <div class="flex flex-col space-y-5">
            <a href="#visao" class="text-white hover:text-blue-200 transition-all py-2 text-lg font-medium border-b border-blue-700 pb-2">
              Visão Geral
            </a>
            <a href="#mercado" class="text-white hover:text-blue-200 transition-all py-2 text-lg font-medium border-b border-blue-700 pb-2">
              Mercado
            </a>
            <a href="#solucao" class="text-white hover:text-blue-200 transition-all py-2 text-lg font-medium border-b border-blue-700 pb-2">
              Solução
            </a>
            <a href="#investir" class="text-white hover:text-blue-200 transition-all py-2 text-lg font-medium pb-2">
              Investir
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
      <div class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl shadow-2xl overflow-hidden transform-gpu">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div class="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-400 opacity-10 rounded-full"></div>
          <div class="absolute left-1/2 top-1/2 w-60 h-60 bg-indigo-500 opacity-5 rounded-full"></div>
          <!-- Grid pattern -->
          <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div class="md:flex relative z-10">
          <div class="md:w-1/2 p-8 md:p-12">
            <div v-motion-fade-visible :delay="200">
              <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  {{ hoverRound === 'preseed' ? 'Rodada Pré-Seed' : 'Rodada Fundadora' }}
                </span>: Tokenizando o futuro do mercado imobiliário
              </h1>
            </div>
            
            <div v-motion-slide-visible-once :delay="400" :duration="700">
              <p class="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed font-light">
                <span v-if="hoverRound === 'preseed'">
                  Invista na segunda rodada com valuação pré-money de R$ 25 milhões e participe da expansão do mercado de tokenização imobiliária.
                </span>
                <span v-else>
                  A NostroLet é um DApp premium que revoluciona o mercado imobiliário através da tokenização de imóveis, criando liquidez e democratizando o acesso a investimentos de alto padrão.
                </span>
              </p>
            </div>
            
            <div v-motion-slide-visible-once :delay="600" class="space-y-3 md:space-y-0 md:space-x-4 md:flex items-center">
              <a 
                href="/founder" 
                class="block md:inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border-2 border-transparent"
                @mouseenter="hoverRound = 'founder'"
                @mouseleave="hoverRound = null"
              >
                Rodada Fundadora
              </a>
              
              <a 
                href="/preseed" 
                class="block md:inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border-2 border-transparent mt-4 md:mt-0"
                @mouseenter="hoverRound = 'preseed'"
                @mouseleave="hoverRound = null"
              >
                Rodada Pré-Seed
              </a>
              
              <a href="#mercado" class="block md:inline-flex mt-4 md:mt-0 items-center justify-center text-white font-medium hover:text-blue-200 transition-all duration-300 py-3 px-6">
                <span>Análise de Mercado</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <!-- Hover Info Box -->
            <div v-if="hoverRound" v-motion-fade :delay="50" class="mt-6 bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-white border-opacity-10 shadow-lg">
              <div v-if="hoverRound === 'founder'" class="text-white">
                <h4 class="font-semibold text-blue-100">Rodada Fundadora</h4>
                <div class="flex items-center justify-between mt-2">
                  <span>Acesso exclusivo para fundadores</span>
                </div>
                <div class="flex items-center justify-between mt-2">
                  <span>Captação:</span>
                  <span class="font-bold">R$ 1 milhão</span>
                </div>
              </div>
              <div v-if="hoverRound === 'preseed'" class="text-white">
                <h4 class="font-semibold text-blue-100">Rodada Pré-Seed</h4>
                <div class="flex items-center justify-between mt-2">
                  <span>Valuation Pre-Money:</span>
                  <span class="font-bold">R$ 25 milhões</span>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <span>Captação:</span>
                  <span class="font-bold">R$ 2.5 milhões</span>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <span>Equity:</span>
                  <span class="font-bold">10%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="md:w-1/2 flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
            <!-- Animated background for logo -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-80 backdrop-blur-xl rounded-l-3xl">
              <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
            </div>
            
            <!-- Glowing effect behind logo -->
            <div class="absolute w-64 h-64 rounded-full bg-white opacity-20 filter blur-2xl animate-pulse-slow"></div>
            
            <!-- Logo with animation -->
            <div v-motion-slide-visible :delay="300" class="relative z-10 transform transition-all duration-500 hover:scale-110">
              <img src="/logo.png" alt="NostroLet" class="max-h-64 md:max-h-80 drop-shadow-2xl" style="filter: brightness(0) invert(1);" />
            </div>
          </div>
        </div>
        
        <!-- Investment Rounds Stats -->
        <div class="bg-blue-900 bg-opacity-50 backdrop-blur-md border-t border-white border-opacity-10 py-4 px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center">
              <p class="text-xs uppercase tracking-wider text-blue-200 font-medium">Tamanho da Rodada</p>
              <p class="text-xl md:text-2xl font-bold text-white">R$ 1M</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase tracking-wider text-blue-200 font-medium">Valuação</p>
              <p class="text-xl md:text-2xl font-bold text-white">R$ 5M</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase tracking-wider text-blue-200 font-medium">Investimento Min.</p>
              <p class="text-xl md:text-2xl font-bold text-white">R$ 50K</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase tracking-wider text-blue-200 font-medium">ROI Projetado</p>
              <p class="text-xl md:text-2xl font-bold text-white">4x</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Visão Geral Section with Premium Design -->
      <div id="visao" class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl shadow-2xl overflow-hidden transform-gpu p-8 md:p-10">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -right-20 -top-20 w-60 h-60 bg-blue-400 opacity-10 rounded-full"></div>
          <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500 opacity-10 rounded-full"></div>
          <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div class="relative z-10">
          <div class="flex items-center mb-8">
            <div class="bg-white bg-opacity-20 backdrop-blur-sm p-3 mr-5 rounded-xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-white">Visão Geral</h2>
          </div>
          
          <p class="text-lg text-blue-100 mb-10 max-w-3xl">
            A NostroLet é um DApp premium que revoluciona o mercado imobiliário através da tokenização de imóveis, resolvendo dois problemas críticos:
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 mt-8">
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-7 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div class="text-blue-200 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Estoque de imóveis parados</h3>
              <p class="text-blue-100">Oferecemos liquidez para imóveis novos que estão parados no estoque de incorporadoras, convertendo-os em ativos digitais negociáveis.</p>
            </div>
            
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-7 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div class="text-blue-200 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Falta de liquidez no mercado</h3>
              <p class="text-blue-100">Transformamos ativos imobiliários tradicionais em tokens fracionados, democratizando o acesso a investimentos antes inacessíveis.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Tamanho do Mercado Section with Premium Design -->
      <div id="mercado" class="relative bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl shadow-2xl overflow-hidden transform-gpu p-8 md:p-10 mt-10">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -right-20 bottom-0 w-80 h-80 bg-indigo-600 opacity-10 rounded-full blur-3xl"></div>
          <div class="absolute left-0 top-0 w-60 h-60 bg-blue-400 opacity-10 rounded-full blur-2xl"></div>
          <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div class="relative z-10">
          <div class="flex items-center mb-8">
            <div class="bg-white bg-opacity-20 backdrop-blur-sm p-3 mr-5 rounded-xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-white">Tamanho de Mercado</h2>
          </div>
          
          <div class="space-y-10">
            <!-- TAM Card -->
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white">TAM: Mercado Total</h3>
                  <p class="text-blue-200 text-sm mt-1">Estoque de imóveis novos no Brasil</p>
                </div>
                <div class="bg-gradient-to-r from-blue-500 to-blue-600 py-3 px-6 rounded-lg shadow-lg">
                  <span class="text-2xl font-bold text-white">R$ 80 bilhões</span>
                </div>
              </div>
              <div class="w-full h-3 bg-white bg-opacity-20 rounded-full relative overflow-hidden">
                <div class="absolute inset-0 w-full h-full bg-blue-500 animate-pulse-slow"></div>
              </div>
            </div>
            
            <!-- SAM Card -->
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white">SAM: Mercado Acessível</h3>
                  <p class="text-blue-200 text-sm mt-1">Imóveis de médio/alto padrão</p>
                </div>
                <div class="bg-gradient-to-r from-blue-400 to-blue-500 py-3 px-6 rounded-lg shadow-lg">
                  <span class="text-2xl font-bold text-white">R$ 20 bilhões</span>
                </div>
              </div>
              <div class="w-full h-3 bg-white bg-opacity-20 rounded-full relative overflow-hidden">
                <div class="absolute inset-0 w-1/4 h-full bg-blue-400"></div>
              </div>
            </div>
            
            <!-- SOM Card -->
            <div class="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white">SOM: Meta em 3 anos</h3>
                  <p class="text-blue-200 text-sm mt-1">~2,5% do mercado acessível</p>
                </div>
                <div class="bg-gradient-to-r from-blue-300 to-blue-400 py-3 px-6 rounded-lg shadow-lg">
                  <span class="text-2xl font-bold text-white">R$ 500 milhões</span>
                </div>
              </div>
              <div class="w-full h-3 bg-white bg-opacity-20 rounded-full relative overflow-hidden">
                <div class="absolute inset-0 w-[2.5%] h-full bg-blue-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Nossa Solução Section with Premium Design -->
      <div id="solucao" class="relative bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl shadow-2xl overflow-hidden transform-gpu p-8 md:p-10 mt-10">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute right-1/4 bottom-0 w-60 h-60 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
          <div class="absolute left-1/3 top-0 w-40 h-40 bg-indigo-400 opacity-10 rounded-full blur-xl"></div>
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
          
          <div class="md:flex items-center gap-10">
            <div class="md:w-1/2 space-y-4 mb-10 md:mb-0">
              <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 transform hover:scale-[1.02]">
                <div class="flex items-start">
                  <div class="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white mt-0.5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-white font-medium">Tokenização de imóveis</h4>
                    <p class="text-blue-100 text-sm mt-1">Criando liquidez e acesso para todos os investidores</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 transform hover:scale-[1.02]">
                <div class="flex items-start">
                  <div class="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white mt-0.5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-white font-medium">Plataforma descentralizada</h4>
                    <p class="text-blue-100 text-sm mt-1">Smart Contracts auditados para máxima segurança</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 transform hover:scale-[1.02]">
                <div class="flex items-start">
                  <div class="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white mt-0.5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-white font-medium">Interface premium</h4>
                    <p class="text-blue-100 text-sm mt-1">Experiência de usuário elegante e intuitiva</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 transform hover:scale-[1.02]">
                <div class="flex items-start">
                  <div class="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white mt-0.5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-white font-medium">Marketplace secundário</h4>
                    <p class="text-blue-100 text-sm mt-1">Negociação contínua de tokens imobiliários</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="md:w-1/2 flex items-center justify-center">
              <div class="relative">
                <!-- Glowing effect behind illustration -->
                <div class="absolute w-60 h-60 rounded-full bg-indigo-500 opacity-20 filter blur-3xl animate-pulse-slow"></div>
                
                <!-- Main illustration card -->
                <div class="bg-blue-900 bg-opacity-30 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 transform transition-all duration-500 hover:scale-105 relative z-10 shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-white mx-auto mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <div class="text-center">
                    <h3 class="text-2xl font-bold text-white mb-2">Tokens Imobiliários</h3>
                    <p class="text-blue-100">Investimentos fracionados em imóveis de alto padrão com liquidez e transparência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Enhanced CTA Links -->
      <div id="investir" class="text-center mt-10 space-y-6">
        <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <NuxtLink 
            to="/founder" 
            class="inline-flex items-center bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Conheça a Rodada Fundadora
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
          
          <NuxtLink 
            to="/preseed" 
            class="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Conheça a Rodada Pré-Seed
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Footer Section -->
    <footer class="bg-gray-800 text-white py-8 mt-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center mb-6 md:mb-0">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
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
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const scrolled = ref(false);
const hoverRound = ref(null);

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