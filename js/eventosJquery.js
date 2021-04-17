$(document).ready(function() {
    console.log('DOM is ready!');

    
    // Obtener datos de un JSON
    $.getJSON(
        "js/servicios.json", (response, status) => {
            if (status === "success") {
                let content = response;
                    for (let web of content) {
                        $("#filasWeb").append(services(web))
                    }
            } else {
                console.error("No se cargaron los servicios")
            }
        }
    )
    

    //Evento para obtener TOTAL DE SERVICIOS
    
    $("#confirmar").click(function () {	 
        let total = 0;
        let mantenimiento = $('#switchMantenimiento:checked').val()
        total = ($('input:radio:checked').val() + ( $('#nuSecciones').val() * precioSecciones) + $('#switchMantenimiento:checked').val());

        totalWeb.innerText = `$ ${total}`;
        });

    // Validar formulario de datos
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