// select input and output
const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

// add listener to the input
refs.input.addEventListener('input', onInputChange);

// on input change function
function onInputChange(event) {
  if (event.currentTarget.value.trim() === '') {
    refs.output.textContent = 'Anonymous';
  } else {
    refs.output.textContent = event.currentTarget.value.trim();
  }
}
