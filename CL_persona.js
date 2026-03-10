"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CL_persona {
    _nombre;
    _edad;
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
exports.default = CL_persona;
//# sourceMappingURL=CL_persona.js.map