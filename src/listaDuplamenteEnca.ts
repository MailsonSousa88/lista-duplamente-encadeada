import { No } from "./no";

export class ListaDuplamenteEncadeada {
    private inicio: No | null;
    private fim: No | null;
    private tamanho: number;

    constructor(){
        this.inicio = null;
        this.fim = null;
        this.tamanho = 0;
    }

    adicionarNoInicio(valor:number): void{
        
        const novoNo = new No(valor);

        if(this.inicio == null){
            this.inicio = novoNo;
            this.fim = novoNo;
        }else{
            novoNo.proximo = this.inicio;
            this.inicio.anterior = novoNo;
            this.inicio = novoNo;
        }
        this.tamanho++;
    }

    adicionarNoFim(valor: number): void{
        
        const novoNo = new No(valor);

        if(this.fim === null){
            this.inicio = novoNo;
            this.fim = novoNo;
        }else{
            novoNo.anterior = this.fim;
            this.fim.proximo = novoNo;
            this.fim = novoNo;
        }
        this.tamanho++;
    }

    adicionarNaPosicao(posicao: number, valor: number): void{
        
        if(posicao < 0 || posicao > this.tamanho){
            return; 
        }

        if(posicao === 0){
            this.adicionarNoInicio(valor);
            return;
        }

        if(posicao === this.tamanho){
            this.adicionarNoFim(valor);
            return;
        }

        let atual = this.inicio;
        let indice = 0;

        while(atual !== null && indice < posicao){
            atual = atual.proximo;
            indice++;
        }

        if(atual !== null){
            const novoNo = new No(valor);

            novoNo.proximo = atual;
            novoNo.anterior = atual.anterior;

            if (atual.anterior) {
                atual.anterior.proximo = novoNo;
            }

            atual.anterior = novoNo;

            this.tamanho++;
        }
    }

    removerDoInicio(): number | null{
        
        if(this.inicio === null){
            return null;
        }

        const valorRemovido = this.inicio.valor;

        if(this.inicio === this.fim){
            this.inicio = null;
            this.fim = null;
        } else{
            this.inicio = this.inicio.proximo!;
            this.inicio.anterior = null;
        }

        this.tamanho--;
        return valorRemovido;
    }

    removerDoFim(): number | null{
        
        if(this.fim === null){
            return null;
        }

        const valorRemovido = this.fim.valor;

        if(this.inicio === this.fim){
            this.inicio = null;
            this.fim = null;
        } else{
            this.fim = this.fim.anterior!;
            this.fim.proximo = null;
        }

        this.tamanho--;
        return valorRemovido;
    }

    removerDaPosicao(posicao: number): number | null{
        
        if (posicao < 0 || posicao >= this.tamanho) {
            return null; // Caso a posição seja inválida
        }

        if (posicao == 0){
            return this.removerDoInicio();
        }

        if (posicao == this.tamanho - 1){
            return this.removerDoFim();
        }

        // Remoção dos elementos no meio
        let atual = this.inicio!;
        for (let i = 0; i < posicao; i++){
            atual = atual.proximo!;
        }

        const valorRemovido = atual.valor;

        const anterior = atual.anterior!;
        const proximo = atual.proximo!;

        anterior.proximo = proximo;
        proximo.anterior = anterior;

        this.tamanho--;

        return valorRemovido;
    }

    buscar(posicao: number): number | null{
        
        if(posicao < 0 || posicao >= this.tamanho){
            return null; // posição inválida
        }

        let atual;

        // Decidir a direção mais eficiente
        if(posicao < this.tamanho / 2){
            // Começa do início
            atual = this.inicio!;
            for (let i = 0; i < posicao; i++){
                atual = atual.proximo!;
            }
        } else{
            // Começa do fim
            atual = this.fim!;
            for (let i = this.tamanho - 1; i > posicao; i--){
                atual = atual.anterior!;
            }
        }

        return atual.valor;
    }

    buscarValor(valor: number): number{

        let atual = this.inicio;
        let posicao = 0;

        while (atual !== null){
            if (atual.valor === valor){
                return posicao;
            }
            atual = atual.proximo;
            posicao++;
        }

        return -1; // valor não encontrado
    }

    estaVazia(): boolean{
    return this.tamanho === 0;
    }

    tamanhoLista(): number{
    return this.tamanho;
    }

    exibirInicioAoFim(): string{
        
        let resultado = "";
        let atual = this.inicio;

        while (atual !== null){
        resultado += atual.valor;
        if (atual.proximo !== null){
            resultado += " <-> ";
        }
        atual = atual.proximo;
    }

        return resultado;
    }

    exibirFimAoInicio(): string{

        let resultado = "";
        let atual = this.fim;

        while (atual !== null) {
        resultado += atual.valor;
        if (atual.anterior !== null){
            resultado += " <-> ";
        }
        atual = atual.anterior;
    }

    return resultado;
    }

}