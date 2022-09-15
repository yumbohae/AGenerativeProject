    

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
      this.clr = random(255);
    
    }
    this.y = this.y + this.speedY
    if (this.y > (windowHeight - this.height) || this.y <= 0)
    {
      this.speedY = this.speedY * -1;
      this.clr = random(0,255);
    }
   }
}

let Block1 = new Block(10,10,250,250,10,10,255)
let Block2 = new Block(10,10,250,250,10,10,255)
let Block3 = new Block(30,100,80,100,10,10,230)
let Block4 = new Block(30,200,80,100,12,12,230)
let Block5 = new Block(30,300,80,100,14,14,230)
let Block6 = new Block(1000,30,80,100,10,10,230)
let Block7 = new Block(1100,30,80,100,12,12,230)
let Block8 = new Block(1200,30,80,100,14,14,230)
   
   
 function setup() {
   createCanvas(windowWidth, windowHeight);
   background(0);
       }

 function draw() {

    Block1.display();
    //Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block1.move();
   // Block2.move();
    Block3.move();
    Block4.move();
    Block5.move();
    Block6.move();
    Block7.move();
    Block8.move();

    for (let i = 0; i < windowWidth; i += 20)
 {
  line(0,i*2,windowWidth, i);
  stroke(255)
  line(windowWidth/2,i/2, 0, i*3)
  stroke(255)
  line(0, windowHeight, windowWidth/3, i)
  line(windowWidth/2, windowHeight/2, windowWidth, i^2+1)

     }
    }
