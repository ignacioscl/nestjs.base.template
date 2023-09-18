
export default class BussinessException extends Error {
    code?:number;
    /**
     * Invalid or Missing Input Parameter
     */
    public static ATRIBUTE_VALUE_ERR = 1;
    constructor(mensaje: string,code:number) {
        super(mensaje);
        this.code=code;
      }
}