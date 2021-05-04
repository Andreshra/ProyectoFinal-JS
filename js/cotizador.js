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
    } = inputValues;  

};
  
//Hago un forEach de inputs para que por cada input me haga un evento
inputs.forEach(input => {
  input.addEventListener("input", controlDeInputs);
});
  
form.addEventListener("submit", handleSubmit); //evento de submit en el form

  
  