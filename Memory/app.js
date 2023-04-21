let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
ctx.moveTo(0, 0)

WIDTH = canvas.width
HEIGHT = canvas.height

class Card {
    constructor() {
        this.side = "img/back"
        this.front
        this.back
        this.x
        this.y
        this.val
    }
}

function loadImage(path) {
    let image = new Image()
    image.src = path
    image.onload
    return image
}

function main() {
    // Creating cards
    ctx.drawImage(loadImage("img/kh.png"), 10, 10)
}

main()