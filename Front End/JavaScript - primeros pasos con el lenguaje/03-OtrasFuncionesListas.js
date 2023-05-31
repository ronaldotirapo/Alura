/*Para conocer el tamaño del array de usa la propiedad length*/
const miArrayDeCiudades = new Array("Lima", "Quito", "Santiago", "Caracas", "Bogotá");
console.log(`El tamaño de mi array es: ${miArrayDeCiudades.length}`);

/*Para eliminar el primer elemento se utiliza la función shift*/
miArrayDeCiudades.shift();
console.log(`El tamaño de mi array es: ${miArrayDeCiudades.length}`); //Ahora el tamaño es 4

/*Para eliminar el último elemento de la lista utilizamos la función pop*/
miArrayDeCiudades.pop();
console.log(`El tamaño de mi array es: ${miArrayDeCiudades.length}`); //Ahora el tamaño es 3

/*Para filtrar uno o varios elementos del array, devolviendo una array nuevo, se utiliza la función filter*/
console.log(miArrayDeCiudades.filter(ciudad => ciudad.length >= 6)); //Devuelve elementos con cantidad de letras mayor o igual a 6

/*Para unir los elementos en una sola cadena de caracteres, separando cada elemento por un caracter (por defecto coma)
se utiliza la funcion join*/
console.log(miArrayDeCiudades.join());//Retorna un string con los nombres de los paises separados por coma

/*Para ordenar la lista, modificando el array, se utiliza la función sort*/
console.log(miArrayDeCiudades.sort()); //Ordena el array moficando el objeto

/*Para conocer el índice, o la posición, de un elemento en la lista se utiliza la función indexOf*/
console.log(miArrayDeCiudades.indexOf("Santiago")); //Ya que se ordenó la lista Santiago tiene el indice 2

/*Para unificar los elementos de dos arrays, devolviendo un array nuevo sin modificar los implicados
se utiliza la funcion concat*/
const miArrayDePaises = ["Perú", "Ecuador", "Chile"];
const miArrayDeCiudadesYpaises = miArrayDeCiudades.concat(miArrayDePaises);
console.log(miArrayDeCiudadesYpaises); //Retorna el array nuevo con ciudades y paises