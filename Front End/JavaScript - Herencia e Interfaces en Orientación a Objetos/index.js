import {Cuenta} from "./Cuenta.js";
import {Cliente} from "./Cliente.js";

const clienteRonaldo = new Cliente("Ronaldo", "123456", "654321");
const cuentaRonaldo = new Cuenta("000001", "001", clienteRonaldo);

const clienteMaria = new Cliente("Maria", "456789", "987654");
const cuentaMaria = new Cuenta("000002", "002", clienteMaria);

function mensajeSaldo(cuenta) {
    console.log(
        `El saldo de la cuenta de ${cuenta.cliente.nombre} es: ${cuenta.saldo}`
    );
}

mensajeSaldo(cuentaRonaldo);
cuentaRonaldo.depositoEnCuenta(100);
mensajeSaldo(cuentaRonaldo);
cuentaRonaldo.retiroEnCuenta(50);
mensajeSaldo(cuentaRonaldo);

cuentaRonaldo.transferirParaCuenta(25, cuentaMaria);
mensajeSaldo(cuentaRonaldo);
mensajeSaldo(cuentaMaria);

console.log(Cuenta.numeroCuentas);


