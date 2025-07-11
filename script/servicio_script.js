// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias a elementos de la UI ---
    const backButton = document.querySelector('.back-button');
    const menuButton = document.querySelector('.menu-button');
    const searchInput = document.querySelector('.content-search-bar .search-input');
    const searchButton = document.querySelector('.content-search-bar .search-button');
    const serviceNavButtons = document.querySelectorAll('.service-nav-buttons .nav-button');
    const manicuraCarouselTrack = document.getElementById('manicuraCarouselTrack');
    const serviceCards = document.querySelectorAll('.service-card'); // Todas las tarjetas de servicio

    // --- Referencias a elementos del Modal de Servicio ---
    const serviceDetailModal = document.getElementById('serviceDetailModal');
    const modalServiceName = document.getElementById('modalServiceName');
    const modalServiceImage = document.getElementById('modalServiceImage');
    const modalServiceDescription = document.getElementById('modalServiceDescription');
    const modalServicePrice = document.getElementById('modalServicePrice');
    const modalServicePromoText = document.getElementById('modalServicePromoText');
    const modalBackServiceBtn = document.getElementById('modalBackServiceBtn');
    const modalMoreInfoServiceBtn = document.getElementById('modalMoreInfoServiceBtn');


    // --- Event Listeners para los botones de navegación del header ---

    // Botón de Volver Atrás
    if (backButton) {
        backButton.addEventListener('click', () => {
            console.log('Botón "Volver Atrás" clickeado.');
            window.history.back(); // Vuelve a la página anterior en el historial
        });
    }

    // Botón de Menú
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            console.log('Botón "Menú" clickeado.');
            alert('Abriendo el menú lateral / Navegando al menú principal...');
            // window.location.href = 'main_page.html'; // Ejemplo
        });
    }

    // --- Funcionalidad de la Barra de Búsqueda ---
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Buscando servicios: "${searchTerm}"`);
                console.log(`Buscando servicios: "${searchTerm}"`);
                // Aquí se implementaría la lógica de filtrado de servicios
                filterServices(searchTerm);
            } else {
                alert('Por favor, introduce un término de búsqueda.');
                filterServices(''); // Mostrar todos los servicios si la búsqueda está vacía
            }
        });
    }

    // --- Funcionalidad de los Botones de Navegación de Servicios (Catálogo/AR) ---
    serviceNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover la clase 'active' de todos los botones
            serviceNavButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir la clase 'active' al botón clickeado
            button.classList.add('active');

            const section = button.textContent;
            alert(`Navegando a la sección: "${section}"`);
            console.log(`Sección de servicios seleccionada: "${section}"`);

            // Aquí puedes implementar la lógica para mostrar/ocultar diferentes secciones
            // o cargar contenido diferente basado en la sección seleccionada (Catálogo/AR)
            if (section === 'AR') {
                // Lógica para la vista de Realidad Aumentada
                console.log('Cargando vista de Realidad Aumentada...');
                // Por ejemplo, redirigir a una página de RA o activar una vista AR en la misma página
            } else {
                // Lógica para la vista de Catálogo (por defecto)
                console.log('Cargando vista de Catálogo...');
            }
        });
    });

    // --- Funcionalidad de los Botones "+1" en las tarjetas de servicio ---
    serviceCards.forEach(card => {
        const addButton = card.querySelector('.add-to-cart-button');
        if (addButton) {
            addButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Evita que el clic en el botón active también el clic de la tarjeta
                const serviceName = card.querySelector('.service-name').textContent;
                alert(`¡"${serviceName}" añadido al carrito!`);
                console.log(`Servicio añadido: "${serviceName}"`);
                // Aquí se implementaría la lógica para añadir al carrito/seleccionar servicio
            });
        }

        // --- Event Listener para abrir el Modal al hacer clic en la tarjeta de servicio ---
        card.addEventListener('click', () => {
            const serviceName = card.dataset.serviceName;
            const serviceDescription = card.dataset.serviceDescription;
            const serviceImageSrc = card.querySelector('.service-image').src;
            const servicePrice = card.dataset.servicePrice;
            const servicePromoText = card.dataset.servicePromoText;

            // Rellenar el contenido del modal
            modalServiceName.textContent = serviceName;
            modalServiceImage.src = serviceImageSrc;
            modalServiceImage.alt = serviceName;
            modalServiceDescription.textContent = serviceDescription;
            modalServicePrice.textContent = `$${parseFloat(servicePrice).toFixed(2).replace('.', ',')}`; // Formato de moneda
            modalServicePromoText.textContent = servicePromoText;

            // Mostrar el modal
            serviceDetailModal.classList.add('show');
            console.log(`Abriendo modal para: ${serviceName}`);
        });
    });

    // --- Lógica de filtrado de Servicios (para la barra de búsqueda) ---
    const filterServices = (searchTerm) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        serviceCards.forEach(card => {
            const serviceName = card.querySelector('.service-name').textContent.toLowerCase();
            const serviceDescription = card.querySelector('.service-description').textContent.toLowerCase();

            if (serviceName.includes(lowerCaseSearchTerm) || serviceDescription.includes(lowerCaseSearchTerm)) {
                card.style.display = 'block'; // Muestra la tarjeta
            } else {
                card.style.display = 'none'; // Oculta la tarjeta
            }
        });
    };

    // --- Event Listeners del Modal de Servicio ---

    // Botón "Atrás" del modal
    if (modalBackServiceBtn) {
        modalBackServiceBtn.addEventListener('click', () => {
            console.log('Botón "Atrás" del modal clickeado.');
            serviceDetailModal.classList.remove('show'); // Oculta el modal
        });
    }

    // Botón "Mas Info." del modal
    if (modalMoreInfoServiceBtn) {
        modalMoreInfoServiceBtn.addEventListener('click', () => {
            const serviceName = modalServiceName.textContent;
            console.log(`Botón "Mas Info." del modal clickeado para: ${serviceName}`);
            alert(`Redirigiendo a la página de detalles para "${serviceName}"...`);
            // Aquí puedes redirigir a una página de detalles más completa del servicio
            // window.location.href = `service_detail.html?service=${encodeURIComponent(serviceName)}`;
        });
    }

    // Cerrar modal haciendo clic fuera del contenido
    if (serviceDetailModal) {
        serviceDetailModal.addEventListener('click', (event) => {
            if (event.target === serviceDetailModal) { // Solo si se hace clic en el overlay, no en el contenido
                serviceDetailModal.classList.remove('show');
            }
        });
    }

    console.log('Página de Servicios cargada correctamente.');
});
