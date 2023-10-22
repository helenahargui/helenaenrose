const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
    
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x, y, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}

// Get references to HTML elements
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const sizeSpan = document.getElementById('size');
const colorInput = document.getElementById('color');
const clearButton = document.getElementById('clear');

// Add click event listeners to the buttons
decreaseButton.addEventListener('click', () => {
    size -= 1; // Decrease the size by 5
    if (size < 1) size = 1; // Ensure a minimum size
    updateSizeDisplay();
});

increaseButton.addEventListener('click', () => {
    size += 1; // Increase the size by 5
    if (size > 100) size = 100; // Ensure a maximum size
    updateSizeDisplay();
});

colorInput.addEventListener('input', (e) => {
    color = e.target.value; // Update the color based on the color input value
});

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
});

// Function to update the size display
function updateSizeDisplay() {
    sizeSpan.textContent = size; // Update the size text displayed on the toolbox
}

