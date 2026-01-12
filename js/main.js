// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Content Data =====
const contentData = {
    'dgrayman': {
        title: 'D.Gray-man',
        year: '2006',
        duration: '2 Sezon',
    },
    'dgraymanh': {
        title: 'D.Gray-man',
        year: '2016',
        duration: '1 Sezon',
    }
};

// ===== Play Content Function =====
function playContent(contentId) {
    // Store content ID in sessionStorage
    sessionStorage.setItem('currentContent', contentId);
    // Navigate to player page
    window.location.href = 'player.html';
}

// ===== Go Back Function =====
function goBack() {
    window.location.href = 'index.html';
}

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('StreamFlix loaded successfully!');
});
