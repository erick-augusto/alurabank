export class View {
    constructor(selector, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = document.querySelector(selector);
        }
        else {
            throw Error(`Seletor ${selector} não existe no DOM.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
