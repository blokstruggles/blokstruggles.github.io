// Eigenschappen van het display
var H;
var W;

// Het scherm waar we ons op bevinden, gaat verderder door op de knop 'volgende' te klikken
var screen=0;

var fontsize;

function preload(){
    cam = createCapture({
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
        // indien front gewenst "user"
        // achtercamera "environment"
      }
    }
  });
  cam.hide();
}

function setup() {
  
  volgendeReactie = loadImage('images/Volgende.png');
  volgendeLeeg = loadImage('images/Volgende.png');
  volgendeKleur = loadImage('images/VolgendeKleur.png');
  
  H = window.innerHeight; //hoogte van het scherm in de browser
  W = window.innerWidth; //breedte van het scherm in de browser
  canvas=createCanvas(W, H);
  
  //configuratie firebase
  var firebaseConfig = {
    apiKey: "AIzaSyBW9WCsKKn-9fVMYQkC0Rt27HKu0RLnvso",
    authDomain: "blokstruggles.firebaseapp.com",
    databaseURL: "https://blokstruggles.firebaseio.com",
    projectId: "blokstruggles",
    storageBucket: "blokstruggles.appspot.com",
    messagingSenderId: "355830274814",
    appId: "1:355830274814:web:eeef9f1fb53c24e13ae3af",
    measurementId: "G-D0JPRQM09N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  
  saveDrawing();
}

function draw() {
  background(220);
  // Bij het openen van de app willen we nakijken of de camera al geladen is voordat we verdergaan
  if (screen == 0) {
    cam.loadPixels(); 
  }
  // zolang de camera niet geladen is, is het aantal pixels 0. Vanaf dat de camera voledig geïnitialiseerd is, gaat de applicatie verder.
  if (cam.pixels[1] > 0 && screen == 0) {
    camSize();
    allButtons();
    screen++;
    saveDrawing();
  }
  
  if(screen>0&&screen<10){
  image(volgendeReactie,volgende.position().x,volgende.position().y,volgende.size().width,volgende.size().height);

  if(screen>3 && screen<9){
  fill(color(168, 193, 227));
  noStroke();
  rect(camX-inbetween/2,camY-inbetween/2,camW+inbetween,camH+inbetween);
  }
  }
  if(screen==3){
    tekenAntwoord2b();
  }
  
  if(screen==4){
    drawPhoto();
    tekenAntwoord3();
  }
  if(screen==5){
    drawPhoto();
    tekenAntwoord4();
  }
  
    if(screen==6){
    drawPhoto();
    tekenAntwoord5();
  }
  
    if(screen==7){
    drawPhoto();
    tekenAntwoord6();
  }
  
  if(screen==8){
    drawPhoto();
    tekenAntwoord7();
  }
  
  if(screen==9){
    fotoreeks();
  }
}

// prevents the mobile browser from processing  scrolling the page.
function touchMoved(){
    return false;
}
