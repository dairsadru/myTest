'use strict'


let slider = document.querySelector('.slider');

//create load-icon

let loadIcon = document.createElement('i');

loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

//create leftArrow
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);


//create rightArrow
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

//Ждем когда весь контент загрузиться целиком
window.addEventListener('load', function () {
    hideLoadIcon(loadIcon);
    //Инициализация слайдера
    images.init();

    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        location.reload();
    });
})

/**
 * Функция скрывает иконку загрузки
 * @param {HTMLElement} loadIcon
 */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = 'none';
}
/**
 * Функция берет у элемента слайдера его data-атрибуты размеров,
 * и если они определены,то самому слайдера меняют размеры.
 * @param {HTMLElement} slider
 */
function setSizes(slider) {
    let width = slider.getAttribute('data-width');
    let height = slider.getAttribute('data-height');
    if (width !== null && width !== "") {
        slider.style.width = width;
    }
    if (height !== null && height !== "") {
        slider.style.height = height;
    }
}

setSizes(slider);

// Объект слайдера
let images = {
    /*{int} Номер текущего изображения */
    currentIdx: 0,

    /*{HTMLDivElement[]} slides  элементы слайдов */
    slides: [],

    /** Получаем все слайды и показываем первый слайд. */
    init() {
        this.slides = document.querySelectorAll(".slider-item");
        this.showImageWithCurrentIdx();
    },

    //Видимому (текущему) слайду добавляем класс hidden-slides для скрытия слайда
    hideVisibleImage() {
        this.slides[this.currentIdx].classList.add("hidden-slide");
    },

    /** Берем слайд с текущим индексом и убираем  у него класс
     *  hidden-slide. для показа слайда*/
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove("hidden-slide");
    },

    /** Переключиться на предыдущее изображение.*/
    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },
    /** Переключиться на следующее изображение.*/
    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    }
}

let divImg = document.createElement('img');
divImg.src = "https://picsum.photos/1920/1080?random=1"