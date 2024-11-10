// Variables para almacenamiento de puntos
let puntosUsuario = 0;
let puntosOrdenador = 0;

// Opciones posibles
const opciones = ["piedra", "papel", "tijera"];

// Captura de elementos HTML
const botones = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

// Generar la jugada aleatoria del ordenador
function jugadaOrdenador() {
    const jugadaAleatoria = Math.floor(Math.random() * opciones.length);
    return opciones[jugadaAleatoria];
}
// Asignar eventos a los botones
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", jugadaUsuario);
}
// Leer jugada del usuario (¿por qué tiene qué llevar el argumento event? Sabemos que el argumento es para relacionarlo con los botones pero no entendemos bien el por qué.)
function jugadaUsuario(event) {
    const tiradaUsuario = event.target.dataset.jugada; 
    const tiradaOrdenador = jugadaOrdenador();         
    const resultado = obtenerResultado(tiradaUsuario, tiradaOrdenador); //hemos comprobado que funciona así, pero no entendemos bien por qué hay que declararla dentro de la jugada del usuario.

    // Actualizar puntos y mensajes de resultado
    if (resultado === "Ganas") {
        puntosUsuario++;
    } else if (resultado === "Pierdes") {
        puntosOrdenador++;
    }

    // Mostrar resultados y actualizar contadores en HTML
    resultados.textContent = "Tú elegiste " + tiradaUsuario + ", el ordenador eligió " + tiradaOrdenador + ". Y el resultado es: " + resultado ;
    contadorUsuario.textContent = "Tus puntos " + puntosUsuario;
    contadorOrdenador.textContent = "Puntos de la máquina: " + puntosOrdenador;
}

// Comparar jugadaUsuario y jugadaOrdenador
function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
    if (jugadaUsuario === jugadaOrdenador) {
        return "Empate";
    } else if (
        (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera") ||
        (jugadaUsuario === "papel" && jugadaOrdenador === "piedra") ||
        (jugadaUsuario === "tijera" && jugadaOrdenador === "papel")
    ) {
        return "Ganas";
    } else {
        return "Pierdes";
    }
}