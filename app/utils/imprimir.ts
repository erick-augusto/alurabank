import { Negociacao } from "../models/negociacao"
import { Imprimivel } from "./impromivel.js";

export function imprimir(...objetos: Imprimivel[]){
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}