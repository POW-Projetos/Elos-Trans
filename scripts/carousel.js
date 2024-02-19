let currentIndex = 0;
const totalItems = document.querySelectorAll('.section_team_cards_employee').length;

function updateCarousel() {
    document.querySelector('.carousel').style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}