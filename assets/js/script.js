/* Dark Mode e Vanta.js */
const themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");
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

themeToggleCheckbox.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }
    initVanta();
});

/* Mobile Menu Toggle */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/* Typing Hero */
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

/* About Section Toggle */
const aboutToggle = document.getElementById("about-toggle");
const aboutTextParagraph = document.querySelector(".about-text p");

if (aboutToggle && aboutTextParagraph) {
    aboutToggle.addEventListener("click", () => {
        aboutTextParagraph.classList.toggle("expanded");
        aboutToggle.innerText = aboutTextParagraph.classList.contains("expanded") ? "See less..." : "See more...";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
    initVanta();

    // Fade-in effect per elementi con classe .fade-in
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1 };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        });
    }, appearOptions);
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
