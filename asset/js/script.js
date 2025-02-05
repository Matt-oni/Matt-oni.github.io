/* Dark Mode */
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

/* Typing Hero */
document.addEventListener("DOMContentLoaded", function () {
    const text = "Hello friend, I'm Matteo.";
    const typingElement = document.getElementById("typing-text");
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i); // Use textContent instead of innerHTML to avoid duplication
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typingElement.innerHTML += '<span class="cursor">|</span>'; // Add the blinking cursor
        }
    }

    // Ensure the text is empty before starting
    typingElement.textContent = "";
    typeWriter();
});
