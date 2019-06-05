import VistaWeb from "./VistaWeb.js";

var vistaWeb = new VistaWeb(document.querySelector("#agenda"),document.querySelector("#info"));

export default class Agenda{
  constructor(){

    this._contactos = [];

    this._retrievecontacts();
  }
  _retrievecontacts() {
    let lsContacts = JSON.parse(localStorage.getItem("contactos"));

    if (lsContacts === null) {
      return;
    }

    lsContacts.forEach((contacto, index) => {
      this._contactos.push(contacto);
    });

  }


  _deleteContact(row, contacto){
    Swal.fire({
      type: "question",
      title: "Eliminar empleado",
      text: contacto.name,
      showCancelButton: true,
      confirmButtonText:"Sí",
      cancelButtonText: "No"
    }).then(result => {
      if(result.value){
        let pos = this._findContact(contacto.email);
        this._contactos.splice(pos, 1);
        localStorage.setItem("contactos",JSON.stringify(this._contactos));
        row.remove();
      }
    });
  }

  _findContact(email){
    let result = -1;
    this._contactos.forEach((contacto, index) => {
      if(contacto.email===email){
        result = index;
        return;
      }
    });

    return result;
  }
//.
  _ordenarContactos(){
    function compare( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name){
        return 1;
      }
      return 0;
    }
    
    this._contactos.sort( compare );
    
  }

  addContact(contacto) {
    if(this._findContact(contacto.email)>=0){
      swal.fire({
        type:"error",
        title:"Error",
        text:"Este usuario ya existe"
      });
      return;
    }
   


    
    let objEmployee = {
      name: contacto.name,
      email: contacto.email,
      birthday: contacto.birthday
    };

    this._contactos.push(objEmployee);
    this._ordenarContactos();
    vistaWeb.show(this._contactos);
    

    localStorage.setItem("contactos", JSON.stringify(this._contactos));
    swal.fire({
      type:"success",
      title:"Correcto",
      text:"El usuario ha sido agregado a la agenda"
    });
    
  }
}