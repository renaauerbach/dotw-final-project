/***************** NAVIGATION PAGE *******************/

let startTime = new Date().getTime();
let width = window.innerWidth;
let height = window.innerHeight;

let svgNS = 'http://www.w3.org/2000/svg';
let svg = document.getElementById('circles');
svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);

let drawCircles = setInterval(() => {
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

    // let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // let svgNS = svg.namespaceURI;
    let circle = document.createElementNS(svgNS, 'circle');
    // Math.floor(Math.random() * (max - min + 1) + min)

    circle.setAttribute(
        'fill',
        colors[Math.floor(Math.random() * colors.length)]
    );
    circle.setAttribute('r', Math.floor(Math.random() * (100 - 20 + 1) + 20));
    circle.setAttribute('cx', Math.floor(Math.random() * width) + 1);
    circle.setAttribute('cy', Math.floor(Math.random() * height) + 1);

    svg.appendChild(circle);
}, 1000);
