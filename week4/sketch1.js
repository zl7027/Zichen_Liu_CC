let spacing = 55
let freeze = false

let freezeButton
let saveButton

function setup(){

    createCanvas(576, 384)

    background(245)

    noFill()
    stroke(20)
    strokeWeight(1)

    freezeButton = createButton("FREEZE")
    freezeButton.position(10, 400)
    freezeButton.mousePressed(freezeDrawing)

    saveButton = createButton("SAVE SVG")
    saveButton.position(90, 400)
    saveButton.mousePressed(saveSVG)

}


function draw(){

    background(245)

    let mouseEffectX = map(mouseX, 0, width, -PI, PI)
    let mouseEffectY = map(mouseY, 0, height, 10, 45)

    for(let y = spacing/2; y < height; y += spacing){

        for(let x = spacing/2; x < width; x += spacing){

            push()

            translate(x, y)

            let distance = dist(mouseX, mouseY, x, y)

            let angle = sin(distance * 0.02) * mouseEffectX

            rotate(angle)

            let size = mouseEffectY + sin(distance * 0.03) * 15

            ellipse(0, 0, size, size * 2)

            rotate(PI / 3)
            ellipse(0, 0, size, size * 2)

            rotate(PI / 3)
            ellipse(0, 0, size, size * 2)

            pop()

        }

    }

}


function freezeDrawing(){

    if(freeze == false){

        noLoop()

        freeze = true

        freezeButton.html("UNFREEZE")

    }else{

        loop()

        freeze = false

        freezeButton.html("FREEZE")

    }

}


function saveSVG(){

    beginRecordSVG(this, "generative-pattern.svg")

    redraw()

    endRecordSVG()

}