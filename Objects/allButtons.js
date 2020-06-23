// Alle knoppen worden hier geladen, ongeacht op welk scherm ze getoond worden. Zo kan er eenvoudig gecontroleerd worden welke knop boven de andere moet geplaatst worden.
function allButtons(){
  
  //Het logo van het onderzoek
  logo = createImg('images/Logo.png', 'logo');
  logo.size(5 * buttonSize, buttonSize);
  logo.position(camX + camW / 2 - 5 * buttonSize / 2, inbetween);
  
  //Knop om naar het volgende scherm te gaan wordt getekend en e functies worden toegewezen
  volgende = createImg('images/Volgende.png', 'Next');
  volgende.size(2.7 * buttonSize, buttonSize);
  volgende.position(W-2.7*buttonSize-inbetween,H-inbetween-buttonSize);
  volgende.mousePressed(volgendeScherm);
  volgende.mouseReleased(volgendeSchermEinde);

  // De inleidende tekst op de eerste pagina
  informedConsent();
  
  // De elementen die op scherm twee staan
  algemeneVragen();
  hideScreen2();
  
  veranderingVragen();
  hideScreen2b();
  
  logoRuimte=createImg('images/Ruimte.png','kleinlogo');
  logoRuimte.size(buttonSize*3.5/2,buttonSize/2);
  logoRuimte.position(inbetween+buttonSize/4,inbetween+buttonSize/8);
  logoRuimte.hide();
  
  logoPrivacy=createImg('images/Privacy.png','kleinlogo');
  logoPrivacy.size(buttonSize*3.5/2,buttonSize/2);
  logoPrivacy.position(inbetween+buttonSize/4,inbetween+buttonSize/8);
  logoPrivacy.hide();
  
  logoUitzicht=createImg('images/Uitzicht.png','kleinlogo');
  logoUitzicht.size(buttonSize*3.5/2,buttonSize/2);
  logoUitzicht.position(inbetween+buttonSize/4,inbetween+buttonSize/8);
  logoUitzicht.hide();
  
  logoLicht=createImg('images/Licht.png','kleinlogo');
  logoLicht.size(buttonSize*3.5/2,buttonSize/2);
  logoLicht.position(inbetween+buttonSize/4,inbetween+buttonSize/8);
  logoLicht.hide();
  
  logoGeluid=createImg('images/Geluid.png','kleinlogo');
  logoGeluid.size(buttonSize*3.5/2,buttonSize/2);
  logoGeluid.position(inbetween+buttonSize/4,inbetween+buttonSize/8);
  logoGeluid.hide();
  
  camButtons();
  tekstvakScreen3();
  hideScreen3();
  
  tekstvakScreen4();
  hideScreen4();
  
  tekstvakScreen5();
  hideScreen5();
  
  tekstvakScreen6();
  hideScreen6();
  
  tekstvakScreen7();
  hideScreen7();
  
  picButtons();
  hideScreen8();
}