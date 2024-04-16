// Selecting DOM elements
const menu: HTMLElement | null = document.querySelector('#menu-icon');
const navbar: HTMLElement | null = document.querySelector('.navbar');

// Toggling navbar on menu icon click
menu?.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar?.classList.toggle('active');
});

// Removing active classes on scroll
window.onscroll = () => {
    menu?.classList.remove('bx-x');
    navbar?.classList.remove('active');
};

// ScrollReveal initialization and configuration
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Reveal animations for different sections
sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.form-container form', { delay: 800, origin: 'left' });
sr.reveal('.heading', { delay: 800, origin: 'top' });
sr.reveal('.ride-container .box', { delay: 600, origin: 'top' });
sr.reveal('.services-container .box', { delay: 600, origin: 'top' });
sr.reveal('.about-container .box', { delay: 600, origin: 'top' });
sr.reveal('.reviews-container', { delay: 600, origin: 'top' });
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' });
