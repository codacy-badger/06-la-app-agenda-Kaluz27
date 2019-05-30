export default class Contacto {
    constructor(nombre, correo, fechaN){
        this._nombre = nombre;
        this._correo = correo;
        this._fechaN = fechaN;

    }

    get nombre(){
        return this._nombre;
    }
    get correo(){
        return this._correo;
    }
    get fechaN(){
        return this._fechaN;
    }

    obtenerEdad() {
        let unDia = 24 * 60 * 60 * 1000;
        let UnAño = unDia * 365;
        let differenceMs = new Date() - this._fechaN;
        let edad = Math.trunc(differenceMs / UnAño);

        return edad;
    }

}