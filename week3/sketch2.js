let w, h
let numRects = 40

let lerpedMouseX = 0
let lerpedMouseY = 0

function setup(){

    createCanvas(windowWidth, windowHeight)

    w = width / numRects
    h = height / numRects

    rectMode(CENTER)
    angleMode(DEGREES)

}

function draw(){

    background(0)

    noStroke()


    lerpedMouseX = lerp(lerpedMouseX, mouseX, 0.1)
    lerpedMouseY = lerp(lerpedMouseY, mouseY, 0.1)


    translate(w/2, h/2)


    for(let x = 0; x < numRects; x++){

        for(let y = 0; y < numRects; y++){

            let posX = w * x
            let posY = h * y

            let d = dist(lerpedMouseX, lerpedMouseY, posX, posY)

            let force = map(d, 0, 200, 1, 0)
            force = constrain(force, 0, 1)


            let moveX = posX - lerpedMouseX
            let moveY = posY - lerpedMouseY


            moveX = moveX * force * 0.8
            moveY = moveY * force * 0.8

            let i = map(d, 0, 300, 2, 8)
            i = constrain(i, 2, 8)

            let r = map(x, 0, numRects, 80, 255)
            let g = map(y, 0, numRects, 255, 80)
            let b = map(d, 0, 500, 255, 100)

            fill(r, g, b)

            push()

            translate(posX + moveX, posY + moveY)

            ellipse(1, 1, i, i)

            pop()

        }
    }
}