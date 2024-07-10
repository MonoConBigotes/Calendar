let activities = [];

function renderCalendar() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';

    activities.forEach((activity, index) => {
        const activityDiv = document.createElement('div');
        activityDiv.classList.add('activity');
        activityDiv.innerHTML = `
            <span>${activity}</span>
            <button onclick="removeActivity(${index})">Eliminar</button>
        `;
        activityList.appendChild(activityDiv);
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

function removeActivity(index) {
    activities.splice(index, 1);
    renderCalendar();
}

renderCalendar();
