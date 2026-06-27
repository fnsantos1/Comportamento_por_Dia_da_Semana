/*
• Segunda-feira: organize suas prioridades.
• Terça-feira: avance nas tarefas pendentes.
• Quarta-feira: revise o andamento das atividades.
• Quinta-feira: colabore com alguém da equipe.
• Sexta-feira: registre o que foi concluído.
• Sábado: realize estudo livre ou descanso.
• Domingo: planeje a próxima semana.
*/

//2. Para cada dia da semana, associe uma estratégia responsável por executar uma ação específica.
enum priority {
    High = "ALTA",
    Medium = "MÉDIA",
    Low = "BAIXA"
}

interface contexto {
    username: string,
    atividade: string,
}
interface strategy {
    getDiaNome(): string;
    get priority(): priority;
    objetivo(contexto: contexto): void;
}
class Domingo implements strategy {
    getDiaNome() { return "Domingo"; }
    get priority() { return priority.Low; }

    objetivo(c: contexto): void {
        console.log("Planeje a próxima semana.");
    }
}
class Segunda implements strategy {
    getDiaNome() { return "Segunda-feira"; }
    get priority() { return priority.High; }

    objetivo(c: contexto): void {
        console.log("Organize suas prioridades.");
    }
}
class Terca implements strategy {
    getDiaNome() { return "Terça-feira"; }
    get priority() { return priority.Medium; }

    objetivo(c: contexto): void {
        console.log("Avance nas tarefas pendentes.");
    }
}
class Quarta implements strategy {
    getDiaNome() { return "Quarta-feira"; }
    get priority() { return priority.Medium; }

    objetivo(c: contexto): void {
        console.log("Revise o andamento das atividades.");
    }
}
class Quinta implements strategy {
    getDiaNome() { return "Quinta-feira"; }
    get priority() { return priority.Medium; }

    objetivo(c: contexto): void {
        console.log("Colabore com alguém da equipe.");
    }
}
class Sexta implements strategy {
    getDiaNome() { return "Sexta-feira"; }
    get priority() { return priority.Low; }

    objetivo(c: contexto): void {
        console.log("Registre o que foi concluído.");
    }
}
class Sabado implements strategy {
    getDiaNome() { return "Sábado"; }
    get priority() { return priority.Low; }

    objetivo(c: contexto): void {
        console.log("Estudo livre ou descanso.");
    }
}
class NullStrategy implements strategy {
    getDiaNome() {
        return "Dia inválido";
    }
    get priority() {
        return priority.Low;
    }
    objetivo(_: contexto): void {
        console.log("Estratégia inválida.");
    }
}
class StrategyFactory {
    public static getStrategy(dia: string): strategy {
        const normalized = dia.toLowerCase();

        const map: Record<string, strategy> = {
            segunda: new Segunda(),
            "segunda-feira": new Segunda(),

            terca: new Terca(),
            "terca-feira": new Terca(),
            "terça-feira": new Terca(),
            quarta: new Quarta(),
            "quarta-feira": new Quarta(),
            quinta: new Quinta(),
            "quinta-feira": new Quinta(),
            sexta: new Sexta(),
            "sexta-feira": new Sexta(),
            sabado: new Sabado(),
            "sábado": new Sabado(),
            domingo: new Domingo()
        };

        return map[normalized] ?? new NullStrategy();
    }
}
class SemanaAtiva {
    private nomeUsuario: string,
    private tarefaPendente: string,
    private metaSemanal: string,
    private diaSemana: strategy

    constructor(nomeUsuario: string, tarefaPendente: string, metaSemanal: string, diaSemana: strategy) {
        this.nomeUsuario = nomeUsuario;
        this.tarefaPendente = tarefaPendente;
        this.metaSemanal = metaSemanal;
        this.diaSemana = diaSemana;
    }
    public getNomeUsuario(): string {
        return this.nomeUsuario;
    }

}
function main() {
    //1. Obtenha a data atual por meio dos recursos disponíveis na linguagem escolhida e determine o dia da semana.


    //4. O programa também deve permitir consultar a estratégia de um dia informado manualmente, sem depender exclusivamente da data atual.

    // Caso o dia informado seja inválido, inexistente ou não tenha estratégia associada, o programa deve responder de forma segura, sem interromper sua execução.
}
