function calculadora(a, b, operacion) {
    if (operacion === 'sumar') {
        return a + b;
    } else if (operacion === 'restar'){
        return a - b;
    } else if (operacion === 'multiplicar') {
        return a * b;
    } else if (operacion === 'dividir') {
        return a / b;
    } else {
        return 'Operación invalida';
    }
}
console.log('sumar:', calculadora(10, 2, 'sumar'));
console.log('restar:',calculadora(10, 2, 'restar'));
console.log('multiplicar:',calculadora(10, 2, 'multiplicar'));
console.log('dividir:',calculadora(10, 2, 'dividir'));
console.log('componente:',calculadora(10, 2, 'componente'));






