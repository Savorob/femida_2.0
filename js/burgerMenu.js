const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelectorAll(".menu__side-link");
const sideMenu = document.querySelector(".menu__side");
const burgerMenu = document.querySelector(".burger__menu");
//Открытие/закртие меню по клику на кнопку
menuBtn.addEventListener('click', function() {
    sideMenu.classList.toggle("hidden");
    sideMenu.classList.toggle('menu__side--active');
    menuBtn.classList.toggle("menu-btn_active");
})
//Закрытие меню при клике на ссылку
menuLinks.forEach(function(item){
    item.addEventListener('click', function() {
        sideMenu.classList.add('hidden');
        menuBtn.classList.remove("menu-btn_active");
    })
})
//Закрытие по клику вне бургер меню
document.addEventListener('click', function(e) {
    const click = e.composedPath().includes(burgerMenu);

    if (! click) {
        sideMenu.classList.add('hidden');
        sideMenu.classList.remove("menu__side--active");
        menuBtn.classList.remove("menu-btn_active");
    }
})
