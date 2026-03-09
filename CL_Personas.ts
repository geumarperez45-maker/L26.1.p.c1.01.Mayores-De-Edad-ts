import { Persona } from './CL_Persona';

export class CL_Personas {
    private personas: Persona[];

    constructor(personas: Persona[]) {
        this.personas = personas;
    }

    public contarPersonas(): number {
        return this.personas.filter(p => p.edad >= 18).length;
    }

    public calcularPorcentaje(): string {
        if (this.personas.length === 0) return "0.00%";
        const porcentaje = (this.contarPersonas() / this.personas.length) * 100;
        return porcentaje.toFixed(2) + "%";
    }

    public imprimirReporte(): void {
        console.log(`Cantidad de personas: ${this.personas.length}`);
        console.log(`Cantidad de personas mayor de edad: ${this.contarPersonas()}`);
        console.log(`Porcentaje de personas mayor de edad: ${this.calcularPorcentaje()}`);
    }
}