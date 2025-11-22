// Lista de libros
const librosJSON = `
[
    {"titulo": "Cien años de soledad", "autor": "Gabriel García Márquez"},
    {"titulo": "El Principito", "autor": "Antoine de Saint-Exupéry"},
    {"titulo": "Don Quijote", "autor": "Miguel de Cervantes"}
]
`;

const libros = JSON.parse(librosJSON);

// Seleccionar el tbody 
const tbody = document.getElementById("tablaLibros");

// Crear filas dinámicamente
libros.forEach(libro => {
    const tr = document.createElement("tr");

    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = libro.titulo;

    const tdAutor = document.createElement("td");
    tdAutor.textContent = libro.autor;

    tr.appendChild(tdTitulo);
    tr.appendChild(tdAutor);

    tbody.appendChild(tr);
});
