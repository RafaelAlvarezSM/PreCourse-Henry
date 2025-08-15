const personas = [
    {
        nombre: 'Migue',
        edad: 14,
        profesion: 'Estudiante'
    },

    {
        nombre: 'Cielo',
        edad: 27,
        estadoCivil: 'Casada'
    },

    {
        nombre: 'Rafa',
        edad: 37,
        estadoCivil: 'Casado'
    }

]

for (let i = 0; i < personas.length; i++) {
    const element = personas[i];
    console.log(element);
    
}

for (let i = 0; i < personas.length; i++) {
    const element = personas[i];
    console.log(element.nombre, element.edad);
    
}

console.log(personas);
