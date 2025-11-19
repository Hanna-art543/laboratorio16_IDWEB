const input = document.getElementById("textoInput");
const btnAgregar = document.getElementById("botonAgregar");
const btnBorrar = document.getElementById("botonBorrar");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");

// Agregar elemento
btnAgregar.addEventListener("click", () => {
  const texto = input.value.trim();

  if (texto === "") {
    mensaje.textContent = "No puedes agregar un texto vacío.";
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);

  input.value = ""; 
  mensaje.textContent = "";
});

// Borrar último elemento
btnBorrar.addEventListener("click", () => {
  if (lista.lastChild) {
    lista.removeChild(lista.lastChild);
    mensaje.textContent = "";
  } else {
    mensaje.textContent = "La lista ya está vacía.";
  }
});