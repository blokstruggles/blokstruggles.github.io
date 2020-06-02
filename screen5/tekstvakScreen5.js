var antwoord5;
var antwoord5X=0;
var antwoord5Y=0;

function tekstvakScreen5(){
  antwoord5='';
  
  screen5=createElement('text','Neem een foto van wat je voor jou kan zien als je aan je werkplek zit.'+'\r\n').size(W-3*inbetween-buttonSize, buttonSize).position(2*inbetween+buttonSize,inbetween).style('font-size', fontsize);
  
  screen5PositiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen5PositiefTekst.value("Ben je tevreden met waar je op uitkijkt? Helpt dit tijdens het studeren? ...");
  screen5PositiefTekst.attribute('disabled','true');
  
  screen5Positief=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removePositiefUitleg5);
  screen5Positief.value("");
  
  screen5NegatiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen5NegatiefTekst.value("Zijn/Waren er problemen omtrent het uitzicht? Bv. is/was het uitzicht een afleiding? ...");
  screen5NegatiefTekst.attribute('disabled','true');
  
  screen5Negatief=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removeNegatiefUitleg5);
  screen5Negatief.value("");
  
  screen5Vraag=createElement('text',"Was dit voor Covid-19 hetzelfde?").size(camW-buttonSize*4/3-2*inbetween, buttonSize/3).position(camX,4/3*buttonSize+3*inbetween+camH).style('font-size', fontsize);
  
  screen5Ja=createImg('images/Check.png','JA');
  screen5Ja.size(buttonSize*2/3,buttonSize*2/3);
  screen5Ja.position(camX+camW-inbetween-buttonSize*4/3,4/3*buttonSize+3*inbetween+camH);
  screen5Ja.mousePressed(Ja5);
  
  screen5Nee=createImg('images/Not.png','JA');
  screen5Nee.size(buttonSize*2/3,buttonSize*2/3);
  screen5Nee.position(camX+camW-buttonSize*2/3,4/3*buttonSize+3*inbetween+camH);
  screen5Nee.mousePressed(Nee5);
}

function Ja5(){
  antwoord5="ja"
  antwoord5X=screen5Ja.position().x;
  antwoord5Y=screen5Ja.position().y;
}

function Nee5(){
  antwoord5="nee"
  antwoord5X=screen5Nee.position().x;
  antwoord5Y=screen5Nee.position().y;
}

function tekenAntwoord5(){
     if (antwoord5X != 0) {
     fill(color(168, 193, 227));
     strokeWeight(0);
     rect(antwoord5X, antwoord5Y, buttonSize*2/3, buttonSize*2/3);
   }  
}

function removePositiefUitleg5(){
  screen5PositiefTekst.hide();
}
function removeNegatiefUitleg5(){
  screen5NegatiefTekst.hide();
}