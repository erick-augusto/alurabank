export function domInjector(
    seletor: string
) {
    return function(
        target: any,
        propertyKey: string
    ) {
        let elemento: HTMLElement;
        console.log(`%cCriando getter para o seletor ${seletor} na propriedade ${propertyKey}`, 'color: blue; font-weight: bold;');

        const getter = function() {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
            }
            return elemento;
        };

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    };
}