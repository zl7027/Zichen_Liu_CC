function setup(){
    createCanvas(windowWidth,windowHeight)

    rectMode(CNETER)
    angleMode(DEGREES)
}

function draw(){
    
    background(0)
    noFill()
    strokeWeight(2)
    stroke(255)

    translate(width/2,height/2)
    rotate(r)
    rect(0,0,50)
    
    translate(200,200)
    rotate(r)
    rect(0,0,50)

    line(0,0,0,200)
    translate(0,200)
    rotate(r)
    rect(0,0,50)


    r++
}