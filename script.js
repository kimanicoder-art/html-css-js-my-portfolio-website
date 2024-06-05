function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Add event listener for clicks outside the menu
    if (menu.classList.contains("open")) {
        document.addEventListener("click", closeMenuOnClickOutside);
    } else {
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

function toggleReadMore() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("read-more-btn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Less"; 
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More"; 
    }
}

function openResume() {
    window.open('./assets/resume.pdf', '_blank');
}

function closeMenuOnClickOutside(event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', (event) => {
    // Hide the additional content on initial load
    document.getElementById("more-text").style.display = "none";

    // Add event listeners to the menu links
    const menuLinks = document.querySelectorAll(".menu-links li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", toggleMenu);
    });
});
