import validator from "./validator.js";

console.log(validator);

function ClifillArray() {
  let arrayInput = new Array();
  arrayInput = document.getElementById("cardnumber").value;
  console.log("el dato es:" + arrayInput);
  console.log("el dato es:" + arrayInput[0]);

  for (let i = 0; i <= arrayInput.length; i++) {
    if (i % 2 == 0) {
      let pares = arrayInput.push(i);
      console.log("los números pares son:" + pares);
    } else {
      console.log("los números impares son:" + arrayInput);
    }
  }
}

let buttonValidate = document.getElementById("validate");
buttonValidate.addEventListener("click", ClifillArray);
