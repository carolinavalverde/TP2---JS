let textoIngresado = prompt("Ingrese un texto");
let numLetras = textoIngresado.length;
textoIngresado = textoIngresado.toLowerCase();
let vocal;
let cuentaVocales = 0;
let i;
for (i = 0; i < numLetras; i++) {
  vocal = textoIngresado.charAt(i);
  if (
    vocal == "a" ||
    vocal == "e" ||
    vocal == "i" ||
    vocal == "o" ||
    vocal == "u"
  ) {
    cuentaVocales++;
  }
}
document.write("Vocales: " + cuentaVocales);
