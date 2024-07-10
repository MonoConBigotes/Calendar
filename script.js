let activities = [];

function renderCalendar() {
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';

    daysOfWeek.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerHTML = `<h3>${day}</h3>`;
        
        // Mostrar actividades para este día
        activities.forEach(activity => {
            const activityDiv = document.createElement('div');
            activityDiv.classList.add('activity');
            activityDiv.textContent = activity;
            dayDiv.appendChild(activityDiv);
        });

        calendarGrid.appendChild(dayDiv);
    });
}

function addActivity() {
    const activityInput = document.getElementById('activityInput').value;
    if (activityInput.trim() !== '') {
        activities.push(activityInput);
        renderCalendar();
        document.getElementById('activityInput').value = '';
    } else {
        alert('Por favor ingrese una actividad válida.');
    }
}

renderCalendar();
