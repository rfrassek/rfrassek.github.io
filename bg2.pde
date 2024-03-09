// The next line is needed if running in JavaScript Mode with Processing.js
/* @pjs preload="pro1.png"; */ 
/* @pjs preload="pro2.png"; */
int imgX, imgY;
PImage img,bg;
int mX, mY;

void setup() {
  size(636, 300);
  // The background image must be the same size as the parameters
  // into the size() method. In this program, the size of the image
  // is 640 x 360 pixels.
  bg = loadImage("pro1.png");
  img = loadImage("pro2.png");
 centerImage();
}

void draw() {
  background(bg);
 if(mousePressed){ // is the mousebutton being held?
   imgX = mouseX-mX;
   imgY = mouseY-mY;
 }
 image(img,imgX,imgY);
}

// mousepressed
void mousePressed()
{
 // set variables for holding mouseposition offset
 // to the image
 mX = mouseX-imgX;
 mY = mouseY-imgY;
}

// any key pressed, will re-center the image
void keyPressed()
{
centerImage();
}

// center image function
void centerImage()
{
 imgX = 30;
 imgY = 480;
} 

