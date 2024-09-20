//-------------------------------------Ejemplo con promesa-------------------------------------//
// Función que devuelve una promesa
function promesaEjemplo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Puedes cambiar esto a false para probar el rechazo
            if (exito) {
                resolve("Operación completada con éxito usando Promesa");
            } else {
                reject("Algo salió mal usando Promesa");
            }
        }, 2000);
    });
}

// Llamada a la promesa
promesaEjemplo()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    });

//-------------------------------------Ejemplo con async/await-------------------------------------//
// Misma función que devuelve una promesa, igual que en el ejemplo anterior

// Función asíncrona con await
async function asyncAwaitEjemplo() {
    try {
        const resultado = await promesaEjemplo();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

// Llamada a la función asíncrona
asyncAwaitEjemplo();
