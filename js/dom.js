    // Formulario de datos

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const enviarDatos = document.getElementById("enviarDatos")

// Funcion que obtiene datos y los almacena en LocalStorage
function cargarDatos() {
    let info = {nombre: "", email: ""}
    info.nombre = nombre.value
    info.email = email.value

    localStorage.setItem('Nombre', nombre.value)
    localStorage.setItem('email', email.value)

}

enviarDatos.onclick = cargarDatos


// Boton Return to Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {    
    $('body,html').animate({
        scrollTop : 0                      
    }, 500);
});