// Crea un array llamado numeros con estos valores: [3, 7, 1, 9, 4].
const numeros = [3, 7, 1, 9, 4];

// Muestra el primer elemento y el último (usa índices: 0 y length - 1).
console.log('Primer elemento:', numeros[0]);
console.log('Ultimo elemento:', numeros[numeros.length -1]);


// Muestra en consola la longitud del array.
console.log('Longitud array:', numeros.length);
// Agrega el número 10 al final (push) y el número 0 al inicio (unshift).
numeros.push(10);
numeros.unshift(0);
console.log(numeros);

// Elimina el último elemento con pop y muestra qué valor salió.
numeros.pop();
// Elimina el primer elemento con shift y muestra qué valor salió.
numeros.shift(0);
// Muestra el array final.
console.log(numeros);

// Pistas: array[0], array[array.length - 1], array.length, push, pop, unshift, shift.
// const numeros = [3, 7, 1, 9, 4];
