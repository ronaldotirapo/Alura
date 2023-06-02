/*JavaScript tiene entre operadores relacionales: >, >=, <, <=, ==, !=
y también comparadores que incluyen el tipo de datos como: === y !==*/

const ciudadDestino = "Lima";
const miArrayDeCiudades = new Array("Lima", "Quito", "Santiago", "Caracas", "Bogotá");

console.log(`Comprobando disponibilidad de viaje a ${ciudadDestino}`);
//Estrucura condicional if
//Se compara con mayor a -1 ya que es el índice que retornaría cuando no se encuentra el item
if (miArrayDeCiudades.indexOf(ciudadDestino) > -1) {
    console.log("Ciudad disponible para viajar");
} else {
    console.log("Ciudad no disponible para viajar");
}

/*El comparador de igualdad estricto también compara el tipo de dato*/
const precioPasaje = 1000;

//Si se compara con el operador de igualdad convertirá el string "1000" a number para proceder con la igualdad
if (precioPasaje == "1000") {
    console.log("El precio se comparó con un string");
} else {
    console.log("El precio no se comparó con un string");
}

//Si se compara con el operador de igualdad estricta no converirá el string a number
if (precioPasaje === "1000") {
    console.log("El precio de comparó con un string");
} else {
    console.log("El precio no se comparó con un string");
}

/*Los operadores lógicos en JavaScript son: AND (&&), OR (||) Y NOT (!)*/
const edadPasajero = 17;
const estaAconpanado = true;
//Es importante tener en cuenta la jerarquía con los paréntesis
if ((miArrayDeCiudades.indexOf(ciudadDestino) > -1)
    &&
    (edadPasajero >= 18 || estaAconpanado == true)) {
    console.log("Ciudad disponible para viajar y pasajero cumple las reglas");
} else {
    console.log("Ciudad no disponible para viajar o pasajero no cumple las reglas");
}

//El operador NOT (!) invertirá el valor de una expresión booleana por lo que en este caso hará que no se cumpla la condición
if (!(miArrayDeCiudades.indexOf(ciudadDestino) > -1)
    &&
    !(edadPasajero >= 18 || estaAconpanado == true)) {
    console.log("Ciudad disponible para viajar y pasajero cumple las reglas");
} else {
    console.log("Ciudad no disponible para viajar o pasajero no cumple las reglas");
}