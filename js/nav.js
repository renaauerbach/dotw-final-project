/***************** NAVIGATION PAGE *******************/

let startTime = new Date().getTime();
let drawCircles = setInterval(() => {
    if (new Date().getTime() - startTime > 30000) {
        clearInterval(drawCircles);
        return;
    }
    let colors = [
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.4)',
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 255, 255, 1)',
    ];

    let container = document.querySelector('body');
    let circle;

    circle.style.color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.top = Math.floor(Math.random() * fullHeight + 1) + 'px';

    container.appendChild(circle);
}, 2000);

window.addEventListener('load', drawCircles);
