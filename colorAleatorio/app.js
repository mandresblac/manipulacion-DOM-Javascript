/* Seleccionar los elementos del DOM */
const boton = document.querySelector("#boton-color");
const color = document.getElementById("color");

/* Funciones */
function generarColorHexAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  // Ciclo con 6 iteraciones que genera los 6 digitos del codigo de color Hexadecimal
  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16); // Numero aleatorio entre 1 y 16
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex; // retorna numero hexadecimal de 6 digitos
}

/* Eventos */
boton.addEventListener("click", () => {
  let colorAleatorio = generarColorHexAleatorio();
  // Actualizar el texto
  color.textContent = colorAleatorio;
  // Actualizar el color de fondo
  document.body.style.backgroundColor = colorAleatorio;
});
