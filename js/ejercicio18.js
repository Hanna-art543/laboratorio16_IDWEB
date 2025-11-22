const inputNombre = document.getElementById("nombre");
const btnGuardar = document.getElementById("btnGuardar");

btnGuardar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre");
        return;
    }

    // Crear objeto
    const usuario = { nombre: nombre };

    // Convertir a JSON
    const usuarioJSON = JSON.stringify(usuario);

    // Mostrar en consola
    console.log(usuarioJSON);
    
    inputNombre.value = "";
});
