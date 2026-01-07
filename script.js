// // Button click event
// document.getElementById("learnBtn").addEventListener("click", function () {
//     alert("Welcome! Scroll down to learn more.");
// });

// // Contact form message
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     document.getElementById("formMessage").textContent = "Thank you! Your message has been sent.";
// });




let a = new Array;
a.push(1);
a.push(2);
console.log(a.shift());  // removes first element from the array and return it
a.unshift(0,1);             // append new element in first index and returns length
console.log(a);

