// initialize counter value
let counterValue = 0;

// select buttons and value
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const displayValue = document.querySelector('#value');

// add event listeners to the buttons
incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);

// increment and decrement fuctions
function increment() {
  counterValue += 1;
  displayValue.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  displayValue.textContent = counterValue;
}
