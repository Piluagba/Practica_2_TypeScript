"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(Nombre, Apellido, Edad, DNI, Cumpleaños, ColorFavorito, Sexo, Direcciones, Mails, Teléfonos, Notas) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Edad = Edad;
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
    Persona.prototype.getnombre = function () {
        return this.Nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.Apellido;
    };
    Persona.prototype.getEdad = function () {
        return this.Edad;
    };
    Persona.prototype.getDNI = function () {
        return this.DNI;
    };
    Persona.prototype.getCumpleaños = function () {
        return this.Cumpleaños;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.ColorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.Sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.Direcciones;
    };
    Persona.prototype.getMails = function () {
        return this.Mails;
    };
    Persona.prototype.getTeléfonos = function () {
        return this.Teléfonos;
    };
    Persona.prototype.getNotas = function () {
        return this.Notas;
    };
    //Setters//
    Persona.prototype.setnombre = function (value) {
        this.Nombre = value;
    };
    Persona.prototype.setApellido = function (value) {
        this.Apellido = value;
    };
    Persona.prototype.setEdad = function (value) {
        this.Edad = value;
    };
    Persona.prototype.setDNI = function (value) {
        this.DNI = value;
    };
    Persona.prototype.setCumpleaños = function (value) {
        this.Cumpleaños = value;
    };
    Persona.prototype.setColorFavorito = function (value) {
        this.ColorFavorito = value;
    };
    Persona.prototype.setSexo = function (value) {
        this.Sexo = value;
    };
    Persona.prototype.setDirecciones = function (value) {
        this.Direcciones = value;
    };
    Persona.prototype.setMails = function (value) {
        this.Mails = value;
    };
    Persona.prototype.setTeléfonos = function (value) {
        this.Teléfonos = value;
    };
    Persona.prototype.setNotas = function (value) {
        this.Notas = value;
    };
    return Persona;
}());
exports.Persona = Persona;
