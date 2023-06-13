"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teléfono = void 0;
var Teléfono = /** @class */ (function () {
    function Teléfono(Tipo, Numero) {
        this.Tipo = Tipo;
        this.Numero = Numero;
    }
    //Getters//
    Teléfono.prototype.getTipo = function () {
        return this.Tipo;
    };
    Teléfono.prototype.getNumero = function () {
        return this.Numero;
    };
    //Setters//
    Teléfono.prototype.setTipo = function (value) {
        this.Tipo = value;
    };
    Teléfono.prototype.setNumero = function (value) {
        this.Numero = value;
    };
    return Teléfono;
}());
exports.Teléfono = Teléfono;
