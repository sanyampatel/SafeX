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
    "Enter The Cyber World",
    "Learn Ethical Hacking",
    "Become a Cyber Expert",
    "Secure The Digital Future"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById("typing-text");
    const currentText = textArray[textIndex];

    if (!isDeleting) {
        element.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // pause at full text
            return;
        }
    } else {
        element.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();
