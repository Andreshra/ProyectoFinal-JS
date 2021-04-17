let inputValues = {
  porfolio: 0,
  ecommerce: 0,
  servicios: 0,
  corporativo: 0,
  institucional: 0,
  viajes: 0,
  mantenimiento: 0,
  secciones: 1,
};

let servicio1 = document.getElementById("radios1"),
    servicio2 = document.getElementById("radios2"),
    servicio3 = document.getElementById("radios3"), 
    servicio4 = document.getElementById("radios4"),
    servicio5 = document.getElementById("radios5"),
    servicio6 = document.getElementById("radios6"),
    confirmar = document.getElementById("confirmar");

//Variables para obtener JSON
let HTMLServices = ""

const services = (web) => {
  HTMLServices = `<tr id="${web.idTr}">
                    <td>
                        <div class="form-check">
                            <input class="form-check-input input" type="radio" name="servicios" id="${web.id}" value="${web.precio}">
                            <label class="form-check-label" for="${web.id}"> ${web.descripcion} </label>
                        </div>
                    </td>
                    <td> 
                    ${web.precio}
                    </td>
                  </tr>`
  return HTMLServices
}