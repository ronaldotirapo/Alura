//Función para manipular el comportamiento del boton de eliminar de la tarea dinámicamente y evitar el acoplamiento
const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
}

const deleteTask = (event) => {
    const elemento = event.target.parentElement; //La propiedad parentElement hace referencia al padre del elemento
    elemento.remove(); //La función remove elimina el nodo
}

export default deleteIcon; 