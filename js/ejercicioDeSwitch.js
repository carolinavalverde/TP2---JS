const opcion = prompt(
  `Seleccione una opción: 1- Consulte el saldo, 2- Inserte dinero, 3- Extraiga dinero`
);

let saldo = 0;
console.log(opcion.toLowerCase());
opcion = opcion.toLowerCase();

switch (opcion) {
  case `saldo`:
  case `consultar saldo`:
  case `1`:
    document.write(`<p>Su saldo actual es ${saldo}</p>`);
    break;
  case `2`:
    document.write(`<p>Quiere ingresar dinero</p>`);
    break;
  case `3`:
    document.write(`<p>Quiere extraer dinero</p>`);
    break;
  default:
    alert(`Seleccionó una opcion errónea`);
}
