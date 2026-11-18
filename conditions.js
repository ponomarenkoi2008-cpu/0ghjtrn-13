// ==========================================
// ЧАСТЬ 1: Исходные данные (Вариант 24)
// ==========================================
const itemName = "Луна"; // Название выбранной позиции
const quantityText = "4"; // Количество посетителей (строка)
const unitValue = 4; // Игрушек для занятия одного посетителя (число)
const extraValue = 3; // Игрушек общего резерва (число)
const isTraining = true; // Признак учебных данных

// Начальный приветственный вывод в консоль
console.log("Расчёт моего приложения");
console.log("Выбранный питомец:", itemName);
console.log("Заданное количество посетителей:", quantityText);
console.log("Норма игрушек на одного посетителя:", unitValue);
console.log("Общий резерв игрушек:", extraValue);

// ==========================================
// ЧАСТЬ 2: Функция проверки и вычисления
// ==========================================
function getResult(quantityText, unitAmount, extraAmount) {
    // 1. Проверка на пустую строку или строку только из пробелов
    if (quantityText.trim() === "") {
        return "Ошибка: укажите количество";
    }

    // Преобразование текстового аргумента в число
    const quantity = Number(quantityText);

    // 2. Проверка: является ли значение корректным конечным числом
    if (!Number.isFinite(quantity)) {
        return "Ошибка: введите число";
    }

    // 3. Проверка: количество должно быть больше нуля
    if (quantity <= 0) {
        return "Ошибка: нужно положительное целое количество";
    }

    // 4. Проверка: количество должно быть целым числом
    if (!Number.isInteger(quantity)) {
        return "Ошибка: нужно положительное целое количество";
    }

    // Расчёт итогового запаса игрушек по формуле варианта
    const totalAmount = unitAmount * quantity + extraAmount;
    
    return "Итого: " + totalAmount;
}

// Первичный вызов функции с исходными константами
const resultMessage = getResult(quantityText, unitValue, extraValue);
console.log(resultMessage); // Ожидается: "Итого: 19"

// ==========================================
// ЧАСТЬ 3: 13 обязательных испытаний
// ==========================================
console.log("\n--- СЕРИЯ ИСПЫТАТЕЛЬНЫХ ВЫЗОВОВ ---");

// 11 проверок из основной таблицы (изменяется только первый аргумент)
console.log("1. Мой вариант ('4'):", getResult("4", unitValue, extraValue)); // Итого: 19
console.log("2. Одна единица ('1'):", getResult("1", unitValue, extraValue)); // Итого: 7
console.log("3. Три единицы ('3'):", getResult("3", unitValue, extraValue)); // Итого: 15
console.log("4. Пустое поле (''):", getResult("", unitValue, extraValue)); // Ошибка: укажите количество
console.log("5. Только пробелы (' '):", getResult(" ", unitValue, extraValue)); // Ошибка: укажите количество
console.log("6. Слово ('два'):", getResult("два", unitValue, extraValue)); // Ошибка: введите число
console.log("7. Бесконечность ('Infinity'):", getResult("Infinity", unitValue, extraValue)); // Ошибка: введите число
console.log("8. Ноль ('0'):", getResult("0", unitValue, extraValue)); // Ошибка: нужно положительное целое количество
console.log("9. Отрицательное ('-1'):", getResult("-1", unitValue, extraValue)); // Ошибка: нужно положительное целое количество
console.log("10. Дробное ('1.5'):", getResult("1.5", unitValue, extraValue)); // Ошибка: нужно положительное целое количество
console.log("11. Пробелы вокруг (' 2 '):", getResult(" 2 ", unitValue, extraValue)); // Итого: 11

// 2 дополнительных испытания на зависимость (первый аргумент равен '2')
// Исходные константы unitValue и extraValue не меняются, передаем новые числа напрямую
console.log("12. Величина на единицу больше на 10:", getResult("2", 14, 3)); // Итого: 31
console.log("13. Общая добавка больше на 10:", getResult("2", 4, 13)); // Итого: 21
