function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// select span and button
const refs = {
  backgroundColorValue: document.querySelector('.color'),
  changeColorButton: document.querySelector('.change-color'),
};

// add listener to the button
refs.changeColorButton.addEventListener('click', onChangeColorButtonClick);

// function that changes span text content and body bg color
function onChangeColorButtonClick() {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  refs.backgroundColorValue.textContent = randomHexColor;
}
