// Button click event
document.getElementById("learnBtn").addEventListener("click", function () {
    alert("Welcome! Scroll down to learn more.");
});

// Contact form message
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent = "Thank you! Your message has been sent.";
});
