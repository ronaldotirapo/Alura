import { Cliente } from "../Cliente.js";

export class Cuenta {
    /*Como se puede suponer es posible hacer una instancia de clase de Cuenta, aunque esta cuenta solo sea destinada a ser una base,
    por ello a las clases padre que solo deben ser un modelo para ser heredadas (pero no instanciadas),
    se les debe definir como clases abstractas*/
    #numero;
    #agencia;
    #cliente;
    #saldo;

    /*Para proveer especialización de clase podríamos proveer al constructor de alguna propiedad para identificar un tipo,
    pero depender de variables para definir distintas especialidades rompe con la práctica de responsabilidad única*/

    /*JavaScript no soporta clases ni métodos abstractos, pero podemos evitar la instanciación de una clase mediante throw new error,
    una clase abstracta debe tener al menos una función abstracta, pero sus demás funciones si pueden ser implementados y heredados*/
    constructor(numero, agencia, cliente, saldo) {
        //Mediante la igualdad de constructor
        if (this.constructor === Cuenta) {
            //Esto detiene la ejecución del programa si se está usando el constructor
            throw new Error("La clase Cuenta es una clase abstracta"); 
        }

        //Mediante new target
        if (new.target === Cuenta) {
            //Esto detiene la ejecución del programa si se crea una nueva instancia de Cuenta
            throw new Error("La clase Cuenta es una clase abstracta"); 
        }
        
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
    De esta manera tenemos una función _retiroEnCuenta protegida, la cual es como una función privada pero también
    se pueda acceder desde la clase padre y dentro de las clases hijas que la hereden mediante la palabra reservada super*/
    _retiroEnCuenta(value, comision) { 
        value = value * (1+comision/100);
        if (this.#saldo >= value && value > 0) {
            this.#saldo -= value;
            return this.#saldo;
        }
    }

    //Ahora tenemos dos funciones, protegida y una pública abstracta para poder modificar dentro de la misma clase padre o clases hijas
    
    /*Para crear una función abstracta debemos utilizar throw new error ya que JavaScript no soporta funciones abstractas,
    esto indicaría que la función debe ser implementada o sobreescrita cuando sea heredada,
    es decir que cada clase hija debe tener su especialización*/
    retiroEnCuenta(value) {
        throw new Error("La función retiroEnCuenta es abstracta");
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