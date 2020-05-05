/***************** NETFLIX PAGE *******************/
let height = window.innerHeight;
let width = window.innerWidth;

// Animate images to "fly in" on load
function flyIn() {
    let grid = document.querySelector('.fly-in');
    setTimeout(() => {
        grid.classList.remove('hidden');
    }, 500);
}

// Animate images to fullscreen
const pics = document.querySelectorAll('.grid-img');
const images = [...pics];

// Initiate first fullScreen iteration while waiting for interval to begin
fullScreen();
setInterval(() => {
    fullScreen();
}, 31000);

function fullScreen() {
    setTimeout(() => {
        for (let i = 0; i < images.length; i++) {
            // Timeout to prevent images from all aniamting at once
            setTimeout(() => {
                images[i].classList.add('active');
                // Timeout to give current image pause at top
                setTimeout(() => {
                    images[i].classList.remove('active');
                }, 3000);
            }, 3000 * i);
        }
    }, 4000);
}

// Generate marquee text
let startTime = new Date().getTime();
let marqueeText = setInterval(() => {
    if (new Date().getTime() - startTime > 30000) {
        clearInterval(marqueeText);
        return;
    }
    let colors = [
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.4)',
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 255, 255, 1)',
    ];

    let container = document.querySelector('.netflix-text');
    let marquee = document.createElement('marquee');
    let text = document.createTextNode('Are you still watching?');

    // Add text to marquee
    marquee.appendChild(text);

    // Assign random font size (between 25 - 100)
    marquee.style.fontSize =
        Math.floor(Math.random() * (100 - 25 + 1)) + 25 + 'px';

    // Assign text opacity by randomly selecting a color from colors array (differ in opacity)
    marquee.style.color = colors[Math.floor(Math.random() * colors.length)];

    // Assign random position
    marquee.style.top = Math.floor(Math.random() * height + 1) + 'px';
    marquee.scrollAmount = 20;

    container.appendChild(marquee);
}, 2000);

window.addEventListener('load', flyIn);
