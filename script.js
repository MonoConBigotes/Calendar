// Array para almacenar las actividades
let activities = [];

// Función para mostrar las actividades en el calendario
function renderCalendar() {
    const calendarDiv = document.querySelector('.calendar');
    calendarDiv.innerHTML = '';

    activities.forEach((activity, index) => {
        const activityDiv = document.createElement('div');
        activityDiv.classList.add('activity');
        activityDiv.innerHTML = `
            <span>${activity}</span>
            <button onclick="removeActivity(${index})">Eliminar</button>
        `;
        calendarDiv.appendChild(activityDiv);
    });
}

// Función para agregar una actividad
function addActivity() {
    const activityInput = prompt('Ingrese la actividad:');
    if (activityInput) {
        activities.push(activityInput);
        renderCalendar();
    }
}

// Función para eliminar una actividad
function removeActivity(index) {
    activities.splice(index, 1);
    renderCalendar();
}

// Llama a renderCalendar para mostrar inicialmente las actividades
renderCalendar();
