import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { Cliente } from "./Cliente.js";
import { CuentaAhorros } from "./Cuentas/CuentaAhorros.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

/*Es buena práctica declarar variables y objetos con const (siguiendo la práctica que una variable debe almacenar una sola cosa)
y así evitar reemplazar su referencia en memoria por error, y en el caso de objetos aun así podemos seguir modificando sus propiedades
Solo es recomendable utilizar let cuando se tiene variables en funciones o variables donde sí o sí se necesiten valores temporales*/

/*Es importante mantener las propiedades y funciones privadas cuando sea necesario para sí asegurar el encapsulamiento,
y cuando se desarrolle en equipo asegurar que solo se pueda acceder a los atributos y funciones necesarias*/

//Implementado con las respectivas clases para cada tipo de cuenta
const clienteRonaldo = new Cliente("Ronaldo", "123456", "654321");
const cuentaRonaldo = new CuentaAhorros("000001", "001", clienteRonaldo, 200);
clienteRonaldo.establecerClave(123456);

const clienteMaria = new Cliente("Maria", "456789", "987654");
const cuentaMaria = new CuentaCorriente("000002", "002", clienteMaria);

const clienteJuan = new Cliente("Juan", "102938", "657483");
const cuentaJuan = new CuentaNomina("000003", "003", clienteJuan, 100);

const empleado = new Empleado("Pedro", "948332", 1200);
const gerente = new Gerente("Luis", "928472", 2000);
const director = new Director("Nicanor", "963246", 3600);

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

cuentaJuan.retiroEnCuenta(50);
mensajeSaldo(cuentaJuan);
console.log(CuentaCorriente.numeroCuentas);

empleado.verBonificacion();
gerente.verBonificacion();
director.verBonificacion();

console.log(SistemaAutenticacion.login(clienteRonaldo, 123456));