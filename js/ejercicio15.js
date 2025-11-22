// Objecto usuario
const usuario = {
    nombre: "Ana Pérez",
    correo: "ana@example.com",
    rol: "Administrador"
};

// Guardar en localStorage como JSON
localStorage.setItem("usuarioData", JSON.stringify(usuario));

// Recuperar el JSON desde localStorage
const dataGuardada = localStorage.getItem("usuarioData");

// Convertirlo 
const usuarioRecuperado = JSON.parse(dataGuardada);

// Mostrar en el DOM
const p = document.getElementById("mostrarUsuario");

p.textContent = `Nombre: ${usuarioRecuperado.nombre} 
Correo: ${usuarioRecuperado.correo} 
Rol: ${usuarioRecuperado.rol}`;
