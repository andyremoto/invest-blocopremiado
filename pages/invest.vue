<!-- pages/invest.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12 max-w-5xl">
      <!-- Main investment section with premium styling -->
      <div class="relative overflow-hidden bg-gradient-to-r from-indigo-800 to-blue-900 rounded-2xl shadow-xl">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="absolute -left-32 -bottom-16 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute -right-32 -top-16 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div class="relative md:flex">
          <div class="md:w-2/3 p-8 md:p-12 z-10">
            <div class="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 rounded-full text-white text-sm font-semibold mb-4">
              Investimento Estratégico
            </div>
            <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Invista na Revolução Imobiliária</span>
            </h1>
            <p class="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
              Transformando o mercado imobiliário através da tecnologia blockchain, com oportunidades de retorno potencial de até 18x em 3 anos para investidores visionários.
            </p>
            <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex items-center">
              <div class="relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-white to-blue-300 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <a 
                  href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20investir%20na%20NostroLet" 
                  target="_blank"
                  class="relative inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                >
                  Investir Agora
                </a>
              </div>
              
              <a 
                href="/founder" 
                class="inline-flex items-center text-white font-medium hover:text-blue-200 transition-all duration-300 group"
              >
                Conheça a Rodada Fundadora
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div class="md:w-1/3 bg-white relative overflow-hidden shadow-inner">
            <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <div class="p-10">
              <div class="text-center">
                <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 mb-2">10-18x</div>
                <div class="text-gray-700 font-medium">Potencial de Retorno</div>
                <div class="h-px bg-gradient-to-r from-blue-200 to-indigo-200 my-5"></div>
                
                <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 mb-2">R$ 25M</div>
                <div class="text-gray-700 font-medium">Valuation Atual</div>
                <div class="h-px bg-gradient-to-r from-blue-200 to-indigo-200 my-5"></div>
                
                <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 mb-2">R$ 450M</div>
                <div class="text-gray-700 font-medium">Valuation Projetado</div>
                
                <div class="mt-8 bg-gray-50 rounded-lg p-4 shadow-inner">
                  <p class="text-gray-800 text-sm">Baseado na escala da plataforma e comparativos de mercado em 3 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Investment Opportunities Section -->
      <div class="mt-12 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">Oportunidades de Investimento</h2>
          
          <div class="grid md:grid-cols-2 gap-8 mt-8">
            <!-- Founder Round -->
            <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-blue-100 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative">
              <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Rodada Fundadora</h3>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm text-gray-500">Ticket a partir de</span>
                  <span class="text-lg font-bold text-blue-700">R$ 50K</span>
                </div>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Valuation reduzido de R$ 25 milhões
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Retorno potencial de até 45x
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Participação ativa nas decisões iniciais
                  </li>
                </ul>
                <a 
                  href="/founder" 
                  class="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
            
            <!-- Pre-Seed Round -->
            <div class="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl border border-indigo-100 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative">
              <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-600 to-indigo-400"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Rodada Pré-Seed</h3>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm text-gray-500">Ticket a partir de</span>
                  <span class="text-lg font-bold text-indigo-700">R$ 250K</span>
                </div>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Valuation de R$ 25 milhões
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Retorno potencial de até 18x
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Fase crítica de expansão e escala
                  </li>
                </ul>
                <a 
                  href="/preseed" 
                  class="block text-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Why Invest Section -->
      <div class="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-100 overflow-hidden">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Por Que Investir na NostroLet?</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Mercado Trilionário</h3>
              <p class="text-gray-600">Acesso ao mercado imobiliário global de $280 trilhões, com potencial inexplorado no Brasil.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Crescimento Exponencial</h3>
              <p class="text-gray-600">Modelagem financeira projetando valorização de até 18x em 3 anos com escala da plataforma.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Tecnologia Proprietária</h3>
              <p class="text-gray-600">Plataforma blockchain com vantagens competitivas exclusivas e barreiras de entrada para concorrentes.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="mt-12 text-center">
        <div class="relative inline-block group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
          <a 
            href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20conhecer%20mais%20sobre%20investir%20na%20NostroLet" 
            target="_blank"
            class="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
          >
            Falar com um Especialista
          </a>
        </div>
        <p class="text-gray-600 mt-4 max-w-lg mx-auto">
          Agende uma conversa para conhecer em detalhes as oportunidades de investimento, métricas financeiras e todo o potencial de crescimento da NostroLet.
        </p>
      </div>
      
      <!-- Back to Dashboard Link -->
      <div class="mt-16 text-center pb-10">
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
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>