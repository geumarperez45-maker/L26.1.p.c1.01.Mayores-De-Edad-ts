import cl_persona from "./cl_persona";

export default class cl_Personas {
    private cntPersonas: number;
    private cntMayores: number;

    constructor() {
    this.cntPersonas = 0;
    this.cntMayores = 0;
    }

    procesarPersona(p: cl_persona): void {
    // Incrementar cantidad total de personas
    this.cntPersonas++;

    // Verificar si es mayor de edad (18 años o más)
    if (p.edad >= 18) {
        this.cntMayores++;
    }
    }

    cantidadPersonas(): number {
    return this.cntPersonas;
    }

    cantidadMayores(): number {
    return this.cntMayores;
    }

    porcMayores(): number {
    if (this.cntPersonas === 0) return 0;
    return (this.cntMayores / this.cntPersonas) * 100;
    }
}