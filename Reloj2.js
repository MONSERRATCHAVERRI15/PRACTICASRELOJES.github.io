(function() {
    // Función para actualizar la hora en la página
    var actualizar_hora = function() {
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            dia_semana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            anio = fecha.getFullYear();

        // Obtener elementos de la página por su ID
        var xHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            xMinutos = document.getElementById('minutos'),
            xSegundos = document.getElementById('segundos'),
            xDiaSemana = document.getElementById('dia_semana'),
            xDia = document.getElementById('dia'),
            xMes = document.getElementById('mes'),
            xAnio = document.getElementById('anio');

        // Arrays para nombres de días y meses
        var listaDiasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var listaMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        // Actualizar texto con la hora actual
        xDiaSemana.textContent = listaDiasSemana[dia_semana];
        xDia.textContent = dia;
        xMes.textContent = listaMeses[mes];
        xAnio.textContent = anio;

        // Establecer formato de 12 horas y AM/PM
        if (horas >= 12) {
            horas = horas - 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }

        // Si son las 0:00, cambiar a 12:00 AM
        if (horas == 0) {
            horas = 12;
        }

        // Actualizar elementos de la página con la hora, minutos y segundos
        xHoras.textContent = horas;
        pAMPM.textContent = ampm;

        // Añadir cero delante de minutos y segundos si son menores que 10
        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        // Actualizar minutos y segundos en la página
        xMinutos.textContent = minutos;
        xSegundos.textContent = segundos;
    };

    // Llamar a la función para actualizar la hora y establecer un intervalo de actualización cada segundo
    actualizar_hora();
    var intervalo = setInterval(actualizar_hora, 1000);
}());
