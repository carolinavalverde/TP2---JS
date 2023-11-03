let texto = prompt("Ingrese un texto");
let numLetras = texto.length;    
let caracter;
let i;
for (i = 0; i < numLetras; i++) {
    caracter = texto.charAt(i);   
    if (i == numLetras - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}