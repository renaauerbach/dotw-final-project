/***************** NAVIGATION PAGE *******************/

let colors = [
    '#ed4b42',
    '#f775c3',
    '#bd2abd',
    '#9517ad',
    '#8b65ce',
    '#5a65e0',
    '#8ec2fa',
    '#107bf0',
    '#45bfdd',
    '#3bc9c9',
    '#26b44e',
    '#167e1a',
    '#72ce3e',
    '#ffff00',
    '#ffd346',
    '#ff9900',
    '#ff7000',
];

let container = document.querySelector('.container');

function colorChanger() {
    setInterval(() => {
        // Choose color at random to assign to background
        let color = colors[Math.floor(Math.random() * colors.length)];
        container.style.background = color;
    }, 2000);
}

window.addEventListener('load', colorChanger);
