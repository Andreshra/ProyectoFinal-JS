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

//      EVENTOS

nombre.addEventListener("keyup", () => {color(event)})
email.addEventListener("keyup", () => {color1(event)})

function color (e) {
    if (e.key == "Enter" ) {
        nombre.style.backgroundColor = "#9AD9FF"
        console.log("OK :)")
        email.focus()
    }  
}

function color1 (e) {
    if (e.key == "Enter") {
        email.style.backgroundColor = "#9AD9FF"
        console.log("Second OK")
        enviarDatos.style.borderColor = "#44B9FF"
        enviarDatos.focus()
    }
}