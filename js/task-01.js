// Select categories and log number of these categories
const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

// iterate each category and log its category name and quantity of elements
categories.forEach(item => {
  const categoryName = item.querySelector('h2');
  const categoryElements = item.querySelectorAll('li');
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});
