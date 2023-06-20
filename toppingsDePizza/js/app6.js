/* EVENTOS DEL DOM */

/* CONCEPTOS IMPORTANTES
- Elemento target(blanco): Es el que recibe la acción que desencadena el evento.
- Trigger (disparador): Es el desencadenante o la acción que desencadena el evento.
- Event Handler: Es la función que va a manejar lo que ocurre cuando se desencadene el evento.
- Event listener: Es la conexión que hay entre el evento, el elemento y la función que lo va a manejar.
 */

/* EVENTOS EN EL HTML */
// Atibuto onclick dentro de las etiquetas del documento HTML,
//onclick="mostrarClic('Champiñones')"
function mostrarClic(topping) {
  console.log(topping);
}

/* Metodo addEventListener() */
const toppings = document.querySelectorAll(".topping"); // Devuekve una coleccion HTML

function mostraOtroClic(e) {
  console.log(e.target.innerText);
}

// Iteramos con un ciclo "for of" sobre todos los elementos de la colección HTML
for (const topping of toppings) {
  topping.addEventListener("click", mostraOtroClic);
}
