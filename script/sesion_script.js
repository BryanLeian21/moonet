// script.js (para login.html)

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');

    if (loginBtn) {
        loginBtn.addEventListener('click', (event) => {
            event.preventDefault();

            const email = emailInput.value;
            const password = passwordInput.value;

            if (email === '' || password === '') {
                alert('Por favor, ingresa tu correo electrónico y contraseña.');
                return;
            }

            console.log('Intentando iniciar sesión con:', email);

            // --- Lógica de autenticación simulada ---
            if (email === 'bryansislema@hotmail.com' && password === 'yandex6545') {
                alert('¡Inicio de sesión exitoso! Redirigiendo a la página de bienvenida.');
                window.location.href = 'paginap_index.html'; // Navega a la página de bienvenida
            } else {
                alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        });
    }

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Enlace "Olvidé mi contraseña o usuario" clickeado.');
            alert('Redirigiendo a la página de recuperación de contraseña (no implementada aún).');
            // window.location.href = 'forgot_password.html'; // Ejemplo de redirección a una página de recuperación
        });
    }

    console.log('Página de inicio de sesión cargada correctamente.');
});
