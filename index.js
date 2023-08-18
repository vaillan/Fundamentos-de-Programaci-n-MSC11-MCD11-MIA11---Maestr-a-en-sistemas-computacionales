// Import stylesheets
import './style.css';

//Variables globales
let inputValue;
let result;

// Write Javascript code!
document.getElementById('c').addEventListener('click', onInit);

function onInit(e) {
  inputValue = document.getElementById('num1').value;
  factorial(inputValue);
  setAlert();
}

function factorial(inputValue) {
  result = 1;
  for (let i = 1; i <= inputValue; i++) {
    result = result * i;
  }
}


/**
 * Función para mostrar etiqueta de montos
 * @return {void}
 */
 function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');

  alert.innerHTML = `
  <p>${inputValue}! = ${result}</p>
  `;
 }
