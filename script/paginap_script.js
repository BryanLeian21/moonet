// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias a elementos de la UI ---
    const menuButton = document.querySelector('.menu-button');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    const navButtons = document.querySelectorAll('.nav-button');
    const carouselTrack = document.getElementById('carouselTrack');
    const serviceCards = document.querySelectorAll('.service-card');

    // --- Funcionalidad del Carrusel (Desplazamiento manual y auto-scroll) ---
    let currentScrollIndex = 0;

    // Función para desplazar el carrusel a un índice específico
    const scrollToCard = (index) => {
        if (carouselTrack && serviceCards.length > 0) {
            const cardWidth = serviceCards[0].offsetWidth + 15; // Ancho de la tarjeta + gap
            carouselTrack.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth' // Desplazamiento suave
            });
            currentScrollIndex = index;
        }
    };

    // Puedes añadir botones de navegación (siguiente/anterior) si los wireframes los incluyeran
    // Por ahora, el usuario puede arrastrar el carrusel manualmente.

    // --- Event Listeners ---

    // Botón de Menú
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            alert('Botón de Menú clickeado. (Aquí se abriría un menú lateral)');
            console.log('Botón de Menú clickeado.');
        });
    }

    // Botón de Búsqueda
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Buscando: "${searchTerm}"`);
                console.log(`Buscando: "${searchTerm}"`);
                // Aquí se implementaría la lógica de búsqueda
            } else {
                alert('Por favor, introduce un término de búsqueda.');
            }
        });
    }

    // Navegación principal (Servicios, Agenda, Ayuda)
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Botón "${button.textContent}" clickeado.`);
            console.log(`Botón de navegación: "${button.textContent}"`);
            // Aquí se implementaría la lógica para cambiar de sección/página
        });
    });

    // Botones "+1" en las tarjetas de servicio
    serviceCards.forEach(card => {
        const addButton = card.querySelector('.add-to-cart-button');
        if (addButton) {
            addButton.addEventListener('click', () => {
                const serviceName = card.querySelector('.service-name').textContent;
                alert(`¡"${serviceName}" añadido al carrito!`);
                console.log(`Servicio añadido: "${serviceName}"`);
                // Aquí se implementaría la lógica para añadir al carrito/seleccionar servicio
            });
        }
    });

    // --- Lógica adicional para el carrusel (opcional) ---
    // Si quisieras auto-scroll o botones de navegación explícitos, aquí iría la lógica.
    // Por ejemplo, para un auto-scroll cada X segundos:
    /*
    let autoScrollInterval;
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            currentScrollIndex = (currentScrollIndex + 1) % serviceCards.length;
            scrollToCard(currentScrollIndex);
        }, 3000); // Cada 3 segundos
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };

    // Iniciar auto-scroll al cargar la página
    startAutoScroll();

    // Detener auto-scroll al interactuar con el carrusel
    carouselTrack.addEventListener('mouseenter', stopAutoScroll);
    carouselTrack.addEventListener('mouseleave', startAutoScroll);
    */

    console.log('Página principal cargada correctamente.');
});