$(document).ready(function() {
    console.log('DOM is ready!');


    $("#enviarDatos") .click ( () => {
        let divFormDatos = $("#formDatos")
        if ($("#nombre").val() === "" && $("#email").val() === "") {
            divFormDatos.append ('<div class="mx-auto" style="width: 200px; color: red;"> <h4> Campos vacios.</h4> </div>')
            console.log("No se cargó ningún dato.")
            return false
        } else { 
            divFormDatos.append ('<div class="mx-auto" style="width: 200px;"> <h4 class="textoJq" > Se han cargado los datos correctamente.</h4> </div>')
            console.log("Datos cargados en LocalStorage")
        }
        
    })

});