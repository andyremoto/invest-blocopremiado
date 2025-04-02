<!-- pages/founder.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 py-6 space-y-10 relative">
    <!-- Page header with animation -->
    <div class="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-xl p-6 md:p-10 mb-10">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div class="relative z-10 md:flex items-center justify-between">
        <div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Rodada Fundadora</span>
          </h1>
          <p class="text-blue-100 text-lg md:text-xl max-w-2xl">
            Oportunidade estratégica para fundadores e investidores visionários que desejam fazer parte dos primeiros passos da NostroLet.
          </p>
        </div>
        
        <div class="mt-6 md:mt-0">
          <a 
            href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20investir%20na%20rodada%20fundadora%20da%20NostroLet" 
            target="_blank"
            class="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            Investir Agora
          </a>
        </div>
      </div>
    </div>
      <!-- Founder Round Details -->
      <div class="bg-white bg-opacity-90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 transform transition-all hover:shadow-2xl">
        <div class="flex items-center mb-8">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 mr-5 rounded-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Detalhes do Investimento</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <div class="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Estrutura da Rodada</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-700"><span class="font-medium">Valuation Pre-Money:</span> R$ 5 milhões</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-700"><span class="font-medium">Captação total:</span> R$ 1 milhão</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-700"><span class="font-medium">Equity disponível:</span> 20%</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-700"><span class="font-medium">Participação mínima sugerida:</span> R$ 50 mil (1%)</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-lg text-white">
                <h3 class="text-xl font-semibold mb-4">Objetivo da Rodada</h3>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p>Financiar estruturação inicial do projeto</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p>Atrair aliados fundadores estratégicos</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p>Alinhar stakeholders ao longo prazo</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Benefícios para Fundadores</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-white border border-green-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                  <div class="text-green-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800 mb-2">Valuation Atrativo</h4>
                  <p class="text-gray-600 text-sm">Entrada com valuation reduzido e exclusivo para esta rodada.</p>
                </div>
                
                <div class="bg-white border border-green-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                  <div class="text-green-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800 mb-2">Participação Estratégica</h4>
                  <p class="text-gray-600 text-sm">Influencie o crescimento e desenvolvimento do DApp.</p>
                </div>
                
                <div class="bg-white border border-green-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                  <div class="text-green-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800 mb-2">Oportunidade de Advisory</h4>
                  <p class="text-gray-600 text-sm">Possibilidade de atuar como advisor no projeto.</p>
                </div>
              </div>
              
              <div class="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-semibold text-gray-800">Processo de Investimento</h3>
                </div>
                <ol class="relative border-l border-blue-200 ml-3 space-y-6 pl-6">
                  <li>
                    <div class="absolute w-6 h-6 bg-blue-100 rounded-full -left-3 flex items-center justify-center">
                      <span class="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <h4 class="font-semibold text-gray-800">Confirmar intenção de participação</h4>
                    <p class="text-sm text-gray-600">Entre em contato para manifestar seu interesse.</p>
                  </li>
                  <li>
                    <div class="absolute w-6 h-6 bg-blue-100 rounded-full -left-3 flex items-center justify-center">
                      <span class="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <h4 class="font-semibold text-gray-800">Assinar Contratos</h4>
                    <p class="text-sm text-gray-600">Formalização das condições de investimento.</p>
                  </li>
                  <li>
                    <div class="absolute w-6 h-6 bg-blue-100 rounded-full -left-3 flex items-center justify-center">
                      <span class="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <h4 class="font-semibold text-gray-800">Efetuar aporte de capital</h4>
                    <p class="text-sm text-gray-600">Realize seu investimento com segurança.</p>
                  </li>
                  <li>
                    <div class="absolute w-6 h-6 bg-blue-100 rounded-full -left-3 flex items-center justify-center">
                      <span class="text-blue-600 font-bold text-sm">4</span>
                    </div>
                    <h4 class="font-semibold text-gray-800">Integrar-se ao grupo fundador</h4>
                    <p class="text-sm text-gray-600">Participe ativamente da construção do projeto.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <div class="mt-10 text-center">
            <a 
              href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20investir%20na%20rodada%20fundadora%20da%20NostroLet" 
              target="_blank"
              class="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Quero ser um Fundador
            </a>
            <div class="max-w-lg mx-auto mt-4">
              <p class="text-gray-600 mt-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                Essa é uma oportunidade única para ser parte do início de um projeto com potencial de transformar o mercado imobiliário brasileiro e gerar retornos expressivos.
              </p>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <div class="inline-block bg-white shadow-lg rounded-full p-1 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <NuxtLink 
              to="/preseed" 
              class="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 px-6 py-3"
            >
              <span>Conheça a Rodada Pré-Seed</span>
              <div class="ml-2 bg-blue-600 text-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Back to Dashboard Link -->
      <div class="mt-10 text-center pb-10">
        <NuxtLink 
          to="/dashboard" 
          class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para Visão Geral
        </NuxtLink>
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