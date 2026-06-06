/**
 * Efecto Typewriter (Máquina de escribir) para el Hero
 */

// Las frases que se van a escribir y borrar
const words = [
    "Estudiante de Informática",
    "Interesado en la Ciberseguridad"
];

// Variables de control de estado
let i = 0; // Índice de la palabra actual
let j = 0; // Índice de la letra actual
let isDeleting = false; // Estado (borrando o escribiendo)
let isEnd = false; // Pausa al final de una palabra

const textElement = document.getElementById("typewriter-text");

function type() {
    // Evita errores si el elemento no existe en el DOM
    if (!textElement) return;

    isEnd = false;
    // Establece la velocidad de tipeo (más rápida al borrar)
    let typeSpeed = isDeleting ? 50 : 100;

    // Lógica para escribir
    if (!isDeleting && j <= words[i].length) {
        textElement.innerHTML = words[i].substring(0, j);
        j++;
        // Si termina de escribir la palabra completa
        if (j > words[i].length) {
            isEnd = true;
            isDeleting = true;
            typeSpeed = 1500; // Pausa antes de empezar a borrar
        }
    } 
    // Lógica para borrar
    else if (isDeleting && j >= 0) {
        textElement.innerHTML = words[i].substring(0, j);
        j--;
        // Si termina de borrar la palabra
        if (j < 0) {
            isDeleting = false;
            // Pasa a la siguiente palabra, o vuelve a la primera si llegó al final
            i = (i + 1) % words.length; 
            typeSpeed = 500; // Pausa antes de empezar a escribir la siguiente
        }
    }

    // Llama a la función recursivamente con el timeout dinámico
    setTimeout(type, typeSpeed);
}

// Inicia el efecto cuando el documento ha cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000); // Pequeño retraso inicial para que la animación empiece limpia
});