let numeroDeRepeticiones = prompt("Número de repeticiones:");

if (Number(numeroDeRepeticiones) == numeroDeRepeticiones) {
  if (numeroDeRepeticiones > 0 && numeroDeRepeticiones <= 50) {
    let rep, i;

    for (i = numeroDeRepeticiones; i >= 1; i--) {
      for (rep = i; rep >= 1; rep--) {
        document.write(i);
      }
      document.write("<br>");
    }
  } else {
    document.write(
      "<p>El número no es válido, ingrese un número hasta el 50</p>"
    );
  }
} else {
  document.write("<p>Ingrese un número, no letra</p>");
}
