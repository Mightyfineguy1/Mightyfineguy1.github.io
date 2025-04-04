window.location.href = 'example.html'; 
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: 50, y: 50, sizeX: 15, speed: 15, sizeY: 30};
let playerright = { x: 60, y: 50, sizeX: 15, speed: 15, sizeY: 30}
let playershoes = { x: 50, y: 75, sizeX: 25, speed: 15, sizeY: 15}
let playerbody = { x: 40, y: 20, sizeX: 50, speed: 15, sizeY: 30}
let playerhead = { x: 55, y: 0, sizeX: 20, speed: 15, sizeY: 20}

const pixelSize = 20;

const pixelArt = [
    "X.",
    ".X",
    ".X",
    "X."
]

let isPixelArtVisible = false;

function drawPixelArt(x, y) {
    for (let row = 0; row < pixelArt.length; row++) {
        for (let col = 0; col < pixelArt[row].length; col++) {
            if (pixelArt[row][col] === "X") {
                ctx.fillStyle = "grey"; // Set pixel color
                ctx.fillRect(x + col * pixelSize, y + row * pixelSize, pixelSize, pixelSize); // Draw pixel
            }
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.sizeX, player.sizeY);
}

function drawPlayerHead() {
    ctx.fillStyle = "orange";
    ctx.fillRect(playerhead.x, playerhead.y, playerhead.sizeX, playerhead.sizeY);
}

function drawPlayerbody() {
    ctx.fillStyle = "red";
    ctx.fillRect(playerbody.x, playerbody.y, playerbody.sizeX, playerbody.sizeY);
}

function drawPlayerShoes() {
    ctx.fillStyle = "grey";
    ctx.fillRect(playershoes.x, playershoes.y, playershoes.sizeX, playershoes.sizeY);
}

function drawPlayerRight() {
    ctx.fillStyle = "blue"
    ctx.fillRect(playerright.x, playerright.y, playerright.sizeX, playerright.sizeY );
}

let PixelArtlocation = { x: player.x}

function PIXEL() {
    drawPixelArt(PixelArtlocation += 30, playerhead.y);
    drawPixelArt(PixelArtlocation += 30, playerhead.y);
    drawPixelArt(PixelArtlocation += 30, playerhead.y);
    drawPixelArt(PixelArtlocation += 30, playerhead.y);
    drawPixelArt(PixelArtlocation += 30, playerhead.y);
    drawPixelArt(PixelArtlocation += 30, playerhead.y);
}

function update() {
    let PixelArtlocation = { x: player.x}
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawPlayerRight();
    drawPlayerShoes();
    drawPlayerbody();
    drawPlayerHead();
    requestAnimationFrame(update);
    setTimeout(1000);
    if (isPixelArtVisible) {
        drawPixelArt(PixelArtlocation.x += 30 , playerhead.y); // Draw pixel art at player's position
        setTimeout(() => {
            isPixelArtVisible = false;
        }, 500);
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") player.y -= player.speed;
    if (event.key === "ArrowDown") player.y += player.speed;
    if (event.key === "ArrowLeft") player.x -= player.speed;
    if (event.key === "ArrowRight") player.x += player.speed;
    if (event.key === "ArrowUp") playerright.y -= player.speed;
    if (event.key === "ArrowDown") playerright.y += player.speed;
    if (event.key === "ArrowLeft") playerright.x -= player.speed;
    if (event.key === "ArrowRight") playerright.x += player.speed;
    if (event.key === "ArrowUp") playershoes.y -= player.speed;
    if (event.key === "ArrowDown") playershoes.y += player.speed;
    if (event.key === "ArrowLeft") playershoes.x -= player.speed;
    if (event.key === "ArrowRight") playershoes.x += player.speed;
    if (event.key === "ArrowUp") playerbody.y -= player.speed;
    if (event.key === "ArrowDown") playerbody.y += player.speed;
    if (event.key === "ArrowLeft") playerbody.x -= player.speed;
    if (event.key === "ArrowRight") playerbody.x += player.speed;
    if (event.key === "ArrowUp") playerhead.y -= player.speed;
    if (event.key === "ArrowDown") playerhead.y += player.speed;
    if (event.key === "ArrowLeft") playerhead.x -= player.speed;
    if (event.key === "ArrowRight") playerhead.x += player.speed;
    if (event.key === " ") { // If space is pressed
        isPixelArtVisible = true; // Show the pixel art
    }
});

if (isPixelArtVisible) {
    drawPixelArt(playerhead.x, playerhead.y); // Draw pixel art at player's position
}

update();
