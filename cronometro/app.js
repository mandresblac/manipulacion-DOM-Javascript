/* VARIABLES */
const cronometro = document.querySelector("#cronometro");
const botonInicioPausa = document.querySelector("#boton-inicio-pausa");
const botonReiniciar = document.querySelector("#boton-reiniciar");

// Otra forma de asignar valores a variables
let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = "pausado";

/* EVENTOS */
botonInicioPausa.addEventListener("click", () => {
  // Priemero verificamos el estado del cronometro
  if (estadoCronometro === "pausado") {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = `<i class="bi bi-pause-fill"></i>`;
    botonInicioPausa.classList.remove("iniciar");
    botonInicioPausa.classList.add("pausar");
    estadoCronometro = "andando";
  } else {
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
    botonInicioPausa.classList.remove("pausar");
    botonInicioPausa.classList.add("iniciar");
    estadoCronometro = "pausado";
  }
});

botonReiniciar.addEventListener("click", () => {
  // Eliminamos el intervalo de tiempo
  window.clearInterval(intervaloDeTiempo);

  // Reiniciamos a cero horas, minutos y segundos
  horas = 0;
  minutos = 0;
  segundos = 0;

  // Reemplaza el texto del DOM o reinicia
  cronometro.innerText = "00:00:00";

  // Actualizar botones
  botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
  botonInicioPausa.classList.remove("pausar");
  botonInicioPausa.classList.add("iniciar");

  // Estado del cronometro
  estadoCronometro = "pausado";
});

/* FUNCIONES */
function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadDetiempo) {
  return unidadDetiempo < 10 ? "0" + unidadDetiempo : unidadDetiempo;
}
