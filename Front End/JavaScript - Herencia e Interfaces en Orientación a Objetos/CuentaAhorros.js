import cli from "@angular/cli";
import { Cuenta } from "./Cuenta.js";

export class CuentaAhorros extends Cuenta {
    
    constructor(numero, agencia, cliente, saldo) {
        super(numero, agencia, cliente, saldo);
    }

    retiroEnCuenta(value) {
        this._retiroEnCuenta(value, 2);
    }
}