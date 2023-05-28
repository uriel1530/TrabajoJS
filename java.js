//Realizar el algoritmo que convierta litros a centilitros, decilitros, galones y onzas.//

function convertirLitros(litros) {
  let centilitros = litros * 100;
  let decilitros = litros * 10;
  let galones = litros * 0.264172;
  let onzas = litros * 33.814;

  return {
    centilitros,
    decilitros,
    galones,
    onzas,
  };
}

console.log(convertirLitros(1));

//Realizar el algoritmo que realice las 4 operaciones básicas para dos números de entrada//

function realizarOperaciones(num1, num2) {
  var suma = num1 + num2;
  var resta = num1 - num2;
  var multiplicacion = num1 * num2;
  var division = num1 / num2;

  return {
    suma: suma,
    resta: resta,
    multiplicacion: multiplicacion,
    division: division,
  };
}

// Ejemplo de uso
var numero1 = 10;
var numero2 = 5;
var operaciones = realizarOperaciones(numero1, numero2);

console.log("Suma: " + operaciones.suma);
console.log("Resta: " + operaciones.resta);
console.log("Multiplicación: " + operaciones.multiplicacion);
console.log("División: " + operaciones.division);

//Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.//

function celsiusAFahrenheit(gradosCelsius) {
  var gradosFahrenheit = (gradosCelsius * 9) / 5 + 32;
  return gradosFahrenheit;
}

// Función para convertir grados Fahrenheit a centígrados
function fahrenheitACelsius(gradosFahrenheit) {
  var gradosCelsius = ((gradosFahrenheit - 32) * 5) / 9;
  return gradosCelsius;
}

// Ejemplo de uso
var celsius = 30;
var fahrenheit = 86;

var conversion1 = celsiusAFahrenheit(celsius);
var conversion2 = fahrenheitACelsius(fahrenheit);

console.log(
  celsius +
    " grados Celsius son equivalentes a " +
    conversion1 +
    " grados Fahrenheit"
);
console.log(
  fahrenheit +
    " grados Fahrenheit son equivalentes a " +
    conversion2 +
    " grados Celsius"
);

//Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina si sabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la cantidad de gasolina despachada en litros//
function calcularValorGasolina(galones) {
  // Conversión de galones a litros (1 galón = 3.78541 litros)
  var litros = galones * 3.78541;

  // Cálculo del valor a pagar (1 litro = 100 centilitros)
  var valorPagar = litros * 100 * 25;

  // Retornar los resultados en un objeto
  return {
    litros: litros,
    valorPagar: valorPagar,
  };
}

// Ejemplo de uso
var galones = 5;
var resultado = calcularValorGasolina(galones);

console.log("Cantidad de gasolina despachada: " + resultado.litros + " litros");
console.log("Valor a pagar: " + resultado.valorPagar + " pesos");

//Realizar un algoritmo que calcule el salario de un empleado según los siguientes parámetros.a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000,sino le pagan el mismo salario.c. Si gana más del millón Descuento de pensión =6%//
function calcularSalario(salario) {
  var descuentoPension = 0;
  var auxilioTransporte = 0;
  var subsidioFamiliar = 0;

  if (salario < 699999) {
    descuentoPension = salario * 0.02;
    auxilioTransporte = salario * 0.06;
  } else if (salario >= 700000 && salario < 1000000) {
    descuentoPension = salario * 0.04;
    subsidioFamiliar = 12000;
  } else if (salario >= 1000000) {
    descuentoPension = salario * 0.06;
  }

  var salarioNeto =
    salario - descuentoPension + auxilioTransporte + subsidioFamiliar;

  return {
    salarioNeto: salarioNeto,
    descuentoPension: descuentoPension,
    auxilioTransporte: auxilioTransporte,
    subsidioFamiliar: subsidioFamiliar,
  };
}

// Ejemplo de uso
var salario = 800000;
var resultado = calcularSalario(salario);

console.log("Salario Neto: " + resultado.salarioNeto);
console.log("Descuento de pensión: " + resultado.descuentoPension);
console.log("Auxilio de transporte: " + resultado.auxilioTransporte);
console.log("Subsidio familiar: " + resultado.subsidioFamiliar);
