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
    'stranger-things': {
        title: 'Stranger Things',
        year: '2016',
        rating: '16+',
        duration: '4 Sezon',
        description: '1980\'lerde küçük bir kasabada gizemli bir şekilde kaybolan bir çocuğun ardından, arkadaşları onu ararken doğaüstü güçler ve hükümet sırlarıyla karşılaşırlar. Hawkins kasabasında yaşanan olaylar, paralel bir evrenin varlığını ortaya çıkarır.',
        genres: ['Sci-Fi', 'Gizem', 'Drama', 'Korku']
    },
    'dark': {
        title: 'Dark',
        year: '2017',
        rating: '16+',
        duration: '3 Sezon',
        description: 'Almanya\'nın küçük bir kasabasında gizemli bir çocuk kaybolması, dört ailenin hayatını alt üst eder. Olaylar, zaman yolculuğu ve karmaşık aile ilişkilerinin iç içe geçtiği destansı bir hikayeye dönüşür.',
        genres: ['Sci-Fi', 'Gizem', 'Drama', 'Gerilim']
    },
    'breaking-bad': {
        title: 'D.Gray-man',
        year: '2006',
        rating: '18+',
        duration: '2 Sezon',
        description: 'Seri, alternatif bir 10. yüzyılda geçmektedir. Genç bir egzorsist olan Allen Walker, Millenium Earl'ün yarattığı Akumaların eski formlarını görmesini sağlayan lanetli bir göze ve bir tür anti-Akuma silahı olan sol kola sahiptir. Allen, hocası tarafından İngiltere'de kendisi gibi diğer egzorsistlerin bulunduğu bir karargâha gönderilir. Innocence taşıyan son derece nadir insanlardan biri olan Allen, Black Priest organizasyonuna katılarak Millenium Earl'ün planlarına karşı savaşmaya başlar. Yollarında ilerledikçe sorular, özellikle de Allen'ın geçmişiyle bağlantılı olan sorular ortaya çıkar.',
        genres: ['Shonen', 'Macera', 'Karanlık Fantezi', 'Fantastik Bilim Kurgu']
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
