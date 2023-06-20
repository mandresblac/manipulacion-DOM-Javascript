/* ASIGNAR ESTILOS CON JAVASCRIPT */

const primerTopping = document.querySelector(".topping");

// Estilos en linea con Javascript - Propiedad .style
console.log(primerTopping.style); // Pemite ver todas las propiedades CSS que se pueden aplicar al elemento
primerTopping.style.backgroundColor = "blue";
primerTopping.style.color = "#6dff00";
primerTopping.style.textTransform = "uppercase";

/* ACCEDER AL TEXTO DE UN ELEMETO DESDE JAVASCRIPT */
const listaDeToppings = document.getElementById("lista-toppings");
console.log(listaDeToppings);

//.innerText - Retorna texto sin los espacios de inicio que hay en el documento HTML
console.log(listaDeToppings.innerText);

//.textContent - Retorna texto con los espacios de inicio que hay en el documento HTML
console.log(listaDeToppings.textContent);

//.innerHTML - Retorna la estructura HTML interna del elemento como un string
console.log(listaDeToppings.innerHTML);

/* MODIFICAR EL TEXTO DE UN ELEMETO DESDE JAVASCRIPT */
const titulo = document.getElementById("titulo");
// Modificamos el texto del elemento en el DOM
// titulo.innerText = "Mis toppings favoritos";

/* MODIFICAR ATRIBUTOS DE UN ELEMENTO */
const enlaces = document.getElementsByTagName("a");

// .getAttribute("") - Para agregar un atributo a un elemento
console.log(enlaces[0].getAttribute("href")); // .getAttribute() para verificar el valor de un atributo, en este caso el atributo "href"

// .removeAttribute() - Para eliminar un atributo
// console.log(enlaces[0].removeAttribute("href"));

// .setAttribute("") - Para actualizar atributos de un elemento
// Argumento 1 - Atributo que deseo actualizar o modificar
// Argumento 2 - Valor que le deseo asignar
console.log(enlaces[0].setAttribute("href", "https://www.freecodecamp.org"));
