/* Dark Mode */
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
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


document.addEventListener("DOMContentLoaded", typeWriter);

/* Particles effect BG*/
document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80 },
            shape: { type: "circle" },
            size: { value: 3 },
            move: { speed: 2 },
            line_linked: { enable: true, opacity: 0.5 },
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
        },
    });
});
