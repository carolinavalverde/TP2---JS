const opcion = prompt(
    'Seleccione una opción: 1- Consultar saldo, 2- Insertar dinero, 3- Extraer dinero'
  );
  
  let saldo = 500;
  const opcionMin = opcion.toLowerCase();
  
  switch (opcionMin) {
    case '1':
    case 'consultar saldo':
      document.write(`<p>Su saldo actual es $${saldo}</p>`);
      break;
    case '2':
    case 'insertar dinero':
      const cantidad = parseFloat(prompt('Ingrese la cantidad a depositar:'));
      if (!isNaN(cantidad) && cantidad > 0) {
        saldo += cantidad;
        document.write(`<p>Has depositado $${cantidad}. Su saldo actual es $${saldo}</p>`);
      } else {
        document.write('<p>Número no válido</p>');
      }
      break;
    case '3':
    case 'extraer dinero':
      const retiro = parseFloat(prompt('Ingrese la cantidad a retirar'));
      if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {
        saldo -= retiro;
        document.write(`<p>Has retirado $${retiro}. Su saldo actual es $${saldo}</p>`);
      } else if (retiro > saldo) {
        document.write('<p>No tiene saldo suficiente para retirar</p>');
      } else {
        document.write('<p>Número no válido</p>');
      }
      break;
    default:
      alert('Seleccionó una opción errónea');
  }
  
