"Use strict";

/* Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde
donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 
*/

let tiempoRestante = 0;
let intervalo;

function iniciarTemporizador() {
  tiempoRestante = parseInt(document.querySelector("#tiempo").value);
  if (isNaN(tiempoRestante) || tiempoRestante <= 0) {
    alert("Por favor ingrese un tiempo válido en segundos.");
    return;
  }

  document.querySelector("#botonInicio").disabled = true;
  document.querySelector("#botonPausa").disabled = false;
  document.querySelector("#botonReset").disabled = false;

  actualizarTemporizador();

  intervalo = setInterval(() => {
    tiempoRestante--;
    if (tiempoRestante >= 0) {
      actualizarTemporizador();
    } else {
      clearInterval(intervalo);
      alert("¡Tiempo terminado!");
      document.querySelector("#botonInicio").disabled = false;
      document.querySelector("#botonPausa").disabled = true;
      document.querySelector("#botonReset").disabled = true;
    }
  }, 1000);
}

function pausarTemporizador() {
  clearInterval(intervalo);
  document.querySelector("#botonInicio").disabled = false;
  document.querySelector("#botonPausa").disabled = true;
}

function reiniciarTemporizador() {
  clearInterval(intervalo);
  document.querySelector("#timer").innerText = "00:00:00";
  document.querySelector("#botonInicio").disabled = false;
  document.querySelector("#botonPausa").disabled = true;
  document.querySelector("#botonReset").disabled = true;
}

function actualizarTemporizador() {
  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = tiempoRestante % 60;
  document.querySelector("#timer").innerText = `${horas
    .toString()
    .padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos
    .toString()
    .padStart(2, "0")}`;
}

document
  .querySelector("#botonInicio")
  .addEventListener("click", iniciarTemporizador);
document
  .querySelector("#botonPausa")
  .addEventListener("click", pausarTemporizador);
document
  .querySelector("#botonReset")
  .addEventListener("click", reiniciarTemporizador);

document
  .getElementById("tiempo")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      iniciarTemporizador();
    }
  });
