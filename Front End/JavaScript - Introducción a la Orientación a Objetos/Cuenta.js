/*Las clases sirven para crear instancias de objetos, un conjunto de datos que siguen un molde,
y así poder organizar mejor datos con información repetitiva 
y en última instancia poder organizar una estructura de datos traidos de una base de datos*/

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

    //El constructor de clase por convención debe ser la primera función de una clase y se declara con la palabra reservada constructor
    //Además de preferencia debe inicializar las propiedades con sus respectivos tipo de datos para evitar errores
    constructor() {
        this.#numero = "";
        this.#saldo = 0;
        this.#agencia = "";
        this.#cliente = null; //Inicializamos un nuevo objeto con el cual relacionamos la clase Cuenta con la clase Cliente
    }

    //En JavaScript al definir una función en una clase no se debe utilizar la palabra reservada function
    //Para hacer referencia a la instancia propia que ejecutará la función se utiliza la palabra reservada this
    /*Para acceder a nuestras propiedades por convención es mejor hacerlas desde funciones conocidas como
    getters y setters que utilizan return para devolver la propiedad*/
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
  
    getSaldo() {
        return this.#saldo;
    }

    //Getters y setters de las demás propiedades
    getNumero() {
        return this.#numero;
    }

    setNumero(numero) {
        this.#numero = numero;
    }

    getAgencia() {
        return this.#agencia;
    }

    setAgencia(agencia) {
        this.#agencia = agencia;
    }

    getCliente() {
        return this.#cliente;
    }

    setCliente(cliente) {
        this.#cliente = cliente;
    }
}