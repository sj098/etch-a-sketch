const body = document.querySelector('.body');
const container = document.querySelector('.container');
let gridsize = 4;

function grid() {
    for (let i = 0; i < gridsize * gridsize; i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        squares.style.width = '' + (400 / gridsize - 2) + 'px';
        squares.style.height = '' + (400 / gridsize - 2) + 'px';
        container.append(squares);
    }
 }    

grid();

let squares = container.childNodes;

function change(a) {
    a.style.backgroundColor = 'black';
}

squares.forEach((square) => square.addEventListener("mouseenter", function() {
    change(square);
}));

document.getElementById('button').onclick = function() {
    let popup = prompt("Enter grid size: ")
    
}

