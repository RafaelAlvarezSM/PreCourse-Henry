function calcularDescuento(precio, porcentaje = 10) {
    const toltaConDescuento = precio - (precio * porcentaje / 100);
    return toltaConDescuento;
}

console.log(calcularDescuento(100)); // 90
console.log(calcularDescuento(200, 25)); // 150
console.log(calcularDescuento(1234));
console.log(calcularDescuento(5403, 30));
console.log(calcularDescuento(600));
console.log(calcularDescuento(1000, 25));


esMayorDeEdad = (edad) => edad < 18 ? 'Menor de edad': 'Mayor de edad';


console.log(esMayorDeEdad(15)); // "Menor de edad"
console.log(esMayorDeEdad(20)); // "Mayor de edad"
