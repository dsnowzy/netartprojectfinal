let posx = 200
let posy = 100
let col = 0
let cSize = 10


function setup() {
  createCanvas(500,500);



}

function draw(){
  background(180,0,180)

fill(0,250,0)
strokeWeight(6)
stroke(255,255,255)
rect(0,0,250)

fill(0,250,0)
strokeWeight(6)
stroke(255,255,255)
rect(100,150,200)

fill(0,250,0)
strokeWeight(6)
stroke(255,255,255)
rect(0,0,250)

fill(0,250,0)
strokeWeight(6)
stroke(255,255,255)
rect(225,225,300)

fill(180,0,180)
stroke(0,250,0)

if(mouseX > 250){
  rect(250,0,250,500)
}
else{
  rect(0,0,250,500)
}



}