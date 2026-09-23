let lerpedMouseX = 0
let lerpedMouseY = 0

let r = 0
let g = 0
let b = 0

let angle = 0

function setup(){

    createCanvas(windowWidth, windowHeight)

    rectMode(CENTER)
    angleMode(DEGREES)

}

function draw(){

    background(0, 25)

    lerpedMouseX = lerp(lerpedMouseX, mouseX, 0.08)
    lerpedMouseY = lerp(lerpedMouseY, mouseY, 0.08)

    let targetR = map(mouseX, 0, width, 0, 255)
    let targetG = map(mouseY, 0, height, 255, 0)
    let targetB = map(mouseX, 0, width, 255, 0)

    r = lerp(r, targetR, 0.05)
    g = lerp(g, targetG, 0.05)
    b = lerp(b, targetB, 0.05)


    let speed = dist(mouseX, mouseY, pmouseX, pmouseY)
    let extraSize = map(speed, 0, 100, 0, 100)

    push()
    translate(lerpedMouseX, lerpedMouseY)

    noFill()
    stroke(r, g, b)
    strokeWeight(3)

    rotate(angle)

    rect(0, 0, 50 + extraSize)
    rect(0, 0, 100 + extraSize)
    rect(0, 0, 150 + extraSize)

    pop()


    angle += 1
}