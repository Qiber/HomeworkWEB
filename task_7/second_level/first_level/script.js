document.addEventListener("DOMContentLoaded", function () {
    // Переключение опций и свойств в зависимости от типа товара
    const productTypeElements = Array.from(document.getElementsByName("productType"));
    const optionsGroup = document.getElementById("optionsGroup");
    const checkboxGroup = document.getElementById("checkboxGroup");

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

    // Расчет стоимости
    document.getElementById("calcForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let quantity = document.getElementById("cost").value;
        let basePrice = 100;
        let totalPrice = 0;
        const selectedProductType = document.querySelector('input[name="productType"]:checked').value;

        if (selectedProductType === "type1") {
            totalPrice = basePrice;
        } else if (selectedProductType === "type2") {
            const selectedOption = document.getElementById("options").value;
            totalPrice = basePrice + parseInt(selectedOption);
        } else if (selectedProductType === "type3") {
            totalPrice = basePrice;
            if (document.getElementById("property").checked) {
                totalPrice += 150;
            }
        }
        totalPrice *= quantity;
        document.getElementById("result").innerHTML = totalPrice + " р.";
    });

    // Слайдер галереи
    const slider = document.querySelector(".slides");
    const images = slider.querySelectorAll("img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const currentPageDisplay = document.getElementById("currentPage");
    const totalPagesDisplay = document.getElementById("totalPages");

    let currentIndex = 0;
    let imagesPerSlide = getImagesPerSlide();
    let totalSlides = Math.ceil(images.length / imagesPerSlide);

    totalPagesDisplay.textContent = totalSlides;

    function getImagesPerSlide() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        return 3;
    }

    function updateSlider() {
        const slideWidth = images[0].clientWidth + 15;
        slider.style.transform = `translateX(-${currentIndex * slideWidth * imagesPerSlide}px)`;
        currentPageDisplay.textContent = currentIndex + 1;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalSlides - 1;
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener("resize", () => {
        currentIndex = 0;
        imagesPerSlide = getImagesPerSlide();
        totalSlides = Math.ceil(images.length / imagesPerSlide);
        totalPagesDisplay.textContent = totalSlides;
        updateSlider();
    });

    updateSlider();
});
