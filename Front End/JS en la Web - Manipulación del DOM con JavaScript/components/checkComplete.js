//Función para manipular el comportamiento del boton de check de la tarea dinámicamente y evitar el acoplamiento
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon"); //Para añadir más de una clase las separamos por coma
    i.addEventListener("click", completeTask); //Agregamos un listener para modificar el color del check
    return i;
}

const completeTask = (event) => {
    const elemento = event.target; //Con la propiedad target del evento accedemos a la referencia del elemento que se hizo click
    elemento.classList.toggle("fas"); //La función toggle (palanca) añade la clase cuando no existe o la quita cuando existe
    elemento.classList.toggle("far");
    elemento.classList.toggle("completeIcon");
}

export default checkComplete; //Para poder utilizar este módulo en otra parte del código utilizamos export default