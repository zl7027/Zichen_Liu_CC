
let f
let flowers = []

function setup(){

    createCanvas(700, 500)
    background(12, 10, 30)
    angleMode(DEGREES)
    textAlign(CENTER)

    for(let i = 0; i < 50; i++){
        flowers.push(new Flower(random(width), random(height)))
    }

}

function draw(){

    background(12, 10, 30)

    for(let i = 0; i < flowers.length; i++){

        let d = map(mouseX, 0, width, -5, 5)
        flowers[i].move(d)
        flowers[i].display()

    }

    fill(255)
    noStroke()
    textSize(30)
    text("DANCE PARTY COMPLETE!", width/2, 45)

    textSize(18)
    text("15 Toothless caught in the spotlight!", width/2, 78)

    textSize(16)
    text("Drag to add flowers | Press R to restart", width/2, height-25)

}

function mouseDragged(){

    flowers.push(new Flower(mouseX, mouseY))

}

function keyPressed(){

    if(key == 'r' || key == 'R'){
        window.location.href = "week6.html"
    }

}

class Flower{

    constructor(x, y){

        this.x = x
        this.y = y
        this.numPetals = random(3, 16)
        this.petalWidth = random(20, 40)
        this.petalLength = random(30, 80)
        this.centerDiameter = random(30, 40)
        this.centerCol = color(random(255), random(255), random(255))
        this.petalCol = color(random(255), random(255), random(255))
        this.xV = random(-5, 5)
        this.yV = random(-5, 5)
        this.rotations = 0
        this.rV = random(-5, 5)

    }

    move(d){

        this.x += this.xV
        this.y += this.yV
        this.rotations += this.rV * d

        if(this.x < 0 || this.x > width){
            this.xV *= -1
        }

        if(this.y < 0 || this.y > height){
            this.yV *= -1
        }

    }

    display(){

        push()

        translate(this.x, this.y)
        rotate(this.rotations)

        noStroke()
        fill(this.petalCol)

        for(let r = 0; r < this.numPetals; r++){

            push()

            rotate((360/this.numPetals)*r)
            translate(this.petalLength/2, 0)
            ellipse(0, 0, this.petalLength, this.petalWidth)

            pop()

        }

        fill(this.centerCol)
        ellipse(0, 0, this.centerDiameter)

        pop()

    }

}
