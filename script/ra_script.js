// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias a elementos de la UI ---
    const cameraFeed = document.getElementById('cameraFeed');
    const scanButton = document.getElementById('scanButton');
    const backButton = document.getElementById('backButton');
    const workingMessage = document.getElementById('workingMessage');

    // --- Función para solicitar acceso a la cámara ---
    const requestCameraAccess = async () => {
        try {
            // Solicitar acceso a la cámara de video
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraFeed.srcObject = stream; // Asignar el stream de la cámara al elemento de video
            console.log('Acceso a la cámara concedido.');
        } catch (error) {
            console.error('Error al acceder a la cámara:', error);
            // Mostrar un mensaje al usuario si el acceso es denegado o hay un error
            alert('No se pudo acceder a la cámara. Por favor, asegúrate de haber concedido los permisos.');
            // Puedes mostrar una imagen de fallback o un mensaje más amigable aquí
        }
    };

    // Solicitar acceso a la cámara cuando la página se carga
    requestCameraAccess();

    // --- Event Listeners para los botones ---

    // Botón "Escanear"
    if (scanButton) {
        scanButton.addEventListener('click', () => {
            console.log('Botón "Escanear" clickeado.');
            // Mostrar el mensaje "Estamos trabajando en ello"
            workingMessage.classList.add('show');

            // Opcional: Ocultar el mensaje después de unos segundos
            setTimeout(() => {
                workingMessage.classList.remove('show');
                console.log('Mensaje oculto.');
            }, 3000); // El mensaje se ocultará después de 3 segundos
        });
    }

    // Botón "Atras"
    if (backButton) {
        backButton.addEventListener('click', () => {
            console.log('Botón "Atras" clickeado.');
            // Aquí puedes implementar la navegación hacia atrás
            window.history.back(); // Vuelve a la página anterior en el historial
        });
    }

    console.log('Página de prototipo AR cargada correctamente.');
});
