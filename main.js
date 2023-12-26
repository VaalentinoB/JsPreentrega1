function precios(options) {
  switch (options) {
    case 1:
      alert("El precio del iPhone 15 es de 900 USD");
      break;
    case 2:
      alert("El precio del iPhone 15 pro es de 1050 USD");
      break;
    case 3:
      alert("El precio del iPhone 15 pro max es de 1200 USD");
      break;
    case 4:
      alert("El precio de la preorden es de 1000 USD, oferta UNICA");
      break;
    case 5:
      alert("El precio del kit es de 60 USD");

    default:
      alert("Lo siento , no entendi el numero asignado :( ");
      break;
  }
}

function financiacion() {
  for (let i = 1; i <= 6; i++)
    console.warn("Financiamos en", i, " cuotas sin interes!");
  i = 1 + 1;
}

function stock() {
  let codigoStock = prompt("Ingrese codigo de iPhone a consultar por stock!");

  if (codigoStock !== "" && codigoStock !== null) {
    precios(parseInt(codigoStock));
    financiacion();
  } else {
    alert("Para poder continuar debe presentar un codigo , lo siento");
  }
}

function loggIn() {
  const logIn = prompt("Hola ! Como te llamas?");
  if (logIn !== "" && logIn !== null) {
    alert("Bienvenido a iPhone Santa fe, " + logIn + " !");
    console.log(
      "En pantalla, cada modelo disponible tiene un codigo , que es el numero antes de cada modelo, para poder interactuar con el simulador debe ingresar el codigo del dispositivo de su interes"
    );
    stock();
  } else {
    console.log("Lo siento ! No logro entenderte :(");
  }
}

loggIn();
