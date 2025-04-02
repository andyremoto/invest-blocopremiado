<!-- pages/preseed.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 py-6 space-y-10 relative">
    <!-- Page header with animation -->
    <div class="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl shadow-xl p-6 md:p-10 mb-10">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="absolute -left-20 -top-20 w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div class="relative z-10 md:flex items-center justify-between">
        <div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Rodada Pré-Seed</span>
          </h1>
          <p class="text-blue-100 text-lg md:text-xl max-w-2xl">
            Oportunidade de investimento estratégico com valuation de R$ 25 milhões para escalar a NostroLet e dominar o mercado de tokenização imobiliária.
          </p>
        </div>
        
        <div class="mt-6 md:mt-0">
          <a 
            href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20investir%20na%20rodada%20pré-seed%20da%20NostroLet" 
            target="_blank"
            class="inline-block bg-white text-indigo-700 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            Investir Agora
          </a>
        </div>
      </div>
    </div>
    <!-- Pre-Seed Round Details -->
    <div class="bg-white bg-opacity-90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 transform transition-all hover:shadow-2xl">
      <div class="flex items-center mb-8">
          <div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-3 mr-5 rounded-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Detalhes da Rodada</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <div class="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Valuation Pré-Seed</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-700"><span class="font-medium">Valuation pré-money:</span> R$ 25 milhões</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-700"><span class="font-medium">Captação desejada:</span> R$ 2,5 milhões (10% de equity)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Uso do Capital</h3>
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-gray-700">Desenvolvimento do DApp</span>
                  <span class="text-gray-700 font-medium">35%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 35%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-gray-700">Estrutura legal e compliance</span>
                  <span class="text-gray-700 font-medium">25%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 25%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-gray-700">Parcerias com incorporadoras</span>
                  <span class="text-gray-700 font-medium">20%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 20%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-gray-700">Auditoria Smart Contracts</span>
                  <span class="text-gray-700 font-medium">10%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 10%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-gray-700">Time comercial e operação</span>
                  <span class="text-gray-700 font-medium">10%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 10%"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Modelo de Receita</h3>
            <div class="grid grid-cols-1 gap-4">
              <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div class="flex">
                  <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span class="font-bold">1%</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Taxa de listagem</h4>
                    <p class="text-sm text-gray-600">Cobrada sobre o valor do imóvel na tokenização</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div class="flex">
                  <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span class="font-bold">2%</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Comissão sobre venda</h4>
                    <p class="text-sm text-gray-600">Cobrada em cada transação realizada na plataforma</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div class="flex">
                  <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span class="font-bold">0,5%</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Taxa de administração</h4>
                    <p class="text-sm text-gray-600">Taxa anual sobre o valor dos ativos gerenciados</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div class="flex">
                  <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Serviços premium</h4>
                    <p class="text-sm text-gray-600">KYC rápido e integração bancária personalizada</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div class="flex">
                  <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Marketplace secundário</h4>
                    <p class="text-sm text-gray-600">Plataforma para negociação contínua de tokens</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Diferenciais Estratégicos</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-gray-700">Pipeline de negociação com grandes incorporadoras</p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-gray-700">Solução completa para liquidez imobiliária</p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-gray-700">Arquitetura descentralizada e escalável</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 p-6 bg-green-50 rounded-lg border border-green-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Projeção Financeira (3 anos)</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ano</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imóveis Tokenizados</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume Tokenizado</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receita Anual</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valuation (5x)</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">

                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2025</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 100M</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 2M</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 25M</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2026</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 250M</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 5M</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 25M</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2027</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 1Bi</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 20M</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 100M</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          
          <div class="mt-10 text-center">
            <a 
              href="https://wa.me/5534984176363?text=Olá,%20tenho%20interesse%20em%20investir%20na%20rodada%20pré-seed%20da%20NostroLet" 
              target="_blank"
              class="inline-block bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Investir na Rodada Pré-Seed
            </a>
            <div class="max-w-lg mx-auto mt-4">
              <p class="text-gray-600 mt-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                Investir agora significa entrar com valuation reduzido, participando ativamente da revolução no mercado imobiliário e se posicionando para retornos expressivos com a escala da plataforma.
              </p>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <div class="inline-block bg-white shadow-lg rounded-full p-1 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <NuxtLink 
              to="/roadmap" 
              class="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 px-6 py-3"
            >
              <span>Conheça nosso Roadmap Estratégico</span>
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

</template>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>