// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos del formulario
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn'); // El div que actúa como botón
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');

    // --- Event Listener para el botón de INICIO de sesión ---
    if (loginBtn) {
        loginBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Previene el comportamiento por defecto (si fuera un submit)

            const email = emailInput.value;
            const password = passwordInput.value;

            // Validación básica (puedes añadir más validaciones aquí)
            if (email === '' || password === '') {
                alert('Por favor, ingresa tu correo electrónico y contraseña.');
                return;
            }

            console.log('Intentando iniciar sesión con:');
            console.log('Correo:', email);
            console.log('Contraseña:', password);

            // Aquí es donde integrarías la lógica de autenticación real:
            // 1. Enviar los datos a un servidor (usando fetch() o XMLHttpRequest).
            // 2. Usar un SDK de autenticación (ej. Firebase Authentication).

            // Ejemplo de simulación de inicio de sesión exitoso/fallido
            if (email === 'test@example.com' && password === 'password123') {
                alert('¡Inicio de sesión exitoso! Redirigiendo...');
                // Redirigir al usuario a la página principal de la aplicación
                // window.location.href = 'dashboard.html';
            } else {
                alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        });
    }

    // --- Event Listener para el enlace "Olvidé mi contraseña o usuario" ---
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace navegue a #
            console.log('Enlace "Olvidé mi contraseña o usuario" clickeado.');
            alert('Redirigiendo a la página de recuperación de contraseña...');
            // Aquí puedes redirigir a una página de recuperación de contraseña
            // window.location.href = 'recuperar_contrasena.html';
        });
    }

    console.log('Página de inicio de sesión cargada correctamente.');
});