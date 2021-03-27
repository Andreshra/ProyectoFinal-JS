class cotizarWebs {
    constructor (jsonTiposWeb, precioSecciones, numeroSecciones, valorMantenimiento, totalWeb) {
        debugger
        let eleccionWeb = jsonTiposWeb
        let secciones = precioSecciones
        let numeroSec = numeroSecciones
        let precioMantenimiento = valorMantenimiento
        let totalWebs = totalWeb
        this.calculoSecciones = () => { //AQUI TENDRIA EL PROBLEMA YA QUE AL INGRESAR EL NUMERO DE SECCIONES, NO ME LO TOMA
            return (secciones * numeroSec)
        }
        this.calculoWeb = () => {
            let r = formWebs.find (r=> r.tipo == eleccionWeb)
            return r.precio
        }
        this.caculoTotalCuota = () => {
            let valorDiseñoWeb = this.calculoSecciones() * this.calculoWeb() * precioMantenimiento;
            if (typeof valorDiseñoWeb != "number")
            valorDiseñoWeb = 0.00
            return valorDiseñoWeb.toFixed(2)
        }
    }
}