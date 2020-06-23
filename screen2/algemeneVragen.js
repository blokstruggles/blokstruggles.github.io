function algemeneVragen() {
  geslacht = createElement('geslacht', 'Wat is je geslacht?').style('font-size', fontsize);
  geslacht.position(inbetween, camY+buttonSize/2+inbetween);

  geslachtInput = createSelect().style('font-size', fontsize);
  geslachtInput.position(3*inbetween, camY + buttonSize/2+1.5*inbetween + teksthoogte);
  geslachtInput.option("kies een optie");
  geslachtInput.option("Man");
  geslachtInput.option("Vrouw");
  geslachtInput.option("Zeg ik liever niet");
  geslachtInput.size(camW);

  leeftijd = createElement('leeftijd', 'Hoe oud ben je?').style('font-size', fontsize);
  leeftijd.position(inbetween, camY + buttonSize/2+ 3 * inbetween + 2*teksthoogte);

  leeftijdInput = createInput('').style('font-size', fontsize);
  leeftijdInput.position(3*inbetween, camY + buttonSize/2+ 3.5 * inbetween + 3*teksthoogte);
  leeftijdInput.size(buttonSize / 4 * 2, buttonSize / 4);

  universiteit = createElement('unief', 'Aan welke universiteit of hogeschool studeer je?').style('font-size', fontsize);
  universiteit.position(inbetween, camY + buttonSize/2+ 5 * inbetween + 4*teksthoogte);

  universiteitInput = createSelect().style('font-size', fontsize);
  universiteitInput.position(3*inbetween, camY + buttonSize/2+ 5.5 * inbetween + 5*teksthoogte);
  universiteitInput.option('kies een optie');
  universiteitInput.size(camW);

  universiteitInput.option('Artesis plantijn');
  universiteitInput.option('Arteveldehogeschool');
  universiteitInput.option('Erasmushogeschool Brussel');
  universiteitInput.option('HoGent');
  universiteitInput.option('Howest');
  universiteitInput.option('Karel de Grote-Hogeschool');
  universiteitInput.option('KU Leuven');
  universiteitInput.option('LUCA School of Arts');
  universiteitInput.option('Odisee');
  universiteitInput.option('PXL');
  universiteitInput.option('Thomas More');
  universiteitInput.option('UA');
  universiteitInput.option('UCLL');
  universiteitInput.option('UGent');
  universiteitInput.option('UHasselt');
  universiteitInput.option('Vives');
  universiteitInput.option('VUB');

  universiteitInput.changed(faculteitkeuze);

  faculteit = createElement('faculteit', 'Tot welke faculteit behoort je richting?').style('font-size', fontsize);
  faculteit.position(inbetween, camY + buttonSize/2+ 7 * inbetween + 6*teksthoogte);

  faculteitInput = createSelect().style('font-size', fontsize);
  faculteitInput.position(3*inbetween, camY + buttonSize/2+ 7.5 * inbetween + 7*teksthoogte);
  faculteitInput.option('kies een optie');
  faculteitInput.size(camW);

}

function faculteitkeuze() {

  faculteitInput.remove();

  faculteitInput = createSelect().style('font-size', fontsize);
  faculteitInput.position(3*inbetween, camY + buttonSize/2+ 7.5 * inbetween + 7*teksthoogte);
  faculteitInput.option('kies een optie');
  faculteitInput.size(camW);

  if (universiteitInput.value() == 'KU Leuven') {
    
    faculteitInput.option('Architectuur');
    faculteitInput.option('Bio-ingenieurswetenschappen');
    faculteitInput.option('Bewegings- en revalidatiewetenschappen');
    faculteitInput.option('Economie en bedrijfswetenschappen');
    faculteitInput.option('Farmaceutische wetenschappen');
    faculteitInput.option('Geneeskunde');
    faculteitInput.option('Industriële ingenieurswetenschappen');
    faculteitInput.option('Ingenieurswetenschappen');
    faculteitInput.option('Letteren');
    faculteitInput.option('Psychologie en pedagogische wetenschappen');
    faculteitInput.option('Rechtsgeleerdheid');
    faculteitInput.option('Sociale wetenschappen');
    faculteitInput.option('Theologie');
    faculteitInput.option('Wetenschappen');
  }

  if (universiteitInput.value() == 'UA') {
    faculteitInput.option('kies een optie');
    faculteitInput.option('Economie en bedrijfswetenschappen');
    faculteitInput.option('Farmaceutische, biomedische en diergeneeskundige wetenschappen');
    faculteitInput.option('Geneeskunde en gezondheidswetenschappen');
    faculteitInput.option('Letteren en wijsbegeerte');
    faculteitInput.option('Ontwerpwetenschappen');
    faculteitInput.option('Rechten');
    faculteitInput.option('Sociale wetenschappen');
    faculteitInput.option('Toegepaste ingenieurswetenschappen');
    faculteitInput.option('Wetenschappen');
  }

  if (universiteitInput.value() == 'Artesis plantijn') {
    faculteitInput.option('kies een optie');
    faculteitInput.option('Gezondheid en welzijn');
    faculteitInput.option('Management en communicatie');
    faculteitInput.option('onderwijs en training');
    faculteitInput.option('Wetenschap en techniek');
  }

  if (universiteitInput.value() == 'Arteveldehogeschool') {
    faculteitInput.option('Bedrijf en organisatie');
    faculteitInput.option('Communicatie, media en design');
    faculteitInput.option('Gezondheid en zorg');
    faculteitInput.option('Onderwijs');
    faculteitInput.option('Mens en maatschappij');
  }

  if (universiteitInput.value() == 'Erasmushogeschool Brussel') {
    faculteitInput.option('Communicatie, media en talen');
    faculteitInput.option('Design & technologie');
    faculteitInput.option('Gezondheid, voeding en labo');
    faculteitInput.option('Klimaat, natuur en ontwerpen');
    faculteitInput.option('Management, economie en toerisme');
    faculteitInput.option('Mens en maatschappij');
    faculteitInput.option('Onderwijs en pedagogie');
    faculteitInput.option('School of arts');
  }

  if (universiteitInput.value() == 'Odisee') {
    faculteitInput.option('Bedrijf en organisatie');
    faculteitInput.option('Gezondheid en welzijn');
    faculteitInput.option('Natuur en techniek');
  }

  if (universiteitInput.value() == 'HoGent') {
    faculteitInput.option('Bedrijf en organisatie');
    faculteitInput.option('Mens en welzijn');
    faculteitInput.option('Natuur en techniek');
    faculteitInput.option('School of arts');
  }

  if (universiteitInput.value() == 'LUCA School of Arts') {
    faculteitInput.option('Beeldverhaal en animatie');
    faculteitInput.option('Bouw');
    faculteitInput.option('Drama');
    faculteitInput.option('Film');
    faculteitInput.option('Fotografie');
    faculteitInput.option('Game en 3D design');
    faculteitInput.option('Muziek');
    faculteitInput.option('Ontwerp en design');
    faculteitInput.option('Vrije kunsten');
  }

  if (universiteitInput.value() == 'Howest') {

    faculteitInput.option('Bedrijf en organisatie');
    faculteitInput.option('Design & technologie');
    faculteitInput.option('Mens en welzijn');
  }

  if (universiteitInput.value() == 'Karel de Grote-Hogeschool') {

    faculteitInput.option('Economie en management');
    faculteitInput.option('Gezondheid');
    faculteitInput.option('ICT en multimedia');
    faculteitInput.option('Kunst');
    faculteitInput.option('Onderwijs');
    faculteitInput.option('Recht');
    faculteitInput.option('Sociaal');
    faculteitInput.option('Talen');
    faculteitInput.option('Wetenschap & techologie');
  }

  if (universiteitInput.value() == 'Thomas More') {
    faculteitInput.option('Business & Tourism');
    faculteitInput.option('Onderwijs');
    faculteitInput.option('Sport');
    faculteitInput.option('Design en build');
    faculteitInput.option('Life sciences en Chemistry');
    faculteitInput.option('Media en communicatie');
    faculteitInput.option('Mens en welzijn');
    faculteitInput.option('Tech en IT');
  }

  if (universiteitInput.value() == 'UCLL') {

    faculteitInput.option('Gezondheid');
    faculteitInput.option('Lerarenopleiding');
    faculteitInput.option('Management');
    faculteitInput.option('Technologie');
    faculteitInput.option('Welzijn');
  }

  if (universiteitInput.value() == 'UGent') {
    faculteitInput.option('Bio-ingenieurswetenschappen');
    faculteitInput.option('Diergeneeskunde');
    faculteitInput.option('Economie en bedrijfswetenschappen');
    faculteitInput.option('Farmaceutische wetenschappen');
    faculteitInput.option('Geneeskunde en gezondheidswetenschappen');
    faculteitInput.option('ingenieurswetenschappen en architectuur');
    faculteitInput.option('Letteren en wijsbegeerte');
    faculteitInput.option('Politieke en Sociale Wetenschappen');
    faculteitInput.option('Psychologie en pedagogische wetenschappen');
    faculteitInput.option('Recht en criminologie');
    faculteitInput.option('Wetenschappen');
  }

  if (universiteitInput.value() == 'UHasselt') {
    faculteitInput.option('Architectuur en kunst');
    faculteitInput.option('Economie en bedrijfswetenschappen');
    faculteitInput.option('Geneeskunde en levenswetenschappen');
    faculteitInput.option('Industriële ingenieurswetenschappen');
    faculteitInput.option('Mobiliteitswetenschappen');
    faculteitInput.option('Rechten');
    faculteitInput.option('Revalidatiewetenschappen');
    faculteitInput.option('Wetenschappen');
    faculteitInput.option('Educatieve studies');
  }

  if (universiteitInput.value() == 'Vives') {
    faculteitInput.option('Gezondheidszorg');
    faculteitInput.option('Handelswetenschappen en bedrijfskunde');
    faculteitInput.option('Industriële wetenschappen en technologie');
    faculteitInput.option('Onderwijs');
    faculteitInput.option('Sociaal-agogisch werk');
  }

  if (universiteitInput.value() == 'VUB') {
    faculteitInput.option('Geneeskunde en farmacie');
    faculteitInput.option('Letteren en wijsbegeerte');
    faculteitInput.option('Lichamelijke opvoeding en kinesitherapie');
    faculteitInput.option('Psychologie en educatiewetenschappen');
    faculteitInput.option('Recht en Criminologie');
    faculteitInput.option('Sociale wetenschappen en solvay Business school');
    faculteitInput.option('Wetenschappen');
  }

  if (universiteitInput.value() == 'PXL') {

    faculteitInput.option('Business');
    faculteitInput.option('Digital');
    faculteitInput.option('Education');
    faculteitInput.option('Green en tech');
    faculteitInput.option('Healthcare');
    faculteitInput.option('MAD school of arts');
    faculteitInput.option('Media & tourism');
    faculteitInput.option('Music');
    faculteitInput.option('Social Work');
  }
}

function hideFaculteit() {
  faculteitInput.hide();
}

function showFaculteit() {
  faculteitInput.show();
  universiteitInput.show();
}