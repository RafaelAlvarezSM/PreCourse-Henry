function esPar(numero) {
   return numero % 2 === 0;
}

function imprimirParidad(numero) {
    if (esPar(numero)) {
        console.log('Es par');
    } else {
        console.log('Es impar');
    }
}

imprimirParidad(4); // Es par
imprimirParidad(7); // Es impar
