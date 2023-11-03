const edad = prompt('Ingrese su edad:');
const edadNumero = parseInt(edad);

if (isNaN(edadNumero)) {
    document.write('<p>La edad ingresada no es un número válido.</p>');
} else {
  if (edadNumero > 18) {
    document.write('<p>Ya puede conducir.</p>');
  } else {
    document.write('<p>No tiene la edad necesaria para conducir.</p>');
  }
}
