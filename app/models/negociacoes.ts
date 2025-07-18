import { Objeto } from '../interfaces/objeto.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Objeto<Negociacoes> {
    
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    ehiqual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista());
    }
}