let servicio1 = document.getElementById("radios1"),
  servicio2 = document.getElementById("radios2"),
  servicio3 = document.getElementById("radios3"),
  confirmar = document.getElementById("confirmar");
  
//                                                Objetos

const tiposWebs = [ {tipo: "institucional", precio: 300}, {tipo: "eCommerce", precio: 300}, {tipo: "cotizador", precio: 700} ];


class Web {
  constructor(tipo, precio) {
    this.tipo = tipo;
    this.precio = precio;

  }
  mostrarWeb() {
      if (servicio1.checked) {
      alert(`Has seleccionado un diseño web de tipo ${this.tipo} , la cual tiene un precio de $${this.precio}.`)
        }  else if (servicio2.checked) {
        alert(`Has seleccionado un diseño web de tipo ${this.tipo} , la cual tiene un precio de $${this.precio}.`)
        } else if (servicio3.checked) {
        alert(`Has seleccionado un diseño web de tipo ${this.tipo} , la cual tiene un precio de $${this.precio}.`)
        } else 
        alert("Por favor, seleccione un servicio");
    }
}

const servi1 =  new Web('institucional', 300);
const servi2 = new Web ('eCommerce', 500);
const servi3 = new Web ('cotizador', 700);

servi1.mostrarWeb();
servi2.mostrarWeb();
servi3.mostrarWeb();