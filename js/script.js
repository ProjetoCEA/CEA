/* =========================================
   PROJETO CEA — script.js
   ========================================= */

// ---- Mobile Menu ----
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');

        // Animate hamburger → X
        const spans = menuToggle.querySelectorAll('span');
        const isOpen = navLinks.classList.contains('open');
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity   = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity   = '';
            spans[2].style.transform = '';
        }
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        });
    });
}

// ---- Scroll fade-in ----
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .acao-card, .stat, .strip-text, .content-block')
    .forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

// ---- Sticky header shadow on scroll ----
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 10
            ? '0 4px 30px rgba(0,0,0,.35)'
            : '0 2px 20px rgba(0,0,0,.25)';
    });
}

// CARROSSEL SETORES
const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;

function updateCarousel() {
    const cardWidth = track.querySelector(".setor-card").offsetWidth + 20;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    const totalCards = track.children.length;
    if (index < totalCards - 1) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});
