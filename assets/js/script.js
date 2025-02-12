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

/* Typing Hero */
const texts = [
    "Hello friend, I'm Matteo.",
    "I'm a passionate Game Programmer.",
    "I love creating immersive gameplay experiences."
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        typingElement.innerHTML = texts[textIndex].substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            typeWriter();
        }, 2000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
    initVanta();
});
