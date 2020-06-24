var antwoord7;
var antwoord7X=0;
var antwoord7Y=0;

var antwoord7H=0;
var antwoord7W=0;

var X7drag=false;

var V7drag=false;

var screen7VX;
 var screen7VY;
var screen7XX;
 var screen7XY;

function tekstvakScreen7(){
  antwoord7='';

  
  screen7=createElement('text','Neem een foto van een geluidsbron die je het meeste stoort of van de plek waar de geluidsbron voorkomt.').size(camW, buttonSize).position(camX,2*inbetween+buttonSize).style('font-size', fontsize);
    
  screen7Vraag=createElement('text',"Welk geluid stoort je het meest?").size(camW/2-2*inbetween, buttonSize/3).position(inbetween,camY+camH+inbetween).style('font-size', fontsize);
  
  screen7Antwoord=createSelect().position(W/2,camY+camH+inbetween).size(W/2-inbetween,teksthoogte).style('font-size', fontsizeSelect);
  screen7Antwoord.option('De straat');
  screen7Antwoord.option('Andere mensen buiten');
  screen7Antwoord.option('Andere mensen thuis');
  screen7Antwoord.option('Grasmaaiers');
  screen7Antwoord.option('Andere:');
  screen7Antwoord.changed(andere7);
  
  screen7AntwoordAndere=createInput("").position(W/2,camY+camH+inbetween+inbetween/2+teksthoogte).size(W/2-inbetween,teksthoogte).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100));
  
  screen7XV=createElement('text','Je kan deze stickers op de foto slepen om iets positief en/of negatief aan te duiden.').size(W-2*inbetween, buttonSize).position(inbetween, camY+camH+2*inbetween+(inbetween/2)+2*teksthoogte).style('font-size', fontsize)
  
  screen7VX=W/2;
  screen7VY=camY+camH+2.3*inbetween+(inbetween/2)+4*teksthoogte;
  screen7XX=W/2+buttonSize*2/3+3*inbetween;
  screen7XY=camY+camH+2.3*inbetween+(inbetween/2)+4*teksthoogte;
  
  screen7V=createImg('images/goed.png','goed');
  screen7V.size(buttonSize*2/3,buttonSize*2/3);
  screen7V.position(screen7VX,screen7VY);
  screen7V.touchStarted(V7);
  screen7V.touchEnded(V7uit);
  
  screen7X=createImg('images/slecht.png','goed');
  screen7X.size(buttonSize*2/3,buttonSize*2/3);
  screen7X.position(screen7XX,screen7XY);
  screen7X.touchStarted(X7);
  screen7X.touchEnded(X7uit);
  
  screen7Tevredenheid=createElement('text','Wordt je hier minder(-) of meer(+) gestoord door geluid dan voor de Coronaperiode?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+4*inbetween+(inbetween/2)+4*teksthoogte+buttonSize*(2/3)).style('font-size', fontsize);
  
  screen7veelmeer=createImg('images/Veelmeer.png','JA');
  screen7veelmeer.size(buttonSize*4/3,buttonSize*2/3);
  screen7veelmeer.position(3*buttonSize*2/3+buttonSize*4/3+5*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen7veelmeer.mousePressed(veelmeer7);
  
  screen7meer=createImg('images/meer.png','JA');
  screen7meer.size(buttonSize*2/3,buttonSize*2/3);
  screen7meer.position(2*buttonSize*2/3+buttonSize*4/3+4*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen7meer.mousePressed(meer7);
  

  
  screen7hetzelfde=createImg('images/hetzelfde.png','JA');
  screen7hetzelfde.size(buttonSize*2/3,buttonSize*2/3);
  screen7hetzelfde.position(buttonSize*2/3+buttonSize*4/3+3*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen7hetzelfde.mousePressed(hetzelfde7);
  
  screen7minder=createImg('images/minder.png','JA');
  screen7minder.size(buttonSize*2/3,buttonSize*2/3);
  screen7minder.position(buttonSize*4/3+2*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen7minder.mousePressed(minder7);
  
  screen7veelminder=createImg('images/Veelminder.png','JA');
  screen7veelminder.size(buttonSize*4/3,buttonSize*2/3);
  screen7veelminder.position(inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen7veelminder.mousePressed(veelminder7);
  
  screen7TevredenheidAntwoord=createElement('text','Waarom is dit zo?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+6*inbetween+(inbetween/2)+6*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize);
  
  screen7Positief=createElement('textarea').size((camW-2*inbetween), buttonSize).position(3*inbetween,camY+camH+6.5*inbetween+(inbetween/2)+7*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100));
  screen7Positief.value("");
}

function V7(){
  V7drag=true;
  
}
function V7uit(){
  V7drag=false;
}

function X7(){
  X7drag=true;
  
}
function X7uit(){
  X7drag=false;
}

function meer7(){
  antwoord7="meer"
  antwoord7X=screen7meer.position().x;
  antwoord7Y=screen7meer.position().y;
  
  antwoord7H=screen7meer.size().height;
  antwoord7W=screen7meer.size().width;
}

function minder7(){
  antwoord7="minder"
  antwoord7X=screen7minder.position().x;
  antwoord7Y=screen7minder.position().y;
  
  antwoord7H=screen7minder.size().height;
  antwoord7W=screen7minder.size().width;
}

function veelmeer7(){
  antwoord7="veel meer"
  antwoord7X=screen7veelmeer.position().x;
  antwoord7Y=screen7veelmeer.position().y;

  antwoord7H=screen7veelmeer.size().height;
  antwoord7W=screen7veelmeer.size().width;
}

function veelminder7(){
  antwoord7="veel minder"
  antwoord7X=screen7veelminder.position().x;
  antwoord7Y=screen7veelminder.position().y;
  
  antwoord7H=screen7veelminder.size().height;
  antwoord7W=screen7veelminder.size().width;
}

function hetzelfde7(){
  antwoord7="hetzelfde"
  antwoord7X=screen7hetzelfde.position().x;
  antwoord7Y=screen7hetzelfde.position().y;
  
  antwoord7H=screen7hetzelfde.size().height;
  antwoord7W=screen7hetzelfde.size().width;
}

function tekenAntwoord7(){  
  if(V7drag==true){
  screen7VX=mouseX-buttonSize/3;
  screen7VY=mouseY-buttonSize/3;
    screen7V.position(screen7VX,screen7VY);
  }
  
  if(X7drag==true){
    screen7XX=mouseX-buttonSize/3;
  screen7XY=mouseY-buttonSize/3;
    screen7X.position(screen7XX,screen7XY);
  }
  
  if (antwoord7X != 0) {
     //fill(color(168, 193, 227));
    fill(color(205, 169, 186));
    stroke(0,0,0);
     strokeWeight(2);
     ellipse(antwoord7X+antwoord7W/2, antwoord7Y+antwoord7H/2, antwoord7W+inbetween,antwoord7H+inbetween);
  }  
}

function andere7(){
  if(screen7Antwoord.value()=="Andere:"){
    screen7AntwoordAndere.show();
  }
}
