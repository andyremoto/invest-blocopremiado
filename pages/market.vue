<!-- pages/market.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12 max-w-5xl">
      <!-- Page header with animation -->
      <div class="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-800 rounded-2xl shadow-xl p-6 md:p-10 mb-12">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div class="relative z-10 md:flex items-center justify-between">
          <div>
            <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Mercado Imobiliário</span>
            </h1>
            <p class="text-blue-100 text-lg md:text-xl max-w-2xl">
              O mercado de tokenização imobiliária representa uma oportunidade trilionária com potencial inexplorado no Brasil.
            </p>
          </div>

          <div class="mt-6 md:mt-0 relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div class="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-5">
              <div class="text-2xl font-bold text-white">$280 Trilhões</div>
              <p class="text-blue-100">Mercado Imobiliário Global</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div class="flex items-center mb-8">
          <div class="text-blue-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-1">Análise de Mercado</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">O Mercado em Números</h3>
            <div class="space-y-4">
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex justify-between items-center mb-3">
                  <h4 class="font-semibold text-gray-800">Mercado Imobiliário Global</h4>
                  <span class="font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 rounded-full">$280 Trilhões</span>
                </div>
                <div class="h-2 w-full bg-blue-100 rounded-full mb-3">
                  <div class="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style="width: 100%"></div>
                </div>
                <p class="text-sm text-gray-600">A maior classe de ativos do mundo, superando o mercado de ações e títulos juntos.</p>
              </div>
              
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex justify-between items-center mb-3">
                  <h4 class="font-semibold text-gray-800">Mercado Brasileiro</h4>
                  <span class="font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 rounded-full">$1,2 Trilhão</span>
                </div>
                <div class="h-2 w-full bg-blue-100 rounded-full mb-3">
                  <div class="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style="width: 65%"></div>
                </div>
                <p class="text-sm text-gray-600">O mercado imobiliário representa cerca de 14% do PIB do Brasil.</p>
              </div>
              
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex justify-between items-center mb-3">
                  <h4 class="font-semibold text-gray-800">Imóveis em Estoque</h4>
                  <span class="font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 rounded-full">R$ 80 Bilhões</span>
                </div>
                <div class="h-2 w-full bg-blue-100 rounded-full mb-3">
                  <div class="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style="width: 45%"></div>
                </div>
                <p class="text-sm text-gray-600">Valor estimado de imóveis parados em estoque nas construtoras brasileiras.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Problemas do Mercado</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center text-red-600 mt-0.5 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-800 text-lg">Falta de Liquidez</h4>
                  <p class="text-gray-600 mt-1">Imóveis podem levar meses ou até anos para serem vendidos, resultando em capital parado.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-800">Barreira de Entrada Alta</h4>
                  <p class="text-gray-600">Investimentos imobiliários exigem grande capital inicial.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-800">Complexidade Legal</h4>
                  <p class="text-gray-600">Processos burocráticos e complexos para transferência de propriedade.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-800">Falta de Transparência</h4>
                  <p class="text-gray-600">Dificuldade de acesso a informações precisas sobre os imóveis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200 shadow-md relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 transform translate-x-24 -translate-y-24"></div>
          <h3 class="text-2xl font-bold text-gray-800 mb-6 relative z-10 border-b-2 border-blue-300 pb-2 inline-block">Nossa Solução</h3>
          <div class="grid md:grid-cols-2 gap-6 relative z-10">
            <div class="flex items-start">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white mt-0.5 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-800 text-lg">Tokenização</h4>
                <p class="text-gray-600 mt-1 border-l-2 border-green-400 pl-3">Fracionamento de imóveis em tokens digitais, permitindo investimentos a partir de valores menores e acessíveis a mais investidores.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h4 class="font-semibold text-gray-800">Liquidez</h4>
                <p class="text-sm text-gray-600">Marketplace secundário para negociação contínua de tokens imobiliários.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h4 class="font-semibold text-gray-800">Transparência</h4>
                <p class="text-sm text-gray-600">Registros imutáveis em blockchain com todas as informações do imóvel e histórico de transações.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h4 class="font-semibold text-gray-800">Acessibilidade</h4>
                <p class="text-sm text-gray-600">Democratização do acesso a investimentos imobiliários de alto padrão.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-10">
        <h3 class="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-blue-500 pb-2 inline-block">Oportunidade de Mercado</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 rounded-xl border border-blue-100 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div class="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white mb-4 mx-auto shadow-lg">
              <span class="text-2xl font-bold">01</span>
            </div>
            <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 mb-3">R$ 80B</div>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Mercado Total</h4>
            <p class="text-gray-600">Estoque de imóveis novos no Brasil esperando por liquidez</p>
          </div>
          
          <div class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 rounded-xl border border-blue-100 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div class="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white mb-4 mx-auto shadow-lg">
              <span class="text-2xl font-bold">02</span>
            </div>
            <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 mb-3">R$ 20B</div>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Mercado Acessível</h4>
            <p class="text-gray-600">Imóveis de médio/alto padrão com potencial imediato</p>
          </div>
          
          <div class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 rounded-xl border border-blue-100 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div class="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white mb-4 mx-auto shadow-lg">
              <span class="text-2xl font-bold">03</span>
            </div>
            <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 mb-3">R$ 500M</div>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Meta em 3 anos</h4>
            <p class="text-gray-600">~2,5% do mercado acessível com crescimento exponencial</p>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <div class="relative inline-block group">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
            <a 
              href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20conhecer%20mais%20sobre%20o%20mercado%20da%20NostroLet" 
              target="_blank"
              class="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
            >
              Saber Mais Sobre o Mercado
            </a>
          </div>
          <p class="text-gray-600 mt-4 max-w-lg mx-auto text-sm">
            Agende uma conversa com nossos especialistas para entender como a tokenização está transformando o mercado imobiliário e criando oportunidades de investimento inéditas.
          </p>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <div class="inline-block bg-white shadow-lg rounded-full p-1 overflow-hidden transition-all duration-300 hover:shadow-xl">
          <NuxtLink 
            to="/preseed" 
            class="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 px-6 py-3"
          >
            <span>Conheça nossa Rodada Pré-Seed</span>
            <div class="ml-2 bg-blue-600 text-white rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Back to Dashboard Link -->
      <div class="mt-10 text-center pb-10">
        <a 
          href="/dashboard" 
          class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para Visão Geral
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>