Este projeto utiliza o padrao de projeto Strategy para organizar atividades semanais, promovendo um codigo desacoplado, facil de manter e extensivel.

Instrucoes de Execucao
Para executar o projeto, certifique-se de ter o Node.js instalado no seu ambiente.

Instale as dependencias necessarias:

Bash
npm install
Compile e execute o arquivo principal utilizando o ts-node:

Bash
npx ts-node nome-do-arquivo.ts
Estrutura das Estrategias
O sistema e composto pelos seguintes componentes:

Interface Strategy: Define o contrato obrigatorio (metodos getDiaNome, getPriority e objetivo) para todas as classes que representam os dias da semana.

Classes Concretas: Implementacoes especificas para cada dia (ex: Segunda, Terca, etc.), contendo a logica particular de cada um.

Contexto (SemanaAtiva): A classe que consome a estrategia. Ela nao conhece a logica interna dos dias, apenas executa a estrategia definida.

StrategyFactory: Responsavel pela centralizacao da criacao dos objetos. Analisa o input do usuario e retorna a estrategia correspondente ou um objeto de falha segura.

Design Patterns Aplicados
1. Como evitar verificacoes repetidas de valores nulos no codigo principal?
Adotando o Polimorfismo. Ao garantir que toda busca por estrategia retorne um objeto valido (evitando retornos nulos), elimina-se a necessidade de checagens condicionais (if/else ou null checks) antes de cada chamada de metodo no codigo principal.

2. Qual padrao de projeto pode ser utilizado para representar a ausencia de uma estrategia de forma segura?
O padrao Null Object. Ele define uma classe que implementa a mesma interface das estrategias reais, mas que executa um comportamento neutro ou de tratamento de erro, permitindo que o sistema continue funcionando sem interrupcoes.

3. Como esse padrao seria incorporado a solucao?
Atraves da StrategyFactory. Ao nao localizar um dia valido para a entrada fornecida, a factory instancia e retorna um objeto da classe NullStrategy em vez de retornar null. Dessa forma, o codigo principal invoca o metodo de forma transparente, delegando ao NullStrategy a responsabilidade de tratar o erro ou exibir a mensagem ao usuario.