<!-- pages/architecture.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 py-6 space-y-10 relative">
    <!-- Page header with animation -->
    <div class="relative overflow-hidden bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl shadow-xl p-6 md:p-10 mb-10">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="absolute -left-20 -top-20 w-64 h-64 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div class="relative z-10 md:flex items-center justify-between">
        <div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">Arquitetura de Tickets Virtuais Stateless</span>
          </h1>
          <p class="text-orange-100 text-lg md:text-xl max-w-2xl">
            Um sistema avançado, sem taxas de armazenamento e totalmente auditável, com escalabilidade infinita, transparência e eficiência.
          </p>
        </div>
      </div>
    </div>

    <!-- Architecture Details -->
    <div class="bg-white bg-opacity-90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 transform transition-all hover:shadow-2xl">
      <div class="flex items-center mb-8">
          <div class="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-3 mr-5 rounded-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Visão Geral da Arquitetura</h2>
      </div>
        
      <div class="prose prose-lg max-w-none">
        <p>
          A plataforma Bloco Premiado implementa um sistema avançado, sem taxas de armazenamento e totalmente auditável, chamado <strong>Arquitetura de Tickets Virtuais Stateless (SVTA)</strong>.
        </p>
        
        <p>
          Esse modelo utiliza cálculo determinístico para eliminar a necessidade de armazenamento on-chain, alcançando máxima escalabilidade, transparência e eficiência.
        </p>
        
        <p>
          Além disso, a SVTA pode ser comparada a um estado quântico de suposição - o ticket só existe quando consultado, sendo materializado através de lógica determinística.
        </p>
        
        <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">Características Principais</h3>
        
        <div class="mt-6 space-y-6">
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <h4 class="font-bold text-orange-800 mb-2">1. IDs Determinísticos de Tickets</h4>
            <p class="text-gray-700">Cada ID de ticket é gerado matematicamente com base em dados imutáveis do stake:</p>
            <ul class="list-disc pl-6 mt-2 text-gray-700">
              <li>Endereço da carteira do usuário</li>
              <li>Timestamp do stake</li>
              <li>Índice do stake (ordem do stake)</li>
              <li>Índice do ticket (posição dentro do stake)</li>
            </ul>
          </div>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <h4 class="font-bold text-orange-800 mb-2">2. Computação Stateless</h4>
            <ul class="list-disc pl-6 mt-2 text-gray-700">
              <li>Nenhum mapeamento, array ou armazenamento é necessário on-chain.</li>
              <li>Não há necessidade de mintar NFTs ou escrever estado na blockchain.</li>
              <li>Os tickets existem virtualmente e podem ser reconstruídos deterministicamente a qualquer momento.</li>
            </ul>
          </div>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <h4 class="font-bold text-orange-800 mb-2">3. Visualização de Tickets Sob Demanda</h4>
            <ul class="list-disc pl-6 mt-2 text-gray-700">
              <li>Os tickets do usuário são calculados em tempo real quando ele acessa a galeria de tickets.</li>
              <li>Sem dependência de eventos on-chain ou banco de dados.</li>
            </ul>
          </div>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <h4 class="font-bold text-orange-800 mb-2">4. Zero Armazenamento, Zero Custo</h4>
            <ul class="list-disc pl-6 mt-2 text-gray-700">
              <li>Elimina o gargalo tradicional de armazenamento de dados on-chain.</li>
              <li>Nenhuma taxa de gas para criar ou armazenar tickets.</li>
              <li>Escalabilidade infinita para milhões de tickets.</li>
            </ul>
          </div>
          
          <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <h4 class="font-bold text-orange-800 mb-2">5. Totalmente Auditável e Transparente</h4>
            <ul class="list-disc pl-6 mt-2 text-gray-700">
              <li>Todos os IDs de tickets podem ser derivados por qualquer um com acesso aos dados de stake.</li>
              <li>Para cada sorteio, a plataforma pode gerar a lista completa de IDs de tickets válidos e utilizar aleatoriedade verificável para selecionar um vencedor.</li>
              <li>Nenhuma possibilidade de manipulação, pois os IDs dependem exclusivamente de informações imutáveis de stake.</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-bold text-gray-800 mt-10 mb-6">Benefícios Técnicos</h3>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 border">
            <thead class="bg-orange-100">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Funcionalidade</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Modelo Tradicional com NFT</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Modelo Stateless Virtual Ticket</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Armazenamento on-chain</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Necessário</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium text-green-700">Não necessário</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Taxas de gas</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Altas</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium text-green-700">Zero</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Escalabilidade</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Limitada</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium text-green-700">Infinita</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Verificação de ticket</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Requer consulta à blockchain</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium text-green-700">Cálculo determinístico local</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Segurança</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Moderada</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium text-green-700">Máxima (determinística, auditável)</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Custo para o usuário</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Alto</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium text-green-700">Nenhum</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 class="text-xl font-bold text-gray-800 mt-10 mb-4">Futuro-Prova & Componível</h3>
        <p>
          A Arquitetura de Tickets Virtuais Stateless é preparada para o futuro e pode ser facilmente estendida para:
        </p>
        <ul class="list-disc pl-6 mt-2 text-gray-700">
          <li>Outros programas de stake</li>
          <li>Loterias de múltiplas rodadas</li>
          <li>Precificação dinâmica de tickets</li>
          <li>Integrações e auditorias de terceiros</li>
        </ul>
        
        <div class="bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-xl mt-8 border border-orange-200">
          <h3 class="text-xl font-bold text-gray-800 mb-2">Resumo</h3>
          <p class="text-gray-700">
            O Bloco Premiado opera agora com um dos sistemas de tickets de loteria mais eficientes, escaláveis e seguros do mercado blockchain. Através da Arquitetura de Tickets Virtuais Stateless, eliminamos complexidade desnecessária, reduzimos custos e oferecemos aos usuários uma experiência instantânea, transparente e verificável de staking e sorteio.
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
