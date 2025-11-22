const form = document.querySelector("#form");
const tbody = document.querySelector("#tbody");

let modoEdicion = null;  // Guardará la fila que se está editando

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const edad = document.querySelector("#edad").value.trim();

    if (nombre === "" || edad === "") return;

    
    if (modoEdicion) {
        modoEdicion.querySelector(".td-nombre").textContent = nombre;
        modoEdicion.querySelector(".td-edad").textContent = edad;
        modoEdicion = null;
        form.reset();
        return;
    }

    // Fila nueva
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td class="td-nombre">${nombre}</td>
        <td class="td-edad">${edad}</td>
        <td>
            <button class="btn-editar" data-accion="editar">Editar</button>
            <button class="btn-eliminar" data-accion="eliminar">Eliminar</button>
        </td>
    `;

    tbody.appendChild(tr);
    form.reset();
});


// Eventos para Editar y Eliminar
tbody.addEventListener("click", (e) => {
    const accion = e.target.dataset.accion;
    const fila = e.target.closest("tr");

    if (!accion) return;

    // Eliminar
    if (accion === "eliminar") {
        fila.remove();
    }

    // Editar
    if (accion === "editar") {
        const nombre = fila.querySelector(".td-nombre").textContent;
        const edad = fila.querySelector(".td-edad").textContent;

        document.querySelector("#nombre").value = nombre;
        document.querySelector("#edad").value = edad;

        modoEdicion = fila; // marcamos la fila como "en edición"
    }
});
