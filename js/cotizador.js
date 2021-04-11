const handleSubmit = e => { 
    e.preventDefault();
    const {
      porfolio,
      ecommerce,
      servicios,
      corporativo,
      institucional,
      viajes,                                                   
      mantenimiento,
      secciones
    } = inputValues;  /* esto se llama desestructuracion, se puede hacer con objetos y arrays, 
                        lo que haces es crear variables con sus valores a partir de las propiedades que tengan. 
                        De esta manera te evitas hacer por ejemplo: inputValues.porfolio, inputValues.ecommerce, etc... */ 
  
    let total = 0;
  
    total =
      (porfolio + ecommerce + servicios + corporativo + institucional + viajes) + (secciones * precioSecciones) + mantenimiento;

    totalWeb.innerText = `$ ${total}`; //Muestro el total
  
    
// COMPRUEBO QUE SE HAYA SELECCIONADO ALGUN SERVICIO
    if (!servicio1.checked && !servicio2.checked && !servicio3.checked && !servicio4.checked && !servicio5.checked && !servicio6.checked) {
      totalWeb.innerText = ' $ 0'; //Muestro el total en 0, ya que no se seleccionó ningún servicio.
      alert("Por favor, seleccione un servicio");
      console.log ("Total en 0, ya que no se seleccionó ningún servicio.")
    } else {
      $("#totalWeb").css({ "color": "#00d2ff"});
      console.log("Its checked :)")
    }
};
  
//hago un forEach de inputs para que por cada input me haga un evento
inputs.forEach(input => {
  input.addEventListener("input", controlDeInputs);
});
  
form.addEventListener("submit", handleSubmit); //evento de submit en el form

  
  