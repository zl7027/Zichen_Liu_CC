let spacing = 48

let frozen = false

let frozenX
let frozenY

let saveButton


function setup(){

    let canvas = createCanvas(576, 384)

    canvas.parent("canvas-container")

    noFill()
    stroke(0)
    strokeWeight(0.8)


    saveButton = createButton("SAVE SVG")

    saveButton.parent("button-container")

    saveButton.mousePressed(saveSVG)

}


function draw(){

    background(245)

    drawPattern(mouseX, mouseY)

}


function drawPattern(mx, my){

    let waveAmount = map(mx, 0, width, 0.2, 1.5)

    let shapeSize = map(my, 0, height, 15, 40)


    for(let y = 25; y < height; y += spacing){

        for(let x = 25; x < width; x += spacing){

            push()


            let d = dist(mx, my, x, y)


            let waveX = sin(y * 0.04 + d * 0.015) * 18 * waveAmount

            let waveY = sin(x * 0.03 + d * 0.01) * 12


            translate(
                x + waveX,
                y + waveY
            )

            let angle = sin(
                x * 0.02 +
                y * 0.02 +
                d * 0.015
            )

            rotate(angle)


            let size = shapeSize + sin(d * 0.03) * 12


            ellipse(
                0,
                0,
                size,
                size * 2.4
            )


            rotate(PI / 4)

            ellipse(
                0,
                0,
                size,
                size * 2.4
            )


            rotate(PI / 4)

            ellipse(
                0,
                0,
                size,
                size * 2.4
            )


            rotate(PI / 4)

            ellipse(
                0,
                0,
                size * 0.55,
                size * 1.6
            )


            pop()

        }

    }

}


function mousePressed(){

    if(
        mouseX >= 0 &&
        mouseX <= width &&
        mouseY >= 0 &&
        mouseY <= height
    ){

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


    beginRecordSVG(
        this,
        "generative-pattern.svg"
    )


    noFill()
    stroke(0)
    strokeWeight(0.8)


    drawPattern(
        saveX,
        saveY
    )


    endRecordSVG()

}