// const frutas = ["manzana", "banana", "naranja", "uva", "pera"];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

const numeros = [2, 8, 5, 12, 3, 7];

let suma = 0;

console.log("Números mayores que 5:");

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 5) {
    const element = numeros[i];
     console.log(element);
    }
    
    suma += numeros[i];
    
}

console.log('Suma total:', suma);
