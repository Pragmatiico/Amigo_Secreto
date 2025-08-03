// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []; // Lista de amigos


function agregarNombre() {
     let input = document.getElementById("nombreInput");
     let nombre = input.value.trim();

      if (nombre !== "") {
        nombres.push(nombre); // Agrega al array
        mostrarNombres(); // Muestra los nombres actualizados
        input.value = ""; // Limpia el campo
      } else {
        alert("Por favor escribe un nombre.");
      }
    }


 function mostrarNombres() {
      const lista = document.getElementById("listaNombres");
      lista.innerHTML = "";

      // Mostrar cada nombre como elemento de lista
      nombres.forEach(function(nombre) {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
      });

    }   

     // Función para sortear un amigo aleatorio
    function sortearAmigo() {
      const resultado = document.getElementById("resultado");

      if (nombres.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear.";
        return;
      }

      // Generar índice aleatorio
      const indiceAleatorio = Math.floor(Math.random() * nombres.length);

      // Obtener nombre en esa posición
      const nombreSorteado =nombres[indiceAleatorio];

      // Mostrar el resultado
      resultado.innerHTML = `El nombre sorteado es: <strong>${nombreSorteado}</strong>`;
    }


    function limpiarTodo() {
  // Vaciar el array
  nombres = [];

  // Limpiar la lista de la pantalla
  const lista = document.getElementById("listaNombres");
  lista.innerHTML = "";

  // Limpiar el resultado del sorteo
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  // Limpiar el input (por si acaso)
  document.getElementById("nombreInput").value = "";
}