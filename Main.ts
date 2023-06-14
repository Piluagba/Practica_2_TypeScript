import { Persona } from './Persona';
import { Dirección } from './Dirección';
import { Teléfono } from './Teléfono';
import { Mail } from './Mail';

// Definir la lista de personas
const personas: Persona[] = [];

// Persona 1: África
const dirección1 = new Dirección("Estrella Canopus", 3, 3, "A", 41008, "Sevilla", "Sevilla");
const teléfono1 = new Teléfono("Móvil", 6740736960);
const mail1 = new Mail("trabajo", "Afriper@gmail.com");

// Persona 2: Gustavo
const dirección2 = new Dirección("Abeto", 4, 5, "D", 21006, "Huelva", "Huelva");
const teléfono2 = new Teléfono("Móvil", 626343622);
const mail2 = new Mail("personal", "Gusnan@gmail.com");

// Persona 3: Mario
const dirección3 = new Dirección("Abderraman III", 6, 2, "C", 14006, "Córdoba", "Córdoba");
const teléfono3 = new Teléfono("Móvil", 625790854);
const mail3 = new Mail("personal", "Dimarioz@gmail.com");

// Registro de personas
const persona1 = new Persona("África", "Pérez", 20, "22494600F", "14/06/2002", "Azul", "Mujer", [dirección1], [mail1], [teléfono1], "");
console.log(persona1);
personas.push(persona1);

const persona2 = new Persona("Marina", "Díaz", 26, "24978604E", "30/09/1997", "Amarillo", "Mujer", [dirección2], [mail2], [teléfono2], "");
console.log(persona2);
personas.push(persona2);

const persona3 = new Persona("Mario", "Barrero", 27, "24978604E", "22/11/1995", "Naranja", "Hombre", [dirección3], [mail3], [teléfono3], "");
console.log(persona3);
personas.push(persona3);

// Modificaciones y búsqueda por DNI
const dniModificar = "22494600F";

let personaModificar: Persona | null = null;
for (let i = 0; i < personas.length; i++) {
  const persona = personas[i];
  if (persona.getDNI() === dniModificar) {
    personaModificar = persona;
    break;
  }
}

if (personaModificar) {
  // Añadir una nueva dirección
  const nuevaDirección = new Dirección("Calle Thailandia", 5, 2, "C", 41020, "Sevilla", "Sevilla");
  personaModificar.setDirecciones([nuevaDirección]);

  // Añadir un nuevo mail
  const nuevoMail = new Mail("personal", "ag.per.afri@gmail.com");
  personaModificar.setMails([nuevoMail]);

  // Añadir un nuevo teléfono
  const nuevoTeléfono = new Teléfono("Móvil", 652697963);
  personaModificar.setTeléfonos([nuevoTeléfono]);

  console.log('Registro modificado:');
}
// Imprimir registros de personas
console.log("Registros de personas:");
for (const persona of personas) {
  console.log(persona);
}
