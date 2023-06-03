/*Para empezar a agregar funcionalidad a un botón tenemos que almacenarlo en una variable,
y para utilizar nuestro data attribute de HTML necesitamos colocarlo entre corchetes*/
const btn = document.querySelector("[data-form-btn]"); //Constante ya que el data attribute no cambiaría
console.log(btn);

/*Para "escuchar" los eventos que ocurren en nuestro botón necesitamos "agregarle un event listener",
con la función addEventListener("evento", función, opcionesOpcionales), 
y en el caso que tenga una función se registra un objeto relacionado al evento como argumento de la función*/

//De preferecia utilizamos una función anónima o Arrow function para evitar el acoplamiento
const createTask = (evento) => {
    //console.log("Le di click");

    //Para evitar que al realizarse el evento (click en el elemento button) se recargue la página usamos la función preventDefault
    evento.preventDefault();

    //Para hacer que al dar click obtengamos el texto del formulario input lo guardamos en una variable
    //Previamente creamos un data attribute para poder seleccionarlo
    const input = document.querySelector("[data-form-input]");
    console.log(input.value); //Para obtener el texto que contiene accedemos a su atributo value
}

//Añadimos el event listener a nuestro objeto btn
btn.addEventListener("click", createTask);
