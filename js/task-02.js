const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// select container for ingredients
const container = document.querySelector('#ingredients');

// iterate each ingredient and create <li class="item">${ingredient}</li>
const ingredientItems = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');

  return ingredientItem;
});

// add all ingredients in the list
container.append(...ingredientItems);

// check result in the console
console.log(container);
