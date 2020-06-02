var X=0;

function fotoreeks() {
  
  fill(color(168, 193, 227));
  noStroke();
  rect(camX-inbetween/2-X*(camW+inbetween/2),camY-inbetween/2,5*camW+6*inbetween/2,camH+inbetween);
  
  for (var f = 0; f < photos.length; f++) {
    if (photos[f] != "") {
      image(photos[f], camX+(f-X)*(camW+inbetween/2), camY, camW, camH);
    }
  }

  screen3Positief.position(camX+(0-X)*(camW+inbetween/2), camH+camY+inbetween);
  screen3Negatief.position(camX+(0-X)*(camW+inbetween/2), camH+camY+buttonSize+2*inbetween);
  
  screen4Positief.position(camX+(1-X)*(camW+inbetween/2), camH+camY+inbetween);
  screen4Negatief.position(camX+(1-X)*(camW+inbetween/2), camH+camY+buttonSize+2*inbetween);
  
  screen5Positief.position(camX+(2-X)*(camW+inbetween/2), camH+camY+inbetween);
  screen5Negatief.position(camX+(2-X)*(camW+inbetween/2), camH+camY+buttonSize+2*inbetween);
  
  screen6Positief.position(camX+(3-X)*(camW+inbetween/2), camH+camY+inbetween);
  screen6Negatief.position(camX+(3-X)*(camW+inbetween/2), camH+camY+buttonSize+2*inbetween);
  
  screen7Positief.position(camX+(4-X)*(camW+inbetween/2), camH+camY+inbetween);
  screen7Negatief.position(camX+(4-X)*(camW+inbetween/2), camH+camY+buttonSize+2*inbetween);
  
  
}

function picButtons(){
  //Knop om naar de vorige of volgende afbeelding te gaan
  nextPic = createImg('images/nextPic.png', 'Next');
  nextPic.size(buttonSize, buttonSize);
  nextPic.position(camX + camW - buttonSize / 2, buttonSize/2+inbetween + camH / 2);
  nextPic.mousePressed(nextPicPress);

  //Knop om naar de vorige of volgende afbeelding te gaan
  previousPic = createImg('images/previousPic.png', 'Next');
  previousPic.size(buttonSize, buttonSize);
  previousPic.position(camX - buttonSize / 2,  buttonSize/2+inbetween + camH / 2);
  previousPic.mousePressed(previousPicPress);
  
  screen8=createElement('text','Dit is jouw Blokverhaal! Andere verhalen vind je terug op de volgende website: ....').size(W-3*inbetween-buttonSize, buttonSize).position(2*inbetween+buttonSize,inbetween).style('font-size', fontsize);
  
  emailVraag=createElement('text','Mag ik u contacteren voor bijkomende vragen?').size(W-3*inbetween-buttonSize).position(camX,camH+camY+2*buttonSize+3*inbetween).style('font-size', fontsize);
  
  emailTekst=createElement('text','e-mail adres:').size(camW).position(camX,camH+camY+2*buttonSize+4*inbetween).style('font-size', fontsize);

  email=createInput("");
  email.position(camX+emailTekst.width,camH+camY+2*buttonSize+4*inbetween);
  email.size(camW-emailTekst.width);
}
  
 

function nextPicPress(){
  X++;
  if(X==4){
    nextPic.hide();
  }
  previousPic.show();
}

function previousPicPress(){
  X--;
  if(X==0){
    previousPic.hide();
  }
  nextPic.show();
}


