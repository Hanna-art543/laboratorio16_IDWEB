const btnSumar = document.getElementById("botonSumar");
const btnRestar = document.getElementById("botonRestar");
const contadorSpan = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");

let contador = 0;

// Botón sumar
btnSumar.addEventListener("click", () => {
  contador++;
  contadorSpan.textContent = contador;
  mensaje.textContent = ""; 
});

// Botón restar
btnRestar.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
    contadorSpan.textContent = contador;
    mensaje.textContent = "";
  } else {
    mensaje.textContent = "No puede bajar de cero.";
  }
});