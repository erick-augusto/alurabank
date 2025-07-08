import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(selector: string, escapar?: boolean) {
        const elemento = document.querySelector(selector);
        if(elemento){
            this.elemento = document.querySelector(selector) as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM.`);
        }
        if(escapar){
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}