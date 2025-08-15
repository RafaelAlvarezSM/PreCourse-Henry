function presentar(nombre, edad) {
    if (!edad) {
        console.log(`Soy ${nombre} y tengo 18 años`);
    } else {
        console.log(`Soy ${nombre} y tengo ${edad} años`);
        
    }
}

presentar("Ana"); // Soy Ana y tengo 18 años
presentar("Carlos", 25); // Soy Carlos y tengo 25 años
