let r =0

function setup(){

    createCanvas(windowWidth,windowHeight)

    rectMode(CENTER)
    angleMode(DEGREES)

    background(0)
    noFill()
    strokeWeight(2)
    stroke(255)

    frameRate(8)
   
}

function draw(){

    background(0)

    for(let i =0; i<100; i+=5){
        push()
        translate(random(0,width),random(0,height))

        rect(0,0, random(100), random(100));

        pop()
    }
}