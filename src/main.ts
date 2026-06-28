import PromptSync from "prompt-sync";

const prompt = PromptSync();

//6. Além da mensagem principal, cada estratégia deve informar uma recomendação de prioridade
//para aquele dia: ALTA, MÉDIA ou BAIXA.
enum Priority {
    High = "ALTA",
    Medium = "MÉDIA",
    Low = "BAIXA"
}

interface Contexto {
    getNomeUsuario(): string;
    getTarefaPendente(): string;
    getMetaSemanal(): string;
}

interface Strategy {
    getDiaNome(): string;
    getPriority(): Priority;
    objetivo(c: Contexto): void;
}

//2. Para cada dia da semana, associe uma estratégia responsável por executar uma ação específica.
class Domingo implements Strategy {
    getDiaNome() { return "Domingo"; }
    getPriority() { return Priority.Low; }
    objetivo(c: Contexto): string {
        return `${c.getNomeUsuario()}, hoje é dia de planejar a próxima semana.`;
    }
}

class Segunda implements Strategy {
    getDiaNome() { return "Segunda-feira"; }
    getPriority() { return Priority.High; }
    objetivo(c: Contexto): string {
        return `${c.getNomeUsuario()}, organize suas prioridades. Tarefa foco: ${c.getTarefaPendente()}`;
    }
}

class Terca implements Strategy {
    getDiaNome() { return "Terça-feira"; }
    getPriority() { return Priority.Medium; }
    objetivo(c: Contexto): string {
        return `${c.getNomeUsuario()}, avance nas tarefas pendentes.`;
    }
}

class Quarta implements Strategy {
    getDiaNome() { return "Quarta-feira"; }
    getPriority() { return Priority.Medium; }
    objetivo(c: Contexto): string {
        return `${c.getNomeUsuario()}, revise o andamento das atividades.`;
    }
}

class Quinta implements Strategy {
    getDiaNome() { return "Quinta-feira"; }
    getPriority() { return Priority.Medium; }
    objetivo(c: Contexto): string {
        return `${c.getNomeUsuario()}, colabore com alguém da equipe.`;
    }
}

class Sexta implements Strategy {
    getDiaNome() { return "Serta-feira"; }
    getPriority() { return Priority.Low; }
    objetivo(c: Contexto): string {
        return `${c.getNomeUsuario()}, registre o que foi concluído.`;
    }
}

class Sabado implements Strategy {
    getDiaNome() { return "Sábado"; }
    getPriority() { return Priority.Low; }
    objetivo(c: Contexto): string {
        return `${c.getNomeUsuario()}, estudo livre ou descanso.`;
    }
}

//5. Caso o dia informado seja inválido, inexistente ou não tenha estratégia associada, o programa
//deve responder de forma segura, sem interromper sua execução.
class NullStrategy implements Strategy {
    getDiaNome() { return "Dia inválido"; }
    getPriority() { return Priority.Low; }
    objetivo(_: Contexto): string {
        return "Estratégia não encontrada para este dia.";
    }
}

//A solução deve conter uma abstração de estratégia, estratégias concretas para os dias da
//semana, uma estratégia segura para ausência de comportamento e um componente
//responsável por selecionar a estratégia adequada.
class StrategyFactory {
    public static getStrategy(dia: string): Strategy {
        const normalized = dia.toLowerCase().trim();
        const map: Record<string, Strategy> = {
            "segunda": new Segunda(), "segunda-feira": new Segunda(),
            "terca": new Terca(), "terça": new Terca(), "terça-feira": new Terca(),
            "quarta": new Quarta(), "quarta-feira": new Quarta(),
            "quinta": new Quinta(), "quinta-feira": new Quinta(),
            "sexta": new Sexta(), "sexta-feira": new Sexta(),
            "sabado": new Sabado(), "sábado": new Sabado(),
            "domingo": new Domingo()
        };
        return map[normalized] ?? new NullStrategy();
    }
}

class SemanaAtiva implements Contexto {
    constructor(
        private nomeUsuario: string,
        private tarefaPendente: string,
        private metaSemanal: string,
        private estrategia: Strategy
    ) { };

    getNomeUsuario() { return this.nomeUsuario; }
    getTarefaPendente() { return this.tarefaPendente; }
    getMetaSemanal() { return this.metaSemanal; }

    setStrategy(s: Strategy) { this.estrategia = s; }

    executar() {
        console.log(`Usuário: ${this.nomeUsuario}`);
        console.log(`Dia consultado: ${this.estrategia.getDiaNome()}`);
        console.log(`Prioridade: ${this.estrategia.getPriority()}`);
        console.log(`Mensagem: ${this.estrategia.objetivo(this)}`);
    }
}

//1. Obtenha a data atual por meio dos recursos disponíveis na linguagem escolhida e determine o dia da semana.
function getDiaDaSemanaAtual(): string {
    const diaAtual = new Date().getDay();
    const diasDaSemana = [
        "domingo",
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta",
        "sabado"
    ];
    return diasDaSemana[diaAtual] as string;
}

//4. O programa também deve permitir consultar a estratégia de um dia informado manualmente,
//sem depender exclusivamente da data atual.
function getRandomStrategy(): void {
    const dia = prompt("Digite o dia da semana: ") as string;
    const strategy = StrategyFactory.getStrategy(dia);
    console.log(strategy.getDiaNome());
    console.log(strategy.getPriority());
    console.log(strategy.objetivo(minhaSemana));
}

// Exemplo de uso:
const strategy = StrategyFactory.getStrategy(getDiaDaSemanaAtual());
const minhaSemana = new SemanaAtiva("Kauan", "Corrigir bugs", "Finalizar projeto", strategy);
minhaSemana.executar();

// Exemplo de consulta de dia manual:
getRandomStrategy();

//Exemplo de consulta nula:
const nullStrategy = StrategyFactory.getStrategy("banana");
console.log("\nconsultando o dia 'banana'");
minhaSemana.setStrategy(nullStrategy);
minhaSemana.executar();

