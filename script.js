/**
 * Efecto Typewriter (Máquina de escribir) para el Hero
 */
const words = ["Estudiante de Informática"];
let i = 0;
let j = 0;
let isDeleting = false;
let isEnd = false;

const textElement = document.getElementById("typewriter-text");

function type() {
    if (!textElement) return;

    isEnd = false;
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && j <= words[i].length) {
        textElement.innerHTML = words[i].substring(0, j);
        j++;
        if (j > words[i].length) {
            isEnd = true;
            isDeleting = true;
            typeSpeed = 1500;
        }
    } 
    else if (isDeleting && j >= 0) {
        textElement.innerHTML = words[i].substring(0, j);
        j--;
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % words.length; 
            typeSpeed = 600;
        }
    }

    setTimeout(type, typeSpeed);
}

// Inicia el efecto de la máquina de escribir
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});


/**
 * =========================================================================
 * Sistema de Filtros Inteligente, Aislado e Independiente (Conocimientos y Proyectos)
 * =========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. FUNCIÓN PARA FILTRAR CONOCIMIENTOS
    function filtrarConocimientos(targetFilter) {
        const skillCategories = document.querySelectorAll(".skill-category");
        
        skillCategories.forEach(category => {
            const items = category.querySelectorAll(".skill-item");
            let tieneElementosVisibles = false;

            items.forEach(item => {
                if (item.classList.contains(targetFilter)) {
                    item.style.display = "flex";
                    tieneElementosVisibles = true;
                } else {
                    item.style.display = "none";
                }
            });

            // Oculta la tarjeta completa si se queda sin tecnologías bajo este filtro
            if (tieneElementosVisibles) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }
        });
    }

    // 2. FUNCIÓN PARA FILTRAR PROYECTOS
    function filtrarProyectos(targetFilter) {
        const projectItems = document.querySelectorAll(".project-item");
        
        projectItems.forEach(item => {
            if (item.classList.contains(targetFilter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    // 3. ASIGNACIÓN DE EVENTOS ENCAPSULADA (Evita que las secciones se pisen)
    const contenedoresToggle = document.querySelectorAll(".toggle-container");

    contenedoresToggle.forEach(container => {
        // Buscamos los botones SOLO dentro de este contenedor específico
        const botonesDelContenedor = container.querySelectorAll(".toggle-btn");

        botonesDelContenedor.forEach(button => {
            button.addEventListener("click", () => {
                // Quitamos el estado activo SOLO a los botones de este contenedor
                botonesDelContenedor.forEach(btn => btn.classList.remove("active"));
                
                // Le devolvemos el color rojo únicamente al botón clickeado
                button.classList.add("active");

                const targetFilter = button.getAttribute("data-target");

                // Identificamos la sección correspondiente para disparar el filtro correcto
                if (container.closest(".habilidades-header")) {
                    filtrarConocimientos(targetFilter);
                } else if (container.closest(".proyectos-header")) {
                    filtrarProyectos(targetFilter);
                }
            });
        });
    });

    // 4. ESTADO INICIAL (Ambas secciones arrancan mostrando "Principales")
    filtrarConocimientos("principal");
    filtrarProyectos("principal");
});