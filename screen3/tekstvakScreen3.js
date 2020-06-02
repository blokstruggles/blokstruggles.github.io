var antwoord3;
var antwoord3X=0;
var antwoord3Y=0;

function tekstvakScreen3(){
  antwoord3='';
  screen3=createElement('text','Neem een foto van de plek waar je nu studeert of werkt. Als je op meerder plekken zit, kies dan de meest gebruikte plek.').size(W-3*inbetween-buttonSize, buttonSize).position(2*inbetween+buttonSize,inbetween).style('font-size', fontsize);
  
  
  screen3PositiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen3PositiefTekst.value("Welke ruimte is dit? ");
  screen3PositiefTekst.attribute('disabled','true');
  
  screen3Positief=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removePositiefUitleg3);
  screen3Positief.value("");

  
  screen3NegatiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen3NegatiefTekst.value("Waarom zit je precies in deze ruimte? \r\nAls je vroeger ergens anders studeerde, waarom zit je nu dan hier?");
  screen3NegatiefTekst.attribute('disabled','true');
  
  
  screen3Negatief=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removeNegatiefUitleg3);
  screen3Negatief.value("");
  
  screen3Vraag=createElement('text',"Was dit voor Covid-19 hetzelfde?").size(camW-buttonSize*4/3-2*inbetween, buttonSize/3).position(camX,4/3*buttonSize+3*inbetween+camH).style('font-size', fontsize);
  
  screen3Ja=createImg('images/Check.png','JA');
  screen3Ja.size(buttonSize*2/3,buttonSize*2/3);
  screen3Ja.position(camX+camW-inbetween-buttonSize*4/3,4/3*buttonSize+3*inbetween+camH);
  screen3Ja.mousePressed(Ja3);
  
  screen3Nee=createImg('images/Not.png','JA');
  screen3Nee.size(buttonSize*2/3,buttonSize*2/3);
  screen3Nee.position(camX+camW-buttonSize*2/3,4/3*buttonSize+3*inbetween+camH);
  screen3Nee.mousePressed(Nee3);
}

function Ja3(){
  antwoord3="ja"
  antwoord3X=screen3Ja.position().x;
  antwoord3Y=screen3Ja.position().y;
}

function Nee3(){
  antwoord3="nee"
  antwoord3X=screen3Nee.position().x;
  antwoord3Y=screen3Nee.position().y;
}

function tekenAntwoord3(){
  if (antwoord3X != 0) {
     fill(color(168, 193, 227));
     strokeWeight(0);
     rect(antwoord3X, antwoord3Y, buttonSize*2/3, buttonSize*2/3);
  }  
}

function removePositiefUitleg3(){
  screen3PositiefTekst.hide();
}
function removeNegatiefUitleg3(){
  screen3NegatiefTekst.hide();
}