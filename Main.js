"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direcci_n_1 = require("./Direcci\u00F3n");
var Tel_fono_1 = require("./Tel\u00E9fono");
var Mail_1 = require("./Mail");
// Definir la lista de personas
var personas = [];
// Persona 1: África
var dirección1 = new Direcci_n_1.Dirección("Estrella Canopus", 3, 3, "A", 41008, "Sevilla", "Sevilla");
var teléfono1 = new Tel_fono_1.Teléfono("Móvil", 6740736960);
var mail1 = new Mail_1.Mail("trabajo", "Afriper@gmail.com");
// Persona 2: Gustavo
var dirección2 = new Direcci_n_1.Dirección("Abeto", 4, 5, "D", 21006, "Huelva", "Huelva");
var teléfono2 = new Tel_fono_1.Teléfono("Móvil", 626343622);
var mail2 = new Mail_1.Mail("personal", "Gusnan@gmail.com");
// Persona 3: Mario
var dirección3 = new Direcci_n_1.Dirección("Abderraman III", 6, 2, "C", 14006, "Córdoba", "Córdoba");
var teléfono3 = new Tel_fono_1.Teléfono("Móvil", 625790854);
var mail3 = new Mail_1.Mail("personal", "Dimarioz@gmail.com");
// Registro de personas
var persona1 = new Persona_1.Persona("África", "Pérez", 20, "22494600F", "14/06/2002", "Azul", "Mujer", [dirección1], [mail1], [teléfono1], "");
console.log(persona1);
personas.push(persona1);
var persona2 = new Persona_1.Persona("Marina", "Díaz", 26, "24978604E", "30/09/1997", "Amarillo", "Mujer", [dirección2], [mail2], [teléfono2], "");
console.log(persona2);
personas.push(persona2);
var persona3 = new Persona_1.Persona("Mario", "Barrero", 27, "24978604E", "22/11/1995", "Naranja", "Hombre", [dirección3], [mail3], [teléfono3], "");
console.log(persona3);
personas.push(persona3);
// Modificaciones y búsqueda por DNI
var dniModificar = "22494600F";
var personaModificar = null;
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    if (persona.getDNI() === dniModificar) {
        personaModificar = persona;
        break;
    }
}
if (personaModificar) {
    // Añadir una nueva dirección
    var nuevaDirección = new Direcci_n_1.Dirección("Calle Thailandia", 5, 2, "C", 41020, "Sevilla", "Sevilla");
    personaModificar.setDirecciones([nuevaDirección]);
    // Añadir un nuevo mail
    var nuevoMail = new Mail_1.Mail("personal", "ag.per.afri@gmail.com");
    personaModificar.setMails([nuevoMail]);
    // Añadir un nuevo teléfono
    var nuevoTeléfono = new Tel_fono_1.Teléfono("Móvil", 652697963);
    personaModificar.setTeléfonos([nuevoTeléfono]);
    console.log('Registro modificado:');
}
// Imprimir registros de personas
console.log("Registros de personas:");
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
    var persona = personas_1[_i];
    console.log(persona);
}
