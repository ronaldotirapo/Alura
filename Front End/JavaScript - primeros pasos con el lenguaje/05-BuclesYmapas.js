/*JavaScript cuenta con un objeto Map, también conocido como mapa o diccionario,
para almacenar grupos de clave-valor, los cuales también se podrían utilizar como reemplazo a la estructura switch*/

const miArrayDeCiudades = new Array("Lima", "Quito", "Santiago", "Caracas", "Bogotá");
const valorPasajes = [400, 300, 350, 200, 150];

let miPresupuesto = 150;
let i = 0;

//Objeto Map
const mapaDeCiudadesYprecios = [
    {
        ciudad: "Lima", //En caso las claves tengan carácteres especiales es mejor escribirlas entre comillas
        precio: 400,
    },
    {
        ciudad: "Quito",
        precio: 300,
    },
    {
        ciudad: "Santiago",
        precio: 350,
    },
    {
        ciudad: "Caracas",
        precio: 200,
    },
    {
        ciudad: "Bogotá",
        precio: 150,
    }
]

//Con estructura while
while (mapaDeCiudadesYprecios[i].precio > miPresupuesto && mapaDeCiudadesYprecios.length > i) {
    i++;
}
if (mapaDeCiudadesYprecios.length == i) {
    console.log("No se encontró nigún vuelo con el presupuesto especificado");
} else {
    console.log(`Se encontró el vuelo a ${mapaDeCiudadesYprecios[i].ciudad} con el presupuesto ${miPresupuesto}`);
}

//Con estructura do while (forma del docente)
let j = 0;
let ciudadSeleccionada = "";

do {
    if (mapaDeCiudadesYprecios[j].precio <= miPresupuesto) {
        ciudadSeleccionada = mapaDeCiudadesYprecios[j].ciudad;
        break; //La palabra reservada break sirve para salir de una estructura o bloque cuando se llega a esta línea de código
    }
    j++;
} while (j < mapaDeCiudadesYprecios.length && ciudadSeleccionada == "");
if (ciudadSeleccionada == "") {
    console.log("No se encontró nigún vuelo con el presupuesto especificado");
} else {
    console.log(`Se encontró el vuelo a ${ciudadSeleccionada} con el presupuesto ${miPresupuesto}`);
}

//Con estructura do while (mi forma)

let k = -1;

do {
    k++;
} while (valorPasajes[k] > miPresupuesto && miArrayDeCiudades.length > k);
if (miArrayDeCiudades.length == k) {
    console.log("No se encontró nigún vuelo con el presupuesto especificado");
} else {
    console.log(`Se encontró el vuelo a ${miArrayDeCiudades[k]} con el presupuesto ${miPresupuesto}`);
}