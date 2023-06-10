export class Cliente {
    #nombre;
    #dni;
    #ruc;

    constructor() {
        this.#nombre = "";
        this.#dni = "";
        this.#ruc = "";
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get dni() {
        return this.#dni;
    }

    set dni(dni) {
        this.#dni = dni;
    }

    get ruc() {
        return this.#ruc;
    }

    set ruc(ruc) {
        this.#ruc = ruc;
    }
}