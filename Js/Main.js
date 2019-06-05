import Contacto from "./Contacto.js";
import Agenda from "./Agenda.js";
//un intento diferente:
export default class Main {
    constructor() {
        let agenda = new Agenda();

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let contacto = document.querySelector("#nombre").value;
            let gmail = document.querySelector("#correo").value;
            let sfechaNacimiento = document.querySelector("#fechaNacimiento").value;
            sfechaNacimiento = sfechaNacimiento.split("-");
            let fechaN = new Date(sfechaNacimiento[0], sfechaNacimiento[1] - 1, sfechaNacimiento[2]);

            let objContacto = {
                nombre:contacto,
                correo:gmail,
                fechaNacimiento:fechaN
            };
            let contacto = new Contacto(objContacto);
            agenda.añadirPersona(contacto);
        });
    }
}
let m = new Main();