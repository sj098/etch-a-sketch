const body = document.querySelector('.body');
const container = document.querySelector('.container');
let gridsize = 16;
let squares = container.childNodes;

function grid() {
    for (let i = 0; i < gridsize * gridsize; i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        squares.style.width = '' + (400 / gridsize - 2) + 'px';
        squares.style.height = '' + (400 / gridsize - 2) + 'px';
        container.appendChild(squares);
    }
}    

function change(a) {
    a.style.backgroundColor = 'black';
}

function sketch() {
    squares.forEach((square) => square.addEventListener("mouseenter", function() {
        change(square);
    }))
}

function clear() {
    for (let i = 0; i < gridsize * gridsize; i++) {
        container.removeChild(container.lastElementChild);
}}


document.getElementById('button').onclick = function() {
    let popup = prompt("Enter a number between 1 and 100.")
    if (popup < 1 || popup > 100 || isNaN(popup)) (
        prompt("Sorry, I didn't get that. Please enter a number from 1 to 100.")
    )
    else if (popup >= 1 && popup <= 100) {
        clear();
        gridsize = popup;
        grid();
        sketch()
    }
}   



grid();
sketch();
