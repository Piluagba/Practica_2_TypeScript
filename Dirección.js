"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dirección = void 0;
var Dirección = /** @class */ (function () {
    function Dirección(Calle, Número, Piso, Letra, CodigoPostal, Población, Provincia) {
        this.Calle = Calle;
        this.Número = Número;
        this.Piso = Piso;
        this.Letra = Letra;
        this.CodigoPostal = CodigoPostal;
        this.Población = Población;
        this.Provincia = Provincia;
    }
    //Getters//
    Dirección.prototype.getCalle = function () {
        return this.Calle;
    };
    Dirección.prototype.getNúmero = function () {
        return this.Número;
    };
    Dirección.prototype.getPiso = function () {
        return this.Piso;
    };
    Dirección.prototype.getLetra = function () {
        return this.Letra;
    };
    Dirección.prototype.getCodigoPostal = function () {
        return this.CodigoPostal;
    };
    Dirección.prototype.getPoblación = function () {
        return this.Población;
    };
    Dirección.prototype.getProvincia = function () {
        return this.Provincia;
    };
    //Setters//
    Dirección.prototype.setCalle = function (value) {
        this.Calle = value;
    };
    Dirección.prototype.setNúmero = function (value) {
        this.Número = value;
    };
    Dirección.prototype.setPiso = function (value) {
        this.Piso = value;
    };
    Dirección.prototype.setLetra = function (value) {
        this.Letra = value;
    };
    Dirección.prototype.setCodigoPostal = function (value) {
        this.CodigoPostal = value;
    };
    Dirección.prototype.setPoblación = function (value) {
        this.Población = value;
    };
    Dirección.prototype.setProvincia = function (value) {
        this.Provincia = value;
    };
    return Dirección;
}());
exports.Dirección = Dirección;
