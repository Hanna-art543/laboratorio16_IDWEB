const productos = [
    { nombre: "laptop", precio : 4000},
    { nombre: "tablet", precio: 1000}
];

const boton = document.getElementById("btnGenerar");
const contenedor = document.getElementById("Tabla");

boton.addEventListener("click", () => {
    generarTabla();
});

function generarTabla () {
    contenedor.innerHTML = "";
    const tabla = document.createElement("table");

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
        </tr>
    `;
    tabla.appendChild(thead);   

    // Crear cuerpo
    const tbody = document.createElement("tbody");

    productos.forEach(prod => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
        `;

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);

    // Agregar tabla al contenedor
    contenedor.appendChild(tabla);
}
