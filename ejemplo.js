function mostrarOcultar(idElemento) {
   let elemento = document.getElementById(idElemento);
   if (elemento.style.display == "none") {
    elemento.style.display = "block"
   } else {
    elemento.style.display = "none";
   }
}