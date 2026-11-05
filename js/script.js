"use strict";

const scoreButton = document.querySelector("#score-button");
const score = document.querySelector("#score");
const doubleCard = document.querySelector("#double-card");
const hoverZone = document.querySelector("#hover-zone");
const status = document.querySelector("#status");
let points = 0;

// Задание 1. Подключите click к scoreButton.
// Внутри обработчика увеличьте points, затем обновите score.textContent и status.
scoreButton.addEventListener("click", () => {
  points += 1;
  score.textContent = points;
  status.textContent = "Балл добавлен, сейчас баллов: " + points;
});

// Задание 2. Подключите dblclick к doubleCard.
// Переключите класс is-selected и измените текст status.
doubleCard.addEventListener("dblclick", () => {
  doubleCard.classList.toggle("is-selected");
  status.textContent = "Двойной щелчок по карточке";
});


// Задание 3. Подключите mouseenter к hoverZone.
// Добавьте класс is-hovered и покажите сообщение.
hoverZone.addEventListener("mouseenter", () => {
  hoverZone.classList.add("is-hovered");
  status.textContent = "Курсор в зоне наведения";
});

// Задание 4. Подключите mouseleave к hoverZone.
// Уберите класс is-hovered и верните исходный текст статуса.
hoverZone.addEventListener("mouseleave", () => {
    hoverZone.classList.remove("is-hovered");
  status.textContent = "Ожидание действия.";
});
