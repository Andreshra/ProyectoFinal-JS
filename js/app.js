let servicio1 = document.getElementById("radios1"),
  servicio2 = document.getElementById("radios2"),
  servicio3 = document.getElementById("radios3"),
  confirmar = document.getElementById("confirmar");
  
//                                                Objetos

const tiposWebs = [ {tipo: "institucional", precio: 1300}, {tipo: "eCommerce", precio: 1300}, {tipo: "cotizador", precio: 1700} ];


class Web {
  constructor(tipo, precio) {
    this.tipo = tipo;
    this.precio = precio
  }
  mostrarWeb() {
      if (servicio1.checked) {
      alert(`Has seleccionado un diseño web de tipo ${this.tipo}, la cual tiene un precio de $${this.precio}.`)
        }
      if (!servicio1.checked && !servicio2.checked && !servicio3.checked) 
      alert("Por favor, seleccione un servicio");
    }
  mostrarWeb1() {
      if (servicio2.checked) {
      alert(`Has seleccionado un diseño web de tipo ${this.tipo}, la cual tiene un precio de $${this.precio}.`)
      } 
  }
  mostrarWeb2() {
    if (servicio3.checked) {
      alert(`Has seleccionado un diseño web de tipo ${this.tipo}, la cual tiene un precio de $${this.precio}.`)
      }
  }

}

const servi1 =  new Web('institucional', 1300);
const servi2 = new Web ('eCommerce', 1500);
const servi3 = new Web ('cotizador', 1700);

confirmar.onclick = () => {
  servi1.mostrarWeb()
  servi2.mostrarWeb1()
  servi3.mostrarWeb2()
}