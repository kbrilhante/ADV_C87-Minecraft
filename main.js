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
    const keyPressed = e.keyCode;
    const passo = 10;
    if (e.shiftKey) {
        if (keyPressed == 189 && (blockImageHeight > 10)) {
            console.log("Diminui o tamanho do bloco");
            changeSize(-passo);
        }
        if (keyPressed == 187) {
            console.log("Aumenta o tamanho do bloco");
            changeSize(passo);
        }
    }

    if (keyPressed == 38) {
        console.log("cima");
        movePlayer(0, -passo);
    } else if (keyPressed == 37) {
        console.log("esquerda");
        movePlayer(-passo, 0);
    } else if (keyPressed == 40) {
        console.log("baixo");
        movePlayer(0, passo);
    } else if (keyPressed == 39) {
        console.log("direita");
        movePlayer(passo, 0);
    }

    if (keyPressed == s) {}
}

function changeSize(size) {
    blockImageWidth += size;
    blockImageHeight += size;
    document.getElementById("larguraAtual").innerHTML = blockImageWidth;
    document.getElementById("alturaAtual").innerHTML = blockImageHeight;
}

// function movePlayer (x, y) {
//     playerX += x;
//     playerY += y;

    
//     playerUpdate();
// }