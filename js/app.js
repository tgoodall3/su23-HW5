let width = 100;
let height = 100;

let div = document.getElementById('rec');
div.addEventListener('click', (e) => {
    
    width *= 1.1;
    height *= 1.1;

    div.style.width = width + 'px';
    div.style.height = height + 'px';

});