/* VARIABLES */
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Valores iniciales
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar el texto de los parrafos.
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

/* FUNCIONES */
function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  // Actualizamos el color de fondo de body
  document.body.style.backgroundColor = colorRGB;
}

/* EVENTOS */
// Para actualizar Red (Rojo)
inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.textContent = rojo;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Green (Verde)
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul)
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});
