// Create animated stars background
function createStars() {
    const stars = document.getElementById('stars');
    const count = 200;

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3}px;
            height: ${Math.random() * 3}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 4 + 2}s infinite;
            opacity: ${Math.random()};
        `;
        stars.appendChild(star);
    }
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Initialize stars on load
document.addEventListener('DOMContentLoaded', () => {
    createStars();
});

// Add styles for star animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

const buttonYT = document.getElementById('button-yt');
buttonYT.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/dacabecaaope/';
});


const buttoncriatT = document.getElementById('button-criat');
buttoncriatT.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/criativafestasbh/';
});


const buttonR = document.getElementById('button-romulo');
buttonR.addEventListener('click', () => {
    window.location.href = 'https://cloud.dify.ai/app/7f783948-2c4f-4da7-844a-483ff6a9606c/configuration';
});

const buttonAmor = document.getElementById('buttonAmor');
buttonAmor.addEventListener('click', () => {
    window.location.href = 'https://www.amoramorajoias.com';
});

const btnInst = document.getElementById('btnInst');
btnInst.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/openspace.oficial/';
});