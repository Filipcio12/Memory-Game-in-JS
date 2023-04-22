let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);

WIDTH = canvas.width;
HEIGHT = canvas.height;

class Card {
    constructor() {
        this.side = back;
        this.front;
        this.back = "backR.png";
        this.x;
        this.y;
        this.val;
    }
}

function loadImage(path) {
    let image = new Image();
    image.src = path;
    image.onload;
    return image;
}

function main() {
    let paths = [];

    for (let i = 1; i < 14; i++) {
        paths.push("Cards/" + i + "C.png");
        paths.push("Cards/" + i + "D.png");
        paths.push("Cards/" + i + "H.png");
        paths.push("Cards/" + i + "S.png");
    }

    let n = Math.floor(Math.random() * 51);
    image = new Image();
    image.src = paths[n];
    image.onload = () => {
        ctx.drawImage(image, 10, 10);
    }
}

main()