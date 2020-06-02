function informedConsent(){
   IC=createElement('textarea').size(camW, camH).position(camX,camY).style('background-color', color(0, 0, 0, 0)).style('font-size', fontsize);
  
  IC.value("Studenten! Laat weten wat er tijdens het blokken (niet) gaat!"+"\r\n "+"\r\nDoor de Coronacrisis hebben wij (de studenten) ons allemaal moeten aanpassen."+"\r\n"+"\r\nMet deze online applicatie kan je door middel van foto's en bijkomende vertellen wat er op jouw nieuwe studeerplek (niet) mis gaat. Hierbij kan je vooral focussen op wat er anders verloopt door de coronacrisis, zowel positieve als negatieve elementen komen aan bod."+"\r\n"+"\r\nDruk op 'Volgende' om naar de volgende stap te gaan, verdere stappen worden later uitgelegd.");
  
  IC.attribute('disabled','true');
}