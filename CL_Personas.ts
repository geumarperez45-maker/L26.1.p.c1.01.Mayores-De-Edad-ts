import CL_persona from "./CL_persona.js";

export default class CL_Personas {
    private _cntPersonas: number;
    private _cntMayores: number;

    constructor() {
        // (1) Inicialización
        this._cntPersonas = 0;
        this._cntMayores = 0;
    }

    // (2) Procesar persona
    procesarPersona(p: CL_persona) {
        // Incrementar cantidad total
        this._cntPersonas++;

        // Si la edad es >= 18, incrementar mayores
        if (p.edad >= 18) {
            this._cntMayores++;
        }
    }

    cantPersonas(): number {
        return this._cntPersonas;
    }

    cntMayores(): number {
        return this._cntMayores;
    }

    // (3) Cálculo de porcentaje
    porcMayores(): number {
        if (this._cntPersonas === 0) return 0;
        return (this._cntMayores / this._cntPersonas) * 100;
    }
}