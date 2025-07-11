// script.js

document.addEventListener('DOMContentLoaded', () => {
    const userNameElement = document.getElementById('userName');

    // --- Lógica para obtener el nombre del usuario (ejemplo) ---
    // En una aplicación real, el nombre del usuario podría venir de:
    // 1. Una variable de sesión (si usas un backend).
    // 2. Un parámetro en la URL (ej. welcome.html?name=Sofía).
    // 3. Almacenamiento local (localStorage).

    // Ejemplo 1: Obtener nombre de un parámetro de URL
    const urlParams = new URLSearchParams(window.location.search);
    const userNameFromUrl = urlParams.get('name'); // Si la URL es welcome.html?name=Sofía

    if (userNameFromUrl && userNameElement) {
        userNameElement.textContent = `(${userNameFromUrl})`;
    } else if (userNameElement) {
        // Si no hay nombre en la URL, se mantiene el valor por defecto del HTML "(Sofía)"
        // o se podría poner un valor genérico como "(Invitado)"
        // userNameElement.textContent = "(Invitado)";
    }

    // Ejemplo 2: Si el nombre viniera de localStorage (después de un login)
    // const storedUserName = localStorage.getItem('loggedInUserName');
    // if (storedUserName && userNameElement) {
    //     userNameElement.textContent = `(${storedUserName})`;
    // }


    console.log('Página de bienvenida cargada correctamente.');
});