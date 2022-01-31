const validator = {
  maskify: function (arrayInput) {
    const ultimoscuatrosnumeros = arrayInput.substr(-4);
    const primerosNumerosTarjeta = arrayInput
      .substr(1, arrayInput.length - 5)
      .replace(/\d/g, "#");
    console.log(`${primerosNumerosTarjeta}${ultimoscuatrosnumeros}`);
    return ` ${primerosNumerosTarjeta}${ultimoscuatrosnumeros}`;
  },
  isValid: function (arrayInput) {
    let confirmacion = false;
    let arrayInvertido = new Array();

    for (let i = arrayInput.length - 1; i >= 0; i--) {
      arrayInvertido.push(arrayInput[i]);
    }

    let sumaIndicesPar = new Array();

    for (let i = 0; i < arrayInvertido.length; i++) {
      if ((i + 1) % 2 === 0) {
        let multiplicacionPar = arrayInvertido[i] * 2;

        if (multiplicacionPar >= 10) {
          let arrayMultiplicacionPar = String(multiplicacionPar).split("");
          /*el + es para convertir los valores del vector en números ya que en arrayMultiplicacionPar los tenemos como string*/
          let sumaParejasPares =
            +arrayMultiplicacionPar[0] + +arrayMultiplicacionPar[1];
          sumaIndicesPar.push(sumaParejasPares);
          /* console.log(
            "los mayores y iguales a 10 que se suman" + sumaIndicesPar
          );*/
        } else {
          sumaIndicesPar.push(multiplicacionPar);
          /* console.log(
            "los valores que son menores a 10 y son par " + sumaIndicesPar
          );*/
        }
      } else {
        sumaIndicesPar.push(arrayInvertido[i]);
        /*console.log(
          "los valores que son menores a 10 y son impar" + sumaIndicesPar
        );*/
      }
    }

    console.log(
      "los valores que son menores a 10 y son impar" + sumaIndicesPar
    );
    let sumaArray = 0;

    for (let i = 0; i < sumaIndicesPar.length; i++) {
      sumaArray += +sumaIndicesPar[i];
    }
    //console.log("la suma del vector es " + sumaArray);
    if (sumaArray % 10 === 0) {
      alert("gracias por su compra,lo esperamos pronto");
      return confirmacion === true;
    } else {
      alert(
        "Lo sentimos tu tarjeta no es valida,por favor ingresa un nuevo número"
      );
      return confirmacion;
    }
  },
};
export default validator;
