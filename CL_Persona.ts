export default class CL_persona {
    private _nombre: string;
    private _edad: number;

    constructor(n: string, e: number) {
        this._nombre = n;
        this._edad = e;
    }

    set edad(e: number) {
        this._edad = e;
    }

    get edad(): number {
        return this._edad;
    }

    set nombre(n: string) {
        this._nombre = n;
    }

    get nombre(): string {
        return this._nombre;
    }
}