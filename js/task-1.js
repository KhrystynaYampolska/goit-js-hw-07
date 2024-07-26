const categories = document.querySelectorAll('ul#categories > li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector('h2');
  const elementsNumber = category.querySelectorAll('ul > li');

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${elementsNumber.length}`);
});
