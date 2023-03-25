// select input and text
const refs = {
  inputRange: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

// define common font size when page is loading...
refs.text.style.fontSize = `${refs.inputRange.value}px`;

// add listener to the input
refs.inputRange.addEventListener('input', onInputChange);

// function that applies font size from the input
function onInputChange() {
  refs.text.style.fontSize = `${refs.inputRange.value}px`;
}
