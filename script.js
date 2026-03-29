const desplegables = document.querySelectorAll(".artist");
desplegables.forEach(desplegable => {
    desplegable.addEventListener("click", function () {
        const desplegado = desplegable.querySelector(".artist-desc");
        desplegado.classList.toggle("open");
    });
});