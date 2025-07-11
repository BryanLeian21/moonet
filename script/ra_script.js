// script.js (para ar_prototype.html)

document.addEventListener('DOMContentLoaded', () => {
    const cameraFeed = document.getElementById('cameraFeed');
    const scanButton = document.getElementById('scanButton');
    const backButton = document.getElementById('backButton');
    const workingMessage = document.getElementById('workingMessage');

    const requestCameraAccess = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraFeed.srcObject = stream;
            console.log('Acceso a la cámara concedido.');
        } catch (error) {
            console.error('Error al acceder a la cámara:', error);
            alert('No se pudo acceder a la cámara. Por favor, asegúrate de haber concedido los permisos.');
        }
    };

    // Solicitar acceso a la cámara cuando la página se carga
    requestCameraAccess();

    // Botón "Escanear"
    if (scanButton) {
        scanButton.addEventListener('click', () => {
            console.log('Botón "Escanear" clickeado. Mostrando mensaje de trabajo.');
            workingMessage.classList.add('show');

            setTimeout(() => {
                workingMessage.classList.remove('show');
                console.log('Mensaje oculto.');
            }, 3000); // El mensaje se ocultará después de 3 segundos
        });
    }

    // Botón "Atras"
    if (backButton) {
        backButton.addEventListener('click', () => {
            console.log('Botón "Atras" clickeado. Volviendo a services_page.html');
            // Detener el stream de la cámara antes de salir de la página
            if (cameraFeed.srcObject) {
                const tracks = cameraFeed.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
            window.location.href = 'services_page.html'; // Vuelve a la página de servicios
        });
    }

    console.log('Página de prototipo AR cargada correctamente.');
});
