const canvas = document.querySelector('canvas'); // Assumes there's only one canvas; adjust selector as needed.
canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;
    
    console.log(`X: ${x}, Y: ${y}`);
});


let backgroundImg = new Image();
backgroundImg.src = 'background.png';

let characterImg = new Image();
characterImg.src = 'sailormoon.png';


let posX = 360;
let posY = 20;


function isWalkable(x, y) {
    // Define the walkable area (coordinates for simplicity)
    return x >= 350 && x <= 370 && y >= 20 && y <= 380;
}

function draw() {
    let canvas = document.getElementById('gameCanvas');
    let ctx = canvas.getContext('2d');
    
    // Clear the previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the background
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    // Draw the character
    ctx.drawImage(characterImg, posX, posY, 80, 80); // assuming the character is 80x80 pixels

    requestAnimationFrame(draw);
}


window.addEventListener('keydown', function(event) {
    let moveX = 0;
    let moveY = 0;

    switch (event.key) {
        case 'ArrowLeft': 
            moveX = -5 
            event.preventDefault();  // Prevent default browser action
            break;
        case 'ArrowRight': 
            moveX = 5 
            event.preventDefault();  // Prevent default browser action
            break;
        case 'ArrowUp': 
            moveY = -5  
            event.preventDefault();  // Prevent default browser action
            break;
        case 'ArrowDown': 
            moveY = 5 
            event.preventDefault();  // Prevent default browser action
            break;
    }

    // Check if next position is walkable
    if (isWalkable(posX + moveX, posY + moveY)) {
        posX += moveX;
        posY += moveY;
    }

    // Check if character reaches specific coordinates
    if (posX >= 350 && posX <= 369 && posY >= 362 && posY <= 370) {
        characterImg.src = 'sailormoon1.png';
    }
});


backgroundImg.onload = function() {
    draw();
}
