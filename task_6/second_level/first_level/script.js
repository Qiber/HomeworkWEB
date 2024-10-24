document.addEventListener("DOMContentLoaded", function () {
    const productTypeElements = document.getElementsByName("productType");
    const optionsGroup = document.getElementById("optionsGroup");
    const checkboxGroup = document.getElementById("checkboxGroup");

    // Обработчик для отображения соответствующих полей в зависимости от типа товара
    productTypeElements.forEach(function (radio) {
        radio.addEventListener("change", function () {
            if (this.value === "type1") {
                optionsGroup.style.display = "none";
                checkboxGroup.style.display = "none";
            } else if (this.value === "type2") {
                optionsGroup.style.display = "block";
                checkboxGroup.style.display = "none";
            } else if (this.value === "type3") {
                optionsGroup.style.display = "none";
                checkboxGroup.style.display = "block";
            }
        });
    });

    // Функция расчета стоимости
    document.getElementById("calcForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Получаем количество товара
        let quantity = document.getElementById("cost").value;

        // Начальная стоимость (например, 100р для всех типов товара)
        let basePrice = 100;

        // Определяем стоимость в зависимости от типа товара
        let totalPrice = 0;
        const selectedProductType = document.querySelector('input[name="productType"]:checked').value;

        if (selectedProductType === "type1") {
            totalPrice = basePrice;
        } else if (selectedProductType === "type2") {
            // Если выбран тип 2, добавляем стоимость опции
            const selectedOption = document.getElementById("options").value;
            totalPrice = basePrice + parseInt(selectedOption);
        } else if (selectedProductType === "type3") {
            // Если выбран тип 3, добавляем стоимость свойства, если чекбокс включен
            totalPrice = basePrice;
            if (document.getElementById("property").checked) {
                totalPrice += 150;
            }
        }

        // Умножаем на количество
        totalPrice *= quantity;

        // Выводим результат
        document.getElementById("result").innerHTML = totalPrice + " р.";
    });
});
