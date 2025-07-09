export class View {
    constructor(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = document.querySelector(selector);
        }
        else {
            throw Error(`Seletor ${selector} não existe no DOM.`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
