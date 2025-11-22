const form = document.getElementById("formPerfil");
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const paisInput = document.getElementById("pais");
const perfilDiv = document.getElementById("perfil");

// Función para mostrar perfil 
function mostrarPerfil(usuario) {
    perfilDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
        <p><strong>Edad:</strong> ${usuario.edad}</p>
        <p><strong>País:</strong> ${usuario.pais}</p>
    `;
}

// Revisar si hay perfil guardado 
const perfilGuardado = localStorage.getItem("perfilUsuario");
if (perfilGuardado) {
    const usuario = JSON.parse(perfilGuardado);
    mostrarPerfil(usuario);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = {
        nombre: nombreInput.value.trim(),
        edad: edadInput.value.trim(),
        pais: paisInput.value.trim()
    };

    // Guardar en localStorage 
    localStorage.setItem("perfilUsuario", JSON.stringify(usuario));

    // Mostrar en pantalla
    mostrarPerfil(usuario);

    // Limpiar formulario
    form.reset();
});
