

esMayorDeEdad = (edad) => edad < 18 ? 'Menor de edad': 'Mayor de edad';


function calcularDescuento(precio, porcentaje = 15) {
    const toltaConDescuento = precio - (precio * porcentaje / 100);
    return toltaConDescuento;
}


function registrarPersona(nombre, edad, precioCompra) {
    const persona = nombre
    return { 
    persona: persona, 
    edad: edad, 
    estado: esMayorDeEdad(edad), 
    totalApagar: calcularDescuento(precioCompra)
}
}

function registrarVariasPersonas(lista) {
    const resultados = [];

    for (let persona of lista) {
        const { nombre, edad, compra } = persona;
        resultados.push(registrarPersona(nombre, edad, compra));
    }

    return resultados;
}

const clientes = [
    { nombre: 'Migue', edad: 14, compra: 250 },
    { nombre: 'Cielo', edad: 27, compra: 400 },
    { nombre: 'Rafa', edad: 30, compra: 1000 }
];

console.log(registrarVariasPersonas(clientes));