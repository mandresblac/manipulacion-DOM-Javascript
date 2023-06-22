/* VARIABLES */
let botonElem = document.querySelector("#boton-cambiar-cita");
let citaElem = document.querySelector("#cita");
let autorElem = document.querySelector("#autor");

// Funcion que genera un entero aleatorio
function generarEnteroAleatorio(min, max) {
  // Operación para hallar número aleatorio, pero no incluye "max" en los valores posibles.
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElem.textContent = `"${citas[indiceAleatorio].texto}"`;
  autorElem.textContent = citas[indiceAleatorio].autor;
}

cambiarCita();

/* EVENTOS */
botonElem.addEventListener("click", cambiarCita);
