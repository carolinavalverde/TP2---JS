const nota = prompt("Ingrese la Nota del 0 al 10:");
const notaNumero = parseInt(nota);

if (isNaN(notaNumero)) {
  alert("Introduce un número válido");
} else {
  if (notaNumero >= 0 && notaNumero <= 2) {
    alert("Muy deficiente");
  } else if (notaNumero >= 3 && notaNumero <= 4) {
    alert("Insuficiente");
  } else if (notaNumero >= 5 && notaNumero <= 6) {
    alert("Suficiente");
  } else if (notaNumero === 7) {
    alert("Bien");
  } else if (notaNumero >= 8 && notaNumero <= 9) {
    alert("Notable");
  } else if (notaNumero === 10) {
    alert("Sobresaliente");
  } else {
    alert("Número erróneo");
  }
}
