var antwoord3;
var antwoord3X=0;
var antwoord3Y=0;

var antwoord3H=0;
var antwoord3W=0;

var X3drag=false;

var V3drag=false;

var screen3VX;
 var screen3VY;
var screen3XX;
 var screen3XY;


function tekstvakScreen3(){
  antwoord3='';

  
  screen3=createElement('text','Neem een foto van de plaats waar je nu het liefste/meeste zit om te studeren. Probeer zoveel mogelijk van de ruimte mee te fotograferen.').size(camW, buttonSize).position(camX,2*inbetween+buttonSize).style('font-size', fontsize);
    
  screen3Vraag=createElement('text',"Welke ruimte zie je op de foto?").size(camW/-2*inbetween).position(inbetween,camY+camH+inbetween).style('font-size', fontsize);
  
  screen3Antwoord=createSelect().position(W/2,camY+camH+inbetween).size(W/2-inbetween,teksthoogte).style('font-size', fontsizeSelect);
  screen3Antwoord.option('kies een optie');
  screen3Antwoord.option('Kot: eigen kamer');
  screen3Antwoord.option('Kot: gemeenschappelijke ruimte');
  screen3Antwoord.option('Thuis: eigen kamer');
  screen3Antwoord.option('Thuis: bureau');
  screen3Antwoord.option('Thuis: keuken');
  screen3Antwoord.option('Thuis: woonkamer');
  screen3Antwoord.option('Thuis: eetkamer');
  screen3Antwoord.option('Andere:');
  screen3Antwoord.changed(andere3);
  
  screen3AntwoordAndere=createInput("").position(W/2,camY+camH+inbetween+inbetween/2+teksthoogte).size(W/2-inbetween,teksthoogte).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100)).value("");
  
  screen3XV=createElement('text','Je kan deze stickers op de foto slepen om iets positief en/of negatief aan te duiden.').size(W-2*inbetween, buttonSize).position(inbetween, camY+camH+2*inbetween+(inbetween/2)+2*teksthoogte).style('font-size', fontsize)
  
  screen3VX=W/2;
  screen3VY=camY+camH+2.3*inbetween+(inbetween/2)+4*teksthoogte;
  screen3XX=W/2+buttonSize*2/3+3*inbetween;
  screen3XY=camY+camH+2.3*inbetween+(inbetween/2)+4*teksthoogte;
  
  screen3V=createImg('images/goed.png','goed');
  screen3V.size(buttonSize*2/3,buttonSize*2/3);
  screen3V.position(screen3VX,screen3VY);
  screen3V.touchStarted(V3);
  screen3V.touchEnded(V3uit);
  
  screen3X=createImg('images/slecht.png','goed');
  screen3X.size(buttonSize*2/3,buttonSize*2/3);
  screen3X.position(screen3XX,screen3XY);
  screen3X.touchStarted(X3);
  screen3X.touchEnded(X3uit);
  
  screen3Tevredenheid=createElement('text','Studeer je hier slechter of net beter dan voor de coronaperiode?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+4*inbetween+(inbetween/2)+4*teksthoogte+buttonSize*(2/3)).style('font-size', fontsize);
  
  screen3veelmeer=createImg('images/smileyExcited.png','JA');
  screen3veelmeer.size(buttonSize*2/3,buttonSize*2/3);
  screen3veelmeer.position(3*buttonSize*2/3+buttonSize*4/3+5*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen3veelmeer.mousePressed(veelmeer3);
  
  screen3meer=createImg('images/smileyHappy.png','JA');
  screen3meer.size(buttonSize*2/3,buttonSize*2/3);
  screen3meer.position(2*buttonSize*2/3+buttonSize*4/3+4*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen3meer.mousePressed(meer3);
  

  screen3hetzelfde=createImg('images/SmileyNeutraal.png','JA');
  screen3hetzelfde.size(buttonSize*2/3,buttonSize*2/3);
  screen3hetzelfde.position(buttonSize*2/3+buttonSize*4/3+3*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen3hetzelfde.mousePressed(hetzelfde3);
  
  screen3minder=createImg('images/smileySad.png','JA');
  screen3minder.size(buttonSize*2/3,buttonSize*2/3);
  screen3minder.position(buttonSize*4/3+2*inbetweenBreedte,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen3minder.mousePressed(minder3);
  
  screen3veelminder=createImg('images/smileyAngry.png','JA');
  screen3veelminder.size(buttonSize*2/3,buttonSize*2/3);
  screen3veelminder.position(inbetweenBreedte+buttonSize*2/3,camY+camH+4.8*inbetween+(inbetween/2)+6*teksthoogte+buttonSize*(2/3));
  screen3veelminder.mousePressed(veelminder3);
  
  screen3TevredenheidAntwoord=createElement('text','Kan je vertellen waarom dat zo is?').size(W-2*inbetween, buttonSize).position(inbetween,camY+camH+6*inbetween+(inbetween/2)+6*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize);
  
  screen3Positief=createElement('textarea').size((camW-2*inbetween), buttonSize).position(3*inbetween,camY+camH+6.5*inbetween+(inbetween/2)+7*teksthoogte+2*buttonSize*(2/3)).style('font-size', fontsize).style('background-color', color(255, 255, 255, 100));
  screen3Positief.value("");
}

function V3(){
  V3drag=true;
  
}
function V3uit(){
  V3drag=false;
}

function X3(){
  X3drag=true;
  
}
function X3uit(){
  X3drag=false;
}

function meer3(){
  antwoord3="meer"
  antwoord3X=screen3meer.position().x;
  antwoord3Y=screen3meer.position().y;
  
  antwoord3H=screen3meer.size().height;
  antwoord3W=screen3meer.size().width;
}

function minder3(){
  antwoord3="minder"
  antwoord3X=screen3minder.position().x;
  antwoord3Y=screen3minder.position().y;
  
  antwoord3H=screen3minder.size().height;
  antwoord3W=screen3minder.size().width;
}

function veelmeer3(){
  antwoord3="veel meer"
  antwoord3X=screen3veelmeer.position().x;
  antwoord3Y=screen3veelmeer.position().y;
  
  antwoord3H=screen3veelmeer.size().height;
  antwoord3W=screen3veelmeer.size().width;
}

function veelminder3(){
  antwoord3="veel minder"
  antwoord3X=screen3veelminder.position().x;
  antwoord3Y=screen3veelminder.position().y;
  
  antwoord3H=screen3veelminder.size().height;
  antwoord3W=screen3veelminder.size().width;
}

function hetzelfde3(){
  antwoord3="hetzelfde"
  antwoord3X=screen3hetzelfde.position().x;
  antwoord3Y=screen3hetzelfde.position().y;
  
  antwoord3H=screen3hetzelfde.size().height;
  antwoord3W=screen3hetzelfde.size().width;
}

function tekenAntwoord3(){  
  if(V3drag==true){
  screen3VX=mouseX-buttonSize/3;
  screen3VY=mouseY-buttonSize/3;
    screen3V.position(screen3VX,screen3VY);
  }
  
  if(X3drag==true){
    screen3XX=mouseX-buttonSize/3;
  screen3XY=mouseY-buttonSize/3;
    screen3X.position(screen3XX,screen3XY);
  }
  
  if (antwoord3X != 0) {
     //fill(color(168, 193, 227));
    fill(color(205, 169, 186));
    stroke(0,0,0);
     strokeWeight(2);
     circle(antwoord3X+antwoord3W/2, antwoord3Y+antwoord3W/2, antwoord3W+inbetween);
  }  
}

function andere3(){
  if(screen3Antwoord.value()=="Andere:"){
    screen3AntwoordAndere.show();
  }
}
