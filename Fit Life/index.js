const header = document.querySelector('[data-header]');
const navTogglers = document.querySelectorAll('[data-nav-toggle]');
const navbar = document.querySelector('[data-navbar]');

// Add a scroll event listener for header
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// Add click event listeners for navigation toggles
navTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});

// Close navbar when clicking on nav links
const navLinks = document.querySelectorAll('[data-nav-link]');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
