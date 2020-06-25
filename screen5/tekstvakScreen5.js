var antwoord5;
var antwoord5X=0;
var antwoord5Y=0;

var antwoord5H=0;
var antwoord5W=0;

var X5drag=false;

var V5drag=false;

var screen5VX;
 var screen5VY;
var screen5XX;
 var screen5XY;

function tekstvakScreen5(){
  antwoord5='';

  
  screen5=createElement('text','Neem een foto van iets wat je afleidt of iets dat je doet om minder afgeleid te worden.').size(camW, buttonSize).position(camX,2*inbetween+buttonSize).style('font-size', fontsize);
    
  screen5Vraag=createElement('text',"Wat leidt je het meeste af?").size(camW-buttonSize*4/3-2*inbetween, buttonSize/3).position(inbetween,camY+camH+3*inbetween+2*teksthoogte+buttonSize*2/3).style('font-size', fontsize);
  
  screen5Antwoord=createSelect().position(W/2,camY+camH+3*inbetween+2*teksthoogte+buttonSize*2/3).size(W/2-inbetween,teksthoogte).style('font-size', fontsizeSelect);
  screen5Antwoord.option('kies een optie');
  screen5Antwoord.option('Naar buiten kijken');
  screen5Antwoord.option('Rondom mij kijken');
  screen5Antwoord.option('Het internet');
  screen5Antwoord.option('Mijn computer');
  screen5Antwoord.option('Mijn gsm');
  screen5Antwoord.option('Alle bovenstaande');
  screen5Antwoord.option('Andere:');
  screen5Antwoord.changed(andere5);
  
  screen5AntwoordAndere=createInput("").position(W/2,camY+camH+3*inbetween+2*teksthoogte+buttonSize*2/3+inbetween/2+teksthoogte).size(W/2-inbetween,teksthoogte).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100));
  
  screen5XV=createElement('text','Je kan deze stickers op de foto slepen om iets positief en/of negatief aan te duiden.').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+inbetween).style('font-size', fontsize)
  
  screen5VX=W/2;
  screen5VY=camY+camH+1.3*inbetween+2*teksthoogte;
  screen5XX=W/2+buttonSize*2/3+3*inbetween;
  screen5XY=camY+camH+1.3*inbetween+2*teksthoogte;
  
  screen5V=createImg('images/goed.png','goed');
  screen5V.size(buttonSize*2/3,buttonSize*2/3);
  screen5V.position(screen5VX,screen5VY);
  screen5V.touchStarted(V5);
  screen5V.touchEnded(V5uit);
  
  screen5X=createImg('images/slecht.png','goed');
  screen5X.size(buttonSize*2/3,buttonSize*2/3);
  screen5X.position(screen5XX,screen5XY);
  screen5X.touchStarted(X5);
  screen5X.touchEnded(X5uit);
  
  screen5Tevredenheid=createElement('text','Wordt je hier minder(-) of meer(+) afgeleid dan voor de Coronaperiode?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+4*inbetween+(inbetween/2)+4*teksthoogte+buttonSize*(2/3)).style('font-size', fontsize);
  
  screen5veelmeer=createImg('images/Veelmeer.png','JA');
  screen5veelmeer.size(buttonSize*4/3,buttonSize*2/3);
  screen5veelmeer.position(3*buttonSize*2/3+buttonSize*4/3+5*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen5veelmeer.mousePressed(veelmeer5);
  
  screen5meer=createImg('images/meer.png','JA');
  screen5meer.size(buttonSize*2/3,buttonSize*2/3);
  screen5meer.position(2*buttonSize*2/3+buttonSize*4/3+4*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen5meer.mousePressed(meer5);
  

  
  screen5hetzelfde=createImg('images/hetzelfde.png','JA');
  screen5hetzelfde.size(buttonSize*2/3,buttonSize*2/3);
  screen5hetzelfde.position(buttonSize*2/3+buttonSize*4/3+3*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen5hetzelfde.mousePressed(hetzelfde5);
  
  screen5minder=createImg('images/minder.png','JA');
  screen5minder.size(buttonSize*2/3,buttonSize*2/3);
  screen5minder.position(buttonSize*4/3+2*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen5minder.mousePressed(minder5);
  
  screen5veelminder=createImg('images/Veelminder.png','JA');
  screen5veelminder.size(buttonSize*4/3,buttonSize*2/3);
  screen5veelminder.position(inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen5veelminder.mousePressed(veelminder5);
  
  screen5TevredenheidAntwoord=createElement('text','Kan je vertellen waarom dat zo is?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+6*inbetween+(inbetween/2)+6*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize);
  
  screen5Positief=createElement('textarea').size((camW-2*inbetween), buttonSize).position(3*inbetween,camY+camH+6.5*inbetween+(inbetween/2)+7*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100));
  screen5Positief.value("");
}

function V5(){
  V5drag=true;
  
}
function V5uit(){
  V5drag=false;
}

function X5(){
  X5drag=true;
  
}
function X5uit(){
  X5drag=false;
}

function meer5(){
  antwoord5="meer"
  antwoord5X=screen5meer.position().x;
  antwoord5Y=screen5meer.position().y;
  
  antwoord5H=screen5meer.size().height;
  antwoord5W=screen5meer.size().width;
}

function minder5(){
  antwoord5="minder"
  antwoord5X=screen5minder.position().x;
  antwoord5Y=screen5minder.position().y;
  
  antwoord5H=screen5minder.size().height;
  antwoord5W=screen5minder.size().width;
}

function veelmeer5(){
  antwoord5="veel meer"
  antwoord5X=screen5veelmeer.position().x;
  antwoord5Y=screen5veelmeer.position().y;
  
  antwoord5H=screen5veelmeer.size().height;
  antwoord5W=screen5veelmeer.size().width;
}

function veelminder5(){
  antwoord5="veel minder"
  antwoord5X=screen5veelminder.position().x;
  antwoord5Y=screen5veelminder.position().y;
  
  antwoord5H=screen5veelminder.size().height;
  antwoord5W=screen5veelminder.size().width;
}

function hetzelfde5(){
  antwoord5="hetzelfde"
  antwoord5X=screen5hetzelfde.position().x;
  antwoord5Y=screen5hetzelfde.position().y;
  
  antwoord5H=screen5hetzelfde.size().height;
  antwoord5W=screen5hetzelfde.size().width;
}

function tekenAntwoord5(){  
  if(V5drag==true){
  screen5VX=mouseX-buttonSize/3;
  screen5VY=mouseY-buttonSize/3;
    screen5V.position(screen5VX,screen5VY);
  }
  
  if(X5drag==true){
    screen5XX=mouseX-buttonSize/3;
  screen5XY=mouseY-buttonSize/3;
    screen5X.position(screen5XX,screen5XY);
  }
  
  if (antwoord5X != 0) {
     //fill(color(168, 193, 227));
    fill(color(205, 169, 186));
    stroke(0,0,0);
     strokeWeight(2);
     ellipse(antwoord5X+antwoord5W/2, antwoord5Y+antwoord5H/2, antwoord5W+inbetween,antwoord5H+inbetween);
  }  
}

function andere5(){
  if(screen5Antwoord.value()=="Andere:"){
    screen5AntwoordAndere.show();
  }
}
