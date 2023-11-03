let textoFinal = "";

do {
  let frase = prompt("Introduce una frase");
  if (textoFinal == "") {
    textoFinal = textoFinal + frase;
  } else {
    textoFinal = textoFinal + "-" + frase;
  }
} while (confirm("¿Desea seguir o pulse Cancelar?"));
{
  document.write(textoFinal);
}
