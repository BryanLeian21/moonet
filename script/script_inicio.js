// script_inicio.js
// script_inicio.js - Maneja la lógica de la página de inicio

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
            window.location.href = 'registro_index.html'; // Navega a la página de registro
        });
    }

    if (continuarSinRegistroLink) {
        continuarSinRegistroLink.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Enlace "Continuar sin Registro" clickeado. Navegando a paginap_index.html (modo invitado)');
            window.location.href = 'paginap_index.html'; // Navega a la página del menú principal como invitado
        });
    }

    console.log('Página de inicio cargada correctamente.');
});
