const body = document.querySelector('.body');
const container = document.querySelector('.container');

const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Grid Size';
body.appendChild(button);

for (let i = 0; i < 16; i++) {
    const squares = document.createElement('div');
    squares.classList.add('squares');
    container.appendChild(squares);
}

let squares = container.childNodes;

function change(a) {
    a.style.backgroundColor = 'lightgrey';
}

squares.forEach((square) => square.addEventListener("mouseenter", function() {
    change(square);
}));
