/* AGREGAR Y MODIFICAR CLASES */

const primerTopping = document.querySelector(".topping");

// classList - Muestra la lista de todas las clases que tiene el elemento
console.log(primerTopping.classList);

// .add() - Para agregar una clase a un elemento de forma dinamica
primerTopping.classList.add("texto-verde");

// .contains() - Para verificar si un elemento posee una clase o no, retorna "true" o "false"
console.log(primerTopping.classList.contains("fondo-marron"));

// .remove() - Para eliminar una clase a un elemento de forma dinamica
primerTopping.classList.remove("topping");
