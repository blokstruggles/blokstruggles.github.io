var photos=[];

function camButtons(){
  // knop waarmee we een foto kunnen hernemen
  retakeShot = createImg('images/retake.png', 'retake photo');
  retakeShot.position(camX, H - inbetween - buttonSize);
  retakeShot.size(buttonSize, buttonSize);
  retakeShot.mousePressed(retake);
  
  //knop waarmee we een foto kunnen nemen
  snapshot = createImg('images/circle.png', 'take picture');
  snapshot.show();
  snapshot.position(camX + camW / 2 - (camW / 3) / 2, camY + camH - camW / 3 - (camW / 3) / 4);
  snapshot.size(camW / 3, camW / 3);
  snapshot.mousePressed(takePhoto);
  
  for(var i=0; i<5;i++){
    photos[i]="";
  }
}

function retake(){
  cam.show();
  snapshot.show()
  photos[screen-3]="";
}

function takePhoto(){
  photos[screen-3]=cam.get();
  retakeShot.show();
  snapshot.hide();
  cam.hide();
}

function drawPhoto(){
      if (photos[screen-3] != "") {
        image(photos[screen-3], camX, camY, camW, camH);
      }  
}