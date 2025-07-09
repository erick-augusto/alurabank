export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        console.log(`%cCriando getter para o seletor ${seletor} na propriedade ${propertyKey}`, 'color: blue; font-weight: bold;');
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
