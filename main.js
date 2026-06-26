// --- LANGUAGE SWITCHER ---
function switchLang() {
    const select = document.getElementById('langSelect');
    const flag = document.getElementById('flag');

    if (select.value === 'km') {
        flag.src = 'kh.jpg';
        flag.alt = 'Khmer Flag';

        const pages = {
            'index.html': 'index_km.html',
            'about.html': 'about_km.html',
            'programs.html': 'programs_km.html',
            'gallery.html': 'gallery_km.html',
            'contact.html': 'contact_km.html'
        };

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        if (pages[currentPage]) {
            window.location.href = pages[currentPage];
        }

    } else {
        flag.src = 'eng.jpg';
        flag.alt = 'English Flag';
    }
}

// --- MAIN CAROUSEL (students) ---
const track = document.getElementById('carouselTrack');
if (track) {
    let current = 0;
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

    window.moveSlide = function(direction) {
        current = (current + direction + total) % total;
        goToSlide(current);
    };

    setInterval(() => window.moveSlide(1), 3000);
}

// --- SCHOOL CAROUSEL ---
const schoolTrack = document.getElementById('schoolTrack');
if (schoolTrack) {
    let schoolCurrent = 0;
    const schoolSlides = schoolTrack.querySelectorAll('img');
    const schoolTotal = schoolSlides.length;
    const schoolDotsContainer = document.getElementById('schoolDots');

    schoolSlides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('school-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', 'Go to school slide ' + (i + 1));
        dot.addEventListener('click', () => goToSchool(i));
        schoolDotsContainer.appendChild(dot);
    });

    function updateSchoolDots() {
        document.querySelectorAll('.school-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === schoolCurrent);
        });
    }

    function goToSchool(index) {
        schoolCurrent = index;
        schoolTrack.style.transform = `translateX(-${schoolCurrent * 100}%)`;
        updateSchoolDots();
    }

    window.moveSchool = function(direction) {
        schoolCurrent = (schoolCurrent + direction + schoolTotal) % schoolTotal;
        goToSchool(schoolCurrent);
    };

    setInterval(() => window.moveSchool(1), 4500);
}
