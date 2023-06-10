export class Cliente {
    #nombre;
    #dni;
    #ruc;

    constructor() {
        this.#nombre = "";
        this.#dni = "";
        this.#ruc = "";
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getDNI() {
        return this.#dni;
    }

    setDNI(dni) {
        this.#dni = dni;
    }

    getRUC() {
        return this.#ruc;
    }

    setRUC(ruc) {
        this.#ruc = ruc;
    }
}