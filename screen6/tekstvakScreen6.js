var antwoord6;
var antwoord6X=0;
var antwoord6Y=0;

var antwoord6H=0;
var antwoord6W=0;

var X6drag=false;

var V6drag=false;

var screen6VX;
 var screen6VY;
var screen6XX;
 var screen6XY;

function tekstvakScreen6(){
  antwoord6='';

  
  screen6=createElement('text','Neem een foto van de belangrijkste lichtbron op je studeerplek, of net het gebrek aan goed licht.').size(camW, buttonSize).position(camX,2*inbetween+buttonSize).style('font-size', fontsize);
    
  screen6Vraag=createElement('text',"Welke lichtbron is het belangrijkste?").size(camW-buttonSize*4/3-2*inbetween, buttonSize/3).position(inbetween,camY+camH+3*inbetween+2*teksthoogte+buttonSize*2/3).style('font-size', fontsize);
  
  screen6Antwoord=createSelect().position(W/2,camY+camH+3*inbetween+2*teksthoogte+buttonSize*2/3).size(W/2-inbetween,teksthoogte).style('font-size', fontsizeSelect);
  screen6Antwoord.option('kies een optie');
  screen6Antwoord.option('daglicht door een raam');
  screen6Antwoord.option('bureaulamp');
  screen6Antwoord.option('Het algemene licht in de ruimte');
  screen6Antwoord.option('Andere:');
  screen6Antwoord.changed(andere6);
  
  screen6AntwoordAndere=createInput("").position(W/2,camY+camH+3*inbetween+2*teksthoogte+buttonSize*2/3+inbetween/2+teksthoogte).size(W/2-inbetween,teksthoogte).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100));
  
  screen6XV=createElement('text','Je kan deze stickers op de foto slepen om iets positief en/of negatief aan te duiden.').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+inbetween).style('font-size', fontsize)
  
screen6VX=W/2;
  screen6VY=camY+camH+1.3*inbetween+2*teksthoogte;
  screen6XX=W/2+buttonSize*2/3+3*inbetween;
  screen6XY=camY+camH+1.3*inbetween+2*teksthoogte;
  
  screen6V=createImg('images/goed.png','goed');
  screen6V.size(buttonSize*2/3,buttonSize*2/3);
  screen6V.position(screen6VX,screen6VY);
  screen6V.touchStarted(V6);
  screen6V.touchEnded(V6uit);
  
  screen6X=createImg('images/slecht.png','goed');
  screen6X.size(buttonSize*2/3,buttonSize*2/3);
  screen6X.position(screen6XX,screen6XY);
  screen6X.touchStarted(X6);
  screen6X.touchEnded(X6uit);
  
  screen6Tevredenheid=createElement('text','Heb je hier minder(-) of meer(+) gestoord door slechte verlichting dan voor de coronaperiode ?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+4*inbetween+(inbetween/2)+4*teksthoogte+buttonSize*(2/3)).style('font-size', fontsize);
  
  screen6veelmeer=createImg('images/Veelmeer.png','JA');
  screen6veelmeer.size(buttonSize*4/3,buttonSize*2/3);
  screen6veelmeer.position(3*buttonSize*2/3+buttonSize*4/3+5*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen6veelmeer.mousePressed(veelmeer6);
  
  screen6meer=createImg('images/meer.png','JA');
  screen6meer.size(buttonSize*2/3,buttonSize*2/3);
  screen6meer.position(2*buttonSize*2/3+buttonSize*4/3+4*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen6meer.mousePressed(meer6);
  

  
  screen6hetzelfde=createImg('images/hetzelfde.png','JA');
  screen6hetzelfde.size(buttonSize*2/3,buttonSize*2/3);
  screen6hetzelfde.position(buttonSize*2/3+buttonSize*4/3+3*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen6hetzelfde.mousePressed(hetzelfde6);
  
  screen6minder=createImg('images/minder.png','JA');
  screen6minder.size(buttonSize*2/3,buttonSize*2/3);
  screen6minder.position(buttonSize*4/3+2*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen6minder.mousePressed(minder6);
  
  screen6veelminder=createImg('images/Veelminder.png','JA');
  screen6veelminder.size(buttonSize*4/3,buttonSize*2/3);
  screen6veelminder.position(inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen6veelminder.mousePressed(veelminder6);
  
  screen6TevredenheidAntwoord=createElement('text','Waarom is dit zo?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+7*inbetween+(inbetween/2)+5*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize);
  
  screen6Positief=createElement('textarea').size((camW-2*inbetween), buttonSize).position(3*inbetween,camY+camH+6.5*inbetween+(inbetween/2)+7*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100));
  screen6Positief.value("");
}

function V6(){
  V6drag=true;
  
}
function V6uit(){
  V6drag=false;
}

function X6(){
  X6drag=true;
  
}
function X6uit(){
  X6drag=false;
}

function meer6(){
  antwoord6="meer"
  antwoord6X=screen6meer.position().x;
  antwoord6Y=screen6meer.position().y;
  
  antwoord6H=screen6meer.size().height;
  antwoord6W=screen6meer.size().width;
}

function minder6(){
  antwoord6="minder"
  antwoord6X=screen6minder.position().x;
  antwoord6Y=screen6minder.position().y;
  
  antwoord6H=screen6minder.size().height;
  antwoord6W=screen6minder.size().width;
}

function veelmeer6(){
  antwoord6="veel meer"
  antwoord6X=screen6veelmeer.position().x;
  antwoord6Y=screen6veelmeer.position().y;
  
  antwoord6H=screen6veelmeer.size().height;
  antwoord6W=screen6veelmeer.size().width;
}

function veelminder6(){
  antwoord6="veel minder"
  antwoord6X=screen6veelminder.position().x;
  antwoord6Y=screen6veelminder.position().y;
  
  antwoord6H=screen6veelminder.size().height;
  antwoord6W=screen6veelminder.size().width;
}

function hetzelfde6(){
  antwoord6="hetzelfde"
  antwoord6X=screen6hetzelfde.position().x;
  antwoord6Y=screen6hetzelfde.position().y;
  
  antwoord6H=screen6hetzelfde.size().height;
  antwoord6W=screen6hetzelfde.size().width;
}

function tekenAntwoord6(){  
  if(V6drag==true){
  screen6VX=mouseX-buttonSize/3;
  screen6VY=mouseY-buttonSize/3;
    screen6V.position(screen6VX,screen6VY);
  }
  
  if(X6drag==true){
    screen6XX=mouseX-buttonSize/3;
  screen6XY=mouseY-buttonSize/3;
    screen6X.position(screen6XX,screen6XY);
  }
  
  if (antwoord6X != 0) {
     //fill(color(168, 193, 227));
    fill(color(205, 169, 186));
    stroke(0,0,0);
     strokeWeight(2);
     ellipse(antwoord6X+antwoord6W/2, antwoord6Y+antwoord6H/2, antwoord6W+inbetween,antwoord6H+inbetween);
  }  
}

function andere6(){
  if(screen6Antwoord.value()=="Andere:"){
    screen6AntwoordAndere.show();
  }
}
