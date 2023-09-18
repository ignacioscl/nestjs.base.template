import BussinessException from "./bussiness.exception";

export default class IllegalAccessException extends BussinessException {
    code?:number;
    constructor(mensaje: string) {
        super(mensaje,10);
      }
}