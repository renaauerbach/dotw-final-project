/***************** NAVIGATION PAGE *******************/

let svg = document.getElementById('netflix');

hover = () => {
    let doc = svg.contentDoc;
    console.log(doc);
};

svg.addEventListener('mouseover', hover);
