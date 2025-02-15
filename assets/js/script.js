/* Dark Mode e reinizializzazione di Vanta.js */
const themeToggle = document.getElementById("theme-toggle");
let vantaEffect;

function initVanta() {
    const isDark = document.body.classList.contains("dark-mode");
    const bgColor = isDark ? 0x121212 : 0xc8d2db;
    if (vantaEffect) {
        vantaEffect.destroy();
    }
    vantaEffect = VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        color: isDark ? 0xff4081 : 0x00aaff,
        backgroundColor: bgColor
    });
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    initVanta();
});

/* Mobile Menu Toggle */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/* Typing Hero: Mostra "Hello friend, I'm Matteo." una sola volta */
const typingElement = document.getElementById("typing-text");
const typingText = "Hello friend, I'm Matteo.";
let charIndex = 0;

function typeWriter() {
    if (charIndex < typingText.length) {
        typingElement.innerHTML = typingText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        typingElement.innerHTML = typingText + '<span class="cursor">|</span>';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
    initVanta();
});
