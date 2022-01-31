import validator from "./validator.js";

//validator.maskify;

function ClifillArray() {
  let arrayInput = new Array();
  arrayInput = document.getElementById("cardnumber").value;
  validator.isValid(arrayInput);

  document.getElementById("cardnumber").value = validator.maskify(arrayInput);

  console.log(validator);
}
let buttonValidate = document.getElementById("validate");
buttonValidate.addEventListener("click", ClifillArray);
