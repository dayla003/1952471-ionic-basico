var userTxt = document.getElementById("userTxt");
var passwordTxt = document.getElementById("passwordTxt");
var parrafo = document.querySelector("p");

function iniciarSesion() {
  var userValue = userTxt.value;
  parrafo.innerHTML = `Log in correcto <strong>${userValue}</strong>`;
}

function registro() {
  var userValue = userTxt.value;
  parrafo.innerHTML = `Registro correcto <strong>${userValue}</strong>`;
}
