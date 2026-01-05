// Selección de elementos
const imagenPrincipal = document.querySelector("#imagen-principal");
const contenedorPrincipal = document.querySelector("#imagen-principal-container");
const thumbnails = document.querySelectorAll(".thumbnail");

// Iterar sobre cada thumbnail
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    
    // Obtener datos de la imagen clickeada
    const nuevaSrc = thumbnail.src;
    const descripcion = thumbnail.alt;

    // Cambiar imagen principal
    imagenPrincipal.src = nuevaSrc;

    // Eliminar pie de foto anterior si existe
    const pieExistente = document.querySelector("#pie-de-foto");
    if (pieExistente) {
      pieExistente.remove();
    }

    // Crear nuevo pie de foto
    const pieDeFoto = document.createElement("p");
    pieDeFoto.id = "pie-de-foto";
    pieDeFoto.textContent = descripcion;

    // Agregar pie de foto al contenedor
    contenedorPrincipal.appendChild(pieDeFoto);
  });
});