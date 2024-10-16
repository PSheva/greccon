const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Change slide every 7 seconds (7000 milliseconds)
setInterval(nextSlide, 11000);

// Smooth scrolling on menu click
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);

//         // Scroll with smooth animation
//         window.scrollTo({
//             top: targetSection.offsetTop,
//             behavior: 'smooth'
//         });
//     });
// });

// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();  // Prevent default link behavior

//         const targetId = this.getAttribute('href');  // Get href value
//         const targetElement = document.querySelector(targetId);  // Find target section

//         // Scroll smoothly to the target section
//         targetElement.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// });

// function toggleMenu() {
//     const navMenu = document.querySelector('.nav-menu');
//     navMenu.classList.toggle('active');
// }

// Function to toggle the burger menu
// Function to toggle the burger menu
// Function to toggle the burger menu
// Toggle the burger menu on clicking the burger icon
// Toggle the burger menu
// Toggle the burger menu
// Toggle the burger menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}


// Event listener to open and close the burger menu
// document.querySelector('.burger-menu').addEventListener('click', function (e) {
//     e.stopPropagation(); // Prevent the event from closing the menu immediately
//     toggleMenu(); // Toggle the menu
// });

document.getElementById('burgerMenu').addEventListener('click', function () {
    this.classList.toggle('active'); // Toggle the active class on the burger menu
    document.getElementById('navMenu').classList.toggle('active'); // Show or hide the nav menu
});

// Close the menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const navMenu = document.querySelector('.nav-menu');
        const burgerMenu = document.getElementById('burgerMenu'); // Get the burger menu

        navMenu.classList.remove('active'); // Close the navigation menu
        burgerMenu.classList.remove('active'); // Close the burger icon (return to 3 lines)
        
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            e.preventDefault(); // Prevent default anchor behavior
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
        }
    });
});

// Close the menu when clicking outside of it
document.addEventListener('click', function (e) {
    const burger = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // If the clicked target is not inside the burger menu or the nav menu, close both
    if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        burger.classList.remove('active'); // Also ensure the burger menu reverts to its original state
    }
});

// Prevent closing when clicking on the burger icon itself
document.querySelector('.burger-menu').addEventListener('click', function (e) {
    e.stopPropagation(); // Ensure burger click doesn't close the menu immediately
});

