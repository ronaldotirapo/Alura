/*Para proteger nuestro código del alcance global que tiene algunas variables y funciones utilizamos
IIFE (Immediately Invoked Function Expression) o funciones invocadas inmediatamente, una función anónima dentro de un bloque*/
(() => {

/*Para empezar a agregar funcionalidad a un botón tenemos que almacenarlo en una variable,
y para utilizar nuestro data attribute de HTML necesitamos colocarlo entre corchetes*/
const btn = document.querySelector("[data-form-btn]"); //Constante ya que el data attribute no cambiaría

/*Para "escuchar" los eventos que ocurren en nuestro botón necesitamos "agregarle un event listener",
con la función addEventListener("evento", función, opcionesOpcionales), 
y en el caso que tenga una función se registra un objeto relacionado al evento como argumento de la función*/

//De preferecia utilizamos una función anónima o Arrow function para evitar el acoplamiento
const createTask = (evento) => { //El objeto evento se registra automáticamente cuando la función es argumento de eventlistener
    //Para evitar que al realizarse el evento (click en el elemento button) se recargue la página usamos la función preventDefault
    evento.preventDefault();

    //Para hacer que al dar click obtengamos el texto del formulario input lo guardamos en una variable
    //Previamente creamos un data attribute para poder seleccionarlo
    const input = document.querySelector("[data-form-input]");
    const value = input.value; //Para obtener el texto que contiene accedemos a su propiedad value
    input.value = ""; //Limpiamos una vez guardamos el valor del input en una variable

    const list = document.querySelector("[data-list]"); //Guardamos el elemento ul para acceder posteriormente

    const task = document.createElement("li"); //La función createElement crea un nuevo elemento li para acceder posteriormente
    task.classList.add("card"); //Accedemos a la propiedad classList y su función add para agregar una clase (o remove para remover)

    const taskContent = document.createElement("div"); //Creamos un nuevo elemento div que va dentro de li 
    
    const taskTitle = document.createElement("span"); //Creamos un nuevo elemento span que va dentro de div
    taskTitle.classList.add("task");
    taskTitle.innerText = value ; //La propiedad innerText contiene el texto interno 
    //También tenemos las propiedaes: innerHTML que contiene el HTML interno, o parentElement que referencia al elemento padre

    //La función appendChild agrega un nuevo elemento hijo
    //Agregamos los hijos correspondientes según la jerarquía
    taskContent.appendChild(checkComplete()); //Añadimos el botón de check dentro de div mediante la función para que sea dinámico
    taskContent.appendChild(taskTitle);
    task.appendChild(taskContent);
    list.appendChild(task);

    // const content = `
    //     <i class="fas fa-trash-alt trashIcon icon"></i>
    // `;

    /*Al ser el DOM un arbol cada uno de sus nodos puede ser modificado, entre otros métodos para modificar tenemos:
    insertBefore(padre,hijo)
    replaceChild(hijoAnterior, hijoNuevo)
    removeChild(hijoParaRemover)*/    
}

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

//Añadimos el event listener a nuestro objeto btn
btn.addEventListener("click", createTask);

})()