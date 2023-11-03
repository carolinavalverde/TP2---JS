let primerNombre = prompt("Ingrese un primer nombre");
let edad1 = Number(prompt("Ingrese la Edad 1"));

let segundoNombre = prompt("Ingrese un segundo nombre:");
let edad2 = Number(prompt("Ingrese la Edad 2"));

let tercerNombre = prompt("Ingrese un tercer nombre");
let edad3 = Number(prompt("Ingrese la Edad 3"));

let maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
  document.write("El mayor es: " + primerNombre);
}
if (maximo == edad2) {
  document.write("El mayor es: " + segundoNombre);
}
if (maximo == edad3) {
  document.write("El mayor es: " + tercerNombre);
}
