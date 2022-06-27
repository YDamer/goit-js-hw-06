// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = (arrayNames) => {
  return arrayNames.map(products => {
  const createElementItem = document.createElement("li");
  createElementItem.classList.add("item");
  createElementItem.textContent = products;  
  return createElementItem;
  })
};

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.prepend(...ingredientsList(ingredients));