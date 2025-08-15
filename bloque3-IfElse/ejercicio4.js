const isPar = [12, 15, 14, 35, 99];

for (let i = 0; i < isPar.length; i++) {
    const numeros = isPar[i];
    const isImpar = numeros % 2 === 0 ? "Es par" : "Es impar";
    console.log(isImpar);
}
