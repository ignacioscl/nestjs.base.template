
export default class BussinessException extends Error {
    code?:number;
    constructor(mensaje: string,code:number) {
        super(mensaje);
        this.code=code;
      }
}