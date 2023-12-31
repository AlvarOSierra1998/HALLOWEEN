

window.addEventListener('DOMContentLoaded', event => {

    // Funcion del navbar (Es propcionada por bootrapp)
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    
    navbarShrink();

    // Reducir el navbar cuando se hace scrool la página
    document.addEventListener('scroll', navbarShrink);

    // Activa Bootstrap scrollspy en el elemento de navegación principal
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Contraer la barra de navegación responsiva cuando el conmutador esté visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Mostrar el elemento de carga
document.getElementById('loader').style.display = 'block';

// Establecer el tiempo de espera en milisegundos (por ejemplo, 3000ms para 3 segundos)
var tiempoDeEspera = 1500;

// Después del tiempo de espera, ocultar el elemento de carga y mostrar el contenido
setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}, tiempoDeEspera);






