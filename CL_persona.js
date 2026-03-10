export default class CL_persona {
    constructor(n, e) {
        this._nombre = n;
        this._edad = e;
    }
    set edad(e) {
        this._edad = e;
    }
    get edad() {
        return this._edad;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
}
