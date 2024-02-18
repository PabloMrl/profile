document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.querySelector('.nav');
    
    menuBtn.addEventListener('click', function () {
        console.log('Botón de menú clicado');
        // Alternar la clase 'active' en el botón de menú
        menuBtn.classList.toggle('active');
         // Alternar la visibilidad del menú de navegación
        navMenu.classList.toggle('nav_hidden');
    });

});

