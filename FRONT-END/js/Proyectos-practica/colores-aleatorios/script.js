//Tocar boton para cambiar el parrafo superior y el color del fondo.

//Seleccionar boton del DOM
const button = document.getElementById("change-color");

//Seleccionar texto del color hex
const hexCode = document.getElementById("hex-code")

let cardElement = document.querySelector('.card');
let containerElement = document.querySelector('.container');

//funcion para generar un color hex aleatorio
//Sistema HEX: 6 digitos. Numeros entre 0 y 9, letras entre A y F
function generateRandomHexCode(){
  let digits = "0123456789ABCDEF"; //cadena de caracteres con los 15 digitos posibles
  let hexCode = "#";
  for (let i = 0; i < 6; i++) { //6 iteraciones para crear 6 digitos.
    let randomIndex = Math.floor(Math.random() * 16);
    hexCode += digits[randomIndex]
  }
  return hexCode
}

//funcion para actualizar codigo y el color del fondo
function updateTextAndColor(){
  let randomHexCode = generateRandomHexCode(); /*primero:obtener color aleatorio (Si no guardas el resultado en una variable y llamas a generarColorHexAleatorio() directamente en cada lugar donde necesites el color, podrías tener inconsistencias. Se podrían obtener diferentes valores si generarColorHexAleatorio() se ejecuta dos veces.*/
  //Actualizar texto
  hexCode.textContent = randomHexCode; //¿que queremos hacer con el codigo hex? que aparezca en el texto. Entonces: Actualizamos el contenido del texto usando textContent
  //Actualizar color de fondo y de card
  containerElement.style.backgroundColor = randomHexCode;//actualizar estilo de fondo: accedemos a container con document. y a sus estilos con style.
  cardElement.style.backgroundColor = randomHexCode;
}

//conexion entre elemento y funcion con metodo addEventListener
//cual elemento trabajar (click),como lo queremos trabajar
//la funcion se puede pasar como segundo argumento o definirla de forma independiente en el codigo
button.addEventListener("click", updateTextAndColor)

 