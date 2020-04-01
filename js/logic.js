
// opdracht 'pizzacalculator' gemaakt door Michael Khouw

var linebreak = '<br/>'; //de linebreak zorgt ervoor dat de tekst verder gaat op de volgende regel

var smallpizza = prompt('Hoeveel small pizzas wilt u bestellen? €1,99 per pizza.')
var mediumpizza = prompt('Hoeveel medium pizzas wilt u bestellen? €4,99 per pizza.')
var largepizza = prompt('Hoeveel large pizzas wilt u bestellen? €9,99 per pizza.')

// met deze prompt kan de klant het aantal pizza's invoeren

const PRIJSsmallpizza = 199 / 100;
const PRIJSmediumpizza = 499 / 100;
const PRIJSlargepizza = 999 / 100;

//met deze const kunnen de prijzen van de pizza's niet worden veranderd

var TOTAALsmall = smallpizza * PRIJSsmallpizza;
var TOTAALmedium = mediumpizza * PRIJSmediumpizza;
var TOTAALlarge = largepizza * PRIJSlargepizza;

//var kan steeds veranderd worden

document.write('Aantal small pizza\'s besteld = ');
document.write(smallpizza + linebreak);
document.write(smallpizza + ' x ' + PRIJSsmallpizza + ' = ');
document.write('€' + TOTAALsmall + linebreak);
document.write(linebreak);
document.write(linebreak);

document.write('Aantal medium pizza\'s besteld = ');
document.write(mediumpizza + linebreak);
document.write(mediumpizza + ' x ' + PRIJSmediumpizza + ' = ');
document.write('€' + TOTAALmedium + linebreak);
document.write(linebreak);

document.write('Aantal large pizza\'s besteld = ');
document.write(largepizza + linebreak);
document.write(largepizza + ' x ' + PRIJSlargepizza + ' = ');
document.write('€' + TOTAALlarge + linebreak);
document.write(linebreak);

document.write('Totale prijs van alle pizza\'s = €');
document.write(TOTAALsmall + TOTAALmedium + TOTAALlarge);

//document.write zorgt ervoor dat er tekst op het scherm verschijnt