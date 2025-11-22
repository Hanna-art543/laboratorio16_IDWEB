// JSON con tareas
const tareasJSON = `
[
    {"titulo": "Hacer la compra", "completada": true},
    {"titulo": "Estudiar JavaScript", "completada": false},
    {"titulo": "Lavar la ropa", "completada": true},
    {"titulo": "Leer un libro", "completada": false}
]
`;

// Parsear JSON a objeto JS
const tareas = JSON.parse(tareasJSON);

// Seleccionar el ul 
const ul = document.getElementById("listaTareas");

// Crear elementos li 
tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.titulo;

    li.classList.add(tarea.completada ? "completada" : "pendiente");

    ul.appendChild(li);
});
