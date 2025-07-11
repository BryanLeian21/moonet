// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias a elementos de la UI ---
    const backButton = document.querySelector('.back-button');
    const menuButton = document.querySelector('.menu-button');
    const searchInput = document.querySelector('.content-search-bar .search-input');
    const searchButton = document.querySelector('.content-search-bar .search-button');
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // --- Event Listeners para los botones de navegación ---

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
                alert(`Buscando en ayuda: "${searchTerm}"`);
                console.log(`Buscando en ayuda: "${searchTerm}"`);
                // Aquí se implementaría la lógica de filtrado de FAQs o búsqueda en una DB
                filterFaqs(searchTerm);
            } else {
                alert('Por favor, introduce un término de búsqueda.');
                filterFaqs(''); // Mostrar todas las FAQs si la búsqueda está vacía
            }
        });
    }

    // --- Funcionalidad de los Acordeones ---
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.closest('.accordion-item'); // Obtiene el contenedor padre
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const accordionIcon = header.querySelector('.accordion-icon');

            // Alternar la clase 'active' para expandir/colapsar
            accordionItem.classList.toggle('active');

            // Ajustar la altura del contenido para la animación
            if (accordionItem.classList.contains('active')) {
                // Cuando se expande, establece max-height a la altura real del contenido
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionIcon.classList.remove('fa-plus');
                accordionIcon.classList.add('fa-minus'); // Cambia el icono a menos
            } else {
                // Cuando se colapsa, establece max-height a 0
                accordionContent.style.maxHeight = '0';
                accordionIcon.classList.remove('fa-minus');
                accordionIcon.classList.add('fa-plus'); // Cambia el icono a más
            }

            // Opcional: Colapsar otros acordeones si solo quieres uno abierto a la vez
            /*
            accordionHeaders.forEach(otherHeader => {
                const otherItem = otherHeader.closest('.accordion-item');
                if (otherItem !== accordionItem && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                    otherItem.querySelector('.accordion-icon').classList.remove('fa-minus');
                    otherItem.querySelector('.accordion-icon').classList.add('fa-plus');
                }
            });
            */
        });
    });

    // --- Lógica de filtrado de FAQs (para la barra de búsqueda) ---
    const filterFaqs = (searchTerm) => {
        const items = document.querySelectorAll('.accordion-item');
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        items.forEach(item => {
            const questionText = item.querySelector('.accordion-header span').textContent.toLowerCase();
            const answerText = item.querySelector('.accordion-content p').textContent.toLowerCase();

            if (questionText.includes(lowerCaseSearchTerm) || answerText.includes(lowerCaseSearchTerm)) {
                item.style.display = 'block'; // Muestra el acordeón
            } else {
                item.style.display = 'none'; // Oculta el acordeón
            }
        });
    };

    console.log('Página de Centro de Ayuda cargada correctamente.');
});
