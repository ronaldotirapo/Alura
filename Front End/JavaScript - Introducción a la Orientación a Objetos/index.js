/*Es buena práctica modularizar nuestras clases por lo que debemos separarlas en archivos independientes e
indicarles que sean exportables y luego importarlas en el archivo principal o necesario*/
import {Cuenta} from "./Cuenta.js";
import {Cliente} from "./Cliente.js";

/*Para que los módulos funciones debemos inicializar un proyecto en NodeJS con npm init
y al finalizar la configurarción agregar la clave-valor "type": "module" en el archivo package.json*/ 

//Para crear una instancia de clase, un objeto de una clase, utilizamos la palabra reservada new y ejecutamos su constructor de clase
const cuentaRonaldo = new Cuenta();
const clienteRonaldo = new Cliente();
clienteRonaldo.nombre = "Ronaldo";
cuentaRonaldo.cliente = clienteRonaldo; //Con la función setCliente relacionamos una instancia de clase Cuenta con la clase Cliente

const cuentaMaria = new Cuenta();
const clienteMaria = new Cliente();
clienteMaria.nombre = "María";
cuentaMaria.cliente = clienteMaria;

function mensajeSaldo(cuenta) {
    console.log(
        `El saldo de la cuenta de ${cuenta.cliente.nombre} es: ${cuenta.saldo}`
    );
}

//Ahora podemos hacer referencia a sus propiedades (por convención desde funciones getter y setter) y funciones mendiante .
/*Si hacemos referencia a una propiedad como cuenta1.saldoCuenta, no es la misma que #saldoCuenta, esta no estará definida,
por lo que si la establecemos un valor estaríamos creando una nueva propiedad con ese nombre*/
mensajeSaldo(cuentaRonaldo);
cuentaRonaldo.depositoEnCuenta(100);
mensajeSaldo(cuentaRonaldo);
cuentaRonaldo.retiroEnCuenta(50);
mensajeSaldo(cuentaRonaldo);

cuentaRonaldo.transferirParaCuenta(25, cuentaMaria);
mensajeSaldo(cuentaRonaldo);
mensajeSaldo(cuentaMaria);


