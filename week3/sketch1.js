let lerpedMouseX = 0
let lerpedMouseY = 0

function setup() {

    createCanvas(windowWidth, windowHeight)

    rectMode(CENTER)
    angleMode(DEGREES)

}

function draw() {

    background(0)

    stroke(255)
    strokeWeight(1.5)
    noFill()

    lerpedMouseX = lerp(lerpedMouseX, mouseX, 0.05)
    lerpedMouseY = lerp(lerpedMouseY, mouseY, 0.05)

    let rotation = map(lerpedMouseX, 0, width, 0, 180)
    let spacing = map(lerpedMouseY, 0, height, 10, 30)


    translate(width / 2, height / 2)

    push()

    rotate(rotation)

    for (let i = 0; i < 36; i++) {

        push()

        rotate(i * 10)

        for (let j = 0; j < 6; j++) {

            rect(100 + j * spacing, 0, 80 + j * 10, 20)

        }

        pop()
    }

    pop()


    push()

    rotate(-rotation)

    for (let i = 0; i < 24; i++) {

        ellipse(200, 0, 80, 30)

        rotate(15)

    }

    pop()


    push()

rotate(rotation)

for(let i = 0; i < 30; i++){

    rect(0, 0, 20 + i * 2, 20 + i * 2)

    rotate(12)

}

pop()

}