let Sa;
let Re;
let Ga;
let Ma;
let Pa;
let Dha;
let Ni;

var a = 'Sa';
var b = 'Re';
var c = 'Ga';
var d = 'Ma';
var e = 'Pa';
var f = 'Dha';
var g = 'Ni';

function preload() {
  Sa = loadSound("C.mp3");
  Re = loadSound("D.mp3");
  Ga = loadSound("E.mp3");
  Ma = loadSound("F.mp3");
  Pa = loadSound("G.mp3");
  Dha = loadSound("A.mp3");
  Ni = loadSound("B.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background('orange');
  
    if(keyDown("s")) {
      Sa.play();
      textSize(40);
      fill("red");
      textAlign(CENTER);
      text(a, width/2, height/2);
    }

    if(keyDown("r")) {
      Re.play();
      textSize(40);
      fill("red");
      textAlign(CENTER);
      text(b, width/2, height/2)
    }
  
    if(keyDown("g")) {
      Ga.play();
      textSize(40);
      fill("red");
      textAlign(CENTER);
      text(c, width/2, height/2)
    }
  
    if(keyDown("m")) {
      Ma.play();
      textSize(40);
      fill("red");
      textAlign(CENTER);
      text(d, width/2, height/2)
    }
  
    if(keyDown("p")) {
      Pa.play();
      textSize(40);
      fill("red");
      textAlign(CENTER);
      text(e, width/2, height/2)
    }
  
    if(keyDown("d")) {
      Dha.play();
      textSize(40);
      fill("red");
      textAlign(CENTER);
      text(f, width/2, height/2)
    }
  
    if(keyDown("n")) {
      Ni.play();
      textSize(40);
      fill("red");
      textAlign(CENTER);
      text(g, width/2, height/2)
    }
}