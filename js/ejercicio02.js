const parrafo = document.getElementById('miParrafo');
const boton = document.getElementById('botonCambiar');

// Evento para cambiar el texto
boton.addEventListener('click', () => {
  if (parrafo.textContent === "Texto original") {
    parrafo.textContent = "Texto cambiado";
  } else {
    parrafo.textContent = "Texto original";
  }
});

