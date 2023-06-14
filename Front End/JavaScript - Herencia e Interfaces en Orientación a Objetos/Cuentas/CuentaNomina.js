import { Cuenta } from "./Cuenta.js";

export class CuentaNomina extends Cuenta {
    
    constructor(numero, agencia, cliente, saldo) {
        super(numero, agencia, cliente, saldo);
    }

    retiroEnCuenta(value) {
        super._retiroEnCuenta(value, 1);
    }
}