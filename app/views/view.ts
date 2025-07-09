import { inspect } from "../decorator/inspect.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
    
    constructor(selector: string) {
        const elemento = document.querySelector(selector);
        if(elemento){
            this.elemento = document.querySelector(selector) as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM.`);
        }
    }

    protected abstract template(model: T): string;

    @logarTempoDeExecucao(true)
    @inspect
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}