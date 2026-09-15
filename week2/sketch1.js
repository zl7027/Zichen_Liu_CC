function setup(){
  createCanvaws(windowWidth,windowHeight)

  background(20)
  strokeWeight(5)
}

function draw(){
}

function mouseDragged(){

  let r=map(mouseX,0,width,100,255)
  let b=map(mouseY,0,height,255,100)

  stroke(r,100,b)
  strokeWeight(8)
  line(pmouseX,pmouseY,mouseX,mouseY)

  stroke(255,180)
  strokeWeight(2)
  line(pmouseX,pmouseY,mouseX,mouseY)
}

function mousePressed(){
  noFill()
  stroke(255)
  strokeWeight(2)
  ellipse(mouseX,mouseY,30,30)
}

function keyPressed(){
  background(20)
}