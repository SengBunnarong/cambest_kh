function switchLang() {
    const select = document.getElementById('langSelect');
    const flag = document.getElementById('flag');

    if (select.value === 'en') {
        flag.src = 'eng.jpg';
        flag.alt = 'English Flag';

        const pages = {
            'index_km.html': 'index.html',
            'about_km.html': 'about.html',
            'programs_km.html': 'programs.html',
            'gallery_km.html': 'gallery.html',
            'contact_km.html': 'contact.html'
        };

        const currentPage = window.location.pathname.split('/').pop();

        if (pages[currentPage]) {
            window.location.href = pages[currentPage];
        }

    } else {
        flag.src = 'kh.jpg';
        flag.alt = 'Khmer Flag';
    }
}

// --- MAIN CAROUSEL (students) ---
let current = 0;
const track = document.getElementById('carouselTrack');
const slides = track.querySelectorAll('img');
const total = slides.length;
const dotsContainer = document.getElementById('carouselDots');

slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
    });
}

function goToSlide(index) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
}

function moveSlide(direction) {
    current = (current + direction + total) % total;
    goToSlide(current);
}

setInterval(() => moveSlide(1), 4000);