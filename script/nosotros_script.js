// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias a elementos de la UI ---
    const backButton = document.querySelector('.back-button');
    const menuButton = document.querySelector('.menu-button');
    const moreInfoHistoryBtn = document.getElementById('moreInfoHistoryBtn');

    // --- Event Listeners ---

    // Botón de Volver Atrás
    if (backButton) {
        backButton.addEventListener('click', () => {
            console.log('Botón "Volver Atrás" clickeado.');
            // Aquí puedes implementar la navegación hacia atrás
            // window.history.back(); // Vuelve a la página anterior en el historial
            alert('Volviendo a la página anterior...');
        });
    }

    // Botón de Menú
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            console.log('Botón "Menú" clickeado.');
            // Aquí se abriría un menú lateral o se redirigiría a la página principal
            alert('Abriendo el menú lateral / Navegando al menú principal...');
            // window.location.href = 'main_page.html'; // Ejemplo
        });
    }

    // Botón "Mas Info." de Historia
    if (moreInfoHistoryBtn) {
        moreInfoHistoryBtn.addEventListener('click', () => {
            console.log('Botón "Mas Info. Historia" clickeado.');
            // Aquí puedes implementar la lógica para mostrar más información
            // Por ejemplo, redirigir a una página de detalles o expandir el texto
            alert('Mostrando más información sobre la Historia...');
        });
    }

    console.log('Página "Nosotros" cargada correctamente.');
});