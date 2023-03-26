function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// select required elements: buttons, input, container.
const refs = {
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
  input: document.querySelector('input'),
};

// add listeners to the buttons
refs.createButton.addEventListener('click', () => createBoxes(refs.input.value));
refs.destroyButton.addEventListener('click', destroyBoxes);

// function that creates boxes and checks valid input
function createBoxes(amount) {
  refs.boxesContainer.textContent = '';
  const initialBoxSize = 30;

  if (amount >= Number(refs.input.min) && amount <= Number(refs.input.max)) {
    for (let i = 0, step = 0; i < amount; i += 1, step += 10) {
      const divElement = document.createElement('div');
      divElement.style.width = `${initialBoxSize + step}px`;
      divElement.style.height = `${initialBoxSize + step}px`;
      divElement.style.backgroundColor = getRandomHexColor();
      refs.boxesContainer.appendChild(divElement);
    }
  } else {
    return alert('Please enter a number between 1 and 100!');
  }
}

// destroy boxes function
function destroyBoxes() {
  refs.boxesContainer.textContent = '';
  refs.input.value = '';
}
