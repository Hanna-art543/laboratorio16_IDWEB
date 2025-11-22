// Arreglo de objetos
const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
    { nombre: "Teclado", precio: 150 }
];

// Convertir a JSON
const jsonProductos = JSON.stringify(productos);

// Volver a objeto
const productosParseados = JSON.parse(jsonProductos);

// Mostrar nombres en un <ul>
const ul = document.getElementById("listaProductos");

productosParseados.forEach(prod => {
    const li = document.createElement("li");
    li.textContent = prod.nombre;
    ul.appendChild(li);
});
