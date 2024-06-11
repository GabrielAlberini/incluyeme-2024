// let titulo = document.querySelector("h1")

// let frase = "Hola a todos"

// titulo.textContent = frase

// Estructura de control
// if -> condición

// 1 -> palabra reservada
// 2 -> condición (una pregunta)
// 3 -> acciones
// estructura final -> if () {}

// let clima = "humeno"

// if (clima === "soleado"){
//   titulo.textContent = "podes salir tranqui :)"
// } else {
//   titulo.textContent = "sali con cuidado..."
// }

// Crear un programa que deje pasar a los jovenes que tengan mas de 18 años

// let edad = 16

// if (edad > 17) {
//   titulo.textContent = "Puedes pasar 😎"
// } else {
//   titulo.textContent = "No puedes pasar, eres menor de edad 👮‍♀️"
// }


// declaración
let texto = document.querySelector("h1");
let boton = document.querySelector("button");

boton.addEventListener("click", () => {
  let color = texto.style.color;

  if (color === "white") {
    texto.style.color = "blue";
    texto.style.backgroundColor = "violet"
  } else {
    texto.style.color = "white";
    texto.style.border = "2px solid white"
  }
});