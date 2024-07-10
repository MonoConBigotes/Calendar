const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const fechaActual = new Date();
const semanaActual = fechaActual.getDate() - fechaActual.getDay() + 1; // Ajusta la semana actual
const diasContenedor = document.getElementById("dias-contenedor");
const nuevaTareaInput = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("btnAgregar");

mostrarCalendario(semanaActual);

function mostrarCalendario(numeroSemana) {
    const fechaInicio = new Date();
    fechaInicio.setDate(numeroSemana - fechaInicio.getDay()
