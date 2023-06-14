export class Empleado {
    #nombre;
    #dni;
    #salario;
    #clave;

    constructor(nombre, dni, salario) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = "";
    }

    verBonificacion() {
        this._verBonificacion(0);
    }

    _verBonificacion(bono){
        console.log(this.#salario + this.#salario*(bono/100));
    }
    
    establecerClave(clave) {
        this.#clave = clave;
    }

    autenticar(clave){
        return this.#clave == clave;
    }
}