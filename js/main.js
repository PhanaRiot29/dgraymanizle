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
        title: 'Breaking Bad',
        year: '2008',
        rating: '18+',
        duration: '5 Sezon',
        description: 'Kimya öğretmeni Walter White, kansere yakalandığında ailesinin geleceğini güvence altına almak için metamfetamin üretmeye başlar. Bu karar, onu tehlikeli bir yeraltı dünyasının içine sürükler.',
        genres: ['Drama', 'Suç', 'Gerilim']
    },
    'inception': {
        title: 'Inception',
        year: '2010',
        rating: '13+',
        duration: '2s 28d',
        description: 'Bir grup hırsız, hedeflerinin rüyalarına girerek kurumsal sırları çalan son teknoloji teknoloji kullanır. Dom Cobb, bu tehlikeli mesleğin en iyilerinden biridir, ancak son bir görev hayatını değiştirebilir.',
        genres: ['Sci-Fi', 'Aksiyon', 'Gerilim', 'Gizem']
    },
    'interstellar': {
        title: 'Interstellar',
        year: '2014',
        rating: '13+',
        duration: '2s 49d',
        description: 'Dünya yaşanamaz hale gelirken, eski bir NASA pilotu ve bir grup araştırmacı, insanlığın geleceğini kurtarmak için galaksiler arası bir yolculuğa çıkar. Zaman, uzay ve aşk temaları iç içe geçer.',
        genres: ['Sci-Fi', 'Drama', 'Macera', 'Gizem']
    },
    'money-heist': {
        title: 'La Casa de Papel (Money Heist)',
        year: '2017',
        rating: '16+',
        duration: '5 Sezon',
        description: 'Profesör kod adlı bir suç dehası, İspanya Kraliyet Darphanesi\'ni soymak için mükemmel bir plan hazırlar. Ekibi, rehin alma ve psikolojik savaş taktikleriyle polisi oyalar.',
        genres: ['Aksiyon', 'Suç', 'Drama', 'Gerilim']
    },
    'witcher': {
        title: 'The Witcher',
        year: '2019',
        rating: '18+',
        duration: '3 Sezon',
        description: 'Geralt of Rivia, para karşılığında canavar avlayan yalnız bir avcıdır. Kaderi, güçlü bir büyücü ve sürpriz bir prenese bağlıdır. Kıtayı tehdit eden karanlık güçlere karşı savaşırlar.',
        genres: ['Fantastik', 'Aksiyon', 'Macera', 'Drama']
    },
    'squid-game': {
        title: 'Squid Game',
        year: '2021',
        rating: '18+',
        duration: '1 Sezon',
        description: 'Borç içinde boğulan yüzlerce kişi, devasa bir para ödülü kazanma şansı için garip ve ölümcül bir çocuk oyunları turnuvasına katılmaya davet edilir. Ancak kaybedenler canlarından olur.',
        genres: ['Drama', 'Gerilim', 'Aksiyon', 'Gizem']
    },
    'dune': {
        title: 'Dune',
        year: '2021',
        rating: '13+',
        duration: '2s 35d',
        description: 'Paul Atreides, galaksinin en değerli maddesini kontrol eden tehlikeli Arrakis gezegenine gider. Ailesini ve halkını korumak için kaderiyle yüzleşmek zorundadır.',
        genres: ['Sci-Fi', 'Macera', 'Drama', 'Aksiyon']
    },
    'wednesday': {
        title: 'Wednesday',
        year: '2022',
        rating: '13+',
        duration: '1 Sezon',
        description: 'Wednesday Addams, Nevermore Akademisi\'nde kendi psişik yeteneklerini keşfederken, 25 yıl önce kasabada terör estiren bir canavar gizemi çözmeye çalışır.',
        genres: ['Komedi', 'Gizem', 'Fantastik', 'Gerilim']
    },
    'avatar': {
        title: 'Avatar: The Way of Water',
        year: '2022',
        rating: '13+',
        duration: '3s 12d',
        description: 'Jake Sully ve Neytiri, Pandora\'da bir aile kurduktan sonra, eski bir tehdit geri döndüğünde evlerini korumak için savaşmak zorunda kalırlar.',
        genres: ['Sci-Fi', 'Aksiyon', 'Macera', 'Fantastik']
    },
    'peaky-blinders': {
        title: 'Peaky Blinders',
        year: '2013',
        rating: '18+',
        duration: '6 Sezon',
        description: '1919\'da Birmingham\'da bir gangster ailesi, şehrin yeraltı dünyasında hakimiyet kurmak için savaşır. Thomas Shelby, ailesini ve imparatorluğunu korumak için her şeyi göze alır.',
        genres: ['Drama', 'Suç', 'Tarih']
    },
    'oppenheimer': {
        title: 'Oppenheimer',
        year: '2023',
        rating: '13+',
        duration: '3s 0d',
        description: 'J. Robert Oppenheimer\'in atom bombasını geliştirme sürecini ve bunun sonuçlarıyla yüzleşmesini anlatan destansı bir biyografi.',
        genres: ['Drama', 'Tarih', 'Biyografi', 'Gerilim']
    },
    'john-wick': {
        title: 'John Wick',
        year: '2014',
        rating: '18+',
        duration: '1s 41d',
        description: 'Emekli bir tetikçi, köpeğini öldüren ve arabasını çalan gangsterlerden intikam almak için yeraltı dünyasına geri döner.',
        genres: ['Aksiyon', 'Suç', 'Gerilim']
    },
    'mad-max': {
        title: 'Mad Max: Fury Road',
        year: '2015',
        rating: '16+',
        duration: '2s 0d',
        description: 'Post-apokaliptik bir çölde, Max ve Furiosa, bir tiranın elinden kaçmaya çalışan bir grup kadını kurtarmak için ölümcül bir kaçış gerçekleştirir.',
        genres: ['Aksiyon', 'Macera', 'Sci-Fi', 'Gerilim']
    },
    'mission-impossible': {
        title: 'Mission: Impossible',
        year: '2023',
        rating: '13+',
        duration: '2s 43d',
        description: 'Ethan Hunt ve ekibi, insanlığın geleceğini tehdit eden ölümcül bir yapay zeka silahını ele geçirmek için yarışır.',
        genres: ['Aksiyon', 'Gerilim', 'Macera']
    },
    'extraction': {
        title: 'Extraction',
        year: '2020',
        rating: '18+',
        duration: '1s 56d',
        description: 'Ölümcül bir paralı asker, uluslararası bir suç lordunun kaçırılmış oğlunu kurtarmak için tehlikeli bir göreve atılır.',
        genres: ['Aksiyon', 'Gerilim', 'Suç']
    },
    'top-gun': {
        title: 'Top Gun: Maverick',
        year: '2022',
        rating: '13+',
        duration: '2s 11d',
        description: 'Pete "Maverick" Mitchell, 30 yıl sonra Top Gun\'a eğitmen olarak döner ve imkansız bir görevi tamamlamak için yeni nesil pilotları eğitir.',
        genres: ['Aksiyon', 'Drama', 'Gerilim']
    },
    'spider-man': {
        title: 'Spider-Man: No Way Home',
        year: '2021',
        rating: '13+',
        duration: '2s 28d',
        description: 'Peter Parker\'ın kimliği ifşa olduktan sonra, Doctor Strange\'den yardım ister. Ancak büyü ters gider ve çoklu evren açılır.',
        genres: ['Aksiyon', 'Macera', 'Fantastik', 'Sci-Fi']
    },
    'brooklyn-99': {
        title: 'Brooklyn Nine-Nine',
        year: '2013',
        rating: '13+',
        duration: '8 Sezon',
        description: 'Brooklyn\'deki bir polis karakolunda çalışan dedektiflerin komik maceraları. Jake Peralta ve ekibi, suçluları yakalarken birbirlerine iş yaparlar.',
        genres: ['Komedi', 'Suç', 'Polis']
    },
    'friends': {
        title: 'Friends',
        year: '1994',
        rating: '13+',
        duration: '10 Sezon',
        description: 'Manhattan\'da yaşayan altı arkadaşın hayatları, aşkları, kariyerleri ve maceralarını konu alan efsanevi komedi dizisi.',
        genres: ['Komedi', 'Romantik', 'Sitcom']
    },
    'office': {
        title: 'The Office',
        year: '2005',
        rating: '13+',
        duration: '9 Sezon',
        description: 'Scranton\'da bir kağıt firmasının günlük hayatını belgeleyen mockumentary tarzı komedi dizisi. Michael Scott ve çalışanlarının absürt maceraları.',
        genres: ['Komedi', 'Mockumentary', 'İş Hayatı']
    },
    'how-i-met': {
        title: 'How I Met Your Mother',
        year: '2005',
        rating: '13+',
        duration: '9 Sezon',
        description: 'Ted Mosby, çocuklarına anneleriyle nasıl tanıştığını anlatırken, New York\'taki arkadaşlarıyla yaşadığı maceraları paylaşır.',
        genres: ['Komedi', 'Romantik', 'Drama']
    },
    'modern-family': {
        title: 'Modern Family',
        year: '2009',
        rating: '13+',
        duration: '11 Sezon',
        description: 'Üç farklı ama birbirine bağlı ailenin günlük hayatını mockumentary tarzında anlatan ödüllü komedi dizisi.',
        genres: ['Komedi', 'Aile', 'Mockumentary']
    },
    'big-bang': {
        title: 'The Big Bang Theory',
        year: '2007',
        rating: '13+',
        duration: '12 Sezon',
        description: 'Dört dahiyanın sosyal hayatlarını ve karşı komşuları güzel Penny ile olan ilişkilerini konu alan popüler komedi dizisi.',
        genres: ['Komedi', 'Sitcom', 'Bilim']
    },
    'crown': {
        title: 'The Crown',
        year: '2016',
        rating: '13+',
        duration: '6 Sezon',
        description: 'Kraliçe II. Elizabeth\'in hayatını ve İngiltere monarşisinin modern tarihteki önemli olaylarını anlatan prestijli drama dizisi.',
        genres: ['Drama', 'Tarih', 'Biyografi']
    },
    'succession': {
        title: 'Succession',
        year: '2018',
        rating: '18+',
        duration: '4 Sezon',
        description: 'Güçlü bir medya imparatorluğunun sahibi Logan Roy\'un çocukları, şirketin kontrolü için acımasızca rekabet eder.',
        genres: ['Drama', 'Komedi', 'İş Dünyası']
    },
    'ozark': {
        title: 'Ozark',
        year: '2017',
        rating: '18+',
        duration: '4 Sezon',
        description: 'Bir finansçı, Meksika uyuşturucu karteli için para aklama yaparken yakalanır ve ailesini kurtarmak için Ozarks\'a taşınmak zorunda kalır.',
        genres: ['Drama', 'Suç', 'Gerilim']
    },
    'better-call-saul': {
        title: 'Better Call Saul',
        year: '2015',
        rating: '16+',
        duration: '6 Sezon',
        description: 'Breaking Bad\'in spin-off\'u olan bu dizi, avukat Jimmy McGill\'in Saul Goodman\'a dönüşüm hikayesini anlatır.',
        genres: ['Drama', 'Suç', 'Gerilim']
    },
    'handmaids-tale': {
        title: 'The Handmaid\'s Tale',
        year: '2017',
        rating: '18+',
        duration: '5 Sezon',
        description: 'Distopik bir gelecekte, doğurganlık sorunları yaşayan totaliter Gilead toplumunda, kadınlar çocuk doğurmak için kullanılır.',
        genres: ['Drama', 'Distopya', 'Gerilim', 'Sci-Fi']
    },
    'house-of-dragon': {
        title: 'House of the Dragon',
        year: '2022',
        rating: '18+',
        duration: '2 Sezon',
        description: 'Game of Thrones\'un 200 yıl öncesinde geçen bu dizi, Targaryen Hanedanı\'nın zirvesini ve iç savaşını anlatır.',
        genres: ['Drama', 'Fantastik', 'Macera', 'Aksiyon']
    },
    'fall': {
        title: 'Fall',
        year: '2022',
        rating: '16+',
        duration: '1s 47d',
        description: 'İki en iyi arkadaş, çölde terk edilmiş 600 metre yüksekliğindeki bir radyo kulesinin tepesinde mahsur kalır.',
        genres: ['Gerilim', 'Macera', 'Drama']
    },
    'last-of-us': {
        title: 'The Last of Us',
        year: '2023',
        rating: '18+',
        duration: '1 Sezon',
        description: 'Mantarlar tarafından yok edilen dünyada, Joel ve Ellie hayatta kalmaya ve insanlığın geleceğini kurtarmaya çalışır.',
        genres: ['Drama', 'Aksiyon', 'Sci-Fi', 'Korku']
    },
    'beef': {
        title: 'Beef',
        year: '2023',
        rating: '16+',
        duration: '1 Sezon',
        description: 'Yolda yaşanan bir husumet, iki yabancının hayatını alt üst eder ve her ikisini de yıkıcı bir intikam spiralinin içine çeker.',
        genres: ['Drama', 'Komedi', 'Gerilim']
    },
    'bear': {
        title: 'The Bear',
        year: '2022',
        rating: '16+',
        duration: '2 Sezon',
        description: 'Genç bir şef, Chicago\'da ailesinin sandviç restoranını devraldıktan sonra, mutfak personeli ve kendi demons ile mücadele eder.',
        genres: ['Drama', 'Komedi', 'Yemek']
    },
    '1899': {
        title: '1899',
        year: '2022',
        rating: '16+',
        duration: '1 Sezon',
        description: 'Avrupa\'dan New York\'a giden bir göçmen gemisi, okyanus ortasında kayıp bir gemi bulduğunda gizemli olaylar yaşanır.',
        genres: ['Gizem', 'Drama', 'Sci-Fi', 'Korku']
    },
    'all-quiet': {
        title: 'All Quiet on the Western Front',
        year: '2022',
        rating: '16+',
        duration: '2s 28d',
        description: 'Birinci Dünya Savaşı\'nın Batı Cephesi\'nde genç bir Alman askerinin savaşın dehşetini yaşaması.',
        genres: ['Drama', 'Savaş', 'Tarih']
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
