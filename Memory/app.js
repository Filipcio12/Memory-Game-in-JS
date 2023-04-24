let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);

back_img = new Image();
back_img.src = 'backR.png';
back_img.onload;
    
const card_width = back_img.width;
const card_height = back_img.height;

class Card {
    constructor(x, y) {
        this.side = 'back';
        this.back = back_img;
        this.front;
        this.x = x;
        this.y = y;
    }
    draw() {
        if (this.side == 'back') {
            ctx.drawImage(this.back, this.x, this.y);
        }
        else if (this.side == 'front') {
            ctx.drawImage(this.front, this.x, this.y);
        }
        else {
            ctx.beginPath();
            ctx.rect(this.x, this.y, card_width, card_height);
            ctx.fillStyle = "white";
            ctx.fill();
        }
    }
}

function main() {
    let paths = [];

    for (let i = 1; i < 14; i++) {
        paths.push("Cards/" + i + "C.png");
        paths.push("Cards/" + i + "D.png");
        paths.push("Cards/" + i + "H.png");
        paths.push("Cards/" + i + "S.png");
    }

    // Get 8 random paths
    let img = [];
    for (let i = 0; i < 8; i++) {
        let n = Math.floor(Math.random() * 51);
        while (img.includes(paths[n])) {
            n = Math.floor(Math.random() * 51);
        }
        img.push(paths[n]);
    }

    // Create cards with no fronts
    let cards = [];
    let x = 10, y = 10;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let card = new Card(x + (card_width + x) * i,
                                y + (card_height + y) * j);
            cards.push(card);
        }
    }

    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fill();

    for (let i in cards) {
        cards[i].draw();
    }
}

main()