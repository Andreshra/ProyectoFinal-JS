$(document).ready(function() {
    console.log('DOM is ready!');


    $("#enviarDatos") .click ( () => {
        let divFormDatos = $("#divBotonEnviarForm")
        if($("#txtCampoVacio")) { $("#txtCampoVacio").remove(); }

        if ($("#nombre").val() === "" && $("#email").val() === "") {
            divFormDatos.append ('<h4 id="txtCampoVacio"> Campos vacios.</h4>')
            $("#txtCampoVacio").fadeOut(3000)
            console.log("No se cargó ningún dato.")
            return;

        } else { 
            if($(".textoJq")) { $(".textoJq").remove(); }
            divFormDatos.append ('<h4 class="textoJq"> Se han cargado los datos correctamente.</h4>')
            $(".textoJq").fadeOut(3000)
            // Animaciones jQuery desde formulario de datos hacia tabla de ServiciosWebs
            const animacionDivDatos = (div) => {
            $("html, body").animate ({
                scrollTop: $(`#${div}`).offset().top
                })
            }
            $("#enviarDatos").mouseleave ( () => {
                console.warn("Hacia div de servicios")
                animacionDivDatos("formWebs")
            })
            console.log("Datos cargados en LocalStorage")
        } 
    })
});