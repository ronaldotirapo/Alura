/*En JavaScript no es necesario utilizar una palabra reservada para declarar variables
pero es mala práctica*/

/*Los tipos de datos primitivos en JavaScript se pasan por valor,
mientras que los objetos se pasan por referencia*/

/*La palabra reservada const se usa para declarar valores que no cambiarán en el tiempo,
ya que no se puede cambiar su tipo declaración a let o var, no se puede reasignar,
porque crea una variable de solo lectura pero no inmutable, ya que en objetos se puede seguir modificando sus propiedades*/

/*Su alcance es local dentro del bloque de código o modulo del programa*/

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
ya que tiene un alcance global dentro y fuera de cualquier bloque del código excepto en funciones,
además las variables declaradas con var tiene hoisting (elevación) por lo que pueden ser utilizadas
antes de ser si quiera declaradas lo cual puede llevar a confusiones*/

{
    //Este es un bloque
    var nombre2 = "Nicanor";
    console.log(nombre2); //Esto ejecutaría normalmente
}
console.log(nombre2); //Esto ejecutaría normalmente también

function miFuncion () {
    var nombre3 = "Juan";
    console.log(nombre3); //Esto ejecutaría normalmente
}
miFuncion();
//console.log(nombre3); //Esto arrojaría una excepción