/*Las clases sirven para crear instancias de objetos, un conjunto de datos que siguen un molde,
y así poder organizar mejor datos con información repetitiva 
y en última instancia poder organizar una estructura de datos traidos de una base de datos*/

/*Las variables definidas dentro de una clase pasan a llamarse atributos o propiedades,
las cuales se heredarán en cada instancia de clase*/

/*Al crear clases se debe tener en cuenta la abstracción de propiedades y funciones en el mundo real 
y su relación en cada clase de modo que cada propiedad y función tenga sentido para cada clase e instancia*/
class Cliente {
    #nombre;
    #dni;
    #ruc;
}

class Cuenta {
    /*Desde versiones mayores a 12 de NodeJS podemos utilizar el # para hacer nuestras propiedades privadas (encapsulamiento)
    y no acceder directamente a ellas sin una función, como pueden ser getter y setter*/
    #numero;
    #saldo;
    #agencia;

    //El constructor de clase por convención debe ser la primera función de una clase y se declara con la palabra reservada constructor
    //Además de preferencia debe inicializar las propiedades con sus respectivos tipo de datos para evitar errores
    constructor() {
        this.#numero = "";
        this.#saldo = 0;
        this.#agencia = "";
    }

    //En JavaScript al definir una función en una clase no se debe utilizar la palabra reservada function
    //Para hacer referencia a la instancia propia que ejecutará la función se utiliza la palabra reservada this
    //Para acceder a nuestras propiedades por convención es mejor hacerlas desde funciones conocidas como getters y setters
    depositoEnCuenta(value) {
        if (value > 0) {
            this.#saldo += value;
        }
    }

    retiroEnCuenta(value) {
        if (this.#saldo >= value && value > 0) {
            this.#saldo -= value;   
        }
    }

    verSaldo() {
        return this.#saldo;
    }
}

//Para crear una instancia de clase, un objeto de una clase, utilizamos la palabra reservada new y ejecutamos su constructor de clase
const cuenta1 = new Cuenta();

//Ahora podemos hacer referencia a sus propiedades (por convención desde funciones getter y setter) y funciones mendiante .
/*Si hacemos referencia a una propiedad como cuenta1.saldoCuenta, no es la misma que #saldoCuenta, esta no estará definida,
por lo que si la establecemos un valor estaríamos creando una nueva propiedad con ese nombre*/
console.log(cuenta1.verSaldo());
cuenta1.depositoEnCuenta(100);
console.log(cuenta1.verSaldo());
cuenta1.retiroEnCuenta(50);
console.log(cuenta1.verSaldo());