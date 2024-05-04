"Use strict";

/* Crear una web con un reloj que muestre la siguiente información:
Jueves 29 de Octubre del 2015
12:02:58 pm
*/

function updateClock() {
  let now = new Date();
  let days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hour >= 12 ? "pm" : "am";

  hour = hour % 12;
  hour = hour ? hour : 12;

  let clockContainer = document.querySelector("#clock");
  let clock2Container = document.querySelector("#clock2");

  clockContainer.textContent =
    day + " " + date + " de " + month + " del " + year;

  clock2Container.textContent =
    hour +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    " ";

  let ampmSpan = document.createElement("span");
  ampmSpan.id = "ampm";
  ampmSpan.textContent = ampm;
  clock2Container.appendChild(ampmSpan);
}

setInterval(updateClock, 1000);
updateClock();
