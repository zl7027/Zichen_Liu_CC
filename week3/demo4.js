let r = 0

let w;
let numRects = 20;

function setup(){

    createCanvas(800,800)

    w = width/numRects


    rectMode(CENTER)
    angleMode(DEGREES)

    background(0)
    fill(50)
    strokeWeight(2)
    stroke(255)

    frameRate(2)
   
}

function draw(){

    background(0)

    //translate(20,20)

    for(let x =0; x<20; x++){
        push()
        translate(w*x,0,0)
        rect(0,0,w/2,100);

        pop()
    }
}