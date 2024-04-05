function updateClock() {
    const now = new Date(); // Obtiene la fecha y hora actual
    const hours = now.getHours().toString().padStart(2, '0'); // Obtiene las horas y asegura que tenga 2 dígitos
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Obtiene los minutos y asegura que tenga 2 dígitos
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Obtiene los segundos y asegura que tenga 2 dígitos
  
    // Actualiza los elementos HTML con los valores de las horas, minutos y segundos
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }
  
  // Ejecuta la función updateClock cada segundo (1000 milisegundos)
  setInterval(updateClock, 1000);
  