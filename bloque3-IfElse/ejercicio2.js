const hora = [3, 12, 15, 23, 30];

for (let i = 0; i < hora.length; i++) {
    const horas = hora[i];

    if (horas < 0 || horas > 23) {
        console.log('Hora inválida');
    } else if (horas >= 6 && horas <= 12) {
      console.log('Buenos días');
    } else if (horas >= 13 && horas <= 19) {
      console.log('Buenas tardes');
    } else {
      console.log('Buenas noches');
    }
}
