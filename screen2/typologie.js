 var huisH;
 var huisW;
 var huisinbetween;

 var typologie;

 var typologieX = 0;
 var typologieY = 0;

 function huisButtons() {
   huisH = buttonSize;
   huisW = 1.5 * huisH;
   huisinbetween = inbetween
   typologie='';

   bebouwing = createElement('bebouwing', 'In wat voor woning woont u?').style('font-size', fontsize);
   bebouwing.position(huisinbetween, 2 * inbetween + buttonSize);

   //keuzeknop "in wat voor woning woon jij"
   openbebouwing = createImg('images/open.png', 'Next');
   openbebouwing.size(huisW, huisH);
   openbebouwing.position(huisinbetween, 2 * inbetween + buttonSize + bebouwing.height + huisinbetween);
   openbebouwing.mousePressed(openbebouwingPress);

   //keuzeknop "in wat voor woning woon jij"
   halfbebouwing = createImg('images/halfopen.png', 'Next');
   halfbebouwing.size(huisW, huisH);
   halfbebouwing.position(huisinbetween, 2 * inbetween + buttonSize + bebouwing.height + huisH + 2 * huisinbetween);
   halfbebouwing.mousePressed(halfbebouwingPress);

   //keuzeknop "in wat voor woning woon jij"
   geslotenbebouwing = createImg('images/gesloten.png', 'Next');
   geslotenbebouwing.size(huisW, huisH);
   geslotenbebouwing.position(huisinbetween, 2 * inbetween + buttonSize + bebouwing.height + 2 * huisH + 3 * huisinbetween);
   geslotenbebouwing.mousePressed(geslotenbebouwingPress);

   //keuzeknop "in wat voor woning woon jij"
   appartement = createImg('images/appartement.png', 'Next');
   appartement.size(huisW, huisH);
   appartement.position(huisinbetween, 2 * inbetween + buttonSize + bebouwing.height + 3 * huisH + 4 * huisinbetween);
   appartement.mousePressed(appartementPress);
   
  gezinsleden = createElement('bebouwing', 'Met hoeveel mensen woont u samen?').style('font-size', fontsize);
  gezinsleden.position(huisinbetween, 2 * inbetween + buttonSize + bebouwing.height + 4 * huisH + 5 * huisinbetween);
   
  aantalgezinsleden=createInput("");
  aantalgezinsleden.position(huisinbetween, 2 * inbetween + buttonSize + bebouwing.height + 4 * huisH + 5 * huisinbetween+gezinsleden.height);
   aantalgezinsleden.size(camW/4);
 }

 function openbebouwingPress() {

   typologie = 'open bebouwing';
   typologieX = openbebouwing.position().x;
   typologieY = openbebouwing.position().y;

 }

 function halfbebouwingPress() {

   typologie = 'halfopen bebouwing';
   typologieX = halfbebouwing.position().x;
   typologieY = halfbebouwing.position().y;
 }

 function geslotenbebouwingPress() {

   typologie = 'gesloten bebouwing';
   typologieX = geslotenbebouwing.position().x;
   typologieY = geslotenbebouwing.position().y;

 }

 function appartementPress() {

   typologie = 'appartement';
   typologieX = appartement.position().x;
   typologieY = appartement.position().y;
 }


 //tekenfunctie
 function typologiekeuze() {

   if (typologieX != 0) {
     //stroke(0);
     fill(color(168, 193, 227));
     strokeWeight(0);
     rect(typologieX, typologieY, huisW, huisH);
   }
   fill(0);
   textSize(buttonSize/4);

   text('een vrijstaande woning', openbebouwing.position().x + huisW + huisinbetween, openbebouwing.position().y + huisH / 2, W - 3 * huisinbetween - huisW, huisH);

   text('een halfopen woning', halfbebouwing.position().x + huisW + huisinbetween, halfbebouwing.position().y + huisH / 2, W - 3 * huisinbetween - huisW, huisH);

   text('een rijwoning', geslotenbebouwing.position().x + huisW + huisinbetween, geslotenbebouwing.position().y + huisH / 2, W - 3 * huisinbetween - huisW, huisH);


   text('een kot of appartement', appartement.position().x + huisW + huisinbetween, appartement.position().y + huisH / 2, W - 3 * huisinbetween - huisW, huisH);
 }