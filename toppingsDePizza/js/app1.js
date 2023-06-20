/* METODOS BASICOS PARA SELECCIONR ELEMENTOS DEL DOM CON JAVASCRIPT */

// 1- Seleccion por ID - .getElementById("")
const contenedor = document.getElementById("contenedor");
const titulo = document.getElementById("titulo");
// console.log(typeof contenedor.innerHTML);
// console.log(titulo);

// 2- Seleccion por clases - .getElementsByClassName("")
const toppings = document.getElementsByClassName("topping");
// console.log(toppings.length);
// console.log(toppings[3]);

// 3- Seleccion por nombre de etiqueta HTML - .getElementsByTagName("")
const misToppings = document.getElementsByTagName("li");
// console.log(misToppings);

// Seleccion en base a los elementos que cumplan con un selector CSS especifico

// 4- .querySelector("") permite seleccionar el primer elemento que cumpla con el criterio de un selector CSS
const primerToppingNoMarron = document.querySelector(
  "ul li:not(.fondo-marron)"
);
// console.log(primerToppingNoMarron);

// 5- .querySelectorAll("") permite seleccionar todos los elementos que cumpla con el criterio de un selector CSS
const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja");
// console.log(toppingsNaranja[0]);
// console.log(toppingsNaranja[1]);
// console.log(toppingsNaranja.length);
