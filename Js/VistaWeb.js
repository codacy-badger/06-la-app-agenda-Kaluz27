import Contacto from "./Contacto.js";
import Agenda from "./Agenda.js";

export default class VistaWeb{
    constructor(tableAgenda){
        this._tableAgenda = tableAgenda;

        this._initTables();
    }
    
  _initTables() {
    let lsContacts = JSON.parse(localStorage.getItem("contactos"));

    if (lsContacts === null) {
      return;
    }

    lsContacts.forEach((contacto, index) => {
      this._addToTable(new Contacto(contacto));
    });

  }

  show(contactos){
    this._tableAgenda.innerHTML = "";
    contactos.forEach((contacto, index) => {
      this._addToTable(new Contacto(contacto));
    });

  }

  _addDeleteToRow(row, contacto){
    let btnDelete = document.createElement("input");
    btnDelete.type="button";
    btnDelete.value = "Borrar";
    btnDelete.className = "btn btn-danger";
    btnDelete.addEventListener("click", () => {
        let agenda = new Agenda();
     agenda._deleteContact(row, contacto);
    });
    row.cells[4].innerHTML="";
    row.cells[4].appendChild(btnDelete);

  }

  //No copies >:c

  _addToTable(contacto) {
    let row = this._tableAgenda.insertRow(-1);

    let cellName = row.insertCell(0);
    let cellEmail = row.insertCell(1);
    let cellBirthday = row.insertCell(2);
    let cellAge = row.insertCell(3);
    row.insertCell(4);


    cellName.innerHTML = contacto.name;
    cellEmail.innerHTML = contacto.email;
    cellBirthday.innerHTML = contacto.getBirthdayAsString();
    cellAge.innerHTML = contacto.getAge();
    this._addDeleteToRow(row, contacto);

  }
}