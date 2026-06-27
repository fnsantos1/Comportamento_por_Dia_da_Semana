import PromptSync from "prompt-sync";

const prompt = PromptSync();

enum Priority {
    High = "ALTA",
    Medium = "MÉDIA",
    Low = "BAIXA"
}

// O contexto deve ser a própria classe que utiliza a estratégia (SemanaAtiva)
interface Contexto {
    getNomeUsuario(): string;
    getTarefaPendente(): string;
    getMetaSemanal(): string;
}

interface Strategy {
    getDiaNome(): string;
    getPriority(): Priority; // Alterado para método para facilitar a implementação
    objetivo(c: Contexto): void;
}

class Domingo implements Strategy {
    getDiaNome() { return "Domingo"; }
    getPriority() { return Priority.Low; }
    objetivo(c: Contexto): void {
        console.log(`${c.getNomeUsuario()}, hoje é dia de planejar a próxima semana.`);
    }
}

class Segunda implements Strategy {
    getDiaNome() { return "Segunda-feira"; }
    getPriority() { return Priority.High; }
    objetivo(c: Contexto): void {
        console.log(`Organize suas prioridades. Tarefa foco: ${c.getTarefaPendente()}`);
    }
}

class Terca implements Strategy {
    getDiaNome() { return "Terça-feira"; }
    getPriority() { return Priority.Medium; }
    objetivo(c: Contexto): void {
        console.log("Avance nas tarefas pendentes.");
    }
}

class Quarta implements Strategy {
    getDiaNome() { return "Quarta-feira"; }
    getPriority() { return Priority.Medium; }
    objetivo(c: Contexto): void {
        console.log("Revise o andamento das atividades.");
    }
}

class Quinta implements Strategy {
    getDiaNome() { return "Quinta-feira"; }
    getPriority() { return Priority.Medium; }
    objetivo(c: Contexto): void {
        console.log("Colabore com alguém da equipe.");
    }
}

class Sexta implements Strategy {
    getDiaNome() { return "Serta-feira"; }
    getPriority() { return Priority.Low; }
    objetivo(c: Contexto): void {
        console.log("Registre o que foi concluído.");
    }
}

class Sabado implements Strategy {
    getDiaNome() { return "Sábado"; }
    getPriority() { return Priority.Low; }
    objetivo(c: Contexto): void {
        console.log("Estudo livre ou descanso.");
    }
}

class NullStrategy implements Strategy {
    getDiaNome() { return "Dia inválido"; }
    getPriority() { return Priority.Low; }
    objetivo(_: Contexto): void {
        console.log("Estratégia não encontrada para este dia.");
    }
}

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
    ) { }

    getNomeUsuario() { return this.nomeUsuario; }
    getTarefaPendente() { return this.tarefaPendente; }
    getMetaSemanal() { return this.metaSemanal; }

    setStrategy(s: Strategy) { this.estrategia = s; }

    executar() {
        console.log(`--- ${this.estrategia.getDiaNome()} (Prioridade: ${this.estrategia.getPriority()}) ---`);
        this.estrategia.objetivo(this);
    }
}

// Exemplo de uso:
const minhaSemana = new SemanaAtiva("Usuário", "Corrigir bugs", "Finalizar projeto", new Domingo());
minhaSemana.executar();