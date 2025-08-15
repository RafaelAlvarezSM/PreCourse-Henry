const dias = ['sabado', 'lunes', 'jueves', 'domingo', 'festivo'];

for (let i = 0; i < dias.length; i++) {
    const dia = dias[i];
    
    switch (dia) {
      case "lunes":
      case "martes":
      case "miercoles":
      case "jueves":
      case "viernes":
        console.log("Día laboral");
        break;
      case "sabado":
      case "domingo":
        console.log("Fin de semana");
        break;
      default:
        console.log("Día no reconocido");
    }
}
