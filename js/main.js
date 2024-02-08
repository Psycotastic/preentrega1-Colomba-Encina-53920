// Constante para número de apostadores
const numApostadores = 5;
let cantidad;
 while (true) { 
  cantidad = prompt("Cuánto quieres apostar:"); 
  if (isNaN(cantidad)) { 
    alert("Tiene que ser un número, sin comas, ni puntos."); 
  } else { 
    break; 
  } 
}

let caballo; 
 while (true) { 
  caballo = prompt("Por cuál caballo apuestas (1-5):"); 
  if (caballo >= "1" && caballo <= "5") { 
    break; 
    } 
 alert("Debes ingresar un número entre 1 y 5."); 
}

// Función que calcula ganancias
function calcularGanancias(apuestaCantidad, caballoNumero) {
  // Función para obtener ganador aleatorio
  function getGanadorAleatorio() {
    return Math.floor(Math.random() * 5) + 1;
  }

  // Obtiene el número de caballo ganador
  const ganadorAleatorio = getGanadorAleatorio();

  if (caballoNumero === ganadorAleatorio) {
    alert("Felicidades, tu caballo ganó.")
    return apuestaCantidad * numApostadores;
  } else {
    alert("Ganó el caballo número " + ganadorAleatorio + ', y no el tuyo.');
    alert("Fracasado.")
    alert("Haber estudiado Apuestación 101.")
    return -apuestaCantidad;
  }
}

// Obtiene la cantidad apostada y el número del caballo
const apuestaCantidad = parseFloat(cantidad);
const caballoNumero = parseInt(caballo);

// Calcula ganancias
const ganancias = calcularGanancias(apuestaCantidad, caballoNumero);

// Muestra resultados
let mensaje;
if (ganancias >= 0) {
  mensaje = 'Tus ganancias son $' + ganancias + '.';
} else {
  mensaje = 'Y además perdiste tus $' + Math.abs(ganancias) + '.';
}

alert(mensaje);