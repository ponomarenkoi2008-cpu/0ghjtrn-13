// ==========================================
// ЧАСТЬ 1: Исходные константы и функция расчёта (Вариант 24)
// ==========================================
const unitValue = 4;  // Игрушек для занятия одного посетителя
const extraValue = 3; // Игрушек общего резерва

function getResult(quantityText, unitAmount, extraAmount) {
    if (quantityText.trim() === "") {
        return "Ошибка: укажите количество";
    }

    const quantity = Number(quantityText);

    if (!Number.isFinite(quantity)) {
        return "Ошибка: введите число";
    }

    if (quantity <= 0) {
        return "Ошибка: нужно положительное целое количество";
    }

    if (!Number.isInteger(quantity)) {
        return "Ошибка: нужно положительное целое количество";
    }

    const totalAmount = unitAmount * quantity + extraAmount;
    return "Итого: " + totalAmount;
}

// ==========================================
// ЧАСТЬ 2: Перехват отправки формы и вывод результата
// ==========================================
const form = document.querySelector("form");
const result = document.querySelector("#result");
let submitCount = 0; // Счётчик отправок

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const quantityText = document.querySelector("#quantity").value;
    const select = document.querySelector("#item");
    const itemName = select.options[select.selectedIndex].text;

    const message = getResult(quantityText, unitValue, extraValue);

    submitCount = submitCount + 1;
    result.textContent = "Проверка " + submitCount + ". " + itemName + ". " + message;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}
