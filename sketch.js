var gato
var gato_imagem1
var gato_animacao2
var gato_imagem3

var rato
var rato_imagem1
var rato_animacao2
var rato_imagem3

var fundo
function preload() {
    //load the images here
  gato_imagem1 = loadImage("images/cat1.png")
  gato_animacao2 = loadAnimation("images/cat2.png","images/cat3.png")
  gato_imagem3 = loadImage("images/cat4.png")

  rato_imagem1 = loadImage("images/mouse1.png")
  rato_animacao2 = loadAnimation("images/mouse2.png","images/mouse3.png")
  rato_imagem3 = loadImage("images/mouse4.png")
 
  fundo = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     gato = createSprite(850, 700)
     rato = createSprite(100, 700)
     gato.addImage ("gato parado",gato_imagem1)
     gato.addAnimation ("gato animado",gato_animacao2)
     gato.addImage ("final do gato",gato_imagem3)
     rato.addImage ("rato parado",rato_imagem1)
     rato.addAnimation ("rato animado",rato_animacao2)
     rato.addImage ("final do rato",rato_imagem3)
     gato.scale = 0.2
     rato.scale = 0.2
    
}

function draw() {

    background(fundo);
    //Write condition here to evalute if tom and jerry collide
if (gato.x-rato.x < (gato.width-rato.width)/2) {
    gato.velocityX = 0
    gato.x = 150
    gato.changeAnimation ("final do gato")
    rato.changeAnimation ("final do rato")
}
    drawSprites();
}


function keyPressed(){
if (keyCode === LEFT_ARROW){
    gato.velocityX = -5
    gato.changeAnimation ("gato animado")
    rato.changeAnimation ("rato animado")
}
  //For moving and changing animation write code here


}
