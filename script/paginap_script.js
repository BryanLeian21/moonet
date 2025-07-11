// script.js (para main_page.html)

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    const navButtons = document.querySelectorAll('.main-nav-buttons .nav-button');
    const carouselTrack = document.getElementById('carouselTrack');
    const serviceCards = document.querySelectorAll('.service-card');

    // Botón de Menú (asumimos que vuelve a la página de inicio o abre un menú lateral)
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            console.log('Botón de Menú clickeado. Navegando a index.html (o abriendo menú lateral)');
            window.location.href = 'index.html'; // Vuelve a la página de inicio
        });
    }

    // Botón de Búsqueda
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Buscando: "${searchTerm}"`);
                console.log(`Buscando: "${searchTerm}"`);
            } else {
                alert('Por favor, introduce un término de búsqueda.');
            }
        });
    }

    // Navegación principal (Servicios, Agenda, Ayuda)
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.textContent;
            console.log(`Botón de navegación: "${section}" clickeado.`);

            if (section === 'Servicios') {
                window.location.href = 'services_page.html'; // Navega a la página de servicios
            } else if (section === 'Agenda') {
                window.location.href = 'agenda.html'; // Navega a la página de agenda
            } else if (section === 'Ayuda') {
                window.location.href = 'help_center.html'; // Navega a la página de ayuda
            }
        });
    });

    // Botones "+1" en las tarjetas de servicio
    serviceCards.forEach(card => {
        const addButton = card.querySelector('.add-to-cart-button');
        if (addButton) {
            addButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Evita que el clic en el botón active también el clic de la tarjeta
                const serviceName = card.querySelector('.service-name').textContent;
                alert(`¡"${serviceName}" añadido al carrito!`);
                console.log(`Servicio añadido: "${serviceName}"`);
            });
        }
        // Puedes añadir aquí un listener para abrir un modal de detalles al hacer clic en la tarjeta (similar a services_page.js)
    });

    console.log('Página principal cargada correctamente.');
});
