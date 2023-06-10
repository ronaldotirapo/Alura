/*JavaScript tiene 6 tipos de datos primitivos:
Undefined
Boolean
String
Number
BigInt
Symbol

Y dos tipos de datos especiales:
Object
Null
Function

Gracias al editor de Visual Studio Code ayuda a ver el tipo de dato cuando se pasa sobre el nombre de la variable*/

let unNumero = 15;
let unTexto = "Hola Mundo";
let unBooleano = true;

/*Las operaciones ariméticas se realizan en el orden:
() -> * / -> + -
*/

let costoBoleto = 150;
let impuestoBoleto = 50;
let tasaEmbarque = 60 / 100;
let gestionAgencia = 100;

let total = (costoBoleto + impuestoBoleto)* tasaEmbarque + gestionAgencia;
console.log(total); //Se operará primero el paréntesis, luego se multiplicará y por úlitmo se sumará gestionAgencia

/*Las operación + pueden ser concatenación cuando son dos string (o están entre comillas, así sean números)
y en otras operaciones puede realizarse una conversión automática cuando se detecta que los textos son number
y si se realiza una operación entre un number y un string el resultado dará un NaN (Not a Number)*/

let suma = "100" + "10";
console.log(suma);
let division = "100" / "10";
console.log(division);
let notAnumber = "Juan" / 10;
console.log(notAnumber);

/*Para convertir un tipo de datos a otro se puede utilizar un parse, entre los habituales tenemos
parseInt() y parseFloat()
Del mismo modo no se puede convertir un string a number*/

let conversion = parseInt("100") + parseFloat("10");
console.log(conversion);
let textoAnumero = parseInt("Juan");
console.log(textoAnumero);