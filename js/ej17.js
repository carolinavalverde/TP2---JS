const vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("Ingrese un texto");
let textomin = texto.toLowerCase();

let posicion = 0;
let freno = false;

for (let i = 0; i < textomin.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (vocales[j] == textomin.charAt(i)) {
      posicion = i;
      freno = true;
      break;
    }
  }
  if (freno) {
    break;
  }
}

document.write("La primera vocal está en la posición " + posicion);
