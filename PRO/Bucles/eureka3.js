const rls = require("readline-Sync");

const claveEureka = "eureka";
let claveUsuario = "";
let i = 0;

while (i <= 2 && claveUsuario !== claveEureka) {
    claveUsuario = rls.question("Ingrese la clave (eureka): ");
    console.log("La clave es incorrecta");
    i++;
}

if (claveUsuario !== claveEureka) {
    console.log("Se agotaron los intentos");
} else {
    console.log("La clave es correcta");
}