import { Objeto } from "../interfaces/objeto.js";

export class Negociacao implements Objeto<Negociacao> {
    
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number) {

    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.volume}
        `;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public ehiqual(negociacao: Negociacao): boolean {
        return this.data.getTime() === negociacao.data.getTime() &&
               this.quantidade === negociacao.quantidade &&
               this.valor === negociacao.valor;
    }
}