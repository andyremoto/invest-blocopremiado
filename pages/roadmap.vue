<!-- pages/roadmap.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12 max-w-5xl">
      <!-- Page header with animation -->
      <div class="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-800 rounded-2xl shadow-xl p-6 md:p-10 mb-12">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute -left-20 -top-20 w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div class="relative z-10 md:flex items-center justify-between">
          <div>
            <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Roadmap Estratégico</span>
            </h1>
            <p class="text-blue-100 text-lg md:text-xl max-w-2xl">
              Plano detalhado de expansão da NostroLet para revolucionar o mercado imobiliário brasileiro por meio da tokenização.
            </p>
          </div>
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-10">
        <div class="flex items-center mb-8">
          <div class="text-blue-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-1">Plano de Expansão</h2>
        </div>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-6 h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-500 rounded-full"></div>
          
          <!-- Fase 1 -->
          <div class="relative pl-16 mb-12">
            <div class="absolute left-0 rounded-full w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold shadow-lg transform transition-transform hover:scale-110 z-10">1</div>
            <div class="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 mb-3">Fase 1 - Pré-Seed (2025)</h3>
              <p class="text-gray-600 mb-6 border-l-2 border-blue-400 pl-3">Fase de estruturação e validação do modelo de negócios para alcançar a primeira meta de tokenização.</p>
              <ul class="space-y-4 mt-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Captação: R$ 2,5 milhões via oferta privada.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Desenvolvimento MVP do DApp.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Estruturação jurídica via SPV.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Parcerias com incorporadoras.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Meta: Tokenizar R$ 200M em imóveis.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Valuation: R$ 25 milhões.</p>
                  </div>
                </li>
              </ul>
              
              <div class="mt-8 pt-6 border-t border-blue-100">
                <h4 class="font-semibold text-lg text-blue-800 mb-4 bg-blue-50 inline-block px-3 py-1 rounded-md shadow-sm">Roadmap 2025 (Detalhado)</h4>
                <ul class="space-y-4 mt-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                      <span class="text-xs font-semibold">Q2</span>
                    </div>
                    <div class="ml-4">
                      <p class="text-gray-700">Desenvolvimento MVP + Parcerias incorporadoras</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                      <span class="text-xs font-semibold">Q3</span>
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-700 text-sm">Validação jurídica + Testes internos + Auditoria</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                      <span class="text-xs font-semibold">Q4</span>
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-700 text-sm">Lançamento beta + Primeiras vendas tokenizadas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Fase 2 -->
          <div class="relative pl-16 mb-12">
            <div class="absolute left-0 rounded-full w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-700 text-white flex items-center justify-center font-bold shadow-lg transform transition-transform hover:scale-110 z-10">2</div>
            <div class="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl border border-indigo-100 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-700 mb-3">Fase 2 - Validação & Crowdfunding (2026)</h3>
              <p class="text-gray-600 mb-6 border-l-2 border-indigo-400 pl-3">Expansão regrada e escala do modelo com captação via ofertas públicas e aumento da base de clientes.</p>
              <ul class="space-y-4 mt-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Registro na CVM 88 ou parceria com plataforma autorizada.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Oferta pública de tokens até R$ 15M por oferta.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Expansão do portfólio.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Meta: R$ 800M tokenizados.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-gray-700">Valuation: R$ 75 milhões.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
       <!-- Fase 3 -->
       <div class="relative pl-12">
        <div class="absolute left-0 rounded-full w-8 h-8 bg-blue-400 text-white flex items-center justify-center font-bold">3</div>
        <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 class="text-xl font-bold text-blue-800 mb-1">Fase 3 - Escala & Fundo Regulamentado (2027-2028)</h3>
          <ul class="space-y-2 mt-4">
            <li class="flex items-start">
              <div class="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-gray-700 text-sm">Estruturação de FII Digital sob CVM 175.</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-gray-700 text-sm">Ofertas públicas abertas ao mercado geral.</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-gray-700 text-sm">Ampliação para mercados internacionais.</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-gray-700 text-sm">Meta: R$ 2,5 Bi a R$ 5 Bi tokenizados.</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-gray-700 text-sm">Valuation: R$ 225M a R$ 450M.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Investor Call to Action -->
      <div class="mt-12 text-center">
        <div class="relative inline-block group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
          <a 
            href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20conhecer%20mais%20sobre%20o%20roadmap%20da%20NostroLet" 
            target="_blank"
            class="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
          >
            Converse com a Nossa Equipe
          </a>
        </div>
        <p class="text-gray-600 mt-4 max-w-lg mx-auto">
          Agende uma conversa para conhecer em detalhes o potencial de crescimento da NostroLet e como nossos investidores podem se beneficiar desse roadmap estratégico.
        </p>
      </div>
      
      <!-- Back to Dashboard Link -->
      <div class="mt-16 text-center pb-10">
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

