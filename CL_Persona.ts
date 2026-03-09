export default class cl_persona {
    private _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
    this._nombre = nombre;
    this._edad = edad;
    }

    set nombre(n: string) {
    this._nombre = n;
    }

    get nombre(): string {
    return this._nombre;
    }

    set edad(e: number) {
    this._edad = +e;
    }

    get edad(): number {
    return this._edad;
    }
}