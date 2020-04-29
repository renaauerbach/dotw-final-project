/***************** NAVIGATION PAGE *******************/

function hover() {
    let obj = document.getElementById('#palette');
}

/***************** NETFLIX PAGE *******************/

function flyIn() {
    let grid = document.querySelector('.fly-in');
    setTimeout(() => {
        grid.removeClass('hidden');
    }, 500);
}

function marqueeText() {
    setInterval(() => {
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
}

document.addEventListener('load', flyIn);
document.addEventListener('load', marqueeText);
marqueeText();

/******************* DOG PAGE *********************/

/******************* COLOR PAGE *******************/
