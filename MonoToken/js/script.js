document.addEventListener('DOMContentLoaded', () => {
    const headerBurger = document.querySelector(".header__burger");
    const headerMenu = document.querySelector(".header__menu");
    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle("active");
        headerMenu.classList.toggle("active");
        document.body.classList.toggle("lock");
    });
    window.addEventListener(`resize`, () => {
        headerBurger.classList.remove("active");
        headerMenu.classList.remove("active");
        document.body.classList.remove("lock");
    });
});