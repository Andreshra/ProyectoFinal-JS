$(document).ready(function() {
    console.log('DOM is ready!');


    $("#enviarDatos") .click ( () => {
        let divFormDatos = $("#formDatos")
        divFormDatos.append ('<div class="mx-auto" style="width: 200px;"> <h4 class="textoJq" > Se han cargado los datos correctamente.</h4> </div>')
        
        console.log("Datos cargados en LocalStorage")
    })

});