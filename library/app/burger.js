const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');


burgerBtn.addEventListener('click', function(){
    if (burgerBtn.classList.contains('_active')) {
        burgerBtn.classList.remove('_active');
        burgerMenu.classList.remove('_active');
    }
    else if(!burgerBtn.classList.contains('_active')){
        burgerBtn.classList.add('_active');
        burgerMenu.classList.add('_active');
    }
});

// When we clicked Escape
document.addEventListener('keydown', function(event) {
    if(event.key === "Escape" || event.key === "Esc") {
        burgerBtn.classList.remove('_active');
        burgerMenu.classList.remove('_active');
    }
});

document.addEventListener('click', function(event) {
    const isBurgerMenuClicked = burgerMenu.contains(event.target);
    const isBurgerBtnClicked = burgerBtn.contains(event.target);
    if (!isBurgerMenuClicked && !isBurgerBtnClicked) {
        burgerBtn.classList.remove('_active');
        burgerMenu.classList.remove('_active');
    }
});

// Get the menu links and add a click event handler
const menuAnchor = document.querySelectorAll('.burger-menu__item');
for (let i = 0; i < menuAnchor.length; i++) {
    menuAnchor[i].addEventListener('click', function(e) {
        if (burgerBtn.classList.contains('_active')) {
            burgerBtn.classList.remove('_active');
            burgerMenu.classList.remove('_active');
            // changeSpanColor();
        }
        // We get the anchor and make the transition
        const target = this.getAttribute('href');
        const targetItem = document.querySelector(target);
        if (targetItem) {
            targetItem.scrollIntoView({
                behavior: 'smooth'
            })
        }
    });
}

// function of smooth scrolling to the anchor
function smoothScroll(target) {
    const item = document.querySelector(target);
    const offsetTop = item.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
};

/* Adds a click handler to all links with class menu-link and
href attribute, starting with the # character.
When we click on the link, the script calls the smoothScroll function.
which finds the element with the specified id, calculates its vertical
offset from the beginning of the document and smoothly scrolls the page 
to the specified element. At the same time, the title is not bugged, 
it remains in its place. */
document.querySelectorAll(".burger-menu__item[href^='#']").forEach(link => {
    link.addEventListener('click', function(event) {
        smoothScroll(this.getAttribute("href"));
    });
});


// -- Реализация смены цвета бургер иконки при скролле -- 
const burgerBtnSpans = document.querySelectorAll('.burger-btn span') // получаем полоски иконки бургер меню
// Получаем коллекцию из секций, в которых мы хотим изменить цвет фона .burger-btn
const targetSections = document.querySelectorAll('.about, .favorites, .coffeeShop, .contacts, .libraryCard, .footer');
const targetSectionsHeader = document.querySelectorAll('.header, .welcome');
const darkColor = '#0C0C0E'; // Получаем значение цвета, которое нужно установить для фона .burger-btn


// Обновленный обработчик клика на иконке бургер-меню
const changeSpanColor = () => {
    const burgerBtnRect = burgerBtn.getBoundingClientRect();

    if (burgerBtn.classList.contains('_active')) {
        // Если у burgerBtn есть модификатор _active, устанавливаем цвет span в белый
        burgerBtnSpans.forEach(span => {
            span.style.backgroundColor = '';
        });
    } else {
        // Если у burgerBtn нет модификатора _active
        const isInHeaderSection = burgerBtnRect.top >= 0 && burgerBtnRect.bottom <= window.innerHeight;
        const isInTargetSectionsHeader = Array.from(targetSectionsHeader).some(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            return burgerBtnRect.top >= sectionTop && burgerBtnRect.bottom <= sectionBottom;
        });
        const isInTargetSections = Array.from(targetSections).some(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            return burgerBtnRect.top >= sectionTop && burgerBtnRect.bottom <= sectionBottom;
        });

        if (isInHeaderSection || isInTargetSectionsHeader || isInTargetSections) {
            // Если иконка находится в секции header, targetSectionsHeader или targetSections,
            // устанавливаем цвет span в белый
            burgerBtnSpans.forEach(span => {
                span.style.backgroundColor = '';
            });
        } else {
            // Если иконка находится вне секций header, targetSectionsHeader и targetSections,
            // устанавливаем цвет span в темный
            burgerBtnSpans.forEach(span => {
                span.style.backgroundColor = darkColor;
            });
        }
    }

};
burgerBtn.addEventListener('click', changeSpanColor); // Назначаем обработчик клика по иконке дополнительно с вызовом функции смены цвета

// Функция для обработки прокрутки страницы и изменения цвета span элементов
const handleScroll = () => {
    // Проверяем, находится ли позиция прокрутки страницы внутри целевых секций
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const isInTargetSection = Array.from(targetSections).some(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition <= sectionBottom;
    });

    // Изменяем цвет фона .burger-btn в зависимости от положения прокрутки страницы и состояния бургер-меню
    if (isInTargetSection && !burgerBtn.classList.contains('_active')) {
        burgerBtnSpans.forEach(span => {
        span.style.backgroundColor = darkColor;
        });
    } 
    else {
        burgerBtnSpans.forEach(span => {
            span.style.backgroundColor = ''; // Возвращаем исходный цвет фона
        });
    }
};
window.addEventListener('scroll', handleScroll); // Назначаем обработчик прокрутки страницы
