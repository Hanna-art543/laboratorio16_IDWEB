// Seleccionar imagen
const imagenGrande = document.getElementById("imagenGrande");

// Seleccionar 
const miniaturas = document.querySelectorAll(".imagen");

// Recorrer cada miniatura 
miniaturas.forEach(mini => {
    mini.addEventListener("click", () => {
        imagenGrande.src = mini.src; 
    });
});
