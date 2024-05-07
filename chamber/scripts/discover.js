document.addEventListener("DOMContentLoaded", function () {
    // Get the last visit date from localStorage
    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        const currentDate = Date.now();
        const timeDiff = currentDate - parseInt(lastVisit);
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        const messageElement = document.getElementById("message");

        if (daysDiff === 0) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            messageElement.textContent = "You last visited 1 day ago.";
        } else {
            messageElement.textContent = `You last visited ${daysDiff} days ago.`;
        }
    } else {
        localStorage.setItem("lastVisit", Date.now());
        document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
    }

    // Lazy load images when the user scrolls
    

    

    

  
});