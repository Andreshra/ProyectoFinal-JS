const inputs = document.querySelectorAll(".input");
const form = document.querySelector("#formWebs");
const totalWeb = document.querySelector("#totalWeb");

const controlDeInputs = e => {
    console.log(e.target.name)
    console.log(e.target.value)

     //modifico los valores con los values correspondientes
  inputValues = {
    ...inputValues, 
    [e.target.name]: parseInt(e.target.value)
  };

  console.log(inputValues);
};