import VistaWeb from "./VistaWeb.js";

var vistaTabla = new VistaWeb(document.querySelector("#agenda"));

export default class Agenda {
    constructor() {

        this._contactos = [];
        this._actualizacion();
    }
    _actualizacion() {
        let lsContactos = JSON.parse(localStorage.getItem("contactos"));
        if (lsContactos === null) {
            return;
        }
        lsContactos.forEach((contacto, index) => {
            this._contactos.push(contacto);
        });
    }
    _eliminacion(row, contacto) {
        Swal.fire({
            type: "question",
            title: "¿Deseas eliminar al contacto?",
            text: contacto.nombre,
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No"
        }).then(result => {
            if (result.value) {
                let pos = this._buscarPersona(contacto.correo);
                this._contactos.splice(pos, 1);

                localStorage.setItem("contactos", JSON.stringify(this._contactos));
                row.remove();
            }
        });
    }
    _buscarPersona(correo) {
        let result = -1;
        this._contactos.forEach((contacto, index) => {
            if (contacto.correo === correo) {
                result = index;
                return;
            }
        });
        return result;
    }
    _ordenarPersonas() {
        function comparar(x, z) {
            if (x.nombre < z.nombre) {
                return -1;
            }
            if (x.nombre > z.nombre) {
                return 1;
            }
            return 0;
        }
        this._contactos.sort(comparar);
    }
    añadirPersona(contacto) {
        if (this._buscarPersona(contacto.correo) >= 0) {
            Swal.fire({
                type: "error",
                title: "Error",
                text: `Ya existe un usario con el correo de: ${contacto.correo}`
            });
            return;
        }
        let objContacto = {
            nombre: contacto.nombre,
            correo: contacto.correo,
            fechaNacimiento: contacto.fechaNacimiento,
        };
        this._contactos.push(objContacto);
        this._ordenarPersonas();
        vistaTabla.enseñar(this._contactos);


        localStorage.setItem("contactos", JSON.stringify(this._contactos));
        Swal.fire({
            type: "success",
            title: "Correcto",
            text: `El usuario se ha registrado correctamente con el correo de: ${contacto.correo}`
        });
    }
}