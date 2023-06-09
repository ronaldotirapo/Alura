/*Las clases sirven para crear instancias de objetos, un conjunto de datos que siguen un molde,
y así poder organizar mejor datos con información repetitiva 
y en última instancia poder organizar una estructura de datos traidos de una base de datos*/

/*Las variables definidas dentro de una clase pasan a llamarse atributos o propiedades,
las cuales se heredarán en cada instancia de objeto*/
class Cliente {
    nombre;
    dni;
    numeroCuenta;
    saldoCuenta;
}

//Para crear una instancia de clase, un objeto de una clase, utilizamos la palabra reservada new y ejecutamos su constructor de clase
const cliente1 = new Cliente();

//Ahora podemos hacer referencia a sus propiedades mendiante .
cliente1.nombre = "Ronaldo";
cliente1.dni = "123456";
cliente1.numeroCuenta = "654321";
cliente1.saldoCuenta = "3000"; 