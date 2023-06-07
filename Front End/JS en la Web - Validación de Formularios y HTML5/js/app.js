//Importamos nuestra función general valida para evaluar el tipo de input según el contenido de su data attribute
import { valida } from "./validaciones";

//Guardamos todos los elementos input en el array que devolverá querySelectorAll
const inputs = document.querySelectorAll("input");

/*A cada elemento input le añadimos un listener para que cuando ocurra blur (se quita el foco del elemento)
ejecute la función general valida(), la cual ejecutará una función según el contenido de su data attribute*/
inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
        valida(event.target);
    });    
});
