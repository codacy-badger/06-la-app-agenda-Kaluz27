import Contacto from "./Contacto.js";
import Agenda from "./Agenda.js";

export default class Main{
    constructor(){
        let agenda = new Agenda();

        document.querySelector("#btnAdd").addEventListener("click",()=>{
            let nombre = document.querySelector("#nombre").value;
            let correo = document.querySelector("#correo").value;
            let sfechaNacimiento = document.querySelector("#fechaNacimiento").value;
            sfechaNacimiento = sfechaNacimiento.split("-");
            let fechaNacimiento = new Date(sfechaNacimiento[0], sfechaNacimiento[1]-1, sfechaNacimiento[2]);
           
            let objContacto = {
                nombre: nombre,
                correo: correo,
                fechaNacimiento: fechaNacimiento
            };
            let contacto = new Contacto(objContacto);
            agenda.añadirPersona(contacto);
        })
    }
}
let m = new Main();