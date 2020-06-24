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
        // indien front gewenst "environment"
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
    apiKey: "AIzaSyB1mEoSK1mA2Pm6srbodGdqPFuxKAddNmI",
    authDomain: "blokstruggles-official.firebaseapp.com",
    databaseURL: "https://blokstruggles-official.firebaseio.com",
    projectId: "blokstruggles-official",
    storageBucket: "blokstruggles-official.appspot.com",
    messagingSenderId: "232198545182",
    appId: "1:232198545182:web:daac479e28b990b23cb30f",
    measurementId: "G-H3YWCC8G16"
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
    color(0,0,0);
    fill(0,0,0);
    noStroke();
    text("stap "+screen+"/9",camX,H-inbetween-buttonSize/2)

  if(screen>3 && screen<9){
  fill(color(168, 193, 227));
  noStroke();
  rect(camX-inbetween/2,camY-inbetween/2,camW+inbetween,camH+inbetween);
  }
  }
  if(screen==3){
    tekenAntwoord2b();
    noStroke();
    fill(color(0,0,0));
    text("Waarom je wel of niet tevreden bent met de ruimte kan je uitleggen aan de hand van 5 thema's tijdens de volgende stappen. De studieplek in het algemeen, de privacy, de afleiding door het uitzicht, het licht en het storende geluid. Je bent niet verplicht om een foto te nemen en kan een thema overslaan door op de knop 'volgende' te drukken.",inbetween,camY + buttonSize / 2 + 12 * inbetween + 9* teksthoogte + 2*buttonSize * 2 / 3 + buttonSize,W-2*inbetween,H);
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
