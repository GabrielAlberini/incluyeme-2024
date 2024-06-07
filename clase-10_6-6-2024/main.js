let nombre = "Adriana";
let edad = 30;
let apellido = "López de Mora";
let mascota = "Lola";
let color = "azul";

let oracion = "Hola soy " + nombre + " " + apellido + ", tengo una mascota que se llama " + mascota + " y me gusta el " + color

let parrafo = document.querySelector("p")
parrafo.textContent = oracion

parrafo.style.color = "red"
parrafo.style.fontSize = "30px"

parrafo.classList.add("texto-en-negrita")

let boton1 = document.querySelector(".b1")
let boton2 = document.querySelector(".b2")

// boton1.addEventListener("click", () => {
//   parrafo.style.color = "blue"
// })

// boton2.addEventListener("click", () => {
//   parrafo.style.textTransform = "uppercase"
// })