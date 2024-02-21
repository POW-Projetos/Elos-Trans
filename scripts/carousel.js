const totalItems = document.querySelectorAll('.section_team_cards_employee').length;
let currentIndex = 0;

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    if (width >= 1000) {
        currentIndex = 0
        updateCarousel()
    }
});


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