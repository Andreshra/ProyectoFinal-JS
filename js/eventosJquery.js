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
        //Creo variables para asegurarme que no me arroje NaN
        let checkRadio = parseInt($('input:radio:checked').val()) || 0;
        let nuSections = parseInt($('#nuSecciones').val()) || 1;
        let priceSections = parseInt(precioSecciones) || 0; 
        let switchCheck = parseInt($('#switchMantenimiento:checked').val()) || 0;
        // Compruebo si se selecciono algún servicio
        if (!checkRadio) {
            nuSections = 0
            alert("Por favor, seleccione un servicio");
            console.log ("Total en 0, ya que no se seleccionó ningún servicio.")
        } else {
              $("#totalWeb").css({ "color": "#00d2ff"});
              console.log("Its checked :)")
            }

        let total = 0;
        
        total = (checkRadio + (nuSections * priceSections) + switchCheck);
        
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