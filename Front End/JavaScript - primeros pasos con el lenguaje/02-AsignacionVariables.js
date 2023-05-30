/*La palabra reservada const para declarar variables se utiliza
cuando se declare un valor que no cambiará en el tiempo,
tampoco se puede cambiar su tipo declaración a let o var*/

const nombre = "Ronaldo";
console.log(nombre);
//nombre = Juan; esto arrojará una excepción
//var nombre = "Juan"; esto también arrojará una excepción

/*La palabra reservada let es la mas utilizada actualmente para declarar variables,
ya que su alcance es local dentro del bloque de código o modulo del programa*/

{
    //Este es un bloque
    let apellido = "Tirapo";
    console.log(apellido); //Esto ejecutaría normalmente
}
//console.log(apellido); esto arrojaría una excepción

/*La palabra reservada var no es muy recomendada de usar
ya que su alcance es globar en cualquier bloque del código o modulo del programa*/

{
    //Este es un bloque
    var nombre2 = "Nicanor";
    console.log(nombre2); //Esto ejecutaría normalmente
}
console.log(nombre2); //Esto ejecutaría normalmente también