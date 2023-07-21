/*Es buena práctica modularizar nuestras clases por lo que debemos separarlas en archivos independientes e
indicarles que sean exportables y luego importarlas en el archivo principal o necesario*/
import { Cuenta } from "./Cuenta.js";
import { Cliente } from "./Cliente.js";

/*Para que los módulos funcionen debemos inicializar un proyecto en NodeJS con npm init
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

//Otra forma de crear objetos es mediante corchetes y asignarle propiedades
const persona = {
  name: "Ronaldo", //Se declara con nombreDeLaPropiedad: valor y se separa por comas
  age: 25,
  "color favorito": "black", //Si el nombre de la propiedad tiene espacios o caracteres especiales se debe declarar entre comillas
};

/*Para acceder a las propiedades de un objeto se utiliza la notación de punto 
o corchetes si es que la propiedad tiene espacios o caracteres especiales
*/
console.log(persona.name);
console.log(persona["color favorito"]);
//Del mismo modo se puede modificar el valor de una propiedad
persona.age = 26;

//Para agregar una propiedad a un objeto se utiliza la notación de punto o corchetes
persona.lastName = "Lopez";

//Para eliminar una propiedad de un objeto se utiliza la palabra reservada delete
delete persona["color favorito"];
console.log(persona);

//Para crear o acceder a propiedades con variables previamente asignadas se utiliza la notación de corchetes
const prop = "otro color favorito";
persona[prop] = "black";
console.log(persona[prop]); //Es lo mismo que persona["otro color favorito"]

//Al crear un objeto y querer asignarle variables previamente declaradas se puede hacer de la siguiente manera
const nombre2 = "Ronaldo";
const edad2 = 25;
const persona2 = {
  nombre2,
  edad2,
};

//Para acceder a las propiedades de un objeto sin tener llama a cada una de ellas se utiliza la destructuración
//Sin destructuración se haría de la siguiente manera
//const name = persona.name;
//const age = persona.age;
//Con destructuración se hace de la siguiente manera
const { name, age } = persona;
console.log(name, age);
//En ese caso estamos extrayendo las propiedades name y age del objeto persona y asignandolas a las variables name y age

//También podemos declarar con un nuevo nombre a las variables que se crean al extraer las propiedades
const { name: nombre, age: edad } = persona;
/*Si intentamos acceder a las variables name y age nos dará error ya que no se llegan a declarar, 
solo existen las variables nombre y edad*/

//Como también asignarle un valor por defecto en caso de que la propiedad no exista
const {
  segundoNombre = "Desconocido",
} = persona; //Si ubieramos recuperado una propiedad que no existe en el objeto, esta tendría el valor undefined

//Para extraer propiedades de un objeto que se encuentra dentro de otro objeto se utiliza la destructuración anidada
const persona4 = {
    name: "Ronaldo",
    age: 25,
    direccion: {
        ciudad: "Lima",
        distrito: "San Miguel",
        calle: "Av. La Marina"
    }   
}
const {direccion: {ciudad, distrito, calle}} = persona4; 
// La sintaxis es la siguiente: const {objetoDentroDeObjeto: {propiedad1, propiedad2, ...}} = objeto
console.log(ciudad, distrito, calle);

/*Para recorrer las propiedades de un objeto utilizamos el ciclo for...in (ditinto de for...of que es para arrays),
el cual recorre cada propiedad sin asegurar el orden*/
for (const propiedad in persona4) {
    console.log(`Key: ${propiedad}, Value: ${persona4[propiedad]}`); 
    //Se accede a la propiedad mediante corchetes porque es una variable
}

//Para obtener un array con las propiedades de un objeto se utiliza Object.keys(objeto)
const keys = Object.keys(persona4); 
//Esto tiene el valor de ["name", "age", "direccion"]

//Para obtener un array con los valores de un objeto se utiliza Object.values(objeto)
const values = Object.values(persona4); 
//Esto tiene el valor de ["Ronaldo", 25, {ciudad: "Lima", distrito: "San Miguel", calle: "Av. La Marina"}]

//Y para obtener un array con arrays de dos valores (los elementos propiedad y valor de un objeto) se utiliza Object.entries(objeto)
const entries = Object.entries(persona4); 
//Esto tiene el valor de [["name", "Ronaldo"], ["age", 25], ["direccion", {ciudad: "Lima", distrito: "San Miguel", calle: "Av. La Marina"}]]

//Para acceder a una propiedad de un objeto sin saber si existe o no se utilizaba distintas técnicas como
if ("direccion" in persona4) console.log(persona4.direccion.ciudad) //Esto no asegura la propiedad este definida como undefined o null 

if (persona4.direccion && persona4.direccion.ciudad) console.log(persona4.direccion.ciudad);

if(persona4.direccion !== undefined && persona4.direccion !== null) console.log(persona4.direccion.ciudad);

/*Pero para ahorrar esas comprovaciones se utiliza el operador de encadenamiento opcional ?. u optional chaining,
además ayuda a tener un código limpio y más legible*/
console.log(persona4?.direccion?.ciudad); //Si la propiedad no existe o es undefined o null, retornará undefined

//Similar al operador de encadenamiento opcional tenemos el operador de fusión nula ?? u nullish coalescing operator
console.log(persona4 ?? "No existe la propiedad direccion"); 
//Si la propiedad no existe o es undefined o null, retornará el valor de la derecha