// firebase functions to save the drawing arraylists
// voeg hier een naam aan toe voor in firebase en de gelinkte arraylist
var uur;
var minuut;
var maand;
var seconde
var data;
var result;
var tijd = [];

var omgezetteFotos=[];

function saveDrawing() {
  console.log("saved");
  if (minute() < 10) {
    minuut = '0' + minute();
  } else {
    minuut = minute();
  }

  if (hour() < 10) {
    uur = '0' + hour();
  } else {
    uur = hour();
  }

  if (second() < 10) {
    seconde = '0' + second();
  } else {
    seconde = second();
  }
  
  for(var i=0;i<photos.length;i++){
    if(photos[i]!=undefined&&photos[i]!=""){
    omgezetteFotos[i]=photos[i].canvas.toDataURL();
    } else {
    omgezetteFotos[i]="";
    }
  }

  var ref = database.ref('participations');

  tijd[screen] = uur + ':' + minuut + ':' + seconde;
  if (screen == 0) {
    data = {
      tijd: tijd,
      date: day() + '/' + month() + '/' + year()
    }
    result = ref.push(data, dataSent);
  }

  if (screen == 1) {
    data = {
      tijd: tijd,
      date: day() + '/' + month() + '/' + year()
    }
    result.update(data);
  }

  if (screen == 2) {
    data = {
      tijd: tijd,
      date: day() + '/' + month() + '/' + year(),
      gebouwTypologie: typologie,
      aantalgezinsleden: aantalgezinsleden.value()
    }
    result.update(data);
  }

  if (screen == 3) {
    data = {
      tijd: tijd,
      date: day() + '/' + month() + '/' + year(),
      fotos: omgezetteFotos,
      ruimte: screen3Positief.value(),
      ruimteCommentaar: screen3Negatief.value(),
      antwoord3: antwoord3
    }
    result.update(data);
  }

  if (screen == 4) {
    data = {
      tijd: tijd,
      date: day() + '/' + month() + '/' + year(),
      fotos: omgezetteFotos,
      privacyPositief: screen4Positief.value(),
      privacyNegatief: screen4Negatief.value(),
      antwoord4: antwoord4
    }
    result.update(data);
  }

  if (screen == 5) {
    data = {
      tijd: tijd,
      date: day() + '/' + month() + '/' + year(),
      fotos: omgezetteFotos,
      uitzichtPositief: screen5Positief.value(),
      uitzichtNegatief: screen5Negatief.value(),
      antwoord5: antwoord5
    }
    result.update(data);
  }

  if (screen == 6) {
    data = {
      tijd: tijd,
      date: day() + '/' + month() + '/' + year(),
      fotos: omgezetteFotos,
      lichtPositief: screen6Positief.value(),
      lichtNegatief: screen6Negatief.value(),
      antwoord6: antwoord6
    }
    result.update(data);
  }

  if (screen == 7) {
    data = {
      tijd: tijd,
      date: day() + '/' + month() + '/' + year(),
      fotos: omgezetteFotos,
      akoestiekPositief: screen7Positief.value(),
      akoestiekNegatief: screen7Negatief.value(),
      antwoord7: antwoord7
    }
    result.update(data);
  }
  
    if (screen == 8) {
    data = {
      tijd: tijd,
      date: day() + '/' + month() + '/' + year(),
      email: email.value()
    }
    result.update(data);
  }

  console.log(result.key);
}

function dataSent(err, status) {
  console.log(status);
}