// Import stylesheets
import './style.css';

//Variables globales
let inputValue;
let result;

// Write Javascript code!
document.getElementById('c').addEventListener('click', onInit);

/**
 * Función para inicializar proceso principal
 * 
 * @return {void}
 */
function onInit(e) {
  inputValue = document.getElementById('num1').value;
  factorial(inputValue);
  setAlert();
}

/**
 * Función para calcular el factorial
 * El factorial de un número es equivalente a la multiplicación de todos los números enteros 
 * positivos menores o iguales que él.
 * 
 * @return {void}
 */
function factorial(inputValue) {
  result = 1;
  //Bucle para genear serie de numeros empesando desde el 1 hasta llegar al numero de entrada 
  for (let i = 1; i <= inputValue; i++) {
    //Calculo para gegeral factorial
    result = result * i;
  }
}


/**
 * Función para mostrar factorial
 * 
 * @return {void}
 */
 function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');

  alert.innerHTML = `
  <p>${inputValue}! = ${result}</p>
  `;
 }
