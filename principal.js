"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CL_persona_js_1 = __importDefault(require("./CL_persona.js"));
const CL_Personas_js_1 = __importDefault(require("./CL_Personas.js"));
// Instanciar la clase mayor
let personas = new CL_Personas_js_1.default();
// Datos de prueba
let p1 = new CL_persona_js_1.default("Luis", 15);
let p2 = new CL_persona_js_1.default("Ana", 19);
let p3 = new CL_persona_js_1.default("Jose", 21);
let p4 = new CL_persona_js_1.default("Carmen", 17);
let p5 = new CL_persona_js_1.default("Rosa", 18);
let p6 = new CL_persona_js_1.default("Jose", 22);
let p7 = new CL_persona_js_1.default("Maria", 17);
let p8 = new CL_persona_js_1.default("Luz", 19);
let p9 = new CL_persona_js_1.default("Rafael", 23);
// Procesar
personas.procesarPersona(p1);
personas.procesarPersona(p2);
personas.procesarPersona(p3);
personas.procesarPersona(p4);
personas.procesarPersona(p5);
personas.procesarPersona(p6);
personas.procesarPersona(p7);
personas.procesarPersona(p8);
personas.procesarPersona(p9);
// Salida
let salida = document.getElementById("salida");
if (salida) {
    salida.innerHTML = `
        <br>Cantidad de personas: ${personas.cantPersonas()}
        <br>Cantidad de personas mayor de edad: ${personas.cntMayores()}
        <br>Porcentaje de personas mayor de edad: ${personas.porcMayores().toFixed(2)}%
    `;
}
//# sourceMappingURL=principal.js.map