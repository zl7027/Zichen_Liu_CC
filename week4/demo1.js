let spacing = 55

let frozen = false

let frozenX
let frozenY

let saveButton


function setup(){

    createCanvas(576, 384)

    noFill()
    stroke(0)
    strokeWeight(1)

    let instruction = createP("Click anywhere on the canvas to freeze / unfreeze the pattern.")

    instruction.style("font-size", "16px")

    saveButton = createButton("SAVE SVG")

    saveButton.mousePressed(saveSVG)

}


function draw(){

    background(245)

    drawPattern(mouseX, mouseY)

}


function drawPattern(mx, my){

    let mouseEffectX = map(mx, 0, width, -PI, PI)

    let mouseEffectY = map(my, 0, height, 10, 45)


    for(let y = spacing/2; y < height; y += spacing){

        for(let x = spacing/2; x < width; x += spacing){

            push()

            translate(x, y)

            let distance = dist(mx, my, x, y)

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


function mousePressed(){

    if(mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height){

        if(frozen == false){

            frozenX = mouseX
            frozenY = mouseY

            noLoop()

            frozen = true

        }else{

            loop()

            frozen = false

        }

    }

}


function saveSVG(){

    let saveX
    let saveY

    if(frozen == true){

        saveX = frozenX
        saveY = frozenY

    }else{

        saveX = mouseX
        saveY = mouseY

    }

    beginRecordSVG(this, "generative-pattern.svg")

    noFill()
    stroke(0)
    strokeWeight(1)

    drawPattern(saveX, saveY)

    endRecordSVG()
}