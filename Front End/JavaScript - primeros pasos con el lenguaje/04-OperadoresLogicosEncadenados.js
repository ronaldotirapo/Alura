/*Al igual que los ifs encadenados se pueden encadenar los operadores lógicos
Pero se debe tener en cuenta su legibilidad y complejidad a la hora de implementarse*/

const ciudadDestino = "Lima";
const miArrayDeCiudades = new Array("Lima", "Quito", "Santiago", "Caracas", "Bogotá");

const edadPasajero = 18;
const estaAconpanado = false;
const tienePasaporte = true;
const estaCasado = false;


if (miArrayDeCiudades.indexOf(ciudadDestino) > -1
    &&
    edadPasajero >= 18
    &&
    !estaAconpanado //Esto se puede leer como "No está acompañado", lo que hace que el booleano sea verdadero
    &&
    tienePasaporte
    &&
    !estaCasado) {
    console.log("Paquete de soltero disponible y pasajero cumple las reglas");
} else {
    console.log("Paquete de soltero no disponible o pasajero no cumple las reglas");
}