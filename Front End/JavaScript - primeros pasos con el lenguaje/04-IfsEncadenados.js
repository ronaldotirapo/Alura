const ciudadDestino = "Tokyo";
const miArrayDeCiudades = new Array("Lima", "Quito", "Santiago", "Caracas", "Bogotá");

const edadPasajero = 18;
const estaAconpanado = false;

//Se puede encadenar ifs cuando sea necesario evaluar condiciones complejas
//En todos los casos si ponemos un booleano siempre se considerará su valor por lo que no es necesario colocar == true
if ((edadPasajero >= 18 || estaAconpanado == true)) {
    console.log("Pasajero cumple las reglas");
    if (miArrayDeCiudades.indexOf(ciudadDestino) > -1) {
        console.log("Ciudad disponible para viajar");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
} else {
    if (edadPasajero >=16 && ciudadDestino == "Lima") {
        console.log("Pasajero cumple las reglas");
        console.log("Ciudad disponible para viajar");
    } else {
        console.log("Pasajero no cumple las reglas");
    }
}

/*Cuando definimos una variable, objeto, función, clase, etc. la estamos "Declarando" es decir estamos ordenando algo, 
lo cual no retorna un valor
En cambio cuando definimos un valor, un argumento o una condición lo llamamos "Expresión", los cuales retornarán un valor"*/