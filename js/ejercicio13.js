// JSON
const cadenaJSON = '{"nombre":"Carlos", "edad":25, "ciudad":"Arequipa"}';

// Convertir a objeto
const persona = JSON.parse(cadenaJSON);

// Mostrar un valor
document.getElementById("resultado").textContent =
    "Nombre: " + persona.nombre;


    