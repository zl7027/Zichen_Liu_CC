let x,y;
let diameter=150
let yV=8, xV=6

function setup(){
    createCanvas(windowWidth,windowHeight)

    noStroke();
    y=diameter/2
    x=width/2
}

function draw(){

    background(0,20);

    let r=map(y,diameter/2,height-diameter/2,50,255);
    let g=map(y,diameter/2,height-diameter/2,255,50);
    let b=map(y,diameter/2,height-diameter/2,50,255);
    
    fill(r,g,b,30)
    ellipse(x,y,diameter+50)

    fill(r,g,b,60)
    ellipse(x,y,diameter)

    fill(r,g,b)
    ellipse(x,y,diameter/3)

    x+=xV
    y+=yV

    diameter=map(y,0,height,80,180)

   if(y>height - diameter/2 || y<diameter/2){
    yV = -yV;
  }

   if(x>width - diameter/2 || x<diameter/2){
    xV = -xV;
  }
}