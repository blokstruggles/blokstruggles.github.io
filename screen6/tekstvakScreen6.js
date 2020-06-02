var antwoord6;
var antwoord6X=0;
var antwoord6Y=0;

function tekstvakScreen6(){
  antwoord6='';
  
  screen6=createElement('text','Neem een foto van de belangrijkste lichtbron in de ruimte. Dit kan ook het raam of een bureaulamp zijn.'+'\r\n').size(W-3*inbetween-buttonSize, buttonSize).position(2*inbetween+buttonSize,inbetween).style('font-size', fontsize);
  
  screen6PositiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen6PositiefTekst.value("Ben je tevreden over de hoeveelheid licht dat je krijgt tijdens het studeren? ...");
  screen6PositiefTekst.attribute('disabled','true');
  
  screen6Positief=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removePositiefUitleg6);
  screen6Positief.value("");
  
  screen6NegatiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen6NegatiefTekst.value("Zijn/Waren er problemen omtrent licht? Bv. Heb je eigenlijk meer daglicht nodig? ...");
  screen6NegatiefTekst.attribute('disabled','true');
  
  screen6Negatief=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removeNegatiefUitleg6);
  screen6Negatief.value("");
  
  screen6Vraag=createElement('text',"Was dit voor Covid-19 hetzelfde?").size(camW-buttonSize*4/3-2*inbetween, buttonSize/3).position(camX,4/3*buttonSize+3*inbetween+camH).style('font-size', fontsize);
  
  screen6Ja=createImg('images/Check.png','JA');
  screen6Ja.size(buttonSize*2/3,buttonSize*2/3);
  screen6Ja.position(camX+camW-inbetween-buttonSize*4/3,4/3*buttonSize+3*inbetween+camH);
  screen6Ja.mousePressed(Ja6);
  
  screen6Nee=createImg('images/Not.png','JA');
  screen6Nee.size(buttonSize*2/3,buttonSize*2/3);
  screen6Nee.position(camX+camW-buttonSize*2/3,4/3*buttonSize+3*inbetween+camH);
  screen6Nee.mousePressed(Nee6);
}

function Ja6(){
  antwoord6="ja"
  antwoord6X=screen6Ja.position().x;
  antwoord6Y=screen6Ja.position().y;
}

function Nee6(){
  antwoord6="nee"
  antwoord6X=screen6Nee.position().x;
  antwoord6Y=screen6Nee.position().y;
}

function tekenAntwoord6(){
     if (antwoord6X != 0) {
     fill(color(168, 193, 227));
     strokeWeight(0);
     rect(antwoord6X, antwoord6Y, buttonSize*2/3, buttonSize*2/3);
   }  
}

function removePositiefUitleg6(){
  screen6PositiefTekst.hide();
}
function removeNegatiefUitleg6(){
  screen6NegatiefTekst.hide();
}