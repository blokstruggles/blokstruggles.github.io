function hideScreen8() {
  previousPic.hide();
  nextPic.hide();

  screen3Positief.hide();


  screen4Positief.hide();


  screen5Positief.hide();


  screen6Positief.hide();


  screen7Positief.hide();

  screen3V.hide();
  screen3X.hide();

  screen4V.hide();
  screen4X.hide();
  screen5V.hide();
  screen5X.hide();
  screen6V.hide();
  screen6X.hide();
  screen7V.hide();
  screen7X.hide();

  screen3Antwoord.hide();
  screen4Antwoord.hide();
  screen5Antwoord.hide();
  screen6Antwoord.hide();
  screen7Antwoord.hide();

  screen3AntwoordAndere.hide();
  screen4AntwoordAndere.hide();
  screen5AntwoordAndere.hide();
  screen6AntwoordAndere.hide();
  screen7AntwoordAndere.hide();

  screen3veelmeer.hide();
  screen3meer.hide();
  screen3veelminder.hide();
  screen3minder.hide();

  screen4veelmeer.hide();
  screen4meer.hide();
  screen4veelminder.hide();
  screen4minder.hide();

  screen5veelmeer.hide();
  screen5meer.hide();
  screen5veelminder.hide();
  screen5minder.hide();

  screen6veelmeer.hide();
  screen6meer.hide();
  screen6veelminder.hide();
  screen6minder.hide();

  screen7veelmeer.hide();
  screen7meer.hide();
  screen7veelminder.hide();
  screen7minder.hide();

  screen3hetzelfde.hide();
  screen4hetzelfde.hide();
  screen5hetzelfde.hide();
  screen6hetzelfde.hide();
  screen7hetzelfde.hide();


  logoRuimte.hide();
  logoPrivacy.hide();
  logoUitzicht.hide();
  logoLicht.hide();
  logoGeluid.hide();

  emailVraag.hide();
  email.hide();
  emailTekst.hide();

  if (screen == 10) {
    logo.show();
    IC.show();
    IC.value("Bedankt voor je deelname! Nog veel succes met je laatste examens!")
  }
}

function showScreen8() {
  X = 0;
  nextPic.show();

  screen3Positief.show();

  screen4Positief.show();

  screen5Positief.show();

  screen6Positief.show();

  screen7Positief.show();

  if (screen3VY <= camY + camH) {
  screen3V.show();
    }
  if (screen3XY <= camY + camH) {
  screen3X.show();
  }

  screen3Antwoord.show();
  screen4Antwoord.show();
  screen5Antwoord.show();
  screen6Antwoord.show();
  screen7Antwoord.show();

  screen3AntwoordAndere.show();
  screen4AntwoordAndere.show();
  screen5AntwoordAndere.show();
  screen6AntwoordAndere.show();
  screen7AntwoordAndere.show();

  if (screen4VY <= camY + camH) {
    screen4V.show();
  }
  if (screen4XY <= camY + camH) {
  screen4X.show();
  }
  
  if (screen5VY <= camY + camH) {
  screen5V.show();
    }
  if (screen5XY <= camY + camH) {
  screen5X.show();
  }
  
  if (screen6VY <= camY + camH) {
  screen6V.show();
    }
  if (screen6XY <= camY + camH) {
  screen6X.show();
    }
  
  if (screen7VY <= camY + camH) {
  screen7V.show();
    }
  if (screen7XY <= camY + camH) {
  screen7X.show();
  }

  if (antwoord3 == "veel meer") {
    screen3veelmeer.show();
  }
  if (antwoord3 == "meer") {
    screen3meer.show();
  }
  if (antwoord3 == "veel minder") {
    screen3veelminder.show();
  }
  if (antwoord3 == "minder") {
    screen3minder.show();
  }

  if (antwoord4 == "veel meer") {
    screen4veelmeer.show();
  }
  if (antwoord4 == "meer") {
    screen4meer.show();
  }
  if (antwoord4 == "veel minder") {
    screen4veelminder.show();
  }
  if (antwoord4 == "minder") {
    screen4minder.show();
  }

  if (antwoord5 == "veel meer") {
    screen5veelmeer.show();
  }
  if (antwoord5 == "meer") {
    screen5meer.show();
  }
  if (antwoord5 == "veel minder") {
    screen5veelminder.show();
  }
  if (antwoord5 == "minder") {
    screen5minder.show();
  }

  if (antwoord6 == "veel meer") {
    screen6veelmeer.show();
  }
  if (antwoord6 == "meer") {
    screen6meer.show();
  }
  if (antwoord6 == "veel minder") {
    screen6veelminder.show();
  }
  if (antwoord6 == "minder") {
    screen6minder.show();
  }

  if (antwoord7 == "veel meer") {
    screen7veelmeer.show();
  }
  if (antwoord7 == "meer") {
    screen7meer.show();
  }
  if (antwoord7 == "veel minder") {
    screen7veelminder.show();
  }
  if (antwoord7 == "minder") {
    screen7minder.show();
  }

  if (antwoord3 == "hetzelfde") {
    screen3hetzelfde.show();
  }

  if (antwoord4 == "hetzelfde") {
    screen4hetzelfde.show();
  }

  if (antwoord5 == "hetzelfde") {
    screen5hetzelfde.show();
  }

  if (antwoord6 == "hetzelfde") {
    screen6hetzelfde.show();
  }

  if (antwoord7 == "hetzelfde") {
    screen7hetzelfde.show();
  }

  logoRuimte.show();
  logoPrivacy.show();
  logoUitzicht.show();
  logoLicht.show();
  logoGeluid.show();

  emailVraag.show();
  email.show();
  emailTekst.show();

}