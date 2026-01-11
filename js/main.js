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
  'breaking-bad': {
        title: 'Breaking Bad',
        year: '2008',
        rating: '18+',
        duration: '5 Sezon',
        description: 'Kimya öğretmeni Walter White, kansere yakalandığında ailesinin geleceğini güvence altına almak için metamfetamin üretmeye başlar. Bu karar, onu tehlikeli bir yeraltı dünyasının içine sürükler.',
        genres: ['Drama', 'Suç', 'Gerilim']
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
