import { Persona } from './CL_Persona';
import { CL_Personas } from './CL_Personas';
import { CL_Persona } from './CL_Persona';

// Datos de entrada proporcionados
const datosPersonas: Persona[] = [
    { nombre: "Luis", edad: 15 }, { nombre: "Ana", edad: 19 },
    { nombre: "José", edad: 21 }, { nombre: "Carmen", edad: 17 },
    { nombre: "Rosa", edad: 18 }, { nombre: "José", edad: 22 },
    { nombre: "María", edad: 17 }, { nombre: "Luz", edad: 19 },
    { nombre: "Rafael", edad: 23 }, { nombre: "Liz", edad: 15 },
    { nombre: "Marcos", edad: 20 }, { nombre: "Leo", edad: 16 }
];

// Instanciamos la clase Mayor para obtener el reporte solicitado
const gestionMayor = new CL_Personas(datosPersonas);

console.log("--- REPORTE DE MAYORÍA DE EDAD ---");
gestionMayor.imprimirReporte();

// Opcional: Uso de la clase Menor
const gestionMenor = new CL_Persona(datosPersonas);
console.log(`\n(Dato extra: Hay ${gestionMenor.contarPersonas()} menores de edad en la lista)`);