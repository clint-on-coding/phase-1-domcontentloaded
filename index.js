// First, change text immediately (before DOMContentLoaded)
const textElement = document.getElementById("text");
textElement.textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";

// Then change it after DOMContentLoaded fires
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("text");
  textElement.textContent = "This is really cool!";
});



