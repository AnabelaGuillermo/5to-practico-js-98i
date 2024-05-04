"Use strict";

/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación
pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona,
permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”,
es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    if (1994 <= this.añoNacimiento && this.añoNacimiento <= 2010) {
      return "Generación Z: Irreverencia";
    } else if (1981 <= this.añoNacimiento && this.añoNacimiento <= 1993) {
      return "Generación Y (Millennials): Frustración";
    } else if (1969 <= this.añoNacimiento && this.añoNacimiento <= 1980) {
      return "Generación X: Obsesión por el éxito";
    } else if (1949 <= this.añoNacimiento && this.añoNacimiento <= 1968) {
      return "Baby Boom: Ambición";
    } else if (1930 <= this.añoNacimiento && this.añoNacimiento <= 1948) {
      return "Silent Generation: Austeridad";
    } else {
      return "No se puede determinar la generación";
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return `Sos mayor de edad.`;
    } else {
      return `Sos menor de edad.`;
    }
  }

  mostrarDatos() {
    return `
    <p>Nombre: ${this.nombre}</p>
    <p>Edad: ${this.edad}</p>
    <p>DNI: ${this.dni}</p>
    <p>Sexo: ${this.sexo}</p>
    <p>Peso: ${this.peso}</p>
    <p>Altura: ${this.altura}</p>
    <p>Año de nacimiento: ${this.añoNacimiento}</p>
  `;
  }
}

function mostrarPersonaEnPantalla(persona) {
  const infoPersona = document.querySelector("#infoPersona");
  const infoGeneracion = document.querySelector("#infoGeneracion");

  const esMayorDeEdadNode = document.createElement("p");
  esMayorDeEdadNode.textContent = persona.esMayorDeEdad();

  const datosPersonaNode = document
    .createRange()
    .createContextualFragment(persona.mostrarDatos());
  const generacionNode = document.createTextNode(persona.mostrarGeneracion());

  infoPersona.appendChild(esMayorDeEdadNode);
  infoPersona.appendChild(datosPersonaNode);
  infoGeneracion.appendChild(generacionNode);
}

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const nombre = document.querySelector("#nombre").value;
      const edad = document.querySelector("#edad").value;
      const dni = document.querySelector("#dni").value;
      const sexo = document.querySelector("#sexo").value;
      const peso = document.querySelector("#peso").value;
      const altura = document.querySelector("#altura").value;
      const añoNacimiento = document.querySelector("#año").value;

      const persona = new Persona(
        nombre,
        edad,
        dni,
        sexo,
        peso,
        altura,
        añoNacimiento
      );

      mostrarPersonaEnPantalla(persona);
    }
  });
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const edad = document.querySelector("#edad").value;
  const dni = document.querySelector("#dni").value;
  const sexo = document.querySelector("#sexo").value;
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value;
  const añoNacimiento = document.querySelector("#año").value;

  const persona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    añoNacimiento
  );

  mostrarPersonaEnPantalla(persona);
});
