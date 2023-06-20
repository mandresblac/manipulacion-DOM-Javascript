/* CREAR, AGREGAR Y ELIMINAR ELEMENTOS EN EL DOM */

// Refencia al elemento del DOM donde queremos agregar el elemento que vamos a crear
const listaDeToppings = document.getElementById("lista-toppings");

// .createElement() - Para crear un elemento nuevo desde cero
const toppingNuevo = document.createElement("li");
toppingNuevo.classList.add("topping", "fondo-marron"); // Agregamos clases para que el elemento recien creado se pueda vizualizar en el DOM
toppingNuevo.innerText = "Queso Extra"; // Agregamos texto elemento recien creado

// .appendChild() - Para agregar elementos o nodos HTML al DOM, es mas usado que .append()
listaDeToppings.appendChild(toppingNuevo);

// .append() - Para agregar un elemento o un nodo, aunque se usa tambien para agregar texto.
listaDeToppings.append("Hola mundo");

// .remove() - Eliminar un elemento del DOM
// toppingNuevo.remove();
// listaDeToppings.remove();
