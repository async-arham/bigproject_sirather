// Get the button element
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down 20px from the top
window.onscroll = function () { showButton() };

function showButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Randomly show the button (50% chance)
        if (Math.random() < 0.5) {
            scrollTopBtn.style.display = "block";
        }
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function toggleMenu() {
    var navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("open");
}



document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        // Toggle the active class on the clicked accordion
        this.parentElement.classList.toggle('active');

        // Close other accordions
        document.querySelectorAll('.accordion').forEach(accordion => {
            if (accordion !== this.parentElement) {
                accordion.classList.remove('active');
            }
        });
    });
});