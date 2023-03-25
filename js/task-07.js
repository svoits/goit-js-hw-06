// select input and text
const refs = {
  inputRange: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

// define common font size
refs.text.style.fontSize = `${refs.inputRange.value}px`;

// add listener to the input
refs.inputRange.addEventListener('input', onInputChange);

// function that applies current font size
function onInputChange() {
  refs.text.style.fontSize = `${refs.inputRange.value}px`;
}
