/*Las clases sirven para crear instancias de objetos, un conjunto de datos que siguen un molde,
y así poder organizar mejor datos con información repetitiva 
y en última instancia poder organizar una estructura de datos traidos de una base de datos*/

import { Cliente } from "./Cliente.js";

/*Las variables definidas dentro de una clase pasan a llamarse atributos o propiedades,
las cuales se heredarán en cada instancia de clase*/

/*Al crear clases se debe tener en cuenta la abstracción de propiedades y funciones en el mundo real 
y su relación en cada clase de modo que cada propiedad y función tenga sentido para cada clase e instancia*/

export class Cuenta {
    /*Desde versiones mayores a 12 de NodeJS podemos utilizar el # para hacer nuestras propiedades privadas (encapsulamiento)
    y no acceder directamente a ellas sin una función, como pueden ser getter y setter*/
    #numero;
    #saldo;
    #agencia;
    #cliente;

    //El constructor de clase debe ser la primera función de una clase y se declara con la palabra reservada constructor
    //Es buena práctica inicializar las propiedades con sus respectivos tipos de datos para evitar errores al manipular los atributos
    constructor() {
        /*Es buena práctica inicializar los objetos con el tipo de dato null, un tipo especial de objeto,
        ya que sino será tratado como undefined, un tipo de dato primitivo*/
        this.#numero = "";
        this.#saldo = 0;
        this.#agencia = "";
        this.#cliente = null; //Inicializamos un nuevo objeto con el cual relacionamos la clase Cuenta con la clase Cliente
    }

    //En JavaScript al definir una función en una clase no se debe utilizar la palabra reservada function
    //Para hacer referencia a la instancia propia que ejecutará la función se utiliza la palabra reservada this
    depositoEnCuenta(value) {
        if (value > 0) {
            this.#saldo += value;
            return this.#saldo;
        }
    }

    retiroEnCuenta(value) {
        if (this.#saldo >= value && value > 0) {
            this.#saldo -= value;
            return this.#saldo;
        }
    }

    //Creamos una nueva función reutilizando funciones
    /*En esta función se puede observar que el primer parámetro es un tipo de dato primitivo, el cual será pasado por valor,
    es decir que al llamar la función y pasar esa variable como parámetro se creará una copia de su contenido al ingresar a la función
    
    En cambio el segundo parámetro es un objeto, el cual será pasado por referencia, es decir no se copiará su valor,
    sino se tendrá acceso al objeto en sí por lo que se podría llegar a modificar su contenido si es que no se tiene cuidado*/
    transferirParaCuenta(valor, cuenta) {
        this.retiroEnCuenta(valor);
        cuenta.depositoEnCuenta(valor);
        //valor = 1000; //Esto no modificaría a la variable del parámetro solo a la variable dentro de la función
        //cuenta.depositoEnCuenta(1000); //Esto modificaría el contenido de la instancia del objeto que se ingresó como parámetro
    }

    /*Para acceder a nuestras propiedades por convención es mejor hacerlas desde funciones conocidas como
    getters y setters, estos se crean con las palabras reservadas get y set + en nombre de la propiedad,
    esto crea un pseudo-propiedad la cual puede recibir valores y puede retornarlos utilizando return*/
    
    /*Gracias a mantener nuestras propiedades como privadas y utilizar getters y setter podemos establecer reglas en ellas
    para asegurar el tratamiento de las propiedades y que estas no sean modificadas directamente (encapsulación)
    
    Y así mantenemos el principio SOLID de responsabilidad única, 
    siendo las propiedades encargadas de almacenar y los getters y setter de manipular*/
    
    get saldo() {
        return this.#saldo;
    }

    get numero() {
        return this.#numero;
    }

    set numero(numero) {
        this.#numero = numero;
    }

    get agencia() {
        return this.#agencia;
    }

    set agencia(agencia) {
        this.#agencia = agencia;
    }

    get cliente() {
        return this.#cliente;
    }

    set cliente(cliente) {
        /*Para asegurar que no vamos a utilizar el setter para insertar un tipo de dato incorrecto
        podemos utilizar un condicional comparando el parámetro con el tipo de instancia con la palabra reservada instanceOf*/
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        }
    }
}