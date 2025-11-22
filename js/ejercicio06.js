const form = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");

// Elimina spans 
function limpiarErrores(input) {
    const parent = input.parentElement;
    const spans = parent.querySelectorAll('.error-span'); 
    spans.forEach(s => s.remove());
}

// Crea un span de error debajo del input
function mostrarError(input, mensaje) {
    limpiarErrores(input);

    const span = document.createElement('span');
    span.classList.add('error-span');
    span.textContent = mensaje;

    input.parentElement.appendChild(span);
}

function validar() {
    let valido = true;

    // Validar nombre
    if (inputNombre.value.trim() === "") {
        mostrarError(inputNombre, "El nombre no puede estar vacío.");
        valido = false;
    }

    // Validar correo
    const correo = inputCorreo.value.trim();
    if (correo === "") {
        mostrarError(inputCorreo, "El correo no puede estar vacío.");
        valido = false;

    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            mostrarError(inputCorreo, "Correo no válido.");
            valido = false;
        }
    }

    return valido;
}

// Evento submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    limpiarErrores(inputNombre);
    limpiarErrores(inputCorreo);

    if (validar()) {
        alert("Formulario válido. Enviando...");
    }
});

// Borrar errores
[inputNombre, inputCorreo].forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== "") {
            limpiarErrores(input);
        }
    });
});


