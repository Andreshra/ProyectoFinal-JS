debugger
let servicio = prompt("Ingrese el tipo de Web que desea");
let seccion = parseInt(prompt("Ingrese el numero de secciones que desea en la web"));
let precioSec = 500;


//Valor de servicios en objetos

//Se calcula el N. de secciones por el precio unitario de cada seccion.
let totalSec = seccion * precioSec;
console.warn(totalSec);


//Ciclo if
if (servicio == "institucional") {
    let precioFinal = totalSec + 1500
    alert("Ha seleccionado Diseño web institucional y tiene un costo de $" + precioFinal);
} else if (servicio == "eCommerce") {
    let precioFinal = totalSec + 1300
    alert("Ha seleccionado Diseño web de eCommerce y tiene un costo de $" + precioFinal);
} else if (servicio == "cotizador") {
    let precioFinal = totalSec + 1700
    alert("Ha seleccionado Diseño web de cotizador de productos o servicios y tiene un costo de $" + precioFinal);
} else {
    console.error("Este servicio no esta disponible")
};









//Se calcula el total del servicio selecionado
//let monto = parseInt(prompt("Ingrese el monto"));
