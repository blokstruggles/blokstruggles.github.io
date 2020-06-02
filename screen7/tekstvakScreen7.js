var antwoord7;
var antwoord7X=0;
var antwoord7Y=0;

function tekstvakScreen7(){
  antwoord7='';
  
  screen7=createElement('text','Neem een foto van de dichtsbijzijnde geluidsbron. Als je luidop of met muziek studeert, kan jij zelf (en dus jouw werkplek) de geluidsbron zijn.'+'\r\n').size(W-3*inbetween-buttonSize, buttonSize).position(2*inbetween+buttonSize,inbetween).style('font-size', fontsize);
  
  screen7PositiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen7PositiefTekst.value("Ben je tevreden met het geluid op jou studeerplek? Hoor jij anderen niet of zij jou niet? ...");
  screen7PositiefTekst.attribute('disabled','true');
  
  screen7Positief=createElement('textarea').size(camW, buttonSize).position(camX,2*buttonSize+4*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removePositiefUitleg7);
  screen7Positief.value("");
  
  screen7NegatiefTekst=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  screen7NegatiefTekst.value("Zijn/Waren er problemen omtrent geluid? Bv. Moet je de deur sluiten, moet je met oordoppen werken ...");
  screen7NegatiefTekst.attribute('disabled','true');
  
  screen7Negatief=createElement('textarea').size(camW, buttonSize).position(camX,3*buttonSize+5*inbetween+camH).style('background-color', color(255, 255, 255, 100)).mousePressed(removeNegatiefUitleg7);
  screen7Negatief.value("");
  
  screen7Vraag=createElement('text',"Was dit voor Covid-19 hetzelfde?").size(camW-buttonSize*4/3-2*inbetween, buttonSize/3).position(camX,4/3*buttonSize+3*inbetween+camH).style('font-size', fontsize);
  
  screen7Ja=createImg('images/Check.png','JA');
  screen7Ja.size(buttonSize*2/3,buttonSize*2/3);
  screen7Ja.position(camX+camW-inbetween-buttonSize*4/3,4/3*buttonSize+3*inbetween+camH);
  screen7Ja.mousePressed(Ja7);
  
  screen7Nee=createImg('images/Not.png','JA');
  screen7Nee.size(buttonSize*2/3,buttonSize*2/3);
  screen7Nee.position(camX+camW-buttonSize*2/3,4/3*buttonSize+3*inbetween+camH);
  screen7Nee.mousePressed(Nee7);
}

function Ja7(){
  antwoord7="ja"
  antwoord7X=screen7Ja.position().x;
  antwoord7Y=screen7Ja.position().y;
}

function Nee7(){
  antwoord7="nee"
  antwoord7X=screen7Nee.position().x;
  antwoord7Y=screen7Nee.position().y;
}

function tekenAntwoord7(){
     if (antwoord7X != 0) {
     fill(color(168, 193, 227));
     strokeWeight(0);
     rect(antwoord7X, antwoord7Y, buttonSize*2/3, buttonSize*2/3);
   }  
}

function removePositiefUitleg7(){
  screen7PositiefTekst.hide();
}
function removeNegatiefUitleg7(){
  screen7NegatiefTekst.hide();
}