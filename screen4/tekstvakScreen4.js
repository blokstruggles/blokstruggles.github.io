var antwoord4;
var antwoord4X=0;
var antwoord4Y=0;

function tekstvakScreen4(){
  antwoord4='';
  screen4=createElement('text','Neem een foto van wat je rondom jou kan zien. Zijn er andere mensen rondom jou, kan jij anderen zien, sluit je jezelf af ...'+'\r\n').size(W-3*inbetween-buttonSize, buttonSize).position(2*inbetween+buttonSize,inbetween).style('font-size', fontsize);
  
  screen4PositiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen4PositiefTekst.value("Ben je tevreden met de privacy op de plek waar je studeert? Studeer je alleen of met vrienden? ...");
  screen4PositiefTekst.attribute('disabled','true');
  
  screen4Positief=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removePositiefUitleg4);
  screen4Positief.value("");
  
  screen4NegatiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen4NegatiefTekst.value("Zijn/waren er problemen omtrent privacy? Heb nood aan social controle? ...");
  screen4NegatiefTekst.attribute('disabled','true');
  
  screen4Negatief=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removeNegatiefUitleg4);
  screen4Negatief.value("");
  
  screen4Vraag=createElement('text',"Was dit voor Covid-19 hetzelfde?").size(camW-buttonSize*4/3-2*inbetween, buttonSize/3).position(camX,4/3*buttonSize+3*inbetween+camH).style('font-size', fontsize);
  
  screen4Ja=createImg('images/Check.png','JA');
  screen4Ja.size(buttonSize*2/3,buttonSize*2/3);
  screen4Ja.position(camX+camW-inbetween-buttonSize*4/3,4/3*buttonSize+3*inbetween+camH);
  screen4Ja.mousePressed(Ja4);
  
  screen4Nee=createImg('images/Not.png','JA');
  screen4Nee.size(buttonSize*2/3,buttonSize*2/3);
  screen4Nee.position(camX+camW-buttonSize*2/3,4/3*buttonSize+3*inbetween+camH);
  screen4Nee.mousePressed(Nee4);
}

function Ja4(){
  antwoord4="ja"
  antwoord4X=screen4Ja.position().x;
  antwoord4Y=screen4Ja.position().y;
}

function Nee4(){
  antwoord4="nee"
  antwoord4X=screen4Nee.position().x;
  antwoord4Y=screen4Nee.position().y;
}

function tekenAntwoord4(){
     if (antwoord4X != 0) {
     fill(color(186, 146, 87));
     strokeWeight(0);
     rect(antwoord4X, antwoord4Y, buttonSize*2/3, buttonSize*2/3);
   }  
}

function removePositiefUitleg4(){
  screen4PositiefTekst.hide();
}
function removeNegatiefUitleg4(){
  screen4NegatiefTekst.hide();
}