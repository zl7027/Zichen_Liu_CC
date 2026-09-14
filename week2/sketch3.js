
let y1 = 0;
let y2=-200
let y3=-400
let x1;
let x2;
let x3;

function setup(){
    createCanvas(windowWidth,windowHeight)

    x1 = width/4
    x2 = width/2
    x3 = width*3/4

    rectMode(CENTER)
  
    strokeWeight(3);
}
function draw(){

    background(10,20,40,40);
    fill(255,100,100);
    circle(x1,y1,200,200);

    fill(100,255,200);
    circle(x2,y2,150,150);

    fill(100,150,255);
    circle(x3,y3,100,100);

    y1+=5
    y2+=8
    y3+=10

    x1+=2
    x2+=sin(y2*0.03)*3
    x3+=1.5

  if(y1>height+100){
  y1=-100
  x1=random(width)
}

  if(y2>height+100){
  y2=-100
  x2=random(width)
}

  if(y3>height+100){
  y3=-100
  x3=random(width)
}
}