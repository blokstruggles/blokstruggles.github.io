var tevredenheidVooraf;
var tevredenheidAchteraf;

var tevredenheidVoorafX;
var tevredenheidAchterafX;

var tevredenheidVoorafY;
var tevredenheidAchterafY;

function veranderingVragen() {
  tevredenheidVooraf="";
  tevredenheidAchteraf="";
  
  vorigeplek = createElement('vorigeplek', 'Waar studeerde je tijdens de vorige examenperiode(s)?').style('font-size', fontsize);
  vorigeplek.position(inbetween, camY + buttonSize / 2 + inbetween);

  vorigeplekInput = createSelect().style('font-size', fontsize).size(camW / 2);
  vorigeplekInput.position(3 * inbetween, camY + buttonSize / 2 + 1.5 * inbetween + teksthoogte);

  andereplekInput = createInput().style('font-size', fontsize);
  andereplekInput.position(4 * inbetween + camW / 2, camY + buttonSize / 2 + 1.5 * inbetween + teksthoogte);
  andereplekInput.hide();

  vorigeplekInput.option("kies een optie");
  vorigeplekInput.option("Bibliotheek");
  vorigeplekInput.option("Kot");
  vorigeplekInput.option("Thuis");
  vorigeplekInput.option("Andere:");
  vorigeplekInput.changed(andereplek);

  vorigeplekTevredenheid = createElement('vorigeplektevreden', 'Was je tevreden over die studeerplek?').style('font-size', fontsize);
  vorigeplekTevredenheid.position(inbetween, camY + buttonSize / 2 + 3 * inbetween + 2 * teksthoogte);

  happy = createImg('images/smileyHappy.png', 'gelukkig');
  happy.position(3 * inbetweenBreedte + 3 * 2 / 3 * buttonSize, camY + buttonSize / 2 + 3.8 * inbetween + 3 * teksthoogte);
  happy.size(buttonSize * 2 / 3, buttonSize * 2 / 3);
  happy.mousePressed(happyPress);

  excited = createImg('images/smileyExcited.png', 'extatisch');
  excited.position(4 * inbetweenBreedte + 4 * 2 / 3 * buttonSize, camY + buttonSize / 2 + 3.8 * inbetween + 3 * teksthoogte);
  excited.size(buttonSize * 2 / 3, buttonSize * 2 / 3);
  excited.mousePressed(excitedPress);

  sad = createImg('images/smileySad.png', 'ongelukkig');
  sad.position(2 * inbetweenBreedte + 2 * 2 / 3 * buttonSize, camY + buttonSize / 2 + 3.8 * inbetween + 3 * teksthoogte);
  sad.size(buttonSize * 2 / 3, buttonSize * 2 / 3);
  sad.mousePressed(sadPress);

  angry = createImg('images/smileyAngry.png', 'boos');
  angry.position(inbetweenBreedte + 2 / 3 * buttonSize, camY + buttonSize / 2 + 3.8 * inbetween + 3 * teksthoogte);
  angry.size(buttonSize * 2 / 3, buttonSize * 2 / 3);
  angry.mousePressed(angryPress);


  vorigeplekWaarom = createElement('vorigeplekvraag', 'Waarom zat je vroeger op deze locatie?').style('font-size', fontsize);
  vorigeplekWaarom.position(inbetween, camY + buttonSize / 2 + 5 * inbetween + 3 * teksthoogte + buttonSize * 2 / 3);

  vorigeplekWaaromInput = createElement('textarea').size(camW, buttonSize).position(3 * inbetween, camY + buttonSize / 2 + 5.5 * inbetween + 4 * teksthoogte + buttonSize * 2 / 3).style('background-color', color(255, 255, 255, 100)).style('font-size', fontsize).value("");


  coronaplek = createElement('vorigeplek', 'Waar studeer je deze examenperiode?').style('font-size', fontsize);
  coronaplek.position(inbetween, camY + buttonSize / 2 + 7 * inbetween + 4 * teksthoogte + buttonSize * 2 / 3 + buttonSize);

  coronaplekInput = createSelect().style('font-size', fontsize);
  coronaplekInput.position(3 * inbetween, camY + buttonSize / 2 + 7.5 * inbetween + 5 * teksthoogte + buttonSize * 2 / 3 + buttonSize);
  coronaplekInput.size(camW / 2);

  coronaplekInput.option("kies een optie");
  coronaplekInput.option("Kot");
  coronaplekInput.option("Thuis");
  coronaplekInput.option("Andere:");
  coronaplekInput.changed(andereplek);

  coronaandereplekInput = createInput().style('font-size', fontsize);
  coronaandereplekInput.position(4 * inbetween + camW / 2, camY + buttonSize / 2 + 7.5 * inbetween + 5 * teksthoogte + buttonSize * 2 / 3 + buttonSize);
  coronaandereplekInput.hide();

  coronaplekTevredenheid = createElement('vorigeplektevreden', 'Ben je in het algemeen tevreden over deze (nieuwe) studieplek?').style('font-size', fontsize);
  coronaplekTevredenheid.position(inbetween, camY + buttonSize / 2 + 9 * inbetween + 6 * teksthoogte + buttonSize * 2 / 3 + buttonSize);

  happy2 = createImg('images/smileyHappy.png', 'gelukkig');
  happy2.position(3 * inbetweenBreedte + 3 * 2 / 3 * buttonSize, camY + buttonSize / 2 + 9.8 * inbetween + 8 * teksthoogte + buttonSize * 2 / 3 + buttonSize);
  happy2.size(buttonSize * 2 / 3, buttonSize * 2 / 3);
  happy2.mousePressed(happy2Press);

  excited2 = createImg('images/smileyExcited.png', 'extatisch');
  excited2.position(4 * inbetweenBreedte + 4 * 2 / 3 * buttonSize, camY + buttonSize / 2 + 9.8 * inbetween + 8 * teksthoogte + buttonSize * 2 / 3 + buttonSize);
  excited2.size(buttonSize * 2 / 3, buttonSize * 2 / 3);
  excited2.mousePressed(excited2Press);

  sad2 = createImg('images/smileySad.png', 'ongelukkig');
  sad2.position(2 * inbetweenBreedte + 2 * 2 / 3 * buttonSize, camY + buttonSize / 2 + 9.8 * inbetween + 8* teksthoogte + buttonSize * 2 / 3 + buttonSize);
  sad2.size(buttonSize * 2 / 3, buttonSize * 2 / 3);
  sad2.mousePressed(sad2Press);

  angry2 = createImg('images/smileyAngry.png', 'boos');
  angry2.position(inbetweenBreedte + 2 / 3 * buttonSize, camY + buttonSize / 2 + 9.8 * inbetween + 8* teksthoogte + buttonSize * 2 / 3 + buttonSize);
  angry2.size(buttonSize * 2 / 3, buttonSize * 2 / 3);
  angry2.mousePressed(angry2Press);
}

function andereplek() {
  if (coronaplekInput.value() == "Andere:") {
    coronaandereplekInput.show();
  }

  if (vorigeplekInput.value() == "Andere:") {
    andereplekInput.show();
  }
}

function happyPress() {
  tevredenheidVooraf = 'tevreden';
  tevredenheidVoorafX = happy.position().x;
  tevredenheidVoorafY = happy.position().y;
}

function excitedPress() {
  tevredenheidVooraf = 'heel tevreden';
  tevredenheidVoorafX = excited.position().x;
  tevredenheidVoorafY = excited.position().y;
}

function sadPress() {
  tevredenheidVooraf = 'ontevreden';
  tevredenheidVoorafX = sad.position().x;
  tevredenheidVoorafY = sad.position().y;
}

function angryPress() {
  tevredenheidVooraf = 'heel ontevreden';
  tevredenheidVoorafX = angry.position().x;
  tevredenheidVoorafY = angry.position().y;
}

function happy2Press() {
  tevredenheidAchteraf = 'tevreden';
  tevredenheidAchterafX = happy2.position().x;
  tevredenheidAchterafY = happy2.position().y;
}

function excited2Press() {
  tevredenheidAchteraf = 'heel tevreden';
  tevredenheidAchterafX = excited2.position().x;
  tevredenheidAchterafY = excited2.position().y;
}

function sad2Press() {
  tevredenheidAchteraf = 'ontevreden';
  tevredenheidAchterafX = sad2.position().x;
  tevredenheidAchterafY = sad2.position().y;
}

function angry2Press() {
  tevredenheidAchteraf = 'heel ontevreden';
  tevredenheidAchterafX = angry2.position().x;
  tevredenheidAchterafY = angry2.position().y;
}

function tekenAntwoord2b(){
  fill(color(205, 169, 186));
    stroke(0,0,0);
     strokeWeight(2);
     circle(tevredenheidAchterafX+angry.size().width/2, tevredenheidAchterafY+angry.size().width/2, angry.size().width+inbetween);
  
  circle(tevredenheidVoorafX+angry.size().width/2, tevredenheidVoorafY+angry.size().width/2, angry.size().width+inbetween);
}