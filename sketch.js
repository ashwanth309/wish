var bg;
var bg2;
var nanna1, nanna1Image;
var nanna2, nanna2Image;
var nanna3, nanna3Image;
var snow = [];
var drop = [];


function preload() {
  bg = loadImage("house.jpg");
  bg2 =loadImage("bg2.jpeg")
  nanna1Image = loadImage("nanna1.png");
  nanna2Image = loadImage("nanna2.png");
  nanna3Image = loadImage("nanna3.png");
  
}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  //createSprite(400, 200, 50, 50);
  
  nanna1 = createSprite(950,560);
  nanna1.addImage(nanna1Image);
  nanna1.scale = 0.5;

  nanna2 = createSprite(600,550);
  nanna2.addImage(nanna2Image);
  nanna2.scale = 0.4;

  nanna3 = createSprite(200,550);
  nanna3.addImage(nanna3Image);
  nanna3.scale = 0.6;
 


  for (var i = 0; i < 15; i++) {
    snow.push(new Snow());
  }

  for (var i = 0; i < 15; i++) {
    drop.push(new Drop());
  }
}

function draw() {
 background(bg);
 
  
  stroke (4);
  textSize(30);
  fill ("blue")
  text("HAPPY BIRTHDAY  TO YOU NANNA",400,100);

  drawSprites();

  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
    snow[i].update();
  }

  for (var i = 0; i < drop.length; i++) {
    drop[i].display();
    drop[i].update();
  }

  
}

