
let rows = 25
let cols = 25
let boxes = []

let currentColor = 1

let colors = [
    [35, 35, 45],
    [255, 130, 160],
    [255, 200, 100],
    [150, 200, 255],
    [170, 230, 180],
    [200, 170, 255]
]

function setup(){
    createCanvas(600, 600)

    let index = 0

    for(let x = 0; x < cols; x++){
        for(let y = 0; y < rows; y++){
            boxes[index] = 0
            index++
        }
    }

    noStroke()
}

function draw(){
    background(20)

    let index = 0

    let beadSize = width / cols

    for(let x = 0; x < cols; x++){
        for(let y = 0; y < rows; y++){

            let xPos = x * beadSize + beadSize/2
            let yPos = y * beadSize + beadSize/2

            if(mouseIsPressed &&
               mouseX > x*beadSize &&
               mouseX < (x+1)*beadSize &&
               mouseY > y*beadSize &&
               mouseY < (y+1)*beadSize){

                boxes[index] = currentColor
            }

            let c = colors[boxes[index]]

            fill(c[0], c[1], c[2])

            ellipse(xPos, yPos, beadSize*0.85)

            fill(255, 255, 255, 35)

            ellipse(xPos-beadSize*0.15,
                    yPos-beadSize*0.15,
                    beadSize*0.25)

            index++
        }
    }
}

function keyPressed(){

    if(key == '1'){
        currentColor = 1
    }

    if(key == '2'){
        currentColor = 2
    }

    if(key == '3'){
        currentColor = 3
    }

    if(key == '4'){
        currentColor = 4
    }

    if(key == '5'){
        currentColor = 5
    }

    if(key == '0'){
        currentColor = 0
    }

    if(key == ' '){
        for(let i = 0; i < boxes.length; i++){
            boxes[i] = 0
        }
    }
}
