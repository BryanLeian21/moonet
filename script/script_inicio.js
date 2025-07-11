// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los botones y el enlace por sus IDs
    const inicioBtn = document.getElementById('inicioBtn');
    const registrarseBtn = document.getElementById('registrarseBtn');
    const continuarSinRegistroLink = document.getElementById('continuarSinRegistroLink');

    // --- Event Listeners para los botones ---

    if (inicioBtn) {
        inicioBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Previene el comportamiento por defecto del botón
            console.log('Botón "INICIO" clickeado.');
            // Aquí puedes añadir la lógica para navegar a la página de inicio
            // window.location.href = 'inicio.html'; // Ejemplo de redirección
            alert('Navegando a la página de Inicio...'); // Para la demo
        });
    }

    if (registrarseBtn) {
        registrarseBtn.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Botón "REGISTRARSE" clickeado.');
            // Aquí puedes añadir la lógica para navegar a la página de registro
            // window.location.href = 'registro.html'; // Ejemplo de redirección
            alert('Navegando a la página de Registro...'); // Para la demo
        });
    }

    if (continuarSinRegistroLink) {
        continuarSinRegistroLink.addEventListener('click', (event) => {
            event.preventDefault(); // Previene el comportamiento por defecto del enlace
            console.log('Enlace "Continuar sin Registro" clickeado.');
            // Aquí puedes añadir la lógica para el modo invitado
            // window.location.href = 'dashboard-guest.html'; // Ejemplo de redirección
            alert('Continuando en modo invitado...'); // Para la demo
        });
    }

    // --- Lógica adicional (ej. animación de círculos, si se desea) ---
    // Puedes añadir una pequeña animación a los círculos si quieres que se muevan.
    // Esto sería más avanzado y requeriría CSS keyframes o una librería JS como GreenSock.
    // Por ahora, los dejaremos estáticos como en el wireframe.

    console.log('Página de inicio cargada correctamente.');
});