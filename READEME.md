# Strategy Pattern - Atividades Semanais

Este projeto utiliza o padrão de projeto Strategy para organizar atividades semanais, promovendo um código desacoplado, fácil de manter e extensível.

## Instruções de Execução

Para executar o projeto, certifique-se de ter o Node.js instalado no seu ambiente.

Instale as dependências necessárias:

```bash
npm install
```

Compile e execute o arquivo principal utilizando o ts-node:

```bash
npx ts-node nome-do-arquivo.ts
```

## Estrutura das Estratégias

O sistema é composto pelos seguintes componentes:

- **Interface Strategy**: Define o contrato obrigatório (métodos `getDiaNome`, `getPriority` e `objetivo`) para todas as classes que representam os dias da semana.
- **Classes Concretas**: Implementações específicas para cada dia (ex: `Segunda`, `Terca`, etc.), contendo a lógica particular de cada um.
- **Contexto (`SemanaAtiva`)**: A classe que consome a estratégia. Ela não conhece a lógica interna dos dias, apenas executa a estratégia definida.
- **StrategyFactory**: Responsável pela centralização da criação dos objetos. Analisa o input do usuário e retorna a estratégia correspondente ou um objeto de falha segura.

## Design Patterns Aplicados

### 1. Como evitar verificações repetidas de valores nulos no código principal?

Adotando o Polimorfismo. Ao garantir que toda busca por estratégia retorne um objeto válido (evitando retornos nulos), elimina-se a necessidade de checagens condicionais (`if/else` ou null checks) antes de cada chamada de método no código principal.

### 2. Qual padrão de projeto pode ser utilizado para representar a ausência de uma estratégia de forma segura?

O padrão Null Object. Ele define uma classe que implementa a mesma interface das estratégias reais, mas que executa um comportamento neutro ou de tratamento de erro, permitindo que o sistema continue funcionando sem interrupções.

### 3. Como esse padrão seria incorporado à solução?

Através da `StrategyFactory`. Ao não localizar um dia válido para a entrada fornecida, a factory instancia e retorna um objeto da classe `NullStrategy` em vez de retornar `null`. Dessa forma, o código principal invoca o método de forma transparente, delegando ao `NullStrategy` a responsabilidade de tratar o erro ou exibir a mensagem ao usuário.
