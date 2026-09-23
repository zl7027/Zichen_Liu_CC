let r = 0

let lerpedMouseX = 0
let lerpedMouseY = 0


function setup(){

    createCanvas(windowWidth, windowHeight)

    rectMode(CENTER)
    angleMode(DEGREES)

    background(0)

}


function draw(){

    background(0, 12)


    lerpedMouseX = lerp(lerpedMouseX, mouseX, 0.05)

    lerpedMouseY = lerp(lerpedMouseY, mouseY, 0.05)

    let radius = map(lerpedMouseX, 0, width, 100, width/2)

    let stretch = map(lerpedMouseY, 0, height, 20, 150)

    translate(width/2, height/2)


    push()

    rotate(r)

    translate(radius, 0)

    noStroke()

    fill(120, 180, 255, 30)
    ellipse(0, 0, stretch * 3)

    fill(150, 200, 255, 80)
    ellipse(0, 0, stretch * 1.5)

    fill(255)
    ellipse(0, 0, 8)

    pop()


    push()

    rotate(-r * 1.3 + 180)

    translate(radius * 0.7, 0)

    noStroke()

    fill(255, 100, 200, 30)
    ellipse(0, 0, stretch * 2)

    fill(255, 150, 220, 80)
    ellipse(0, 0, stretch)

    fill(255)
    ellipse(0, 0, 6)

    pop()



    push()

    rotate(r * 0.7 + 120)

    translate(radius * 0.4, 0)

    noStroke()

    fill(100, 255, 200, 40)
    ellipse(0, 0, stretch)

    fill(255)
    ellipse(0, 0, 5)

    pop()


    r += 1

}