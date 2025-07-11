// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos del formulario de registro
    const registerForm = document.getElementById('registerForm');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const celularInput = document.getElementById('celular');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const registerButton = registerForm.querySelector('.register-button'); // El botón de submit
    const alreadyHaveAccountLink = document.getElementById('alreadyHaveAccountLink');

    // --- Event Listener para el envío del formulario de registro ---
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

            const nombre = nombreInput.value.trim();
            const apellido = apellidoInput.value.trim();
            const celular = celularInput.value.trim();
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            // --- Validaciones ---
            if (nombre === '' || apellido === '' || celular === '' || password === '' || confirmPassword === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden. Por favor, verifica.');
                return;
            }

            // Validación de longitud mínima de contraseña (ejemplo)
            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres.');
                return;
            }

            // Validación básica de celular (ejemplo: solo números)
            if (!/^\d+$/.test(celular)) {
                alert('El número de celular solo debe contener dígitos.');
                return;
            }

            console.log('Intentando registrar usuario con:');
            console.log('Nombre:', nombre);
            console.log('Apellido:', apellido);
            console.log('Celular:', celular);
            console.log('Contraseña:', password);

            // Aquí integrarías la lógica de registro real:
            // 1. Enviar los datos a un servidor (usando fetch() o XMLHttpRequest).
            // 2. Usar un SDK de autenticación (ej. Firebase Authentication para crear usuario).

            // Simulación de registro exitoso
            alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
            // Redirigir al usuario a la página de inicio de sesión
            // window.location.href = 'login.html';
        });
    }

    // --- Event Listener para el enlace "Ya tengo Usuario" ---
    if (alreadyHaveAccountLink) {
        alreadyHaveAccountLink.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace navegue a #
            console.log('Enlace "Ya tengo Usuario" clickeado.');
            alert('Redirigiendo a la página de inicio de sesión...');
            // Aquí puedes redirigir a la página de inicio de sesión
            // window.location.href = 'login.html';
        });
    }

    console.log('Página de registro cargada correctamente.');
});