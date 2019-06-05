export default class Contacto{
  constructor(contacto){
      this._nombre = contacto.nombre.toUpperCase();
      this._correo = contacto.correo;
      this._fechaNacimiento = new Date(contacto.fechaNacimiento);
      this._meses = [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sept",
          "Oct",
          "Nov",
          "Dic"
      ];
  }

  get nombre(){
      return this._nombre;
  }
  get correo(){
      return this._correo;
  }
  get fechaNacimiento(){
      return  this._fechaNacimiento;
  }
  get fechaNacimientoString(){
      let fecha = this._fechaNacimiento.getDate() + "/" + this._meses[this._fechaNacimiento.getMonth()] + "/" + this._fechaNacimiento.getFullYear();
      return fecha;
  }

  getEdad(){
      let unDia = 24 * 60 * 60 * 1000;
      let unAño = unDia * 365;
      let diferenciaMS = new Date() - this._fechaNacimiento;
      let edad = Math.trunc(diferenciaMS / unAño);
      return edad;
  }

}