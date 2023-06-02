/*Para evaluar múltiples condiciones en vez de utilizar múltiples condiciones
(y para evitar tener que evaluar cada condición) se puede utilizar la estructura switch,
aunque otra forma de realizarlo es usando map*/
const ciudadDestino = "Lima";
const miArrayDeCiudades = new Array("Lima", "Quito", "Santiago", "Caracas", "Bogotá");
let valorPasaje = 0;

//Ejemplo con estructura if, no recomendado para este tipo de evaluaciones
if (miArrayDeCiudades.indexOf(ciudadDestino) > -1) {
    if (ciudadDestino == "Lima") {
        valorPasaje = 150;
    }
    if (ciudadDestino == "Quito") {
        valorPasaje = 300;
    }
    if (ciudadDestino == "Santiago") {
        valorPasaje = 350;
    }
    if (ciudadDestino == "Caracas") {
        valorPasaje = 200;
    }
    if (ciudadDestino == "Bogotá") {
        valorPasaje = 400;
    }
} else {
    console.log("No se encuentra la ciudad de destino");
}
console.log(`El valor del pasaje para ${ciudadDestino} es: ${valorPasaje}`);

//Ejemplo con estructura switch
switch (ciudadDestino) {
    case "Lima":
        valorPasaje = 150;
        break;
    case "Quito":
        valorPasaje = 300;
        break;
    case "Santiago":
        valorPasaje = 350;
        break;
    case "Caracas":
        valorPasaje = 200;
        break;
    case "Bogotá":
        valorPasaje = 400;
        break;
    default:
        console.log("No se encuentra la ciudad de destino");
        break;
}
if (miArrayDeCiudades.indexOf(ciudadDestino) > -1) {
    console.log(`El valor del pasaje para ${ciudadDestino} es: ${valorPasaje}`);
}