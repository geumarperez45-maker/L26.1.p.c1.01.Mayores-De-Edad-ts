import cl_persona from "./cl_persona";
import cl_Personas from "./cl_Personas";

// Instanciar la clase mayor
let personas = new cl_Personas();

// Datos de prueba según la imagen
let p1 = new cl_persona("Luis", 15);
let p2 = new cl_persona("Ana", 19);
let p3 = new cl_persona("Jose", 21);
let p4 = new cl_persona("Carmen", 17);
let p5 = new cl_persona("Rosa", 18);
let p6 = new cl_persona("Jose", 22);
let p7 = new cl_persona("Maria", 17);
let p8 = new cl_persona("Luz", 19);
let p9 = new cl_persona("Rafael", 23);

// Procesar cada objeto
personas.procesarPersona(p1);
personas.procesarPersona(p2);
personas.procesarPersona(p3);
personas.procesarPersona(p4);
personas.procesarPersona(p5);
personas.procesarPersona(p6);
personas.procesarPersona(p7);
personas.procesarPersona(p8);
personas.procesarPersona(p9);

// Salida de resultados
let salida = document.getElementById("salida"); // Opcional si usas HTML
console.log(`Cantidad de personas: ${personas.cantidadPersonas()}`);
console.log(`Cantidad de personas mayores de edad: ${personas.cantidadMayores()}`);
console.log(`Porcentaje de personas mayores de edad: ${personas.porcMayores().toFixed(2)}%`);