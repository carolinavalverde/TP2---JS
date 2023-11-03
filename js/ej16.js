const texto = prompt("Ingrese un texto");
const textoInvertido = invertirCadena(texto);

function invertirCadena(textoInv) {
  let textoInvertido = "";
  for (let i = textoInv.length - 1; i >= 0; i--) {
    textoInvertido += textoInv[i];
  }
  return textoInvertido;
}

document.write(textoInvertido);
