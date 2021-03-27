
function opcionesWeb(opciones, arrayElementos) {
  
    if (arrayElementos.length > 0) {
        let elementosOption = ""
            for (let elemento of arrayElementos) {
                if (elemento.tipo != undefined) {
                    elementosOption += `<tr>${elemento.tipo}</tr>`
                } else {
                    elementosOption += `<td>${elemento.precio}</td>`
                } 
            }
            opciones.innerHTML = elementosOption
    }
}

opcionesWeb(formWebs, jsonTiposWeb)
opcionesWeb(formWebs, jsonTiposWeb)
opcionesWeb(formWebs, jsonTiposWeb)
opcionesWeb(formWebs, jsonTiposWeb)
opcionesWeb(formWebs, jsonTiposWeb)
opcionesWeb(formWebs, jsonTiposWeb) 

function cotizar() {
    debugger
    objResultado = new cotizarWebs(jsonTiposWeb, precioSecciones, numeroSecciones, valorMantenimiento, totalWeb, 
                                    formWebs.value,  parseInt(nuSecciones.value));  
}
 
confirmar.addEventListener("click", cotizar)

let mantenimiento = document.getElementById("switchMantenimiento")