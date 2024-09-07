var articulo = document.getElementById("articulo");
var monto = document.getElementById("monto");

var parrafo = document.querySelector("p");
var lista = document.querySelector("ul");
var total = 0;

function calcularTotal() {
  var articuloValor = articulo.value;
  var montoValor = monto.value;
  total = total + parseInt(montoValor);
  var elemento = document.createElement("li");
  elemento.innerHTML = `${articuloValor}_________<strong>$${montoValor}</strong>`;
  lista.appendChild(elemento);
  parrafo.innerHTML = `<strong>Total_________$${total}</strong>`;
  monto.value = "";
  articulo.value = "";
}
