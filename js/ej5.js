while (true) {
  const input = prompt("Ingrese su DNI");

  if (input === null) {
    break;
  }

  const dni = parseInt(input);

  if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
    const letrasPosibles = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letra = letrasPosibles.charAt(dni % 23);
    document.write(letra);
  } else {
    document.write("<p>El DNI ingresado no es un número válido.</p>");
  }
}
