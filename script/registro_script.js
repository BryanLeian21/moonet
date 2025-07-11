// script.js (para register.html)

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const celularInput = document.getElementById('celular');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const registerButton = registerForm.querySelector('.register-button');
    const alreadyHaveAccountLink = document.getElementById('alreadyHaveAccountLink');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = nombreInput.value.trim();
            const apellido = apellidoInput.value.trim();
            const celular = celularInput.value.trim();
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            // Validaciones
            if (nombre === '' || apellido === '' || celular === '' || password === '' || confirmPassword === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden. Por favor, verifica.');
                return;
            }
            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres.');
                return;
            }
            if (!/^\d+$/.test(celular)) {
                alert('El número de celular solo debe contener dígitos.');
                return;
            }

            console.log('Intentando registrar usuario con:', nombre, apellido, celular);

            alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
            window.location.href = 'login.html'; // Navega a la página de inicio de sesión después del registro
        });
    }

    if (alreadyHaveAccountLink) {
        alreadyHaveAccountLink.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Enlace "Ya tengo Usuario" clickeado. Navegando a login.html');
            window.location.href = 'index.html'; // Navega a la página de inicio de sesión
        });
    }

    console.log('Página de registro cargada correctamente.');
});
