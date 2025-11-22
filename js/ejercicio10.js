const cuadro = document.getElementById("cuadro");
const btnMover = document.getElementById("btnMover");
const btnReset = document.getElementById("btnResetear");

btnMover.addEventListener("click", () => {
    cuadro.classList.add("mover");
});

btnReset.addEventListener("click", () => {
    cuadro.classList.remove("mover");
});

