/*En JavaScript no es necesario utilizar una palabra reservada para declarar variables
pero es mala práctica*/

/*Los tipos de datos primitivos en JavaScript se pasan por valor,
mientras que los objetos se pasan por referencia
Asimismo los primitivos son inmutables y los objetos son mutables*/

/*JavaScript tiene hoisting (elevación) para declaraciones de funciones y variables con var, lo cual hace que se les reserve espacio
en memoria al compilar y se pueda acceder a ellas incluso antes de su declaración (en el caso de var se le declara undefined)*/

/*La palabra reservada const se usa para declarar valores que no cambiarán en el tiempo,
ya que no se puede cambiar su tipo declaración a let o var, no se puede reasignar,
porque crea una variable de solo lectura pero no inmutable, ya que en objetos se puede seguir modificando sus propiedades*/

/*Su alcance es local dentro del bloque de código o modulo del programa y no tiene hoisting (Elevación)*/

const nombre = "Ronaldo";
console.log(nombre);
//nombre = "Juan"; esto arrojará una excepción
//var nombre = "Juan"; esto también arrojará una excepción

/*La palabra reservada let es la mas utilizada actualmente para declarar variables,
ya que su alcance es local dentro del bloque de código o modulo del programa,
además no tiene hoisting (elevación)*/

{
    //Este es un bloque
    let apellido = "Tirapo";
    console.log(apellido); //Esto ejecutaría normalmente
}
//console.log(apellido); esto arrojaría una excepción

/*La palabra reservada var no es muy recomendada de usar
ya que tiene un alcance global dentro y fuera de cualquier bloque del código excepto en funciones*/

/*Además las variables declaradas con var tiene hoisting (elevación) por lo que pueden ser utilizadas
antes de ser si quiera declaradas (aunque con valor undefined) lo cual puede llevar a confusiones*/
{
    //Este es un bloque
    var nombre2 = "Nicanor";
    console.log(nombre2); //Esto ejecutaría normalmente
}
console.log(nombre2); //Esto ejecutaría normalmente también

/*Las funciones en JavaScript se declaran con function nombreFuncion (parametro1, parametroN, ...) {} y tienen hoisting (elevación),
además se puede hacer que la función retorne un valor con la palabra reservada return (cuando llegue a esta saldrá de la función),
si no se le especifica un retorno retornarán undefined*/

/*Las funciones se llaman con los (), es decir nombreFuncion(), y al ser prototipos de Object se pueden llamar sin los (), 
lo que retorna [Function: nombreDeFuncion]*/

function miFuncion () {
    var nombre3 = "Juan";
    console.log(nombre3); //Esto ejecutaría normalmente
    return nombre3;
    //console.log("Esto no se mostrará"); //Si se llega al return lo que hay después no se ejecutará, pues se sale de la función
}
miFuncion(); //Esto ejecutaría normalmente
console.log(miFuncion()); //Esto ejecutaría normalmente ya que se retorna el valor de la variable (o la referencia si es objeto)
//console.log(nombre3); //Esto arrojaría una excepción

/*Las funciones en JavaScript por tener hoisting son recomendadas utilizarlas como function expresion,
es decir guardar una función en una variable (función anónima o de preferencia arrow function),
declararla de preferencia con const ya que no tiene hoisting y para no reasignarlas por error, 
y acceder a la función con el nombre de la variable*/

miFuncionExpresion = function (){
    var nombre3 = "Juan";
    console.log(nombre3);
    return nombre3;
}
miFuncionExpresion();

/*Las arrow function o función flecha son una forma simplificada y mejorada de las funciones anónimas,
ya que tienen contexto léxico de this.variable, es decir en una función anónima el this se refiere a la misma función
por lo que crearía una nueva variable y no utilizaría la variable que quisieramos
En cambio las arrow function entienden que al usar this.variable estamos refiriéndonos a una variable anteriormente declarada*/

miFuncionFlecha = () => { //Literalmente se puede leer "de estos parámetros => haz lo siguiente"
    var nombre3 = "Juan";
    console.log(nombre3);
    return nombre3;
}
miFuncionFlecha();

//Las funciones flecha también tienen return implícito si se usan en una sola linea sin llaves
miFuncionFlechaRetornoImplicito = (a, b) => a + b;
//También se puede omitir los paréntesis si solo se tiene un parámetro
miFuncionFlechaUnParametro = a => a++;

/*Las funciones pueden ser recursivas, es decir llamarse a si misma, para solucionar algunos problemas de algoritmos,
y por ese motivo al usarlas es importante definir bien una condición base que garantize la salida de la función*/

sumaNnumerosNaturales = (n) => {
    if (n == 0) {
        return 0;
    }
    return n + sumaNnumerosNaturales(n-1);
}
console.log(sumaNnumerosNaturales(3));

