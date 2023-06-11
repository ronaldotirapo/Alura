import {CuentaCorriente} from "./CuentaCorriente.js";
import {Cliente} from "./Cliente.js";
import {CuentaAhorros} from "./CuentaAhorros.js";
import {Cuenta} from "./Cuenta.js";

/*Es buena práctica declarar variables y objetos con const (siguiendo la práctica que una variable debe almacenar una sola cosa)
y así evitar reemplazar su referencia en memoria por error, y en el caso de objetos aun así podemos seguir modificando sus propiedades
Solo es recomendable utilizar let cuando se tiene variables en funciones o variables donde sí o sí se necesiten valores temporales*/

/*Es importante mantener las propiedades y funciones privadas cuando sea necesario para sí asegurar el encapsulamiento,
y cuando se desarrolle en equipo asegurar que solo se pueda acceder a los atributos y funciones necesarias*/

//Implementado con CuentaCorriente
/*
const clienteRonaldo = new Cliente("Ronaldo", "123456", "654321");
const cuentaRonaldo = new CuentaCorriente("000001", "001", clienteRonaldo);

const clienteMaria = new Cliente("Maria", "456789", "987654");
const cuentaMaria = new CuentaCorriente("000002", "002", clienteMaria);
*/

//Implementado con CuentaAhorros
/*
const clienteRonaldo = new Cliente("Ronaldo", "123456", "654321");
const cuentaRonaldo = new CuentaCorriente("000001", "001", clienteRonaldo);

const clienteMaria = new Cliente("Maria", "456789", "987654");
const cuentaMaria = new CuentaCorriente("000002", "002", clienteMaria);
*/

//Implementado con Cuenta
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


