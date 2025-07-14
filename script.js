let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('cartItemCount').textContent = cartCount;
    document.getElementById('cartTotal').textContent = cartTotal;
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    alert(`${name} đã được thêm vào giỏ hàng!`);
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function viewMore() {
    alert('Xem thêm chi tiết!');
}

setInterval(nextSlide, 5000);

updateCartDisplay();
showSlide(currentSlide);

