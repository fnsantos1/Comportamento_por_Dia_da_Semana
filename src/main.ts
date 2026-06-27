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
interface DiaSemana {
    dia(): string;
    objetivo(): void;
}

class Domingo implements DiaSemana {
    dia (){
        return "Domingo";
    }
    objetivo(): void {
        console.log("Planeje a próxima semana.")
    }
}

class Segunda implements DiaSemana {
    dia (){
        return "Segunda-feira";
    }
    objetivo(): void {
        console.log("Organize suas prioridades.")
    }
}

class Terca implements DiaSemana {
    dia (){
        return "Terça-feira";
    }
    objetivo(): void {
        console.log("Avance nas tarefas pendentes.")
    }
}

class Quarta implements DiaSemana {
    dia (){
        return "Quarta-feira";
    }
    objetivo(): void {
        console.log("Revise o andamento das atividads.")
    }
}

class Quinta implements DiaSemana {
    dia (){
        return "Quinta-feira";
    }
    objetivo(): void {
        console.log("Colabore com alguém da equipe.")
    }
}

class Sexta implements DiaSemana {
    dia (){
        return "Sexta-feira";
    }
    objetivo(): void {
        console.log("Registre o que foi concluído.")
    }
}

class Sabado implements DiaSemana {
    dia (){
        return "Sabado";
    }

    objetivo(): void {
        console.log ("Realize estudo livre ou descanso.")
    }
}

//[X]3. A estratégia deve receber uma informação adicional informada pelo usuário, tal como nome, tarefa pendente ou meta semanal.
class SemanaAtiva {
    private nomeUsuario: string;
    private tarefaPendente: string;
    private metaSemanal: string;
    private diaSemana: DiaSemana;

    //5. Além da mensagem principal, cada estratégia deve informar uma recomendação de prioridade para aquele dia: ALTA, MÉDIA ou BAIXA.


    constructor(nomeUsuario: string, tarefaPendente: string, metaSemanal: string, diaSemana: DiaSemana) {
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