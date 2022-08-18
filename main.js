const canvas = new fabric.Canvas('myCanvas');

var blockImageWidth = 30;
var blockImageHeight = 30;

var playerX = 10;
var playerY = 10;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject)
    });
}

window.addEventListener("keydown", keyDown);

function keyDown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey) {
        if (keyPressed == 189 && (blockImageHeight > 10)) {
            console.log("Diminui o tamanho do bloco");
            changeSize(-10);
        }
        if (keyPressed == 187) {
            console.log("Aumenta o tamanho do bloco");
            changeSize(10);
        }
    }
    if (keyPressed == 38) {
        console.log("cima");
        movePlayer(0, -1)
    }
}

function changeSize(size) {
    blockImageWidth += size;
    blockImageHeight += size;
    document.getElementById("larguraAtual").innerHTML = blockImageWidth;
    document.getElementById("alturaAtual").innerHTML = blockImageHeight;
}

function movePlayer (x, y) {
    playerX += x;
    playerY += y;

    playerUpdate();
}