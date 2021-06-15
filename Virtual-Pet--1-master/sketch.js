//Create variables here
var dog;
var happydog;

var database;

var foods,foodstack;

function preload() {
	//load images here
  dogImage = loadImage("images/dogImg.png")
  dog1img = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale = 0.15;

  foodstock = database.ref('food');
  foodstock.on("value",readStock);
  textSize(20)
}


function draw() {  

background(46,139,87);

if(keyWentDown(UP_ARROW)) {
writeStock(foods);
dog.addImage(dog1img)
}

  drawSprites();
  fill(255,255,254)
  stroke("black");
  text("foodremaning:"+foods,170,200)
  textSize(13);
  text("Note:press up key to feed milk",130,10,300,20)

  //add styles here

}

function readStock(data) {
  foods = data.val();

}

function writeStock(x) {
  if(x<=0) {
    x = 0;
  }
  else{
    x = x-1
  }

  database.ref('/').update({
    food:x
  })
}

