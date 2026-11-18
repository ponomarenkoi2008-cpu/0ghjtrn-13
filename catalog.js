// ==========================================
// ЧАСТЬ 1: Функция проверки и расчёта (Вариант 24)
// ==========================================
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
// ЧАСТЬ 2: Данные трёх карточек каталога (Вариант 24)
// ==========================================
const catalog = [
    {
        position: 1,
        name: "Луна",
        specs: "Кошка · 1 год",
        description: "Любопытная и внимательная к игрушкам"
    },
    {
        position: 2,
        name: "Барсик",
        specs: "Кот · 2 года",
        description: "Любит спокойное общение и мягкую лежанку"
    },
    {
        position: 3,
        name: "Рыжик",
        specs: "Пёс · 3 года",
        description: "Рад прогулкам и подвижным играм"
    }
];

// Контрольный расчёт из прошлых пар
console.log("Проверка расчёта:", getResult("4", 4, 3));

// ==========================================
// ЧАСТЬ 3: Методы массивов и поиск (Пара 22)
// ==========================================
console.table(catalog);
console.log("Всего карточек:", catalog.length);

const names = catalog.map(item => item.name);
console.log("Список названий:", names);

const filteredAnimals = catalog.filter(item => item.name.toLowerCase().includes("к"));
console.log("Найдено с буквой 'к':", filteredAnimals.length);

const found = catalog.find(item => item.name === "Луна");
if (found) {
    console.log("Найдена запись:", found.name, "|", found.specs);
}

function filterByText(items, query) {
    const normalized = query.trim().toLowerCase();
    if (normalized === "") {
        return items;
    }
    return items.filter(item => item.name.toLowerCase().includes(normalized));
}

const statusEl = document.querySelector("#status");
const namesList = document.querySelector("#names");
const showButton = document.querySelector("#show-names");
const hideButton = document.querySelector("#hide-names");
const form = document.querySelector("form");

let clicks = 0; // Счётчик кликов (из дополнительного задания)

// 1. Вывод названия первой карточки и количества записей в #status (на index.html)
if (statusEl && !form) {
    const first = catalog[0].name;
    statusEl.textContent = first + " — " + catalog.length + " записей";
}

// 2. Функция создания элементов списка <li> в <ul id="names">
function renderNames() {
    if (!namesList) return;
    namesList.replaceChildren();
    for (const item of catalog) {
        const line = document.createElement("li");
        line.textContent = item.name;
        namesList.append(line);
    }
}

// 3. Обработчик кнопки «Показать названия»
if (showButton) {
    showButton.addEventListener("click", function () {
        renderNames();
        clicks = clicks + 1;
        if (statusEl) {
            statusEl.textContent = "Список показан (нажатий: " + clicks + ")";
        }
    });
}

// 4. Обработчик кнопки «Скрыть названия» (из дополнительного задания)
if (hideButton) {
    hideButton.addEventListener("click", function () {
        if (namesList) {
            namesList.replaceChildren();
        }
        if (statusEl) {
            statusEl.textContent = "Список скрыт";
        }
    });
}

// 5. Перехват отправки формы (на form.html)
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (statusEl) {
            statusEl.textContent = "Форма отправлена";
        }
    });
}

// 6. Подсчёт всех абзацев <p> на странице (из дополнительного задания)
const allParagraphs = document.querySelectorAll("p");
console.log("Количество абзацев <p> на странице:", allParagraphs.length);
