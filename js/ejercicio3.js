"Use strict";

/* Crea una web con bootstrap y js, que contenga un botón input donde se pueda
cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista,
cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.
*/

document.addEventListener("DOMContentLoaded", function () {
  const inputTarea = document.querySelector("#tarea");
  const btnAgregar = document.querySelector("#agregar");
  const btnBorrar = document.querySelector("#borrar");
  const listaTareas = document.querySelector("#lista");

  function agregarTarea() {
    const tarea = inputTarea.value.trim();
    if (tarea !== "") {
      const li = document.createElement("li");
      li.textContent = tarea;
      listaTareas.appendChild(li);
      inputTarea.value = "";
    } else {
      alert("Por favor, escribe una tarea.");
    }
  }

  btnAgregar.addEventListener("click", agregarTarea);

  btnBorrar.addEventListener("click", function () {
    const tareas = listaTareas.getElementsByTagName("li");
    if (tareas.length > 0) {
      listaTareas.removeChild(tareas[tareas.length - 1]);
    } else {
      alert("No hay tareas para borrar.");
    }
  });

  inputTarea.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      agregarTarea();
    }
  });
});
