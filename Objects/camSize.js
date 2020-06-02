//Grootte camera
var camW;
var camH;

//grootte knoppen
var buttonSize;
var inbetween;

// locatie camera
var camX;
var camY; 

function camSize() {
  //De grootte van de standaardknoppen wordt bepaald op basis van de hoogte van het display 
  buttonSize = H / 16;
  inbetween = 2*buttonSize /5; // de ruimte tussen de knoppen
  
  // De grootte van de camera wordt aangepast op basis van de hoogte van het display
  camH = H-5*buttonSize-7*inbetween; 
  camW = (camH / cam.height) * cam.width; // breedte camera is in verhouding tot de hoogte van de camera
  
  // De locatie van de camera wordt vastgelegd, net onder het logo, en in het midden van het scherm
  camX = (W - camW) / 2; //Xlocatie van de camera
  camY = buttonSize+2*inbetween//Ylocatie van de camera
  
  cam.position(camX,camY);
  cam.size(camW,camH);
  
  fontsize=buttonSize/4+'px';
}