const inputs = document.querySelectorAll(".input");
const form = document.querySelector("#formWebs");
const totalWeb = document.querySelector("#totalWeb");

const controlDeInputs = e => {
    console.log(e.target.name)
    console.log(e.target.value)

     //modifico los valores con los values correspondientes
  inputValues = {
    ...inputValues,  //Los '...' se llama spread operator
    [e.target.name]: parseInt(e.target.value) //Lo que hace [e.target.name] es buscar una propiedad en el objeto inputValues que se llame igual al name del html, si lo consigue le pone su valor con e.target.value
  };

  console.log(inputValues);
};