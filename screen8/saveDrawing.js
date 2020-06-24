// firebase functions to save the drawing arraylists
// voeg hier een naam aan toe voor in firebase en de gelinkte arraylist
var uur;
var minuut;
var maand;
var seconde
var data;
var result;
var tijd = [];

var algemeneInfo=[];
var studeerplekInfo=[];

var ruimteInfo=[];
var privacyInfo=[];
var uitzichtInfo=[];
var lichtInfo=[];
var geluidInfo=[];

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
      camX:camX,
      camY:camY,
      camW:camW,
      camH:camH,
      H:H,
      W:W,
      buttonSize:buttonSize,
      teksthoogte:teksthoogte,
      inbetween:inbetween
    }
    result.update(data);
  }

  if (screen == 2) {
    algemeneInfo[0]=geslachtInput.value();
    algemeneInfo[1]=leeftijdInput.value();
    algemeneInfo[2]=universiteitInput.value()+universiteitAndere.value();
    algemeneInfo[3]=faculteitInput.value()+faculteitAndere.value();
    
    data = {
      tijd: tijd,
      algemeneinfo: algemeneInfo
    }
    result.update(data);
  }

  if (screen == 3) {
    studeerplekInfo[0]=vorigeplekInput.value();
    studeerplekInfo[1]=tevredenheidVooraf;
    studeerplekInfo[2]=vorigeplekWaaromInput.value();
    studeerplekInfo[3]=coronaplekInput.value();
    studeerplekInfo[4]=tevredenheidAchteraf;
    
    data = {
      tijd: tijd,
      studeerplekInfo: studeerplekInfo
    }
    result.update(data);
  }

  if (screen == 4) {
    if(photos[0]!=""){
    ruimteInfo[0]=photos[0].canvas.toDataURL();
    } else{
    ruimteInfo[0]=photos[0];
    }
    ruimteInfo[1]=screen3Antwoord.value();
    ruimteInfo[2]=screen3AntwoordAndere.value();
    ruimteInfo[3]=screen3V.position().x;
    ruimteInfo[4]=screen3V.position().y;
    ruimteInfo[5]=screen3X.position().x;
    ruimteInfo[6]=screen3X.position().y;
    ruimteInfo[7]=antwoord3;
    ruimteInfo[8]=screen3Positief.value();
    
    data = {
      tijd: tijd,
      ruimteInfo: ruimteInfo
    }
    result.update(data);
  }

  if (screen == 5) {
    if(photos[1]!=""){
    privacyInfo[0]=photos[1].canvas.toDataURL();
    } else{
    privacyInfo[0]=photos[1];
    }
    privacyInfo[1]=screen4Antwoord.value();
    privacyInfo[2]=screen4AntwoordAndere.value();
    privacyInfo[3]=screen4V.position().x;
    privacyInfo[4]=screen4V.position().y;
    privacyInfo[5]=screen4X.position().x;
    privacyInfo[6]=screen4X.position().y;
    privacyInfo[7]=antwoord4;
    privacyInfo[8]=screen4Positief.value();
    
    data = {
      tijd: tijd,
      privacyInfo:privacyInfo
    }
    result.update(data);
  }

  if (screen == 6) {
    if(photos[2]!=""){
    uitzichtInfo[0]=photos[2].canvas.toDataURL();
    } else{
    uitzichtInfo[0]=photos[2];
    }
    uitzichtInfo[1]=screen5Antwoord.value();
    uitzichtInfo[2]=screen5AntwoordAndere.value();
    uitzichtInfo[3]=screen5V.position().x;
    uitzichtInfo[4]=screen5V.position().y;
    uitzichtInfo[5]=screen5X.position().x;
    uitzichtInfo[6]=screen5X.position().y;
    uitzichtInfo[7]=antwoord5;
    uitzichtInfo[8]=screen5Positief.value();
    
    data = {
      tijd: tijd,
      uitzichtInfo:uitzichtInfo
    }
    result.update(data);
  }

  if (screen == 7) {
    if(photos[3]!=""){
    lichtInfo[0]=photos[3].canvas.toDataURL();
    } else{
    lichtInfo[0]=photos[3];
    }
    lichtInfo[1]=screen6Antwoord.value();
    lichtInfo[2]=screen6AntwoordAndere.value();
    lichtInfo[3]=screen6V.position().x;
    lichtInfo[4]=screen6V.position().y;
    lichtInfo[5]=screen6X.position().x;
    lichtInfo[6]=screen6X.position().y;
    lichtInfo[7]=antwoord6;
    lichtInfo[8]=screen6Positief.value();
    
    data = {
      tijd: tijd,
      lichtInfo:lichtInfo
      
    }
    result.update(data);
  }
  
    if (screen == 8) {
      if(photos[4]!=""){
    geluidInfo[0]=photos[4].canvas.toDataURL();
    } else{
    geluidInfo[0]=photos[4];
    }
    geluidInfo[1]=screen7Antwoord.value();
    geluidInfo[2]=screen7AntwoordAndere.value();
    geluidInfo[3]=screen7V.position().x;
    geluidInfo[4]=screen7V.position().y;
    geluidInfo[5]=screen7X.position().x;
    geluidInfo[6]=screen7X.position().y;
    geluidInfo[7]=antwoord7;
    geluidInfo[8]=screen7Positief.value();
    data = {
      tijd: tijd,
      geluidInfo: geluidInfo
    }
    result.update(data);
  }
  
  if (screen == 9) {
    data = {
      tijd: tijd,
      email: email.value()
    }
    result.update(data);
  }

  console.log(result.key);
  console.log(data);
}

function dataSent(err, status) {
  console.log(status);
}