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

    const countTimer = deadline => {
        const timerHours = document.querySelector(".hero__hours"),
            timerMinutes = document.querySelector(".hero__minutes"),
            timerSeconds = document.querySelector(".hero__seconds"),
            timerDay = document.querySelector(".hero__days"),
            dateStop = new Date(deadline).getTime();
        let timerId;

        const getTimeRemaining = () => {
            const dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor(timeRemaining / 60) % 60,
                hours = Math.floor(timeRemaining / 3600) % 24,
                day = Math.floor(timeRemaining / (3600 * 24));
            return { day, hours, minutes, seconds, timeRemaining };
        };
        const updateTime = () => {
            const timer = getTimeRemaining();
            if (timer.timeRemaining > 0) {
                timerHours.textContent = ("00" + timer.hours).slice(-2);
                timerMinutes.textContent = ("00" + timer.minutes).slice(-2);
                timerSeconds.textContent = ("00" + timer.seconds).slice(-2);
                timerDay.textContent = ("00" + timer.day).slice(-2);
            }
            else {
                timerHours.textContent = "00";
                timerMinutes.textContent = "00";
                timerSeconds.textContent = "00";
                timerDay.textContent = "00";
                document.querySelector(".hero__timer_time").style.color = "red";
                clearInterval(timerId);
            }
        };

        timerId = setInterval(updateTime, 1000);
    };
    countTimer("25 august 2021, 12:40:00");

    const examplesSwiper = new Swiper('.examples__wrapper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
            el: '.examples__slider_pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="examples__slider_pagination-bullet ${className}"></span>`;
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.examples__btn_down',
            prevEl: '.examples__btn_up',
        },
        breakpoints: {
            768: {
                direction: 'vertical',
            }
        }

    });
    const teamSwiper = new Swiper('.team__swiper', {
        loop: true,
        freeMode: false,
        spaceBetween: 41,
        slidesPerView: 'auto',
        breakpoints: {
            768: {
                freeMode: true
            }
        }
    });

});