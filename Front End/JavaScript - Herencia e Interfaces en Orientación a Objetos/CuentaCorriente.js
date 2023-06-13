import { Cuenta } from "./Cuenta.js";
export class CuentaCorriente extends Cuenta{
    /*Para heredar las propiedades y funciones de una clase utilizamos la palabra reservada extends,
    esto no generaría acceso a las propiedades y funciones privadas de la clase padre*/
    static numeroCuentas = 0; 

    /*Para inicializar las variables utilizando el constructor de la clase padre (ya que el constructor es público),
    utilizamos la función super()*/
    constructor(numero, agencia, cliente) {
        super(numero, agencia, cliente, 0);
        CuentaCorriente.numeroCuentas++;
    }

    /*Con la palabra reservada super también puedo acceder a las propiedades y funciones de la clase padre,
    y si definimos una variable o función de la clase padre nuevamente la estaríamos sobreescribiendo*/

    /*Al definir nuevamente una función con el mismo nombre que tenía la clase padre la estamos sobreescribiendo,
    aunque no tenga funcionalidad*/
    retiroEnCuenta(value) {
        this._retiroEnCuenta(value, 5);
    }

}