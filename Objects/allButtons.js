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
  volgende.touchStarted(volgendeScherm);
  volgende.touchEnded(volgendeSchermEinde);

  // De inleidende tekst op de eerste pagina
  informedConsent();
  
  // De elementen die op scherm twee staan
  huisButtons();
  hideScreen2();
  
  logoklein=createImg('images/Logo2.png','kleinlogo');
  logoklein.size(buttonSize,buttonSize);
  logoklein.position(inbetween,inbetween);
  logoklein.hide();
  
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