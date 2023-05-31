/*Las listas en JavaScript son un objeto por lo que sus datos se pasan por referencia
Para declarar una lista se puede utilizar la declaración de un objeto Array:*/
const miArrayDeCiudades = new Array("Lima", "Quito", "Santiago");
console.log(miArrayDeCiudades);

/*También se puede declarar un array de forma abreviada:*/
const miArrayDePaises = ["Perú", "Ecuador", "Chile"]; //La posición inicia en 0 con Perú y termina en 2 con Chile
console.log(miArrayDePaises);

/*Los datos pueden ser de cualquier tipo pero no se recomienda tener distintios tipos
Además el tamaño del array no se declara al inicio por lo que puede ir creciendo*/

/*Para agregar elementos al final un array se utiliza la función push()
Si bien un array declarado con const es inmutable ya que no se puede modificar su referencia,
los valores que contiene sí se pueden modificar con las funciones que contiene*/

//miArrayDeCiudades = ["Lima", "Quito", "Santiago", "Caracas"]; //Esto arrojaría una exepción
miArrayDeCiudades.push("Caracas"); //Con la función push se agregaría un valor más al final de la lista
console.log(miArrayDeCiudades);

/*Para agregar elementos al inicio de un array se utiliza la función unshift*/
miArrayDePaises.unshift("China"); //Esto agrega China al inicio de la lista
console.log(miArrayDePaises);

/*Para acceder a un elemento de una posición específica se declara: nombreDeArray[posicion]*/
console.log(miArrayDeCiudades[0]); //Mostrará Lima ya que es el elemento 0
console.log(miArrayDePaises[0]); //Mostrará China ya que es el último elemento agregado al inicio

/*Para quitar uno o varios elementos a partir de una posición específica
y reemplazarlos por uno o varios elementos se utiliza la función splice(posicionEliminar, cantidadEliminar, elementosAñadidos)*/
miArrayDeCiudades.splice(3,1,"Bogotá"); //Esto eliminará a Caracas y lo reemplazará por Bogotá
console.log(miArrayDeCiudades);
miArrayDePaises.splice(2,2,"Japón"); //Esto eliminará a Ecuador y Chile y lo reemplazará por Japón
console.log(miArrayDePaises);