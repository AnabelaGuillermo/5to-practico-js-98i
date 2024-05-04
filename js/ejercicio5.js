"Use strict"

/* Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0)
y pausar.
*/

let cronometro;
let segundos = 0, minutos = 0, horas = 0;
let display = document.querySelector('#cronometro');
let startButton = document.querySelector('#startBtn');
let pauseButton = document.querySelector('#pauseBtn');
let resetButton = document.querySelector('#resetBtn');

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);

function iniciarCronometro() {
  cronometro = setInterval(function() {
    segundos++;
    if (segundos >= 60) {
      segundos = 0;
      minutos++;
      if (minutos >= 60) {
        minutos = 0;
        horas++;
      }
    }
    display.textContent = 
      (horas < 10 ? '0' + horas : horas) + ':' +
      (minutos < 10 ? '0' + minutos : minutos) + ':' +
      (segundos < 10 ? '0' + segundos : segundos);
  }, 1000);
}

function start() {
  if (!cronometro) {
    iniciarCronometro();
  }
}

function pause() {
  clearInterval(cronometro);
  cronometro = null;
}

function reset() {
  clearInterval(cronometro);
  cronometro = null;
  segundos = 0;
  minutos = 0;
  horas = 0;
  display.textContent = '00:00:00';
}

