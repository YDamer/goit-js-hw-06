// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
//  і виводить значення кольору в span.color.

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fn1);
function fn1(e) {
  text.style.fontSize = `${e.target.value}px`;
}