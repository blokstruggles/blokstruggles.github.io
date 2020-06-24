function volgendeScherm(){
  volgendeReactie=volgendeKleur;
  saveDrawing();
  screen++;
}

function volgendeSchermEinde(){
  volgendeReactie=volgendeLeeg;
  
  if(screen==2){
    hideScreen1();
    showScreen2();
  }
  
  if(screen==3){
    hideScreen2();
    showScreen2b();
  }
  
  if(screen==4){
    hideScreen2b();
    showScreen3();
  }
  
  if(screen==5){
    hideScreen3();
    showScreen4();
  }
  
  if(screen==6){
    hideScreen4();
    showScreen5();
  }
  
    if(screen==7){
    hideScreen5();
    showScreen6();
  }
  
  if(screen==8){
    hideScreen6();
    showScreen7();
  }
  
  if(screen==9){
    hideScreen7();
    showScreen8();
  }
  
  if(screen==10){
    hideScreen8();
    volgende.hide();
  }
}