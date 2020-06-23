var photos=[];

function camButtons(){
  // knop waarmee we een foto kunnen hernemen
  retakeShot = createImg('images/retake.png', 'retake photo');
  retakeShot.position(inbetween/2, camY+camH-buttonSize/1.5);
  retakeShot.size(buttonSize/1.5, buttonSize/1.5);
  retakeShot.mousePressed(retake);
  
  //knop waarmee we een foto kunnen nemen
  snapshot = createImg('images/circle.png', 'take picture');
  snapshot.show();
  snapshot.position(camX + camW / 2 - (camW / 3) / 2, camY + camH - camW / 3 - (camW / 3) / 4);
  snapshot.size(camW / 3, camW / 3);
  snapshot.mousePressed(takePhoto);
  
  for(var i=0; i<10;i++){
    photos[i]="";
  }
  
  makePhoto = createImg('images/makePhoto.png', 'open Camera');
  makePhoto.show();
  makePhoto.position(camX + camW / 2 - (buttonSize*2.5) / 2, camY + camH - buttonSize*2.5-2*inbetween);
  makePhoto.size(buttonSize*2.5,buttonSize*2.5);
  makePhoto.mousePressed(showCamera);
}

function retake(){
  cam.show();
  snapshot.show()
  photos[screen-4]="";
  
  if(screen==4){
  screen3.show();
  }
  if(screen==5){
  screen4.show();
  }
  if(screen==6){
  screen5.show();
  }
  if(screen==7){
  screen6.show();
  }
  if(screen==8){
  screen7.show();
  }
}

function takePhoto(){
  photos[screen-4]=cam.get();
  retakeShot.show();
  snapshot.hide();
  cam.hide();
  screen3.hide();
  screen4.hide();
  screen5.hide();
  screen6.hide();
  screen7.hide();
}

function drawPhoto(){
      if (photos[screen-4] != "") {
        image(photos[screen-4], camX, camY, camW, camH);
      }  
}

function showCamera(){
  snapshot.show();
  cam.show();
  makePhoto.hide();
}