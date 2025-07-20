const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__links');

// Guardamos las rutas de las imágenes
const menuIcon = 'assets/menu.svg';
const closeIcon = 'assets/close.svg';

menu.addEventListener('click', function () {
    menuList.classList.toggle('nav__list--show');

    // Cambiamos la imagen según el estado del menú
    if (menuList.classList.contains('nav__list--show')) {
        menu.src = closeIcon;
    } else {
        menu.src = menuIcon;
    }
});

links.forEach(function (link) {
    link.addEventListener('click', function () {
        menuList.classList.remove('nav__list--show');
        menu.src = menuIcon; // Volvemos a poner el ícono hamburguesa si se cierra desde un link
    });
});