// script.js (para services_page.html)

document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back-button');
    const menuButton = document.querySelector('.menu-button');
    const searchInput = document.querySelector('.content-search-bar .search-input');
    const searchButton = document.querySelector('.content-search-bar .search-button');
    const serviceNavButtons = document.querySelectorAll('.service-nav-buttons .nav-button');
    const serviceCards = document.querySelectorAll('.service-card');

    const serviceDetailModal = document.getElementById('serviceDetailModal');
    const modalServiceName = document.getElementById('modalServiceName');
    const modalServiceImage = document.getElementById('modalServiceImage');
    const modalServiceDescription = document.getElementById('modalServiceDescription');
    const modalServicePrice = document.getElementById('modalServicePrice');
    const modalServicePromoText = document.getElementById('modalServicePromoText');
    const modalBackServiceBtn = document.getElementById('modalBackServiceBtn');
    const modalMoreInfoServiceBtn = document.getElementById('modalMoreInfoServiceBtn');


    // Botón de Volver Atrás
    if (backButton) {
        backButton.addEventListener('click', () => {
            console.log('Botón "Volver Atrás" clickeado. Volviendo a main_page.html');
            window.location.href = 'paginap_index.html'; // Vuelve a la página del menú principal
        });
    }

    // Botón de Menú
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            console.log('Botón "Menú" clickeado. Navegando a main_page.html');
            window.location.href = 'paginap_index.html'; // Navega a la página del menú principal
        });
    }

    // Funcionalidad de la Barra de Búsqueda
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Buscando servicios: "${searchTerm}"`);
                console.log(`Buscando servicios: "${searchTerm}"`);
                filterServices(searchTerm);
            } else {
                alert('Por favor, introduce un término de búsqueda.');
                filterServices('');
            }
        });
    }

    // Funcionalidad de los Botones de Navegación de Servicios (Catálogo/AR)
    serviceNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            serviceNavButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const section = button.textContent;
            console.log(`Sección de servicios seleccionada: "${section}".`);

            if (section === 'AR') {
                console.log('Cargando vista de Realidad Aumentada. Navegando a ar_index.html');
                window.location.href = 'ra_index.html'; // Navega a la página del prototipo AR
            } else {
                console.log('Cargando vista de Catálogo.');
                // Lógica para la vista de Catálogo (permanece en esta página o filtra)
            }
        });
    });

    // Funcionalidad de los Botones "+1" y clic en las tarjetas de servicio
    serviceCards.forEach(card => {
        const addButton = card.querySelector('.add-to-cart-button');
        if (addButton) {
            addButton.addEventListener('click', (event) => {
                event.stopPropagation();
                const serviceName = card.querySelector('.service-name').textContent;
                alert(`¡"${serviceName}" añadido al carrito!`);
                console.log(`Servicio añadido: "${serviceName}"`);
            });
        }

        card.addEventListener('click', () => {
            const serviceName = card.dataset.serviceName;
            const serviceDescription = card.dataset.serviceDescription;
            const serviceImageSrc = card.querySelector('.service-image').src;
            const servicePrice = card.dataset.servicePrice;
            const servicePromoText = card.dataset.servicePromoText;

            modalServiceName.textContent = serviceName;
            modalServiceImage.src = serviceImageSrc;
            modalServiceImage.alt = serviceName;
            modalServiceDescription.textContent = serviceDescription;
            modalServicePrice.textContent = `$${parseFloat(servicePrice).toFixed(2).replace('.', ',')}`;
            modalServicePromoText.textContent = servicePromoText;

            serviceDetailModal.classList.add('show');
            console.log(`Abriendo modal para: ${serviceName}`);
        });
    });

    // Lógica de filtrado de Servicios
    const filterServices = (searchTerm) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        serviceCards.forEach(card => {
            const serviceName = card.querySelector('.service-name').textContent.toLowerCase();
            const serviceDescription = card.querySelector('.service-description').textContent.toLowerCase();
            if (serviceName.includes(lowerCaseSearchTerm) || serviceDescription.includes(lowerCaseSearchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Event Listeners del Modal de Servicio
    if (modalBackServiceBtn) {
        modalBackServiceBtn.addEventListener('click', () => {
            console.log('Botón "Atrás" del modal clickeado. Ocultando modal.');
            serviceDetailModal.classList.remove('show');
        });
    }

    if (modalMoreInfoServiceBtn) {
        modalMoreInfoServiceBtn.addEventListener('click', () => {
            const serviceName = modalServiceName.textContent;
            console.log(`Botón "Mas Info." del modal clickeado para: ${serviceName}.`);
            alert(`Redirigiendo a la página de detalles para "${serviceName}" (no implementada aún).`);
            window.location.href = 'paginap_index.html'; // Ejemplo de redirección a una página de detalles
        });
    }

    if (serviceDetailModal) {
        serviceDetailModal.addEventListener('click', (event) => {
            if (event.target === serviceDetailModal) {
                console.log('Clic en overlay del modal. Ocultando modal.');
                serviceDetailModal.classList.remove('show');
            }
        });
    }

    console.log('Página de Servicios cargada correctamente.');
});
