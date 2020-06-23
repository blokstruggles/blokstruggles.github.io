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
  
  screen3V.position(screen3VX+(0-X)*(camW+inbetween/2), screen3VY);
  screen3X.position(screen3XX+(0-X)*(camW+inbetween/2),screen3XY);
  
  logoRuimte.position(camX+camW/2-buttonSize*(3.5/2)+(0-X)*(camW+inbetween/2),inbetween);
  
  screen3Antwoord.position(camX+camW/2+inbetween+(0-X)*(camW+inbetween/2),inbetween).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
  screen3AntwoordAndere.position(camX+camW/2+inbetween+(0-X)*(camW+inbetween/2),1.5*inbetween+teksthoogte).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
  screen3veelmeer.position(camX+(0-X)*(camW+inbetween/2),inbetween+camY);
  screen3meer.position(camX+(0-X)*(camW+inbetween/2),inbetween+camY);
  screen3minder.position(camX+(0-X)*(camW+inbetween/2),inbetween+camY);
  screen3veelminder.position(camX+(0-X)*(camW+inbetween/2),inbetween+camY);
  screen3hetzelfde.position(camX+(0-X)*(camW+inbetween/2),inbetween+camY);

  
  screen4Positief.position(camX+(1-X)*(camW+inbetween/2), camH+camY+inbetween);
  
  screen4V.position(screen4VX+(1-X)*(camW+inbetween/2), screen4VY);
  screen4X.position(screen4XX+(1-X)*(camW+inbetween/2),screen4XY);
  
    logoPrivacy.position(camX+camW/2-buttonSize*(3.5/2)+(1-X)*(camW+inbetween/2),inbetween);
  
  screen4Antwoord.position(camX+camW/2+inbetween+(1-X)*(camW+inbetween/2),inbetween).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
  screen4AntwoordAndere.position(camX+camW/2+inbetween+(1-X)*(camW+inbetween/2),1.5*inbetween+teksthoogte).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
  screen4veelmeer.position(camX+(1-X)*(camW+inbetween/2),inbetween+camY);
  screen4meer.position(camX+(1-X)*(camW+inbetween/2),inbetween+camY);
  screen4minder.position(camX+(1-X)*(camW+inbetween/2),inbetween+camY);
  screen4veelminder.position(camX+(1-X)*(camW+inbetween/2),inbetween+camY);
  screen4hetzelfde.position(camX+(1-X)*(camW+inbetween/2),inbetween+camY);
  
  screen5Positief.position(camX+(2-X)*(camW+inbetween/2), camH+camY+inbetween);
  
  screen5V.position(screen5VX+(2-X)*(camW+inbetween/2), screen5VY);
  screen5X.position(screen5XX+(2-X)*(camW+inbetween/2),screen5XY);

    logoUitzicht.position(camX+camW/2-buttonSize*(3.5/2)+(2-X)*(camW+inbetween/2),inbetween);
  
  screen5Antwoord.position(camX+camW/2+inbetween+(2-X)*(camW+inbetween/2),inbetween).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
  screen5AntwoordAndere.position(camX+camW/2+inbetween+(2-X)*(camW+inbetween/2),1.5*inbetween+teksthoogte).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
    screen5veelmeer.position(camX+(2-X)*(camW+inbetween/2),inbetween+camY);
  screen5meer.position(camX+(2-X)*(camW+inbetween/2),inbetween+camY);
  screen5minder.position(camX+(2-X)*(camW+inbetween/2),inbetween+camY);
  screen5veelminder.position(camX+(2-X)*(camW+inbetween/2),inbetween+camY);
screen5hetzelfde.position(camX+(2-X)*(camW+inbetween/2),inbetween+camY);
  
  screen6Positief.position(camX+(3-X)*(camW+inbetween/2), camH+camY+inbetween);
  
  screen6V.position(screen6VX+(3-X)*(camW+inbetween/2), screen6VY);
  screen6X.position(screen6XX+(3-X)*(camW+inbetween/2),screen6XY);
  
    logoLicht.position(camX+camW/2-buttonSize*(3.5/2)+(3-X)*(camW+inbetween/2),inbetween);
 
  screen6Antwoord.position(camX+camW/2+inbetween+(3-X)*(camW+inbetween/2),inbetween).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
  screen6AntwoordAndere.position(camX+camW/2+inbetween+(3-X)*(camW+inbetween/2),1.5*inbetween+teksthoogte).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
    screen6veelmeer.position(camX+(3-X)*(camW+inbetween/2),inbetween+camY);
  screen6meer.position(camX+(3-X)*(camW+inbetween/2),inbetween+camY);
  screen6minder.position(camX+(3-X)*(camW+inbetween/2),inbetween+camY);
  screen6veelminder.position(camX+(3-X)*(camW+inbetween/2),inbetween+camY);
  screen6hetzelfde.position(camX+(3-X)*(camW+inbetween/2),inbetween+camY);
  
  
  screen7Positief.position(camX+(4-X)*(camW+inbetween/2), camH+camY+inbetween);
  
  screen7V.position(screen7VX+(4-X)*(camW+inbetween/2), screen7VY);
  screen7X.position(screen7XX+(4-X)*(camW+inbetween/2),screen7XY); 
  
  logoGeluid.position(camX+camW/2-buttonSize*(3.5/2)+(4-X)*(camW+inbetween/2),inbetween);
  
  screen7Antwoord.position(camX+camW/2+inbetween+(4-X)*(camW+inbetween/2),inbetween).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
  screen7AntwoordAndere.position(camX+camW/2+inbetween+(4-X)*(camW+inbetween/2),1.5*inbetween+teksthoogte).attribute('disabled','true').size(camW/2-inbetween,teksthoogte);
  
  screen7veelmeer.position(camX+(4-X)*(camW+inbetween/2),inbetween+camY);
  screen7meer.position(camX+(4-X)*(camW+inbetween/2),inbetween+camY);
  screen7minder.position(camX+(4-X)*(camW+inbetween/2),inbetween+camY);
  screen7veelminder.position(camX+(4-X)*(camW+inbetween/2),inbetween+camY);
  screen7hetzelfde.position(camX+(4-X)*(camW+inbetween/2),inbetween+camY);
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
  
  
  
  emailVraag=createElement('text','Wil je op de hoogte gehouden worden van de resultaten? Laat dan hier uw e-mail adres achter.').size(W-2*inbetween).position(inbetween,camH+camY+2*buttonSize+3*inbetween).style('font-size', fontsize);
  
  emailTekst=createElement('text','').size(camW).position(camX,camH+camY+2*buttonSize+3.5*inbetween+teksthoogte).style('font-size', fontsize);

  email=createElement('textarea').size(camW, buttonSize).position(3 * inbetween, camH+camY+2*buttonSize+3.5*inbetween+2*teksthoogte).style('background-color', color(255, 255, 255, 100)).style('font-size', fontsize).value("");

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


