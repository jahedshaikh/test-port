// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle Nav Panel
        nav.classList.toggle('nav-active');

        // Animate Burger to 'X' (Optional visual touch)
        burger.classList.toggle('toggle');
        
        // Simple lines animation for the burger
        const lines = burger.children;
        if (nav.classList.contains('nav-active')) {
            lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    });
}

navSlide();

// Form Submission Handler
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the page from reloading
    alert('Thanks for reaching out! Your message has been sent.');
    form.reset(); // Clears the form fields
});