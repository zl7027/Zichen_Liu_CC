
let dancers = []
let time = 0
let caughtCount = 0
let gameFinished = false

let lightX = 560
let lightY = 35
let lightBottom = 390
let lightWidth = 75

function setup(){
    createCanvas(700, 500)
    frameRate(30)
    imageMode(CENTER)
    textAlign(CENTER)
}

function draw(){
    background(12, 10, 30)

    time++

    let r = sin(time * 0.03) * 100 + 155
    let g = sin(time * 0.03 + 2) * 100 + 155
    let b = sin(time * 0.03 + 4) * 100 + 155

    noStroke()

    for(let i = 8; i > 0; i--){
        fill(r, g, b, 3)
        triangle(
            lightX, lightY,
            lightX-lightWidth-i*5, lightBottom,
            lightX+lightWidth+i*5, lightBottom
        )
    }

    fill(r, g, b, 30)
    triangle(
        lightX, lightY,
        lightX-lightWidth, lightBottom,
        lightX+lightWidth, lightBottom
    )

    fill(r, g, b, 50)
    triangle(
        lightX, lightY,
        lightX-lightWidth*0.6, lightBottom,
        lightX+lightWidth*0.6, lightBottom
    )

    for(let i = 5; i > 0; i--){
        fill(r, g, b, 8)
        ellipse(lightX, lightBottom, lightWidth*2+i*12, 35+i*7)
    }

    fill(r, g, b, 90)
    ellipse(lightX, lightBottom, lightWidth*2, 35)

    fill(65)
    rectMode(CENTER)
    rect(lightX, lightY-10, 55, 35, 7)

    fill(r, g, b)
    ellipse(lightX, lightY+10, 35, 12)

    for(let i = dancers.length-1; i >= 0; i--){

        let d = dancers[i]

        if(d.caught == false){

            d.x += d.xV
            d.y += d.yV

            if(d.x < d.size/2 || d.x > width-d.size/2){
                d.xV *= -1
            }

            if(d.y < d.size/2 || d.y > height-d.size/2){
                d.yV *= -1
            }

            d.trail.push({
                x: d.x,
                y: d.y
            })

            if(d.trail.length > 20){
                d.trail.shift()
            }

            let beamWidth = map(
                constrain(d.y, lightY, lightBottom),
                lightY, lightBottom,
                0, lightWidth
            )

            if(d.y + d.size/2 > lightY &&
               d.y - d.size/2 < lightBottom &&
               abs(d.x-lightX) < beamWidth + d.size*0.3){

                d.caught = true
                caughtCount++

                if(caughtCount >= 15){
                    gameFinished = true
                }
            }

        } else {

            d.alpha -= 7
            d.glow += 3

            if(d.alpha <= 0){
                dancers.splice(i, 1)
                continue
            }
        }

        for(let j = 0; j < d.trail.length; j++){

            let p = d.trail[j]
            let a = map(j, 0, d.trail.length, 0, 140)
            let s = map(j, 0, d.trail.length, 3, d.size*0.3)

            noStroke()
            fill(d.r, d.g, d.b, a*0.2)
            ellipse(p.x, p.y, s*2)

            fill(d.r, d.g, d.b, a)
            ellipse(p.x, p.y, s*0.5)
        }

        if(d.gif){

            push()
            translate(d.x, d.y)

            if(d.xV < 0){
                scale(-1, 1)
            }

            if(d.caught){
                tint(r, g, b, d.alpha)
            } else {
                noTint()
            }

            image(d.gif, 0, 0, d.size, d.size)
            noTint()

            if(d.caught){
                noFill()
                stroke(r, g, b, d.alpha)
                strokeWeight(3)
                ellipse(0, 0, d.size+d.glow)
            }

            pop()
        }
    }

    noStroke()
    fill(255)
    textSize(27)
    text("TOOTHLESS DANCE PARTY", width/2, 38)

    textSize(15)
    text("Click anywhere to summon a dancing Toothless!", width/2, 65)

    textAlign(LEFT)
    textSize(18)
    fill(r, g, b)
    text("CAUGHT: " + caughtCount + " / 15", 20, 105)
    textAlign(CENTER)

    if(gameFinished){

        fill(255)
        textSize(24)
        text("PARTY COMPLETE!", width/2, height-35)

        if(frameCount % 30 == 0){
            window.location.href = "result.html"
        }
    }
}

function mousePressed(){

    if(gameFinished){
        return
    }

    if(mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height){
        return
    }

    let size = random(65, 125)
    let corner = floor(random(4))

    let x = size/2
    let y = size/2

    if(corner == 1 || corner == 3){
        x = width-size/2
    }

    if(corner == 2 || corner == 3){
        y = height-size/2
    }

    let xV = random(2, 4)
    let yV = random(2, 4)

    if(x > width/2){
        xV *= -1
    }

    if(y > height/2){
        yV *= -1
    }

    let d = {
        x: x,
        y: y,
        xV: xV,
        yV: yV,
        size: size,
        gif: null,
        caught: false,
        alpha: 255,
        glow: 0,
        trail: [],
        r: random(100, 255),
        g: random(100, 255),
        b: random(150, 255)
    }

    dancers.push(d)

    loadImage("toothless.gif", function(img){
        d.gif = img
        if(img.play){
            img.play()
        }
    })
}

function keyPressed(){
    if(key == 'r' || key == 'R'){
        dancers = []
        caughtCount = 0
        gameFinished = false
    }
}
