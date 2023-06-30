/* VARIABLES */
const input = document.querySelector("#ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTareas = document.querySelector("#lista-de-tareas");

/* EVENTOS */
boton.addEventListener("click", agregarTarea);
input.addEventListener("keydown", presionarTecla);

/* FUNCIONES */
function agregarTarea() {
  if (input.value) {
    // Crear tarea
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");

    // Texto ingresado por el usuario
    let texto = document.createElement("p");
    texto.innerText = input.value;

    // Agregamos el texto a la tarea
    tareaNueva.appendChild(texto);

    // Crear y agregar contenedor de iconos
    let iconos = document.createElement("div");
    iconos.classList.add("iconos");

    // Agregamos el contenedor de los iconos a la tarea
    tareaNueva.appendChild(iconos);

    // Iconos
    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    completar.addEventListener("click", completarTarea);

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    eliminar.addEventListener("click", eliminarTarea);

    iconos.append(completar, eliminar);

    // Agregamos la tarea nueva a la lista
    listaDeTareas.appendChild(tareaNueva);
  } else {
    alert("Por favor ingresa un tarea.");
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle("completada"); // .toggle() permite alternar una clase
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

function presionarTecla(e) {
  if (e.key === "Enter") {
    agregarTarea();
  }
}
