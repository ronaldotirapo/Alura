/*Los bucles en JavaScript son: while, do while y for,
cada uno se puede usar según necesidad para realizar acciones repetitivas según una condición
que podrían ser inviables con otras estructuras*/

const miArrayDeCiudades = new Array("Lima", "Quito", "Santiago", "Caracas", "Bogotá");
const valorPasajes = [400, 300, 350, 200, 150]; //Este par de arreglos relacionados se podrían realizar mejor con hash map

let miPresupuesto = 150;
let i = 0; //Este es un contador

//Estructura while
while (valorPasajes[i] > miPresupuesto && miArrayDeCiudades.length > i) { //Es importante establecer una condición de salida viable
    i++;
}
if (miArrayDeCiudades.length == i) {
    console.log("No se encontró nigún vuelo con el presupuesto especificado");
} else {
    console.log(`Se encontró el vuelo a ${miArrayDeCiudades[i]} con el presupuesto ${miPresupuesto}`);
}

//Estructura do while
let j = -1;

do {
    j++;
} while (valorPasajes[j] > miPresupuesto && miArrayDeCiudades.length > j);
if (miArrayDeCiudades.length == j) {
    console.log("No se encontró nigún vuelo con el presupuesto especificado");
} else {
    console.log(`Se encontró el vuelo a ${miArrayDeCiudades[j]} con el presupuesto ${miPresupuesto}`);
}

