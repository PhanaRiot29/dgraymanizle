# StreamFlix - Netflix Benzeri Streaming Platformu

Modern, responsive ve kullanıcı dostu bir streaming video platformu. Netflix'in tasarım dilinden ilham alınarak oluşturulmuştur.

## 🎬 Özellikler

### ✅ Tamamlanan Özellikler

- **Modern Netflix Benzeri Tasarım**: Karanlık tema, kırmızı vurgular ve profesyonel görünüm
- **Ana Sayfa (index.html)**:
  - Hero bölümünde öne çıkan içerik (Stranger Things)
  - Sabit üst navigasyon barı (scroll efektiyle)
  - Kategorilere ayrılmış içerik satırları:
    - Popüler İçerikler
    - Şu Anda Trend
    - Aksiyon ve Macera
    - Komedi
    - Drama
    - Yeni ve Popüler
  - Her kategoride 6+ içerik kartı
  - Hover efektleriyle interaktif kartlar
  - Smooth scroll navigasyon

- **Video Player Sayfası (player.html)**:
  - Tam ekran video oynatıcı
  - Video bilgileri (başlık, yıl, rating, süre)
  - Tür etiketleri
  - Ana sayfaya dönüş butonu
  - Önerilen içerikler bölümü
  - Klavye kısayolları desteği

- **Responsive Tasarım**:
  - Desktop (1920px+)
  - Tablet (768px - 1024px)
  - Mobile (320px - 767px)
  - Her cihazda optimize görünüm

- **İnteraktif Özellikler**:
  - Kart hover animasyonları
  - Scroll animasyonları
  - Smooth sayfa geçişleri
  - Video oynatma fonksiyonalitesi
  - Dinamik içerik yükleme

## 📁 Proje Yapısı

```
streamflix/
├── index.html          # Ana sayfa
├── player.html         # Video oynatıcı sayfası
├── css/
│   └── style.css       # Tüm stiller
├── js/
│   ├── main.js         # Ana JavaScript dosyası
│   └── player.js       # Video oynatıcı JavaScript dosyası
└── README.md           # Proje dokümantasyonu
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary Red**: #e50914 (Netflix kırmızısı)
- **Dark Background**: #141414
- **Darker Background**: #000000
- **Card Background**: #2f2f2f
- **Text Primary**: #ffffff
- **Text Secondary**: #b3b3b3

### Tipografi
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Animasyonlar
- Hover scale efektleri
- Fade-in animasyonları
- Smooth scroll
- Navbar scroll effect

## 🎮 Kullanım

### Ana Sayfa Navigasyonu
- **Ana Sayfa**: Tüm içerik kategorilerine genel bakış
- **Filmler**: Popüler film kategorisine git
- **Diziler**: Drama dizileri kategorisine git
- **Yeni ve Popüler**: En yeni içeriklere git

### Video İzleme
1. İstediğiniz içerik kartına tıklayın
2. Video oynatıcı sayfası açılır
3. Video otomatik olarak başlar (sessiz)
4. "Ana Sayfaya Dön" ile geri dönün

### Klavye Kısayolları (Video Oynatıcı)
- **Space**: Oynat/Duraklat
- **→**: 10 saniye ileri
- **←**: 10 saniye geri
- **F**: Tam ekran
- **M**: Sesi aç/kapat
- **ESC**: Ana sayfaya dön

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🚀 Teknik Detaylar

### HTML
- Semantik HTML5 elementleri
- SEO friendly yapı
- Accessibility özellikleri

### CSS
- CSS Grid ve Flexbox
- CSS Custom Properties (Variables)
- Modern CSS özellikleri
- Cross-browser uyumlu

### JavaScript
- Vanilla JavaScript (framework yok)
- SessionStorage kullanımı
- Event listeners
- DOM manipülasyonu
- Keyboard event handling

## 📊 İçerik Veritabanı

JavaScript içinde 30+ içerik verisi:
- Film başlıkları
- Dizi bilgileri
- Yıl, rating, süre
- Açıklamalar
- Tür etiketleri

## 🎯 Gelecek Geliştirmeler (Önerilmez - Spec Dışı)

Aşağıdaki özellikler **kullanıcı tarafından istenilmediği için** eklenMEMİŞTİR:
- ❌ Arama fonksiyonu
- ❌ Filtreleme sistemi
- ❌ Kullanıcı profili
- ❌ Giriş/Kayıt sistemi
- ❌ Favorilere ekleme
- ❌ İzleme geçmişi
- ❌ Çoklu dil desteği

## 🔗 Kullanılan Teknolojiler

- **HTML5**: Yapı
- **CSS3**: Stil ve animasyonlar
- **JavaScript (ES6+)**: İnteraktivite
- **Google Fonts**: Inter font ailesi
- **Unsplash**: Demo görselleri

## 📄 Lisans

Bu proje eğitim ve demo amaçlı oluşturulmuştur.

## 🙏 Teşekkürler

Netflix'in tasarım diline ilham için teşekkürler.

---

**Not**: Bu proje statik bir web sitesidir ve gerçek streaming fonksiyonalitesi içermez. Video oynatıcı demo amaçlı bir örnek video kullanır.
