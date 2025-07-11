// script/welcome_script.js - Maneja la lógica de la página de bienvenida

document.addEventListener('DOMContentLoaded', () => {
    const userNameElement = document.getElementById('userName');

    // Lógica para obtener el nombre del usuario (ejemplo)
    const urlParams = new URLSearchParams(window.location.search);
    const userNameFromUrl = urlParams.get('name');

    if (userNameFromUrl && userNameElement) {
        userNameElement.textContent = `(${userNameFromUrl})`;
    } else if (userNameElement) {
        // Si no hay nombre en la URL, se asume un nombre por defecto para el modo "sin registro"
        userNameElement.textContent = "(Invitado)";
    }

    // Redirigir automáticamente a la página principal después de 5 a 6 segundos
    const redirectDelay = 4000; // 5500 milisegundos = 5.5 segundos (entre 5 y 6)

    setTimeout(() => {
        console.log(`Redirigiendo automáticamente a la página principal después de ${redirectDelay / 1000} segundos...`);
        window.location.href = 'paginap_index.html'; // Asegúrate de que este sea el nombre de tu archivo HTML del menú principal
    }, redirectDelay);

    console.log('Página de bienvenida cargada correctamente.');
});
