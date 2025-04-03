<!-- pages/preseed-new.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 py-6 space-y-10 relative">
    <!-- Page header with animation -->
    <div class="relative overflow-hidden bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl shadow-xl p-6 md:p-10 mb-10">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="absolute -left-20 -top-20 w-64 h-64 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div class="relative z-10 md:flex items-center justify-between">
        <div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">Bloco Premiado - Rodada Pré-Seed</span>
          </h1>
          <p class="text-orange-100 text-lg md:text-xl max-w-2xl">
            Oportunidade de investimento estratégico com valuation de R$ 1.500.000 para escalar a plataforma de staking com sorteios.
          </p>
        </div>
        
        <div class="mt-6 md:mt-0">
          <a 
            href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20investir%20na%20rodada%20pré-seed%20do%20Bloco%20Premiado" 
            target="_blank"
            class="inline-block bg-white text-pink-600 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            Investir Agora
          </a>
        </div>
      </div>
    </div>
    
    <!-- Pre-Seed Round Details -->
    <div class="bg-white bg-opacity-90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 transform transition-all hover:shadow-2xl">
      <div class="flex items-center mb-8">
          <div class="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-3 mr-5 rounded-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Detalhes da Rodada</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <div class="bg-orange-50 p-6 rounded-lg border border-orange-100 mb-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Valuation Pré-Seed</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-700"><span class="font-medium">Valuation pré-money:</span> R$ 1.500.000</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-700"><span class="font-medium">Meta de captação:</span> R$ 225.000 (15% de equity)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Uso dos Recursos</h3>
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-gray-700">Aquisição de usuários & marketing</span>
                  <span class="text-gray-700 font-medium">40%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-orange-600 h-2 rounded-full" style="width: 40%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-gray-700">Infraestrutura & segurança</span>
                  <span class="text-gray-700 font-medium">25%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-orange-600 h-2 rounded-full" style="width: 25%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-gray-700">Jurídico & compliance</span>
                  <span class="text-gray-700 font-medium">20%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-orange-600 h-2 rounded-full" style="width: 20%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-gray-700">Equipe & Colaboradores</span>
                  <span class="text-gray-700 font-medium">15%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-orange-600 h-2 rounded-full" style="width: 15%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Modelo de Receita</h3>
            <div class="grid grid-cols-1 gap-4">
              <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div class="flex">
                  <div class="flex-shrink-0 bg-orange-100 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-800">Taxa de Staking (1%)</h4>
                    <p class="text-sm text-gray-600">Taxa cobrada sobre o valor total de tokens congelados na plataforma</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div class="flex">
                  <div class="flex-shrink-0 bg-orange-100 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-800">Taxa de Revenda (5%)</h4>
                    <p class="text-sm text-gray-600">Taxa cobrada em cada revenda de ticket realizada na plataforma</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Projeções Financeiras</h3>
              <div class="bg-orange-50 p-5 rounded-xl border border-orange-100 overflow-hidden">
                <div class="overflow-x-auto">
                  <table class="min-w-full">
                    <thead>
                      <tr class="border-b border-orange-200">
                        <th class="px-4 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Ano</th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Usuários</th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Volume</th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Receita</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-orange-100">
                        <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Ano 1</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">250K</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">R$ 2.5M</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">R$ 150K</td>
                      </tr>
                      <tr class="border-b border-orange-100">
                        <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Ano 2</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">500K</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">R$ 7.5M</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">R$ 450K</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Ano 3</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">1M</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">R$ 15M</td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">R$ 900K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-10 text-center">
          <a 
            href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20investir%20na%20rodada%20pré-seed%20do%20Bloco%20Premiado" 
            target="_blank"
            class="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Investir na Rodada Pré-Seed
          </a>
          <div class="max-w-lg mx-auto mt-4">
            <p class="text-gray-600 mt-3 bg-orange-50 p-4 rounded-lg border border-orange-100">
              Investir agora significa entrar com valuation reduzido, participando ativamente da revolução do mercado de staking com sorteios e se posicionando para retornos expressivos com a escala da plataforma.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Diferenciais Section -->
      <div class="bg-white bg-opacity-90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 mt-10">
        <div class="flex items-center mb-8">
          <div class="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-3 mr-5 rounded-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Diferenciais</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-md transition duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">Arquitetura Proprietária SVTA</h3>
            <p class="text-gray-600">
              Nossa arquitetura Stateless Virtual Ticket é patenteável e exclusiva, fornecendo uma vantagem competitiva significativa no mercado.
            </p>
          </div>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-md transition duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">Escalabilidade Infinita</h3>
            <p class="text-gray-600">
              Suporta milhões de tickets sem custos adicionais de gas ou armazenamento on-chain, permitindo crescimento exponencial.
            </p>
          </div>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-md transition duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">Sistema Transparente</h3>
            <p class="text-gray-600">
              Completamente transparente, auditável e descentralizado, aumentando a confiança dos usuários na integridade dos sorteios.
            </p>
          </div>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-md transition duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-3">Alto Engajamento</h3>
            <p class="text-gray-600">
              Projetado para maximizar o volume de engajamento dos usuários através de mecanismos de staking e sorteios frequentes.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Back to Dashboard Link -->
      <div class="mt-10 text-center pb-10">
        <NuxtLink 
          to="/dashboard" 
          class="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-all duration-300 group"
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

.blur-3xl {
  filter: blur(64px);
}
</style>
