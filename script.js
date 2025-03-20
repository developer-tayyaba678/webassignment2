document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");

    // Button click alert
    document.querySelector(".btn").addEventListener("click", function() {
        alert("Searching for adventures...");
    });
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Thank you! Your message has been sent.");
    }
});
