export class Cliente {
    #nombre;
    #dni;
    #ruc;
    #clave;

    constructor(nombre, dni, ruc) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#ruc = ruc;
        this.#clave = "";
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

    establecerClave(clave) {
        this.#clave = clave;
    }

    autenticar(clave){
        return this.#clave == clave;
    }
}