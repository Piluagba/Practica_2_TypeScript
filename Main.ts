import {Persona} from './Persona'
import {Dirección} from './Dirección'
import {Teléfono} from './Teléfono'
import {Mail} from './Mail'

// Persona 1: África

const Dirección1 = new Dirección ("Estrella Canopus", 3, 3, "A", 41008,"Sevilla", "Sevilla")
const Teléfono1 = new Teléfono ("Móvil", 6740736960)
const Mail1 = new Mail ("trabajo", "Afriper@gmail.com") 

//Persona 2: Gustavo

const Dirección2 = new Dirección ("Abeto", 4, 5, "D", 21006,"Huelva", "Huelva")
const Teléfono2 = new Teléfono ("Móvil", 626343622)
const Mail2 = new Mail ("personal", "Gusnan@gmail.com")

//Persona 3: Mario

const Dirección3 = new Dirección ("Abderraman III", 6, 2, "C", 14006,"Córdoba", "Córdoba")
const Teléfono3 = new Teléfono ("Móvil", 625790854)
const Mail3 = new Mail ("personal", "Dimarioz@gmail.com")

//Registro de personas

const Persona1 = new Persona("África","Pérez",20,"22494600F","14/06/2002","Azul","Mujer",[Dirección1],[Mail1],[Teléfono1],"");
    console.log(Persona1); 
    
const Persona2 = new Persona("Marina","Díaz",26,"24978604E","30/09/1997","Amarillo","Mujer",[Dirección2],[Mail2],[Teléfono2],"");
    console.log(Persona2)
    
const Persona3 = new Persona("Mario","Barrero",27,"24978604E","22/11/1995","Naranja","Hombre",[Dirección3],[Mail3],[Teléfono3],"");
    console.log(Persona3)

//Modificaciones y búsqueda por DNI // Buscar el registro de persona por DNI y modificarlo


//¿Es así? me da algunos fallos como que la propiedad DNI es privada y solo puedo acceder a ella en la clase Persona//
const dniBuscado = "24978604E";
let personaEncontrada: Persona | undefined;

if (Persona1.DNI === dniBuscado) {
  personaEncontrada = Persona1;
} else if (Persona2.DNI === dniBuscado) {
  personaEncontrada = Persona2;
} else if (Persona3.DNI === dniBuscado) {
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



