<!-- pages/invest.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-6 sm:py-12 max-w-5xl">
      <!-- Main investment section with premium styling -->
      <div class="relative overflow-hidden bg-gradient-to-r from-orange-600 to-pink-700 rounded-2xl shadow-xl">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="absolute -left-32 -bottom-16 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute -right-32 -top-16 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div class="relative flex flex-col md:flex-row">
          <div class="w-full md:w-2/3 p-6 sm:p-8 md:p-12 z-10">
            <div class="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-white text-sm font-semibold mb-4">
              Investimento Pre-Seed
            </div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">Invista no Futuro dos Sorteios em Blockchain</span>
            </h1>
            <p class="text-orange-100 text-base sm:text-lg md:text-xl mb-4 sm:mb-8 leading-relaxed">
              Entre na primeira plataforma de staking com sorteios baseada em blockchain do Brasil, criando uma nova categoria de staking com recompensas e diversão contínuas.
            </p>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center">
              <div class="relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-white to-yellow-300 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <a 
                  href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20investir%20no%20Bloco%20Premiado" 
                  target="_blank"
                  class="relative inline-block bg-white text-pink-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                >
                  Investir Agora
                </a>
              </div>
              
              <a 
                href="/preseed-new" 
                class="inline-flex items-center text-white font-medium hover:text-yellow-200 transition-all duration-300 group"
              >
                Conheça a Rodada Pre-Seed
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div class="w-full md:w-1/3 bg-white relative overflow-hidden shadow-inner">
            <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-orange-400 to-pink-500"></div>
            <div class="p-6 sm:p-8 md:p-10">
              <div class="text-center">
                <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-600 to-pink-600 mb-2">R$ 1,5M</div>
                <div class="text-gray-700 font-medium">Valuation Atual</div>
                <div class="h-px bg-gradient-to-r from-orange-200 to-pink-200 my-5"></div>
                
                <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-600 to-pink-600 mb-2">R$ 225K</div>
                <div class="text-gray-700 font-medium">Captação</div>
                <div class="h-px bg-gradient-to-r from-orange-200 to-pink-200 my-5"></div>
                
                <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-600 to-pink-600 mb-2">15%</div>
                <div class="text-gray-700 font-medium">Equity Oferecido</div>
                
                <div class="mt-8 bg-gray-50 rounded-lg p-4 shadow-inner">
                  <p class="text-gray-800 text-sm">Rodada Pre-Seed para desenvolvimento da plataforma, marketing e expansão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Investment Opportunities Section -->
      <div class="mt-8 sm:mt-12 bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 overflow-hidden">
        <div class="p-8">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-orange-500 pb-2 inline-block">Oportunidades de Investimento</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-8">
            <!-- Seed Round -->
            <div class="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl border border-orange-100 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative">
              <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-yellow-600 to-orange-500"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Rodada Seed</h3>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm text-gray-500">Previsão</span>
                  <span class="text-lg font-bold text-orange-700">Q3 2025</span>
                </div>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Valuation previsto: R$ 5-7 milhões
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Captação-alvo: R$ 500-800K
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Expansão internacional
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Parcerias estratégicas
                  </li>
                </ul>
                <a 
                  href="#" 
                  class="block text-center bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 opacity-75 cursor-not-allowed"
                >
                  Em Breve
                </a>
              </div>
            </div>
            
            <!-- Pre-Seed Round -->
            <div class="bg-gradient-to-br from-gray-50 to-pink-50 rounded-xl border border-pink-100 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative">
              <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-pink-600 to-orange-400"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Rodada Pré-Seed</h3>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm text-gray-500">Ticket a partir de</span>
                  <span class="text-lg font-bold text-pink-700">R$ 10K</span>
                </div>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Valuation: R$ 1,5 milhão
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Captação total: R$ 225K (15%)
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Atualizar Aplicativo já disponível
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Parcerias estratégicas
                  </li>
                </ul>
                <a 
                  href="/preseed-new" 
                  class="block text-center bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Why Invest Section -->
      <div class="mt-12 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl shadow-lg border border-orange-100 overflow-hidden">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Por Que Investir no Bloco Premiado?</h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Mercado em Expansão</h3>
              <p class="text-gray-600">O mercado de staking e DeFi ultrapassou US$ 100 bilhões e cresce rapidamente, com enorme potencial no Brasil.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Modelo Escalável</h3>
              <p class="text-gray-600">Combinação única de staking (8-12% APY) com sorteios semanais, mensais e trimestrais, gerando fluxo constante de usuários.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Tecnologia SVTA</h3>
              <p class="text-gray-600">Arquitetura proprietária de tickets virtuais sem estado (SVTA) oferecendo total transparência, zero gas e escalabilidade.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="mt-8 sm:mt-12 text-center">
        <div class="relative inline-block group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
          <a 
            href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20conhecer%20mais%20sobre%20investir%20no%20Bloco%20Premiado" 
            target="_blank"
            class="relative inline-block bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
          >
            Falar com um Especialista
          </a>
        </div>
        <p class="text-gray-600 mt-4 max-w-lg mx-auto">
          Agende uma conversa para conhecer em detalhes as oportunidades de investimento, métricas financeiras e todo o potencial de crescimento do Bloco Premiado.
        </p>
      </div>
      
      <!-- Back to Dashboard Link -->
      <div class="mt-8 sm:mt-16 text-center pb-6 sm:pb-10">
        <NuxtLink 
          to="/dashboard" 
          class="inline-flex items-center text-orange-600 font-semibold hover:text-pink-600 transition-all duration-300 group"
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