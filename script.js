let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

 // Slider functionality
    const sliders = document.querySelectorAll('.property-slider');
    sliders.forEach(slider => {
        let currentIndex = 0;
        const slides = slider.querySelectorAll('.slideimg');
        
        function showSlideImg(index) {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${(i - index) * 100}%)`;
            });
        }

        showSlideImg(currentIndex);

        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlideImg(currentIndex);
        }, 3000); // Change slide every 3 seconds
    });
});

