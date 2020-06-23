//Grootte camera
var camW;
var camH;

//grootte knoppen
var buttonSize;
var inbetween;

var inbetweenBreedte;

// locatie camera
var camX;
var camY; 

var teksthoogte;

function camSize() {
  //De grootte van de standaardknoppen wordt bepaald op basis van de hoogte van het display 
  buttonSize = H / 15;
  inbetween = buttonSize /5; // de ruimte tussen de knoppen
  
  inbetweenBreedte=(W-(14/3)*buttonSize)/6;
  
  // De grootte van de camera wordt aangepast op basis van de hoogte van het display
  camH = H-(67/12)*buttonSize-10*inbetween-inbetween/2; 
  camW = (camH / cam.height) * cam.width; // breedte camera is in verhouding tot de hoogte van de camera
  
  // De locatie van de camera wordt vastgelegd, net onder het logo, en in het midden van het scherm
  camX = (W - camW) / 2; //Xlocatie van de camera
  camY = buttonSize/2+inbetween//Ylocatie van de camera
  
  cam.position(camX,camY);
  cam.size(camW,camH);
  
  fontsize=buttonSize/4+'px';
  fontsizeSelect=buttonSize/6 +'px';
  teksthoogte=buttonSize/4
}