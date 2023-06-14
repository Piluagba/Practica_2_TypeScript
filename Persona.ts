import {Dirección} from './Dirección'
import {Teléfono} from './Teléfono'
import {Mail} from './Mail'

export class Persona {
   private Nombre: string;
   private Apellido: string;
   private Edad: number;
   private DNI: string;
   private Cumpleaños: string;
   private ColorFavorito: string;
   private Sexo: string;
   private Direcciones: Dirección[];
   private Mails: Mail[];
   private Teléfonos: Teléfono[];
   private Notas: string;

constructor(Nombre: string, Apellido: string, Edad: number, DNI: string, Cumpleaños: string, ColorFavorito: string, Sexo: string, Direcciones: Dirección[], Mails: Mail[], Teléfonos: Teléfono[], Notas: string){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Edad = Edad 
        this.DNI = DNI;
        this.Cumpleaños = Cumpleaños;
        this.ColorFavorito = ColorFavorito;
        this.Sexo = Sexo;
        this.Direcciones = Direcciones;
        this.Mails = Mails;
        this.Teléfonos = Teléfonos;
        this.Notas = Notas;
    }

//Getters//
public getnombre ():string {
    return this.Nombre;
}
public getApellido (): string {
    return this.Apellido;
}
public getEdad (): number {
    return this.Edad;
}
public getDNI (): string {
    return this.DNI;
}
public getCumpleaños (): string {
    return this.Cumpleaños;
}
public getColorFavorito (): string {
    return this.ColorFavorito;
}
public getSexo (): string {
    return this.Sexo;
}
public getDirecciones (): Dirección [] {
    return this.Direcciones;
}
public getMails (): Mail[] {
    return this.Mails;
}
public getTeléfonos (): Teléfono [] {
    return this.Teléfonos;
}
public getNotas (): string {
    return this.Notas;
}
//Setters//
    public setnombre (value: string) {
        this.Nombre = value;
    }
    public setApellido (value: string) {
        this.Apellido = value;
    }
    public setEdad (value: number) {
        this.Edad = value;
    }
    public setDNI (value: string) {
        this.DNI = value;
    }
    public setCumpleaños (value: string) {
        this.Cumpleaños = value;
    }
    public setColorFavorito (value: string) {
        this.ColorFavorito = value;
    }
    public setSexo (value: string):void{
        this.Sexo = value;
    }
    public setDirecciones (value: Dirección []) {
        this.Direcciones = value;
    }
    public setMails (value: Mail []) {
        this.Mails = value;
    }
    public setTeléfonos (value: Teléfono []) {
        this.Teléfonos = value;
    }
    public setNotas (value: string) {
        this.Notas = value;
    }



}
