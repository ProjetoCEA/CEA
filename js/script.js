/* =========================================
   PROJETO CEA — script.js
   ========================================= */

// ---- Mobile Menu Dropdown ----
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("open");
    });

    // Fecha clicando fora
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove("open");
        }
    });

    // Fecha ao clicar em link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });
}
