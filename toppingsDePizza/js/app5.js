/* RECORRER EL DOM */
const listaDeToppings = document.getElementById("lista-toppings");

// Para obtener nodos padre
// .parentElement - Solo incluye los elementos HTML
console.log(listaDeToppings.parentElement);
console.log(listaDeToppings.parentElement.parentElement);

// .parentNode - Incluye textos, comentarios, elementos HTML, etc. Es mas amplio que parentElement
console.log(listaDeToppings.parentNode);

// Para obtener nodos hijos
// .children - Para obtener todos los nodos hijos
console.log(listaDeToppings.children[0]);

// .firstElementChild - Para obtener el primer elemento hijo
console.log(listaDeToppings.firstElementChild);

// .lastElementChild - Para obtener el ultimo elemento hijo
console.log(listaDeToppings.lastElementChild);

// .previousElementSibling - Para obtener el hemano anterior a un elemento
console.log(listaDeToppings.previousElementSibling);

// .nextElementSibling - Para obtener el hemano siguiente a un elemento
console.log(listaDeToppings.nextElementSibling);
