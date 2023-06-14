"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(Tipo, Dirección) {
        this.Tipo = Tipo;
        this.Dirección = Dirección;
    }
    //Getters//
    Mail.prototype.getTipo = function () {
        return this.Tipo;
    };
    Mail.prototype.getDirección = function () {
        return this.Dirección;
    };
    //Setters//
    Mail.prototype.setTipo = function (value) {
        this.Tipo = value;
    };
    Mail.prototype.setDirección = function (value) {
        this.Dirección = value;
    };
    return Mail;
}());
exports.Mail = Mail;
