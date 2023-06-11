import { Cliente } from "./Cliente.js";

export class Cuenta {
    #numero;
    #agencia;
    #cliente;
    #saldo;
    static numeroCuentas = 0; 

    constructor(numero, agencia, cliente) {
        this.#numero = numero;
        this.#agencia = agencia;
        this.#cliente = cliente; 
        this.#saldo = 0;
        Cuenta.numeroCuentas++;
    }

    depositoEnCuenta(value) {
        if (value > 0) {
            this.#saldo += value;
            return this.#saldo;
        }
    }

    retiroEnCuenta(value) {
        if (this.#saldo >= value && value > 0) {
            this.#saldo -= value;
            return this.#saldo;
        }
    }

    transferirParaCuenta(valor, cuenta) {
        this.retiroEnCuenta(valor);
        cuenta.depositoEnCuenta(valor);
    }
    
    get saldo() {
        return this.#saldo;
    }

    get numero() {
        return this.#numero;
    }

    set numero(numero) {
        this.#numero = numero;
    }

    get agencia() {
        return this.#agencia;
    }

    set agencia(agencia) {
        this.#agencia = agencia;
    }

    get cliente() {
        return this.#cliente;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        }
    }
}