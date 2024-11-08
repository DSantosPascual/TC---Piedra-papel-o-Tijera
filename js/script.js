//variables para almacenamiento de puntos//
let puntosUsuario = 0;
let puntosOrdenador = 0;
//opciones posibles//
const opciones = ["piedra", "papel", "tijera"];
//captura HTML//
const botones = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");
//generar la jugada aleatoria del ordenador//
function jugadaOrdenador () {
    const jugadaAleatoria = Math.floor(Math.random() * opciones.length);
    return opciones[jugadaAleatoria] 
}
//leer jugada del usuario
function jugadaUsuario () {

}

console.log(botones)



/*usais un for
usar un addEventListener en cada botón
jugadorUsuario, jugadaOrdenador, resultado
const jugadasUsario = botones[i].data-set.jugada
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
botones[i].addEventListener()
onst jugadasUsario = botones[i].dataset.jugada
*/
