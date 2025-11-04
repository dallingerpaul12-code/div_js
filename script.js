const canvas = document.getElementById('testCanvas');
const ctx = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Set initial drawing style
ctx.fillStyle = '#101010';

function plot(x, y) {
    ctx.fillRect(x, y, 1, 1);
}

let x = WIDTH / 2;      // Start in the middle of the canvas
let y = HEIGHT / 2;
let dirX = 1;           // Initial direction
let dirY = 1;

function draw() {
    plot(x, y);             // Plot the current point
    x = x + dirX;           // Move in the current direction
    y = y + dirY;       
                            // Bounce off the edges
    if (x >= WIDTH || x <= 0) {
        dirX = -dirX;
    }
    if (y >= HEIGHT || y <= 0) {
        dirY = -dirY;
    }
    if (x<= paddleX + PADDLE_WIDTH && x >= paddleX && y >= PADDLE_Y) {
        dirY = -dirY;
    }
}

// Start the animation when the page loads
window.onload = function() {
    setInterval(draw, 10);
};