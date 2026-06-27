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
enum priority{
    High = "ALTA",
    Medium = "MEDIA",
    Low = "BAIXA"
}
interface contexto{
    username: string,
    atividade: string,
}
interface strategy{
    getDiaNome(): string;
    get priority(): priority;
    objetivo(contexto: contexto): void;
}


class Domingo implements strategy {
    getDiaNome(): string {
        return "Domingo";
    }
    get priority(): priority {
        return priority.Low;
    }
    objetivo(contexto: contexto): void {
        console.log("Planeje a proxima semana")
    }
}

class Segunda implements strategy {
    getDiaNome(): string {
        return "Segunda-feira";
    }
    get priority(): priority {
        return priority.High;
    }
    objetivo(contexto: contexto): void {
        console.log("Organize suas prioridades")
    }
}

class Terca implements strategy {
    getDiaNome(): string {
        return "Terça-feira";
    }
    get priority(): priority {
        return priority.Medium;
    }
    objetivo(contexto: contexto): void {
        console.log("Avance nas tarefas pendentes")
    }
}

class Quarta implements strategy {
    getDiaNome(): string {
        return "Quarta-feira";
    }
    get priority(): priority {
        return priority.Low;
    }
    objetivo(contexto: contexto): void {
        console.log("Revise o andamento das atividads")
    }
}

class Quinta implements strategy {
    getDiaNome(): string {
        return "Quinta-feira";
    }
    get priority(): priority {
        return priority.Medium;
    }
    objetivo(contexto: contexto): void {
        console.log("Colabore com alguém da equipe")
    }
}

class Sexta implements strategy {
    getDiaNome(): string {
        return "Sexta-feira";
    }
    get priority(): priority {
        return priority.Low;
    }
    objetivo(contexto: contexto): void {
        console.log("Registre o que foi concluido")
    }
}

class Sabado implements strategy {
    getDiaNome(): string {
        return "Sábado";
    }
    get priority(): priority {
        return priority.Low;
    }
    objetivo(contexto: contexto): void {
        console.log ("Realize estudo livre ou descanso")
    }
}
class nullstrategy implements strategy{
    getDiaNome(): string {
        return "Dia invalido";
    }
    get priority(): priority {
        return priority.Low;
    }
    objetivo(contexto: contexto): void {
        console.log("Estrategia invalida");
    }
}

class strategyFactory{
    public static getStrategy(dia: string): strategy{
        const tudominusculo = dia.toLowerCase();

        const map: Record<string, strategy> = {
            segunda: new Segunda(),
            "segunda-feira": new Segunda(),
            terca: new Terca(),
            "terca-feira": new Terca(),
            quarta: new Quarta(),
            "quarta-feira": new Quarta(),
            quinta: new Quinta(),
            "quinta-feira": new Quinta(),
            sexta: new Sexta(),
            "sexta-feira": new Sexta(),
            sabado: new Sabado(),
            "sábado": new Sabado(),
            domingo: new Domingo(),
        }
        return map[tudominusculo] || new nullstrategy();
    }
}
//[X]3. A estratégia deve receber uma informação adicional informada pelo usuário, tal como nome, tarefa pendente ou meta semanal.
class SemanaAtiva {
    private nomeUsuario: string;
    private tarefaPendente: string;
    private metaSemanal: string;
    private diaSemana: strategy;

    //5. Além da mensagem principal, cada estratégia deve informar uma recomendação de prioridade para aquele dia: ALTA, MÉDIA ou BAIXA.


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