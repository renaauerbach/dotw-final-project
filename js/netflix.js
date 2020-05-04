/***************** NETFLIX PAGE *******************/

// Animate images to "fly in" on load
function flyIn() {
    let grid = document.querySelector('.fly-in');
    setTimeout(() => {
        grid.classList.remove('hidden');
    }, 500);
}

// Animate images to fullscreen
const pics = document.querySelectorAll('grid-img');
const images = [...pics];

setTimeout(() => {
    for (let i = 0; i < images.length; i++) {
        setTimeout(() => {
            fullScreen(images[i]);
        }, 3000 * i);
    }
}, 4000);

function fullScreen(img) {
    img.classList.add('active');

    setTimeout(() => {
        img.classList.remove('active');
    }, 3000);
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

    let fullHeight = window.innerHeight;

    // Add text to marquee
    marquee.appendChild(text);

    // Assign random font size (between 25 - 100)
    marquee.style.fontSize =
        Math.floor(Math.random() * (100 - 25 + 1)) + 25 + 'px';

    // Assign text opacity by randomly selecting a color from colors array (differ in opacity)
    marquee.style.color = colors[Math.floor(Math.random() * colors.length)];
    marquee.style.top = Math.floor(Math.random() * fullHeight + 1) + 'px';
    marquee.scrollAmount = 20;

    container.appendChild(marquee);
}, 2000);

window.addEventListener('load', flyIn);
