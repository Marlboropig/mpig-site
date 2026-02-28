// --- NAVBAR SCROLL EFFECT ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 40) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// --- MOBILE MENU TOGGLE ---
function toggleMenu() {
    const overlay = document.getElementById('mobile-overlay');
    if (overlay.classList.contains('translate-x-full')) {
        overlay.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    } else {
        overlay.classList.add('translate-x-full');
        document.body.style.overflow = '';
    }
}