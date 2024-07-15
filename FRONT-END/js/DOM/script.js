//Selectores Comunes del DOM

//getElementById: Selecciona un elemento por su ID.
//Sintaxis: document.getElementById(id)
let elemento = document.getElementById("miDiv");

//getElementsByClassName: Selecciona todos los elementos con una clase específica.
//Sintaxis: document.getElementsByClassName(className)
let elementos = document.getElementsByClassName("miClase");

//getElementsByTagName: Selecciona todos los elementos con un nombre de etiqueta específico.
//Sintaxis: document.getElementsByTagName(tagName)
let elementos = document.getElementsByTagName("p");

//querySelector: Selecciona el primer elemento que coincide con un selector CSS.
//Sintaxis: document.querySelector(selector)
let elemento = document.querySelector(".miClase");

//querySelectorAll: Selecciona todos los elementos que coinciden con un selector CSS.
//Sintaxis: document.querySelectorAll(selector)
let elementos = document.querySelectorAll(".miClase");

//----------------------------------------------------------------------------------

//Propiedades comunes del DOM

// (textContent) Obtiene o establece contenido textual
let miDiv1 = document.getElementById("miDiv");
miDiv1.textContent = "Nuevo texto";

// (innerHTML) Obtiene o establece contenido HTML contenido dentro de un elemento.
miDiv1.innerHTML = "<p>Nuevo contenido HTML</p>";

// (style) Accede a los estilos en línea (inline styles) de un elemento.
miDiv1.style.color = "blue";
miDiv1.style.fontSize = "20px";

// (classList) Permite añadir, eliminar y alternar (toggle) clases CSS en un elemento.
miDiv1.classList.add("nueva-clase");
miDiv1.classList.remove("vieja-clase");
miDiv1.classList.toggle("clase-activa");

// (value) Obtiene o establece el valor de un <input>, <textarea>, y <select>.
let miInput = document.getElementById("miInput");
miInput.value = "Nuevo valor";

// (src) Obtiene o establece la URL de una imagen en un elemento <img>.
let miImagen = document.getElementById("miImagen");
miImagen.src = "nueva-imagen.jpg";
// (alt) Obtiene o establece el texto alternativo de una imagen.
miImagen.alt = "Descripción de la imagen";

// (href) Obtiene o establece la URL de un enlace en un elemento <a>.
let miEnlace = document.getElementById("miEnlace");
miEnlace.href = "https://www.nuevo-enlace.com";

// (children) Obtiene la colección HTML de los hijos de un elemento.
let miLista = document.getElementById("miLista");
let hijos = miLista.children;

// (parentNode) Obtiene el nodo padre del elemento actual.
let padre = miDiv.parentNode;

//---------------------------------------------------------------------------------

//Manipulación del DOM en JavaScript:

// Obtener un elemento por su ID y cambiar su contenido
let elemento = document.getElementById("miDiv");
elemento.innerHTML = "Nuevo texto modificado";

// Agregar un nuevo elemento a una lista existente
let lista = document.getElementById("miLista");
let nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Nuevo Elemento";
lista.appendChild(nuevoElemento);

// Eliminar el último elemento de una lista
if (lista.children.length > 0) {
    lista.removeChild(lista.lastElementChild);
}

// Cambiar estilos y clases de un elemento
let miDiv = document.getElementById("miDiv");
miDiv.classList.remove("rojo");
miDiv.classList.add("azul");

// Manipular atributos de elementos
let imagen = document.getElementById("miImagen");
imagen.src = "nueva-imagen.jpg";
imagen.alt = "Nueva descripción de la imagen";

// Crear y añadir eventos a un elemento
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("¡Has hecho clic en el botón!");
});