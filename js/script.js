/* =========================================
   PROJETO CEA — script.js
   ========================================= */

// ---- Mobile Menu ----
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        document.body.style.overflow =
            navLinks.classList.contains("open") ? "hidden" : "";
    });

    // Fecha ao clicar em qualquer link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            document.body.style.overflow = "";
        });
    });
}
