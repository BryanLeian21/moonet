// script.js (para welcome.html)

document.addEventListener('DOMContentLoaded', () => {
    const userNameElement = document.getElementById('userName');

    // Lógica para obtener el nombre del usuario (ejemplo)
    const urlParams = new URLSearchParams(window.location.search);
    const userNameFromUrl = urlParams.get('name');

    if (userNameFromUrl && userNameElement) {
        userNameElement.textContent = `(${userNameFromUrl})`;
    }

    // Opcional: Redirigir automáticamente a la página principal después de un tiempo
    setTimeout(() => {
        console.log('Redirigiendo automáticamente a la página principal...');
        window.location.href = 'main_page.html';
    }, 3000); // Redirige después de 3 segundos

    console.log('Página de bienvenida cargada correctamente.');
});
