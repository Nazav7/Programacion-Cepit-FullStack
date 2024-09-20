function suma(a, b) {
    return a + b;
    }
    
    function oper(a, b, callback) {
    console.log(callback(a, b));
    }
    console.log('Antes de la ejecucion');
    oper(3, 5, suma);
    console.log('Despues de la ejecucion');


    