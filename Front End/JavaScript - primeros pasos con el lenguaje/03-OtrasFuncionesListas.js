/*Para conocer el tamaño del array de usa la propiedad length*/
const miArrayDeCiudades = new Array("Lima", "Quito", "Santiago", "Caracas", "Bogotá");
console.log(`El tamaño de mi array es: ${miArrayDeCiudades.length}`);

/*Para eliminar el primer elemento se utiliza la función shift*/
miArrayDeCiudades.shift();
console.log(`El tamaño de mi array es: ${miArrayDeCiudades.length}`); //Ahora el tamaño es 4

/*Para eliminar el último elemento de la lista utilizamos la función pop*/
miArrayDeCiudades.pop();
console.log(`El tamaño de mi array es: ${miArrayDeCiudades.length}`); //Ahora el tamaño es 3

/*Para filtrar uno o varios elementos del array, devolviendo una array nuevo, se utiliza la función filter,
la cual recibe una función que debe retornar la condición que se desea*/
console.log(miArrayDeCiudades.filter(ciudad => ciudad.length >= 6)); //Devuelve elementos con cantidad de letras mayor o igual a 6

/*Para crear un array modificado según una condición sin afectar el array original utilizamos la función map()*/
console.log(miArrayDeCiudades.map(pais => pais.toUpperCase())); //Retorna un nuevo array con los nombres en mayúsculas

//También podemos encadenar funciones
console.log(miArrayDeCiudades
    .filter(ciudad => ciudad.length >= 6)
    .map(pais => pais.toUpperCase())
);

/*Para retornar un nuevo array modificado según un valor que se puede ir acumulando utilizamos la función reduce(), la cual recibe
como parámetros: una función que tiene como parámetros (acumulador, elementoActual, indiceActual) y el valor inicial del acumulador,
y debe retornar el acumulador el cual será pasado en la siguiente iteración como argumento
usualmente se puede utilizar para sumar los valores del arrray, pero por ejemplo podemos hacer lo que hicimos con filter y map*/
let usandoReduce = miArrayDeCiudades.reduce((acumulador, elementoActual) => {
    const letrasMayorIgualQueSeis = elementoActual.length > 6;
    const convertidoMayusculas = elementoActual.toUpperCase();
    if (letrasMayorIgualQueSeis) {
        return acumulador.concat(convertidoMayusculas);
    } else {
        return acumulador;
    }
}, []); //El [] es el valor inicial del parámetro acumulador
console.log(usandoReduce);

/*Para unir los elementos en una sola cadena de caracteres, separando cada elemento por un caracter (por defecto coma)
se utiliza la funcion join*/
console.log(miArrayDeCiudades.join());//Retorna un string con los nombres de los paises separados por coma

/*Se utiliza la función sort() para ordenar la lista según el valor unicode de cada carácter parseado a string, modificando el array,
para ello se debe especificar como argumento una función de comparación, ya que:
Si la diferencia de a - b es menor que 0 entonces a es menor que b, colocando a primero
Si la diferencia de a - b es 0 entonces son iguales, no cambia las posiciones pero ordena según el orden de los demás elementos
Si la diferencia de a - b es mayor que 0 entonces b es menor, colocando b primero
y para invertir el orden la función tendría que comparar b - a
Para ordenar un array como sort pero sin modifiacrlo se utiliza toSorted(), pero su uso es limitado en navegadores,
Por ello la mejor forma de ordenar por el momento es hacer una copia para no afectar el array original*/
console.log(miArrayDeCiudades.sort()); //Ordena el array de strings moficando el objeto
//console.log(miArrayDeCiudades.sort((a, b) => a - b)); Esta función flecha se utiliza para ordenar números de forma ascendente
//console.log(miArrayDeCiudades.sort((a, b) => b - a)); Esta función flecha se utiliza para ordenar números de forma descendente

/*Para conocer el índice, o la posición, de un elemento en la lista se utiliza la función indexOf, si no existe retorna -1*/
console.log(miArrayDeCiudades.indexOf("Santiago")); //Ya que se ordenó la lista Santiago tiene el indice 2

/*Para saber si existe un elemento en el array utilizamos la función includes(), que retorna true o false si está o no el elemento*/
console.log(miArrayDeCiudades.includes("Santiago"));

/*Para saber si al menos un elemento del array contiene una condición se puede utilizar la función some() que retorna un booleano,
la cual recive como parámetro una función que tiene como argumento una variable para recorrer y debe retornar un booleano,
y cuando encuentre un elemento que cumpla con la condición terminará la iteración*/
const tieneCiudadConCincoLetras = miArrayDeCiudades.some(ciudad => {
    console.log("Estoy iterando en la ciudad: " + ciudad);
    return ciudad.length == 5;
});
console.log(tieneCiudadConCincoLetras);

/*Para saber si todos los elementos del array cumplen una condición se puede utilizar la función every() que retorna un booleano,
igual que some() recive una función como argumento*/
const todosLasCiudadesTienenSieteLetras = miArrayDeCiudades.every(ciudad => {
    console.log("Estoy iterando en la ciudad: " + ciudad);
    return ciudad.length == 7;
});
console.log(todosLasCiudadesTienenSieteLetras);

/*Para encontrar el primer elemento en un array que cumpla una condición se utiliza la función find(),
que recibe como parámetro una función y retorna el objeto si lo encuentra*/
let elementoConLetrasMayoresAocho = miArrayDeCiudades.find(pais => pais.length >= 8);
console.log(elementoConLetrasMayoresAocho);

/*Para encontrar el índice del primer elemento que cumpla una condición se utiliza la función findIndex(),
que recibe como parámetro una función y retorna el índice si lo encuentra sino retorna -1*/
const indiceDeElementoConLetrasMayoresAocho = miArrayDeCiudades.findIndex(pais => pais.length >= 8);
console.log(indiceDeElementoConLetrasMayoresAocho);

/*Para unificar los elementos de dos arrays, devolviendo un array nuevo sin modificar los implicados
se utiliza la funcion concat*/
const miArrayDePaises = ["Perú", "Ecuador", "Chile"];
const miArrayDeCiudadesYpaises = miArrayDeCiudades.concat(miArrayDePaises);
console.log(miArrayDeCiudadesYpaises); //Retorna el array nuevo con ciudades y paises

/*Para concatenar arrays (u otros objetos iterables como strings) se puede utilizar el sintax spread, 
el cual "esparce" los elementos por comas, para usarlo se colocan ...nombreArray, el cual hará espace sus elementos por comas*/
const spreadArrayPaises = [...miArrayDeCiudades, ...miArrayDePaises];
console.log(spreadArrayPaises);

/*Para iterar el array tenemos la opción de realizarlo con bucles como for o con el operador for ...of o con la función forEach()*/

/*El operador for ..of, necesita como parámetro la declaración de preferencia una constante
que obtendrá cada valor en la iteración seguido de of nombreDelArray
Se debe tener en cuenta que con este método no se puede recorrer el array en inverso ni obtener el índice en cada iteración*/
for (const ciudad of miArrayDeCiudades) {
    console.log(ciudad);
}

/*La función forEach() necesita como parámetro una función (puede ser una función común, anónima o arrow function), 
que reciba como argumento una variable que ejecutará las instrucciones para cada elemento del array,
y opcionalmente una argumento que represente el índice y el arreglo*/
miArrayDeCiudades.forEach(ciudad => console.log(ciudad)); //Esta función no retorna nada

/*También contamos con matrices en JavaScript, el cual se puede definir como un array de arrays,
el cual se puede evaluar como si fueran filas y columnas en cualquier cantidad*/
const miMatrizDePaisesYciudades = [
    ["Perú", "Ecuador", "Chile"], //la fila 0 son los paises
    ["Lima", "Quito", "Santiago"] //La fila 1 tiene las ciudades
];
const peru = miMatrizDePaisesYciudades[0][0]; //Para acceder a cada elemento debemos especificar primero su fila y luego su columna

//Para recorrer una matriz tenemos que usar blucles anidados como for, for ...of o la funcion forEach
miMatrizDePaisesYciudades.forEach( (fila, indiceFila) => {
    fila.forEach( (elemento, indiceColumna) => {
        console.log(miMatrizDePaisesYciudades[indiceFila][indiceColumna]);
    });
});

//También podemos implementar algunos algoritmos, como por ejemplo para recorrer un array y hallar el número máximo
//Aunque en ese caso es mejor utilizar la función Math.max(...array) para obtener el máximo
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findMaxNumber (numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        return max;
    }
}

//A la hora de implementar un algoritmo se debe tener en cuenta la complejidad algoritmica, la cual se mide en tiempo y espacio
//Para medir el tiempo se utiliza la notación O(n), donde n es el número de elementos del array
//Para medir el espacio se utiliza la notación O(1), donde 1 es el número de variables que se utilizan
//En el caso de findMaxNumber() la complejidad algoritmica es O(n) en tiempo y O(1) en espacio
//En el caso de Math.max(...array) la complejidad algoritmica es O(n) en tiempo y O(n) en espacio

//Un algoritmo de busqueda conocido es la búsqueda binaria, la cual se utiliza para encontrar un elemento en un array ordenado
function busquedaBinaria (array, elemento) {
    let index = 0;
    let final = array.length - 1;
    //Cuando index sobrepase al final o el final sea -1 entonces el elemento no está en el array 
    while (index <= final) { 
        const mitad = Math.floor((index + final) / 2);
        if (array[mitad] === elemento) {
            return mitad; //Si el elemento está en la mitad retorna el índice
        } else if (array[mitad] < elemento) {
            index = mitad + 1; //Si la mitad es menor entonces el elemento está en la mitad mayor derecha
        } else {
            final = mitad - 1; //Sino entonces el elemento está en la mitad menor izquierda
        }
    }
    return -1; //Si no encuentra el elemento retorna -1
}

//Pero en JavaScript es mejor utilizar la función array.indexOf(elemento) que ya está optimizada para realizar la búsqueda binaria

//Otro algoritmo de ejemplo puede ser hallar el indice del mayor y el menor número de un array sin ordenar
function findMaxAndMin (array) {
    let min = 0;
    let max = 0;
    let index = 0;
    while (index < array.length) {
        if (array[index] < array[min]) {
            min = index;
        } else if (array[index] > array[max]) {
            max = index;
        }
      index++;
    }
    return [min, max];
}