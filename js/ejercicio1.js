"Use strict"

/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego,
en ese momento se crea un número aleatorio que el usuario deberá adivinar,
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar,
al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico,
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

// Aquí creo el número que se debe adivinar
let numMagico = Math.floor(Math.random() * 100) + 1;

// Aquí pido el número
function recolectarNum() {
    let num = document.querySelector("#inputNum").value;
    if(num === "" || isNaN(num) || num < 1 || num > 100) {
        alert("Por favor ingresa un número válido del 1 al 100.");
        return null; // Devolver null si el número no es válido
    }
    // Convertir el valor a un número entero
    return parseInt(num);
}

// Aquí vinculo al botón
const botonEnviar = document.querySelector("#enviar");

// Agrego un event listener para el evento 'click'
botonEnviar.addEventListener("click", function() {
    const numRecolectado = recolectarNum(); // Recolectar el número cuando se haga click en el botón
    if (numRecolectado !== null) { // Si el número es válido
        adivinar(numRecolectado); // Llamar a la función adivinar con el número recolectado
    }
});

// Agrego un event listener para el evento 'keydown' en el campo de entrada
document.querySelector("#inputNum").addEventListener("keydown", function(event) {
// Verificar si la tecla presionada es Enter
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario
        const numRecolectado = recolectarNum(); // Recolectar el número
        if (numRecolectado !== null) { // Si el número es válido
            adivinar(numRecolectado); // Adivinar el número
        }
    }
});

// Aquí veremos si lo adivinó
function adivinar(numRecolectado) {
    if(numRecolectado === numMagico) {
        alert("¡Felicitaciones! Adivinaste el número")
    } else if(numRecolectado < numMagico) {
        alert("El número mágico es mayor.")
    } else if(numRecolectado > numMagico) {
        alert("El número mágico es menor.")
    }
}