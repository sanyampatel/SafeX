function scrollToSection() {
    document.getElementById("videos").scrollIntoView({
        behavior: "smooth"
    });
}

function joinWorkshop() {
    alert("Registration Coming Soon!");
}

function startLearning() {
    window.location.href = "videos.htm";
}


// typing wla code

const textArray = [
    "SYM PATEL",
    "Secure Now",
    "Hack Now!!"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const display = document.getElementById("typing-text");

    if (index >= textArray.length) index = 0;

    currentText = textArray[index];

    if (!isDeleting) {
        display.innerHTML = currentText.substring(0, charIndex++);
    } else {
        display.innerHTML = currentText.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        speed = 1500; // pause
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();