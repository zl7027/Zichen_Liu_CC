let x = 0
let y = 0

function setup(){
    createCanvas(windowWidth,windowHeight)
    noStroke()
}

function draw(){
    background(100,30)
    fill(255,100,150)

    x += (mouseX-x)*0.05
    y += (mouseY-y)*0.05

    ellipse(x,y,100,100)
}