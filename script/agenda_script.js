// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias a elementos de la UI ---
    const backButton = document.querySelector('.back-button');
    const menuButton = document.querySelector('.menu-button');
    const agendarCitaBtn = document.getElementById('agendarCitaBtn');
    const monthNameSpan = document.querySelector('.month-name');
    const calendarGrid = document.querySelector('.calendar-grid');

    // --- Referencias a elementos del Modal ---
    const appointmentModal = document.getElementById('appointmentModal');
    const modalFechaInput = document.getElementById('modalFecha');
    const modalHoraInput = document.getElementById('modalHora');
    const modalServicioInput = document.getElementById('modalServicio');
    const modalBackBtn = document.getElementById('modalBackBtn');
    const modalConfirmBtn = document.getElementById('modalConfirmBtn');

    // --- Funcionalidad del Calendario ---
    const today = new Date();
    let currentMonth = today.getMonth(); // 0-indexed (0 para Enero)
    let currentYear = today.getFullYear();

    // Función para renderizar el calendario
    const renderCalendar = (month, year) => {
        calendarGrid.innerHTML = ''; // Limpiar la cuadrícula existente

        // Añadir los nombres de los días de la semana (si no están ya en el HTML)
        const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        dayNames.forEach(name => {
            const dayNameDiv = document.createElement('div');
            dayNameDiv.classList.add('day-name');
            dayNameDiv.textContent = name;
            calendarGrid.appendChild(dayNameDiv);
        });

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Último día del mes

        // Calcular el día de la semana del primer día del mes (0=Domingo, 1=Lunes, etc.)
        // Ajustamos para que Lunes sea el primer día de la semana (0)
        let firstDayOfWeek = firstDayOfMonth.getDay();
        if (firstDayOfWeek === 0) firstDayOfWeek = 6; // Si es domingo (0), hacerlo 6 (para Lunes=0)
        else firstDayOfWeek--; // Si es Lunes (1), hacerlo 0, etc.

        // Rellenar celdas vacías al principio del mes
        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('day-cell', 'empty');
            calendarGrid.appendChild(emptyCell);
        }

        // Rellenar los días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('day-cell');
            dayCell.textContent = day;
            // Formatear la fecha para el dataset (ej. "2025-07-04")
            const formattedMonth = (month + 1).toString().padStart(2, '0');
            const formattedDay = day.toString().padStart(2, '0');
            dayCell.dataset.fullDate = `${year}-${formattedMonth}-${formattedDay}`;

            // Resaltar el día actual (si es el mes y año actual)
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayCell.classList.add('selected');
            }

            // Añadir evento de clic a cada día
            dayCell.addEventListener('click', () => {
                if (dayCell.classList.contains('empty')) return; // No hacer nada si es una celda vacía

                // Remover la clase 'selected' de cualquier día previamente seleccionado
                const currentSelected = document.querySelector('.day-cell.selected');
                if (currentSelected) {
                    currentSelected.classList.remove('selected');
                }
                // Añadir la clase 'selected' al día clickeado
                dayCell.classList.add('selected');

                const selectedDate = dayCell.dataset.fullDate;
                console.log(`Día seleccionado: ${selectedDate}`);

                // Mostrar el modal y rellenar la fecha
                modalFechaInput.value = selectedDate; // Rellena el input de fecha del modal
                appointmentModal.classList.add('show'); // Muestra el modal
            });

            calendarGrid.appendChild(dayCell);
        }

        // Actualizar el nombre del mes en el header del calendario
        const monthNames = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        monthNameSpan.textContent = monthNames[month];
    };

    // Renderizar el calendario inicial al cargar la página
    renderCalendar(currentMonth, currentYear);


    // --- Event Listeners para los botones ---

    // Botón de Volver Atrás
    if (backButton) {
        backButton.addEventListener('click', () => {
            console.log('Botón "Volver Atrás" clickeado.');
            window.history.back(); // Vuelve a la página anterior en el historial
        });
    }

    // Botón de Menú
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            console.log('Botón "Menú" clickeado.');
            alert('Abriendo el menú lateral / Navegando al menú principal...');
            // window.location.href = 'main_page.html'; // Ejemplo
        });
    }

    // Botón "Agendar Cita" flotante (para abrir el modal directamente si se desea)
    if (agendarCitaBtn) {
        agendarCitaBtn.addEventListener('click', () => {
            console.log('Botón "Agendar Cita" clickeado.');
            // Puedes decidir si este botón abre el modal o va a otra página
            // Para esta demo, lo haremos que abra el modal sin fecha pre-seleccionada
            modalFechaInput.value = ''; // Limpiar fecha si no viene del calendario
            modalHoraInput.value = ''; // Limpiar hora
            modalServicioInput.value = ''; // Limpiar servicio
            appointmentModal.classList.add('show');
        });
    }

    // --- Event Listeners del Modal ---

    // Botón "Atrás" del modal
    if (modalBackBtn) {
        modalBackBtn.addEventListener('click', () => {
            console.log('Botón "Atrás" del modal clickeado.');
            appointmentModal.classList.remove('show'); // Oculta el modal
            // Opcional: Limpiar los campos del modal al cerrar
            modalFechaInput.value = '';
            modalHoraInput.value = '';
            modalServicioInput.value = '';
        });
    }

    // Botón "Confirmar" del modal
    if (modalConfirmBtn) {
        modalConfirmBtn.addEventListener('click', () => {
            const fecha = modalFechaInput.value;
            const hora = modalHoraInput.value;
            const servicio = modalServicioInput.value;

            if (fecha === '' || hora === '' || servicio === '') {
                alert('Por favor, completa todos los campos de la cita.');
                return;
            }

            console.log('Cita confirmada:');
            console.log('Fecha:', fecha);
            console.log('Hora:', hora);
            console.log('Servicio:', servicio);

            alert(`Cita agendada para el ${fecha} a las ${hora} para el servicio de ${servicio}.`);
            appointmentModal.classList.remove('show'); // Oculta el modal

            // Aquí se enviaría la información de la cita a un backend o se guardaría localmente
            // Por ejemplo: saveAppointment({ fecha, hora, servicio });
            // Después de guardar, podrías actualizar la sección de "Citas programadas"
        });
    }

    // Opcional: Cerrar modal haciendo clic fuera del contenido
    appointmentModal.addEventListener('click', (event) => {
        if (event.target === appointmentModal) { // Solo si se hace clic en el overlay, no en el contenido
            appointmentModal.classList.remove('show');
            // Opcional: Limpiar los campos del modal al cerrar
            modalFechaInput.value = '';
            modalHoraInput.value = '';
            modalServicioInput.value = '';
        }
    });

    console.log('Página de Agenda cargada correctamente.');
});
