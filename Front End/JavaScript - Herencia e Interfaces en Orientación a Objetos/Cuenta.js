import { Cliente } from "./Cliente.js";

export class Cuenta {
    #numero;
    #agencia;
    #cliente;
    #saldo;

    /*Para proveer especialización de clase podríamos proveer al constructor de alguna propiedad para identificar un tipo,
    pero depender de variables para definir distintas especialidades rompe con la práctica de responsabilidad única*/
    constructor(numero, agencia, cliente, saldo) {
        this.#numero = numero;
        this.#agencia = agencia;
        this.#cliente = cliente; 
        this.#saldo = saldo;
    }

    depositoEnCuenta(value) {
        if (value > 0) {
            this.#saldo += value;
            return this.#saldo;
        }
    }

    /*Por convención, ya que JavaScript no soporta funciones y propiedades protegidas, se utiliza el _ para alcance protegido
    De esta manera tenemos una función _retiroEnCuenta protegida, es decir que indicamos a los desarrolladores
    que solo se pueda acceder desde la clase padre y dentro de las clases hijas que la hereden*/
    _retiroEnCuenta(value, comision) { 
        value = value * (1+comision/100);
        if (this.#saldo >= value && value > 0) {
            this.#saldo -= value;
            return this.#saldo;
        }
    }

    //Ahora tenemos dos funciones, una pública y otra protegida para poder modificar dentro de la misma clase padre o clases hijas
    retiroEnCuenta(value) {
        this._retiroEnCuenta(value, 0);
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