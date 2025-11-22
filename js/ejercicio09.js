const lista = document.getElementById("lista");

lista.addEventListener("click", () => {
    if(event.target.tagName === "LI") {
        event.target.remove();
    }
});

