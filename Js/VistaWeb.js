import Contacto from "./Contacto.js";
import Agenda from "./Agenda.js";


export default class VistaWeb {
    constructor(tablaInformacion) {
        this._tablaInformacion = tablaInformacion;
        this._initTables();
    }

    _initTables() {
        let lsContactos = JSON.parse(localStorage.getItem("contactos"));

        if (lsContactos == null) {
            return;
        }
        lsContactos.forEach((contacto, index) => {
            this._addToTable(new Contacto(contacto));
        });

    }

    enseñar(contactos) {
        this._tablaInformacion.innerHTML = "";
        contactos.forEach((contacto, index) => {
            this._addToTable(new Contacto(contacto))
        });
    }

    _añadirBtnEliminar(row, contacto) {
        let btnEliminar = document.createElement("input");
        btnEliminar.type = "button";
        btnEliminar.value = "Eliminar";
        btnEliminar.className = "btn btn-danger";

        btnEliminar.addEventListener("click", () => {
            let agenda = new Agenda();
            agenda._eliminacion(row, contacto);
        });

        row.cells[4].innerHTML = "";
        row.cells[4].appendChild(btnEliminar);

    }
    _addToTable(contacto) {
        let row = this._tablaInformacion.insertRow(-1);

        let celdaNombre = row.insertCell(0);
        let celdaCorreo = row.insertCell(1);
        let celdaFechaNacimiento = row.insertCell(2);
        let celdaEdad = row.insertCell(3);
        row.insertCell(4);

        celdaNombre.innerHTML = contacto.nombre;
        celdaCorreo.innerHTML = contacto.correo;
        celdaFechaNacimiento.innerHTML = contacto.fechaNacimientoString;
        celdaEdad.innerHTML = contacto.getEdad();
        this._añadirBtnEliminar(row, contacto);
    }


}