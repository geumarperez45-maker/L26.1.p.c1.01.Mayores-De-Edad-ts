"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CL_persona_js_1 = __importDefault(require("./CL_persona.js"));
class CL_Personas {
    _cntPersonas;
    _cntMayores;
    constructor() {
        // (1) Inicialización
        this._cntPersonas = 0;
        this._cntMayores = 0;
    }
    // (2) Procesar persona
    procesarPersona(p) {
        // Incrementar cantidad total
        this._cntPersonas++;
        // Si la edad es >= 18, incrementar mayores
        if (p.edad >= 18) {
            this._cntMayores++;
        }
    }
    cantPersonas() {
        return this._cntPersonas;
    }
    cntMayores() {
        return this._cntMayores;
    }
    // (3) Cálculo de porcentaje
    porcMayores() {
        if (this._cntPersonas === 0)
            return 0;
        return (this._cntMayores / this._cntPersonas) * 100;
    }
}
exports.default = CL_Personas;
//# sourceMappingURL=CL_Personas.js.map