export interface Persona {
    nombre: string;
    edad: number;
}

export class CL_Persona {
    private personas: Persona[];

    constructor(personas: Persona[]) {
        this.personas = personas;
    }

    public filtrarPersonas(): Persona[] {
        return this.personas.filter(p => p.edad < 18);
    }

    public contarPersonas(): number {
        return this.filtrarPersonas().length;
    }
}