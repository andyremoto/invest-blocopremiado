<!-- pages/drawings.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12 max-w-6xl">
      <!-- Hero section -->
      <div class="relative overflow-hidden bg-gradient-to-r from-orange-600 to-pink-700 rounded-2xl shadow-xl mb-12">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="absolute -left-32 -bottom-16 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute -right-32 -top-16 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div class="relative p-8 md:p-12 z-10">
          <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">Sorteios Transparentes em Blockchain</span>
          </h1>
          <p class="text-orange-100 text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
            Staking com recompensas emocionantes através de um sistema proprietário de sorteios que combina segurança, transparência e zero custo de gas.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div class="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Atualmente: 1000 EQ9 = 1 ticket</span>
            </div>
            <a 
              href="https://www.blocopremiado.com" 
              target="_blank" 
              class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Acessar Aplicativo
            </a>
          </div>
        </div>
      </div>
      
      <!-- Current Drawing Alert -->
      <div class="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg overflow-hidden mb-12 transform transition hover:scale-[1.01] hover:shadow-xl">
        <div class="p-6 text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div class="mb-4 md:mb-0">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 class="text-2xl font-bold">Sorteio em Andamento!</h2>
              </div>
              <p class="text-white text-opacity-90 mt-2 max-w-2xl">Estamos sorteando um <span class="font-bold">iPhone 16</span> em 12 de Abril de 2025! Faça staking de tokens EQ9 na nossa plataforma e participe automaticamente com seus tickets virtuais.</p>
            </div>
            <div class="flex-shrink-0">
              <a 
                href="https://www.blocopremiado.com/drawings" 
                target="_blank" 
                class="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Participar Agora
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Phase 1: Current Drawing -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-yellow-400">
          <div class="h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
          <div class="p-6">
            <div class="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mb-2">FASE ATUAL</div>
            <h2 class="text-xl font-bold text-center text-gray-800 mb-4">Sorteio Inicial</h2>
            <div class="text-center mb-4">
              <span class="text-2xl font-bold text-orange-600">iPhone 16</span>
            </div>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sorteio em 12 de Abril, 2025</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>1000 tokens EQ9 = 1 ticket</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Participação via plataforma beta</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Resultado verificável no blockchain</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Monthly draws -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div class="h-2 bg-gradient-to-r from-orange-500 to-pink-500"></div>
          <div class="p-6">
            <div class="flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-500 rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="inline-block px-3 py-1 bg-blue-100 text-yellow-800 text-xs font-medium rounded-full mb-2">EM BREVE</div>
            <h2 class="text-xl font-bold text-center text-gray-800 mb-4">Sorteios Mensais</h2>
            <div class="text-center mb-4">
              <span class="text-2xl font-bold text-pink-600">R$5.000</span>
            </div>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Quinto dia útil de cada mês</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Valor do prêmio pode crescer com o volume staking</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>1 ganhador por sorteio</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Transmissão ao vivo</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Quarterly draws -->
         
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div class="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <div class="p-6">
            <div class="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-500 rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="inline-block px-3 py-1 bg-blue-100 text-yellow-800 text-xs font-medium rounded-full mb-2">EM BREVE</div>
            <h2 class="text-xl font-bold text-center text-gray-800 mb-4">Sorteios Trimestrais</h2>
            <div class="text-center mb-4">
              <span class="text-2xl font-bold text-purple-600">R$50.000</span>
            </div>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>A cada 3 meses (mar, jun, set, dez)</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Super prêmio único</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Staking mínimo: R$50,00</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Evento especial com transmissão</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- How it works section -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 inline-block">Como Funcionam os Sorteios</h2>
          
          <div class="grid md:grid-cols-2 gap-8 mt-8">
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-gradient-to-br from-orange-500 to-pink-600 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-800">Faça Staking de Criptomoedas</h3>
                  <p class="text-gray-600 mt-1">Deposite em breve seus tokens estáveis (USDT, USDC, DAI) na plataforma para obter rendimentos anuais de 8-12% com staking, Deposite ou compre direto EQ9 na plataforma e ganhe tickets para sorteos incríveis, já disponível.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-gradient-to-br from-orange-500 to-pink-600 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-800">Ganhe Tickets Virtuais</h3>
                  <p class="text-gray-600 mt-1">A cada 1.000 EQ9 em staking, você recebe automaticamente 1 ticket para participar do sorteio ativo na plataforma. Dobre suas chances fazendo staking por 12 meses.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-gradient-to-br from-orange-500 to-pink-600 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-800">Sorteios Completamente Transparentes</h3>
                  <p class="text-gray-600 mt-1">Usando a tecnologia SVTA, cada sorteio é 100% verificável e transparente, com resultados armazenados na blockchain.</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-gradient-to-br from-orange-500 to-pink-600 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-800">Receba Prêmios Diretamente</h3>
                  <p class="text-gray-600 mt-1">Os prêmios em cripto são depositados automaticamente na mesma carteira do staking, sem necessidade de reclamações ou verificações adicionais.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-gradient-to-br from-orange-500 to-pink-600 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg">5</div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-800">Stake Mais, Ganhe Mais</h3>
                  <p class="text-gray-600 mt-1">Quanto mais tokens você fizer staking, mais tickets virtuais receberá, aumentando suas chances de ganhar em todos os sorteios.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-gradient-to-br from-orange-500 to-pink-600 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg">6</div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-800">Zero Gas Fees</h3>
                  <p class="text-gray-600 mt-1">Nossa tecnologia SVTA (Stateless Virtual Ticket Architecture) elimina os custos de gas para participar dos sorteios, tornando-os acessíveis para todos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SVTA Technology Section -->
      <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl shadow-lg border border-orange-100 overflow-hidden mb-12">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Tecnologia SVTA</h2>
          <p class="text-gray-700 mb-6">
            Nossa arquitetura proprietária de tickets virtuais sem estado (SVTA) é o que torna os sorteios do Bloco Premiado únicos em termos de transparência, segurança e eficiência:
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">100% Verificável</h3>
              <p class="text-gray-600">Cada ticket é gerado deterministicamente a partir dos dados de staking, tornando a verificação completa possível para qualquer um com acesso à blockchain.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Sem Custo de Gas</h3>
              <p class="text-gray-600">A arquitetura sem estado elimina a necessidade de registrar cada ticket na blockchain, reduzindo os custos operacionais e permitindo sorteios mais frequentes.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Altamente Escalável</h3>
              <p class="text-gray-600">Nossa tecnologia pode processar milhões de tickets simultaneamente sem congestionamento da rede, permitindo que a plataforma cresça sem limites.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Programável</h3>
              <p class="text-gray-600">O sistema permite criar facilmente diferentes tipos de sorteios (semanal, mensal, especial), com regras e prêmios personalizados conforme a plataforma cresce.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 inline-block">Perguntas Frequentes</h2>
          
          <div class="mt-6 space-y-6">
            <div class="border-b border-gray-200 pb-4">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Como faço para participar dos sorteios?</h3>
              <p class="text-gray-600">Atualmente, basta fazer staking de tokens EQ9 na plataforma beta do Bloco Premiado. A cada 1000 tokens EQ9 em stake, você recebe automaticamente 1 ticket virtual para o sorteio do iPhone 16. Com a versão completa futura, aceitaremos diversas stablecoins.</p>
            </div>
            
            <div class="border-b border-gray-200 pb-4">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Quando vou poder sacar meu Staking?</h3>
              <p class="text-gray-600">Cada prêmio tem seu perido de Staking, tem tempo curto, geramente 6 meses, e tempo longo, geralmente 12 meses.</p>
            </div>
            
            <div class="border-b border-gray-200 pb-4">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Como posso verificar o resultado dos sorteios?</h3>
              <p class="text-gray-600">Todos os resultados ficam permanentemente registrados na blockchain. Você pode verificar todos os sorteios na seção "Histórico de Sorteios" da plataforma.</p>
            </div>
            
            <div class="border-b border-gray-200 pb-4">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Qual é o valor mínimo para participar atualmente?</h3>
              <p class="text-gray-600">O valor mínimo atual é de 1000 tokens EQ9, o que dá direito a 1 ticket no sorteio do iPhone 16 ou o dobre os tickets fazendo o stake longo.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Existe um limite máximo de tickets por pessoa?</h3>
              <p class="text-gray-600">Não há limite! Quanto mais tokens você fizer staking, mais tickets receberá, aumentando suas chances de ganhar em todos os sorteios .</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <div class="relative inline-block group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
              <a 
                href="https://www.blocopremiado.com" 
                target="_blank"
                class="relative inline-block bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 w-full sm:w-auto"
              >
                Acessar Aplicativo
              </a>
            </div>
            <p class="text-gray-600 mt-4 max-w-lg mx-auto">
              A versão beta já está disponível! Participe agora do sorteio do iPhone 16 fazendo staking de tokens EQ9.
            </p>
          </div>
          <div>
            <div class="relative inline-block group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
              <a 
                href="/invest" 
                class="relative inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 w-full sm:w-auto"
              >
                Investir na Pré-Seed
              </a>
            </div>
            <p class="text-gray-600 mt-4 max-w-lg mx-auto">
              Invista na rodada pré-seed e ajude a desenvolver a plataforma completa com todos os recursos de sorteios.
            </p>
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
