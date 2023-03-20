const validator = {
    isValid(creditCardNumber){
      var array = creditCardNumber.split("");
      var arrayReversed = array.reverse();
      var suma = 0;
    
      for (var i = 0; i < arrayReversed.length; i++) {
        if (i % 2 == 1) {
          var mult = parseInt(arrayReversed[i]) * 2;
          if (mult > 9) {
            var multString = mult.toString();
            var digitos = parseInt(multString.charAt(0)) + parseInt(multString.charAt(1));
            suma = suma + digitos;
          } else {
            suma = suma + mult;
          }
        } else {
          suma = suma + parseInt(arrayReversed[i]);
        }
      }
    
      if (suma % 10 === 0) {
        return true;
      } else {
        return false;
      }
    },
    maskify(creditCardNumber){
        if(creditCardNumber.length < 5)
          return creditCardNumber;
        else {
          var lastDigits = creditCardNumber.slice(creditCardNumber.length - 4, creditCardNumber.length);
          var masked = "";
          for(var i = 0; i < creditCardNumber.length - 4 ; i++){
            masked = masked + "#";
          }
          return masked + lastDigits;
        }
    }
};

function validar() {
  var numTarjeta = document.getElementById("numTarjeta").value;
  if (numTarjeta.length ===0) {
    alert("Escriba su número de tarjeta");
    return;
  }
  var numTarjeta = document.getElementById("numTarjeta").value;
  if (numTarjeta.length < 16) {
    alert("longitud inválida");
    return;
  }

  var propietario = document.getElementById("propietario").value;
  if (propietario === "") {
    alert("Escriba su nombre");
  }
  var inputCCV = document.getElementById("inputCCV").value;
  if (inputCCV === "") {
    alert("Código ccv inválido");
  }
  var inputCCV = document.getElementById("inputCCV").value;
  if (inputCCV.length < 3) {
    alert("longitud CCV inválida");
    return;
  }

  var numTarjetaValid = validator.isValid(numTarjeta);

  if (numTarjetaValid === true) {
    alert("Transacción exitosa");
  } else {
    alert("Tarjeta inválida");
  }
}
 
function rellenar(element) {
  if (element.value.length >  element.maxLength) 
    element.value = element.value.slice(0, element.maxLength);

  numero.innerHTML = validator.maskify(element.value);
}