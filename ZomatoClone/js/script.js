// Animation: Fade-in main content
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    main.style.opacity = 0;
    main.style.transition = 'opacity 1s ease-in-out';

    setTimeout(() => {
        main.style.opacity = 1;
    }, 100);
});

// Input placeholder animation on focus
const input = document.querySelector('input');
input.addEventListener('focus', () => {
    input.placeholder = "Type your cravings...";
});
input.addEventListener('blur', () => {
    input.placeholder = "Search for Restaurant , cuisine or Dish";
});

// Hover animation for header links
const links = document.querySelectorAll('header li a');
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = "scale(1.1)";
        link.style.transition = "transform 0.2s ease-in-out";
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = "scale(1)";
    });
});
