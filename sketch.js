    

class Block
    {
    constructor(x,y,width,height,speedX,speedY,clr) 
  {
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.speedX = speedX;
       this.speedY = speedY;
       this.clr = clr;
     }

display() 
   {
    fill(this.clr);
    rect(this.x,this.y,this.width,this.height,this.clr);
   }
    
move() 
   {
    this.x = this.x + this.speedX
    if (this.x > (windowWidth - this.width) || this.x <= 0) 
    {
      this.speedX = this.speedX * -1;
      this.clr = random(0,100);
    
    }
    this.y = this.y + this.speedY
    if (this.y > (windowHeight - this.height) || this.y <= 0)
    {
      this.speedY = this.speedY * -1;
      this.clr = random(0,100);
    }
   }
}

  
function keyPressed() {
  if (keyCode === 27) {
    value = 255
    r = 255
    g = 255
    b = 255
    sideblockY = 100
    sideblockY2 = 450
  }
  if (keyCode === 13) {
    sideblockY = sideblockY + 20
  }
  if (keyCode === 16) {
    sideblockY = sideblockY - 20
  }
  else {
    value = 255
  }
  }

let Block1 = new Block(30,10,2000,1100,10,10,255)
let Block2 = new Block(1500,10,500,500,10,10,255)
let Block3 = new Block(30,100,80,100,10,10,230)
let Block4 = new Block(30,200,80,100,12,12,230)
let Block5 = new Block(30,300,80,100,14,14,230)
let Block6 = new Block(1700,30,500,500,20,20,230)
let Block7 = new Block(1800,30,80,100,30,30,230)
let Block8 = new Block(1900,30,80,100,40,40,230)
value = 255
r = 255
g = 255
b = 255
rectY = 450
rectX = 1025
sideblockY = 100
sideblockY2 = 450


   
 function setup() {
   createCanvas(windowWidth, windowHeight);
  background(0)
       }

 function draw() {{

if (keyIsDown(32)) {
  value = random(0,400)
  r = random(0,255)
  g = random(0,255)
  b = random(0,255)
}
if (keyIsDown(38)) {
  rectY = rectY - 10
}
if (keyIsDown(37)) {
  rectX = rectX - 10
}
if (keyIsDown(39)) {
  rectX = rectX + 10
}
if (keyIsDown(40)) {
  rectY = rectY + 10
}
if (keyIsDown(13)) {
  sideblockY = sideblockY + 10
  sideblockY2 = sideblockY2 - 20
}
if (keyIsDown(16)) {
  sideblockY = sideblockY - 10
  sideblockY2 = sideblockY2 + 20
}

}

   Block1.display();
   //Block2.display();
   //Block3.display();
  // Block4.display();
   //Block5.display();
   Block6.display();
   //Block7.display();
   //Block8.display();
   Block1.move();
   //Block2.move();
   //Block3.move();
   //Block4.move();
   //Block5.move();
   Block6.move();
   //Block7.move();
   //Block8.move();

 



    for (let i = 0; i < windowWidth; i += 20)
 {
  line(windowWidth, 0, i*10, windowHeight)
  line(windowWidth/2, i, i*12, i*20)
  stroke(255)
  line(windowWidth/2, i/1.5, i*12, i*20)
  stroke(255)
  line(windowWidth/3, i, i*13, i*19)
  stroke(255)
  line(windowWidth/2, i/0.5, i*10, i*15)
  stroke(255)
  line(0,i*2,windowWidth, i);
  stroke(255)
  line(windowWidth/2,i/2, 0, i*3)
  stroke(255)
  line(0, windowHeight, windowWidth/3, i)
  stroke(255)
  line(windowWidth,value,value,windowHeight)
  stroke(r, g, b)
  line(value, windowWidth, windowHeight, value)
  stroke(r, g, b)
  line(i, i, value, windowHeight)
  stroke(r, g, b)
  line(i, windowWidth + value, windowWidth, value)
  stroke(r, g, b)
  line(value, value, i, i)


 
  
  
  //line(windowWidth/2, windowHeight/2, windowWidth, i^2+1)
  //line(windowWidth/2,0, windowWidth, i)
  //line(windowWidth/2, i, i*12, i*5)
  //line(0,windowHeight/2, i, i*2)

     }

  
  fill(255, 255, 255)
  textSize(40);
  //text("Hello World", windowWidth/2,windowHeight/2);
  text("Hello World!", rectX, rectY);
  textSize(20);
  text("press space", windowWidth/2, (windowHeight/2) + 50);
  text("press esc to reset", windowWidth/2, (windowHeight/2) + 100)
  text("press shift/enter", windowWidth/2, (windowHeight/2) + 150)
  text("press arrows", windowWidth/2, (windowHeight/2) + 200)
  textAlign(CENTER)
  fill(255,255,255)
  rect(70,sideblockY,100,450)
  fill(255,255,255)
  rect(sideblockY2,100,100,100)
  //rect(1825,sideblockY2,100,450)
  //arc(rectX, rectY, 80, 80, 0, PI - QUARTER_PI)

    }
