/*Es buena práctica modularizar nuestras clases por lo que debemos separarlas en archivos independientes e
indicarles que sean exportables y luego importarlas en el archivo principal o necesario*/
import {Cuenta} from "./Cuenta.js";
import {Cliente} from "./Cliente.js";

/*Para que los módulos funciones debemos inicializar un proyecto en NodeJS con npm init
y al finalizar la configurarción agregar la clave-valor "type": "module" en el archivo package.json*/ 

//Para crear una instancia de clase, un objeto de una clase, utilizamos la palabra reservada new y ejecutamos su constructor de clase
const clienteRonaldo = new Cliente("Ronaldo", "123456", "654321");
//Con el constructor relacionamos una instancia de clase Cuenta con la clase Cliente
const cuentaRonaldo = new Cuenta("000001", "001", clienteRonaldo);

const clienteMaria = new Cliente("Maria", "456789", "987654");
const cuentaMaria = new Cuenta("000002", "002", clienteMaria);

//Ahora podemos hacer referencia a sus propiedades (por convención desde funciones getter y setter) y funciones mendiante .
function mensajeSaldo(cuenta) {
    console.log(
        `El saldo de la cuenta de ${cuenta.cliente.nombre} es: ${cuenta.saldo}` //Usamos los getters para obtener los datos
    );
}

/*Si hacemos referencia a una propiedad como cuentaRonaldo.saldo, no es la misma que #saldo, esta no estará definida,
por lo que si le establecemos un valor estaríamos creando una nueva propiedad con ese nombre*/
mensajeSaldo(cuentaRonaldo);
cuentaRonaldo.depositoEnCuenta(100);
mensajeSaldo(cuentaRonaldo);
cuentaRonaldo.retiroEnCuenta(50);
mensajeSaldo(cuentaRonaldo);

cuentaRonaldo.transferirParaCuenta(25, cuentaMaria);
mensajeSaldo(cuentaRonaldo);
mensajeSaldo(cuentaMaria);

console.log(Cuenta.numeroCuentas);


