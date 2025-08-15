const nota = [37, 50, 65, 85, 101];

for (let i = 0; i < nota.length; i++) {
    const element = nota[i];

 if (element > 100 || element < 0) {
  console.log("Nota no válida");
} else if (element >= 90) {
  console.log("Excelente");
} else if (element >= 70) {
  console.log("Bien");
} else if (element >= 50) {
  console.log("Suficiente");
} else {
  console.log("Insuficiente");
}
}