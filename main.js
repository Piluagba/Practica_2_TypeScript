"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direcci_n_1 = require("./Direcci\u00F3n");
var Tel_fono_1 = require("./Tel\u00E9fono");
var Mail_1 = require("./Mail");
// Persona 1: África
var Dirección1 = new Direcci_n_1.Dirección("Estrella Canopus", 3, 3, "A", 41008, "Sevilla", "Sevilla");
var Teléfono1 = new Tel_fono_1.Teléfono("Móvil", 6740736960);
var Mail1 = new Mail_1.Mail("trabajo", "Afriper@gmail.com");
//Persona 2: Gustavo
var Dirección2 = new Direcci_n_1.Dirección("Abeto", 4, 5, "D", 21006, "Huelva", "Huelva");
var Teléfono2 = new Tel_fono_1.Teléfono("Móvil", 626343622);
var Mail2 = new Mail_1.Mail("personal", "Gusnan@gmail.com");
//Persona 3: Mario
var Dirección3 = new Direcci_n_1.Dirección("Abderraman III", 6, 2, "C", 14006, "Córdoba", "Córdoba");
var Teléfono3 = new Tel_fono_1.Teléfono("Móvil", 625790854);
var Mail3 = new Mail_1.Mail("personal", "Dimarioz@gmail.com");
//Registro de personas
var Persona1 = new Persona_1.Persona("África", "Pérez", 20, "22494600F", "14/06/2002", "Azul", "Mujer", [Dirección1], [Mail1], [Teléfono1], "");
console.log(Persona1);
var Persona2 = new Persona_1.Persona("Marina", "Díaz", 26, "24978604E", "30/09/1997", "Amarillo", "Mujer", [Dirección2], [Mail2], [Teléfono2], "");
console.log(Persona2);
var Persona3 = new Persona_1.Persona("Mario", "Barrero", 27, "24978604E", "22/11/1995", "Naranja", "Hombre", [Dirección3], [Mail3], [Teléfono3], "");
console.log(Persona3);
//Modificaciones y búsqueda por DNI
// ... Importaciones de clases ...
// Buscar el registro de persona por DNI y modificarlo
//¿Es así? me da algunos fallos como que la propiedad DNI es privada y solo puedo acceder a ella en la clase Persona//
var dniBuscado = "24978604E";
var personaEncontrada;
if (Persona1.DNI === dniBuscado) {
    personaEncontrada = Persona1;
}
else if (Persona2.DNI === dniBuscado) {
    personaEncontrada = Persona2;
}
else if (Persona3.DNI === dniBuscado) {
    personaEncontrada = Persona3;
}
//Otro fallo es que la propiedad dirección no existe en el tipo Persona//
if (personaEncontrada) {
    personaEncontrada.Dirección.push(Dirección3);
    personaEncontrada.mails.push(Mail3);
    personaEncontrada.teléfonos.push(Teléfono3);
}
// Mostrar los registros actualizados
console.log(Persona1);
console.log(Persona2);
console.log(Persona3);
