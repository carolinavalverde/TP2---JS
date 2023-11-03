let suma = 0;

while (true) {
  const entrada = prompt("Ingrese un número o pulse Cancelar:");
  if (entrada === null) {
    break;
  }

  const numero = parseInt(entrada);
  if (!isNaN(numero)) {
    suma += numero;
  } else {
    document.write("No es un número");
  }
}

document.write(suma);
