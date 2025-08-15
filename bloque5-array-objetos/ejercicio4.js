const estudiantes = [
    { nombre: 'Migue', edad: 14, nota: 6 },
    { nombre: 'Cielo', edad: 27, nota: 9 },
    { nombre: 'Rafa', edad: 37, nota: 8 },
    { nombre: 'Laura', edad: 22, nota: 5 }
];

let aprobados = 0;
let reprobados = 0;

for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    console.log(`${estudiante.nombre} - ${estudiante.nota}`);
    if (estudiante.nota >= 7) {
        aprobados++;
    } else {
        reprobados++;
    }
}


console.log(`${aprobados} estudiantes aprobaron`);
console.log(`${reprobados} estudiantes no aprobaron`);
