const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;
let intervalId;
function showImage(index) {
    images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    });
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}  
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
} 
prevBtn.addEventListener('click', () => {
    prevImage();
    resetAutoplay();
});
nextBtn.addEventListener('click', () => {
    nextImage();
    resetAutoplay();
});
function startAutoplay() {
    intervalId = setInterval(nextImage, 4000); // Change every 4 seconds
}
function resetAutoplay() {
    clearInterval(intervalId);
    startAutoplay();
}
showImage(currentIndex);
startAutoplay();