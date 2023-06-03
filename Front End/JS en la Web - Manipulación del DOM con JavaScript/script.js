/*Para empezar a agregar funcionalidad a un botón tenemos que almacenarlo en una variable,
y para utilizar nuestro data attribute de HTML necesitamos colocarlo entre corchetes*/
const btn = document.querySelector("[data-form-btn]"); //Constante ya que el data attribute no cambiaría
console.log(btn);

/*Para "escuchar" los eventos que ocurren en nuestro botón necesitamos "agregarle un event listener",
con la función addEventListener("evento", función), en este caso le añadimos una función local*/
btn.addEventListener("click", function () {
    console.log("Le di click");
});
