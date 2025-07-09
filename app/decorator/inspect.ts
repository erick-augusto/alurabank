export function inspect(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`--- Método ${propertyKey} foi chamado com os seguintes parâmetros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`--- Método ${propertyKey} retornou: ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor;
}
