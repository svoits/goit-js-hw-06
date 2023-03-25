// select input
const validationInput = document.querySelector('#validation-input');

// define length of data-length attribute
const validationInputLength = Number(validationInput.dataset.length);

// add listener to the input
validationInput.addEventListener('blur', onInputBlur);

// checking function: valid or invalid input
function onInputBlur(event) {
  const inputValueLength = Number(event.currentTarget.value.length);
  if (inputValueLength === validationInputLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}
