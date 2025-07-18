import { Imprimivel } from "../utils/impromivel.js";
import { Comparavel } from "./comparavel.js";

export interface Objeto<T> extends Imprimivel, Comparavel<T>{

}