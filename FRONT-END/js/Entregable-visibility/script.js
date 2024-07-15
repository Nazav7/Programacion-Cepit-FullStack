let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');

let button1 = box1.querySelector('button');
let button2 = box2.querySelector('button');


//conexiones entre eventos y funciones con método addEventListener

button1.addEventListener('click', function () {
    showAndHide(box1, box2);
});

button2.addEventListener('click', function () {
    showAndHide(box2, box1);
});

//función para mostrar u ocultar cajas
//método toggle: si la caja no tiene la clase 'hidden' se le agrega y si la tiene se elimina
function showAndHide(showBox, hideBox) {
    showBox.classList.toggle('hidden');
    hideBox.classList.toggle('hidden');
}