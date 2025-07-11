// script.js (para about_us.html)

document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back-button');
    const menuButton = document.querySelector('.menu-button');
    const moreInfoHistoryBtn = document.getElementById('moreInfoHistoryBtn');

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

    // Botón "Mas Info." de Historia
    if (moreInfoHistoryBtn) {
        moreInfoHistoryBtn.addEventListener('click', () => {
            console.log('Botón "Mas Info. Historia" clickeado.');
            alert('Mostrando más información sobre la Historia (no implementada aún).');
            // window.location.href = 'history_detail.html'; // Ejemplo de redirección a una página de detalles
        });
    }

    console.log('Página "Nosotros" cargada correctamente.');
});
