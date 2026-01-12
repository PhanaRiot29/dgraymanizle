// ===== Player Page JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    // Get content ID from sessionStorage
    const contentId = sessionStorage.getItem('currentContent');
    
    if (contentId && contentData[contentId]) {
        const content = contentData[contentId];
        
        // Update video info
        document.getElementById('videoTitle').textContent = content.title;
        document.getElementById('videoYear').textContent = content.year;
        document.getElementById('videoRating').textContent = content.rating;
        document.getElementById('videoDuration').textContent = content.duration;
        document.getElementById('videoDescription').textContent = content.description;
        
        // Update page title
        document.title = `${content.title} - StreamFlix`;
        
        // Update genres
        const genresContainer = document.getElementById('videoGenres');
        genresContainer.innerHTML = '';
        content.genres.forEach(genre => {
            const tag = document.createElement('span');
            tag.className = 'genre-tag';
            tag.textContent = genre;
            genresContainer.appendChild(tag);
        });
        
        // Auto play video (muted for better UX)
        const video = document.getElementById('videoPlayer');
        video.muted = true;
        video.play().catch(e => {
            console.log('Autoplay prevented:', e);
        });
    } else {
        // If no content ID, show default content
        document.getElementById('videoTitle').textContent = 'D.Gray-man';
        document.getElementById('videoDescription').textContent = 'Hoş geldiniz! Video oynatıcımızı deneyimleyin.';
    }
});

// ===== Video Player Controls Enhancement =====
const videoPlayer = document.getElementById('videoPlayer');

videoPlayer.addEventListener('play', () => {
    console.log('Video playing');
});

videoPlayer.addEventListener('pause', () => {
    console.log('Video paused');
});

videoPlayer.addEventListener('ended', () => {
    console.log('Video ended');
    // Could redirect to next episode or show recommendations
});

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    const video = document.getElementById('videoPlayer');
    
    switch(e.key) {
        case ' ':
            e.preventDefault();
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            break;
        case 'ArrowRight':
            video.currentTime += 10; // Skip forward 10 seconds
            break;
        case 'ArrowLeft':
            video.currentTime -= 10; // Skip backward 10 seconds
            break;
        case 'f':
            if (video.requestFullscreen) {
                video.requestFullscreen();
            }
            break;
        case 'm':
            video.muted = !video.muted;
            break;
        case 'Escape':
            goBack();
            break;
    }
});
