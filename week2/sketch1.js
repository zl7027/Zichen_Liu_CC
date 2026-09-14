let diameter = 50
let speed = 3

function setup(){
    createCanvas(windowWidth,windowHeight)
    noStroke()
}

function draw(){
    background(100)
    fill(200,100,0)
    ellipse(width/2,height/2,diameter,diameter)

    diameter += speed

    if(diameter > 300){
        speed = -speed
    }
    if(diameter < 50){
        speed = -speed
    }
}