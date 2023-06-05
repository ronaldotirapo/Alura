/*Para empezar a agregar funcionalidad a un botón tenemos que almacenarlo en una variable,
y para utilizar nuestro data attribute de HTML necesitamos colocarlo entre corchetes*/
const btn = document.querySelector("[data-form-btn]"); //Constante ya que el data attribute no cambiaría
console.log(btn);

/*Para "escuchar" los eventos que ocurren en nuestro botón necesitamos "agregarle un event listener",
con la función addEventListener("evento", función, opcionesOpcionales), 
y en el caso que tenga una función se registra un objeto relacionado al evento como argumento de la función*/

//De preferecia utilizamos una función anónima o Arrow function para evitar el acoplamiento
const createTask = (evento) => { //El objeto evento se registra automáticamente cuando la función es argumento de event listener
    //Para evitar que al realizarse el evento (click en el elemento button) se recargue la página usamos la función preventDefault
    evento.preventDefault();

    //Para hacer que al dar click obtengamos el texto del formulario input lo guardamos en una variable
    //Previamente creamos un data attribute para poder seleccionarlo
    const input = document.querySelector("[data-form-input]");
    const value = input.value; //Para obtener el texto que contiene accedemos a su atributo value
    input.value = ""; //Limpiamos una vez guardamos el valor del input en una variable

    const list = document.querySelector("[data-list]"); //Guardamos el elemento ul para acceder posteriormente

    const task = document.createElement("li"); //Creamos un nuevo elemento li y guardamos para acceder posteriormente
    task.classList.add("card"); //Accedemos al atributo classList y su función add para agregar una clase

    const content = `
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `; //Con template literals podemos almacenar código HTML y variables
    task.innerHTML = content; //Modificamos el atributo innerHTML, el cual contiene el código HTML dentro del elemento

    list.appendChild(task); //La función appendChild agrega un nuevo elemento hijo
}

//Añadimos el event listener a nuestro objeto btn
btn.addEventListener("click", createTask);
