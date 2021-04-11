$(document).ready(function() {
    console.log('DOM is ready!');


    $("#enviarDatos") .click ( () => {
        let divFormDatos = $("#divBotonEnviarForm")
        if ($("#nombre").val() === "" && $("#email").val() === "") {
            divFormDatos.append ('<h4 id="txtCampoVacio"> Campos vacios.</h4>')
            $("#txtCampoVacio").fadeOut(3000)
            console.log("No se cargó ningún dato.")
            return false
        } else { 
            divFormDatos.append ('<h4 class="textoJq"> Se han cargado los datos correctamente.</h4>')
            $(".textoJq").fadeOut(3000)
            console.log("Datos cargados en LocalStorage")
        } 
    })

});