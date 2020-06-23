var antwoord4;
var antwoord4X=0;
var antwoord4Y=0;

var antwoord4H=0;
var antwoord4W=0;

var X4drag=false;

var V4drag=false;

var screen4VX;
 var screen4VY;
var screen4XX;
 var screen4XY;


function tekstvakScreen4(){
  antwoord4='';

  
  screen4=createElement('text','Neem een foto van de reden waarom je meer of minder gestoord wordt door andere mensen. Dit kan ook gaan over samen studeren omdat je sociale controle nodig hebt. \r\nLET OP! Breng hierbij geen andere mensen herkenbaar in beeld').size(camW, buttonSize).position(camX,2*inbetween+buttonSize).style('font-size', fontsize);
    
  screen4Vraag=createElement('text',"Studeer je met anderen?").size(W/2-2*inbetween, buttonSize/3).position(inbetween,camY+camH+inbetween).style('font-size', fontsize);
  
  screen4Antwoord=createSelect().position(W/2,camY+camH+inbetween).size(W/2-inbetween,teksthoogte).style('font-size', fontsizeSelect);
  screen4Antwoord.option('kies een optie');
  screen4Antwoord.option('Ik studeer alleen');
  screen4Antwoord.option('Ik studeer met samenwonenden');
  screen4Antwoord.option('Ik studeer met mijn bubbel');
  screen4Antwoord.option('Ik studeer online met anderen');
  screen4Antwoord.option('Andere:');
  screen4Antwoord.changed(andere4);
  
  screen4AntwoordAndere=createInput("").position(W/2,camY+camH+inbetween+inbetween/2+teksthoogte).size(W/2-inbetween,teksthoogte).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100));
  
  screen4XV=createElement('text','Je kan deze stickers op de foto slepen om iets positief en/of negatief aan te duiden.').size(W-2*inbetween, buttonSize).position(inbetween, camY+camH+2*inbetween+(inbetween/2)+2*teksthoogte).style('font-size', fontsize)
  
  screen4VX=W/2;
  screen4VY=camY+camH+2.3*inbetween+(inbetween/2)+4*teksthoogte;
  screen4XX=W/2+buttonSize*2/3+3*inbetween;
  screen4XY=camY+camH+2.3*inbetween+(inbetween/2)+4*teksthoogte;
  
  screen4V=createImg('images/goed.png','goed');
  screen4V.size(buttonSize*2/3,buttonSize*2/3);
  screen4V.position(screen4VX,screen4VY);
  screen4V.touchStarted(V4);
  screen4V.touchEnded(V4uit);
  
  screen4X=createImg('images/slecht.png','goed');
  screen4X.size(buttonSize*2/3,buttonSize*2/3);
  screen4X.position(screen4XX,screen4XY);
  screen4X.touchStarted(X4);
  screen4X.touchEnded(X4uit);
  
  screen4Tevredenheid=createElement('text','Wordt je hier minder(-) of meer(+) gestoord door andere mensen dan voor Corona?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+4*inbetween+(inbetween/2)+4*teksthoogte+buttonSize*(2/3)).style('font-size', fontsize);
  
  screen4veelmeer=createImg('images/Veelmeer.png','JA');
  screen4veelmeer.size(buttonSize*4/3,buttonSize*2/3);
  screen4veelmeer.position(3*buttonSize*2/3+buttonSize*4/3+5*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen4veelmeer.mousePressed(veelmeer4);
  
  screen4meer=createImg('images/meer.png','JA');
  screen4meer.size(buttonSize*2/3,buttonSize*2/3);
  screen4meer.position(2*buttonSize*2/3+buttonSize*4/3+4*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen4meer.mousePressed(meer4);
  

  
  screen4hetzelfde=createImg('images/hetzelfde.png','JA');
  screen4hetzelfde.size(buttonSize*2/3,buttonSize*2/3);
  screen4hetzelfde.position(buttonSize*2/3+buttonSize*4/3+3*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen4hetzelfde.mousePressed(hetzelfde4);
  
  screen4minder=createImg('images/minder.png','JA');
  screen4minder.size(buttonSize*2/3,buttonSize*2/3);
  screen4minder.position(buttonSize*4/3+2*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen4minder.mousePressed(minder4);
  
  screen4veelminder=createImg('images/Veelminder.png','JA');
  screen4veelminder.size(buttonSize*4/3,buttonSize*2/3);
  screen4veelminder.position(inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen4veelminder.mousePressed(veelminder4);
  
  screen4TevredenheidAntwoord=createElement('text','Kan je vertellen waarom dat zo is?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+6*inbetween+(inbetween/2)+6*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize);
  
  screen4Positief=createElement('textarea').size((camW-2*inbetween), buttonSize).position(3*inbetween,camY+camH+6.5*inbetween+(inbetween/2)+7*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100));
  screen3Positief.value("");
}

function V4(){
  V4drag=true;
  
}
function V4uit(){
  V4drag=false;
}

function X4(){
  X4drag=true;
  
}
function X4uit(){
  X4drag=false;
}

function meer4(){
  antwoord4="meer"
  antwoord4X=screen4meer.position().x;
  antwoord4Y=screen4meer.position().y;
  
  antwoord4H=screen4meer.size().height;
  antwoord4W=screen4meer.size().width;
}

function minder4(){
  antwoord4="minder"
  antwoord4X=screen4minder.position().x;
  antwoord4Y=screen4minder.position().y;
  
  antwoord4H=screen4minder.size().height;
  antwoord4W=screen4minder.size().width;
}

function veelmeer4(){
  antwoord4="veel meer"
  antwoord4X=screen4veelmeer.position().x;
  antwoord4Y=screen4veelmeer.position().y;
  
  antwoord4H=screen4veelmeer.size().height;
  antwoord4W=screen4veelmeer.size().width;
}

function veelminder4(){
  antwoord4="veel minder"
  antwoord4X=screen4veelminder.position().x;
  antwoord4Y=screen4veelminder.position().y;
  
  antwoord4H=screen4veelminder.size().height;
  antwoord4W=screen4veelminder.size().width;
}

function hetzelfde4(){
  antwoord4="hetzelfde"
  antwoord4X=screen4hetzelfde.position().x;
  antwoord4Y=screen4hetzelfde.position().y;
  
  antwoord4H=screen4hetzelfde.size().height;
  antwoord4W=screen4hetzelfde.size().width;
}

function tekenAntwoord4(){  
  if(V4drag==true){
  screen4VX=mouseX-buttonSize/3;
  screen4VY=mouseY-buttonSize/3;
    screen4V.position(screen4VX,screen4VY);
  }
  
  if(X4drag==true){
    screen4XX=mouseX-buttonSize/3;
  screen4XY=mouseY-buttonSize/3;
    screen4X.position(screen4XX,screen4XY);
  }
  
  if (antwoord4X != 0) {
     //fill(color(168, 193, 227));
    fill(color(205, 169, 186));
    stroke(0,0,0);
     strokeWeight(2);
     ellipse(antwoord4X+antwoord4W/2, antwoord4Y+antwoord4H/2, antwoord4W+inbetween,antwoord4H+inbetween);
  }  
}

function andere4(){
  if(screen4Antwoord.value()=="Andere:"){
    screen4AntwoordAndere.show();
  }
}
