// move cursor over the points to change size

var img;
var WIDTH;
var HEIGHT;
var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("assets/s.jpg");

}

function setup() {
  WIDTH = img.width;
  HEIGHT = img.height;
  smallPoint = 4;
  largePoint = 40;
  createCanvas(WIDTH, HEIGHT);
  imageMode(CENTER);
  noStroke();
  // background(255);
  // https://p5js.org/reference/#/p5/loadPixels
  img.loadPixels();
}

function draw() {

  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  for (var i = 0; i < 10; i++) {
    // floor because random gives decimal
    var x = floor(random(img.width));
    var y = floor(random(img.height));
    var pix = img.get(x, y);
    fill(pix, 128);
    rect(x, y, pointillize, pointillize);
  }
}

function keyPressed() {
  // 83 is key code for key "s"
  // http://keycode.info/
  if (keyCode == 83) {
    console.log("got here");
    save('myCanvas.jpg');
  }
}