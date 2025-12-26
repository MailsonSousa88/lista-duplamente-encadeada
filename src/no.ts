export class No {
    valor: number;
    proximo: No | null;
    anterior: No | null;

    constructor(valor:number){
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }

}