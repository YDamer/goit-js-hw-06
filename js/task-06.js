// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", (event) => {
  if (inputElement.value.length !== Number(inputElement.dataset.length))
  {inputElement.classList.add("invalid");
  }
  else {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  }
});