// script/inicio_script.js - Maneja la lógica de la página de inicio

document.addEventListener('DOMContentLoaded', () => {
    const inicioBtn = document.getElementById('inicioBtn');
    const registrarseBtn = document.getElementById('registrarseBtn');
    const continuarSinRegistroLink = document.getElementById('continuarSinRegistroLink');

    if (inicioBtn) {
        inicioBtn.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Botón "INICIO" clickeado. Navegando a sesion_index.html');
            window.location.href = 'sesion_index.html'; // Navega a la página de inicio de sesión
        });
    }

    if (registrarseBtn) {
        registrarseBtn.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Botón "REGISTRARSE" clickeado. Navegando a registro_index.html');
            window.location.href = 'paginap_index.html'; // Navega a la página de registro
        });
    }

    if (continuarSinRegistroLink) {
        continuarSinRegistroLink.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Enlace "Continuar sin Registro" clickeado. Navegando a welcome_index.html');
            // Redirige a la página de bienvenida
            window.location.href = 'welcome_index.html';
        });
    }

    console.log('Página de inicio cargada correctamente.');
});
