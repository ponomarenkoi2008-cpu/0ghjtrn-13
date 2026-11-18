// ==========================================
// ЧАСТЬ 1: Исходные данные (Вариант 24)
// ==========================================
const catalog = [
    {
        position: 1,
        name: "Луна",
        image: "images/item1.png",
        specs: "Кошка · 1 год",
        description: "Любопытная и внимательная к игрушкам"
    },
    {
        position: 2,
        name: "Барсик",
        image: "images/item2.png",
        specs: "Кот · 2 года",
        description: "Любит спокойное общение и мягкую лежанку"
    },
    {
        position: 3,
        name: "Рыжик",
        image: "images/item3.png",
        specs: "Пёс · 3 года",
        description: "Рад прогулкам и подвижным играм"
    }
];

// ==========================================
// ЧАСТЬ 2: Функция поиска из пары 22
// ==========================================
function filterByText(items, query) {
    const normalized = query.trim().toLowerCase();
    if (normalized === "") {
        return items;
    }
    return items.filter(item => item.name.toLowerCase().includes(normalized));
}

// ==========================================
// ЧАСТЬ 3: Вывод карточек и обработка поиска
// ==========================================
const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");

function renderCatalog(items) {
    catalogList.replaceChildren();

    for (const item of items) {
        const card = document.createElement("article");
        card.className = "card";

        const title = document.createElement("h2");
        title.textContent = item.name;

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name + " — иллюстрация варианта 24";

        const specs = document.createElement("p");
        specs.className = "specs";
        specs.textContent = item.specs;

        const description = document.createElement("p");
        description.className = "description";
        description.textContent = item.description;

        card.append(title, img, specs, description);
        catalogList.append(card);
    }

    if (items.length === 0) {
        statusText.textContent = "Ничего не найдено";
    } else {
        statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
    }
}

// Первичный вывод всех карточек при загрузке страницы
renderCatalog(catalog);

// Связь поля поиска с фильтрацией
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", function () {
    const found = filterByText(catalog, searchInput.value);
    renderCatalog(found);
});
