//Rectangle variables
let xRect = 20
let yRect = 150
let rectBase = 10
let rectHight = 100

//Ball variables
let xBall = 300
let yBall = 200
let diamBall = 30

//Ball speed variables
let speedXBall = 8
let speedYBall = 8

function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  background("#1A0107");
  
  showBall()
  motionBall()
  veriffyColision()
  showRect ()
  movRect ()
  
  //Rectangle1
  function showRect () {
    
    rect(xRect,yRect,rectBase,rectHight)
    
  }
  
  function movRect () {
    
    if (keyIsDown (UP_ARROW)) {
      
      yRect -= 10
      
    }

    if (keyIsDown (DOWN_ARROW)) {
      
      yRect += 10
      
    }
    
  }
  
  //Ball
  function showBall() {
    
    fill("#B8F6FF")
    circle(xBall,yBall,diamBall)
    
  }
  
  function motionBall() {
    
      xBall += speedXBall
      yBall += speedYBall
      
  }
  
  function veriffyColision() {
    
      if (xBall + 15 > width || xBall - 15 < 0) {
    
        speedXBall *= -1
    
      }
  
      if (yBall + 15 > height || yBall - 15 < 0) {
        
        speedYBall *= -1
    
      }
    
  }
  
}
