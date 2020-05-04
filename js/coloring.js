/***************** NAVIGATION PAGE *******************/

color = e => {
    if (e.classList.contains('center')) {
        e.classList.remove('hidden');
    } else {
        e.parentNode.classList.remove('hidden');
    }
};



