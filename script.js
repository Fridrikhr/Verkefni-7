/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
    x=0;
    alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er')
    if (confirm('Byrja leik'));
    else {
    txt = alert('leik hætt');
    throw Error('Leik hætt')
  }
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let a = new Date()/1000;
  var i;
  for(i=0; i < GAMES_TO_PLAY; i++) {
    var askGildi = ask();
    if (askGildi == null) {
      i=GAMES_TO_PLAY;
      alert(i);
    }

    else if(askGildi==false) {      
    }

    else if (askGildi==true) {
      x += 1;
    }

    else {

    }
  }
  Upplysingar(a,x, i);
}

function Upplysingar(a,x, i) {
  let y = (new Date()/1000 - a);
  var timi = y.toFixed(2);
  if (x>0) {
    var z = x/y;
  }
  else {
    var z = 0;
  }
  var medalrett = z.toFixed(2);
  alert('Þú svaraðir ' + x + ' dæmum rétt á ' + timi + ' sekúndum.' + 'Meðalrétt svör á sekúndu eru ' + medalrett);
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {

  var formerki = randomNumber(1,4);
  var svar;
  switch (formerki) {
    case 1:
      var tala1 = randomNumber(1,50);
      var tala2 = randomNumber(1,50);
      svar = tala1+tala2;
      formerki = '+';
      break;
    
    case 2:
      var tala1 = randomNumber(1,50);
      var tala2 = randomNumber(1,50);
      svar = tala1-tala2;
      formerki = '-';
      break;

    case 3:
      var tala1 = randomNumber(1,10);
      var tala2 = randomNumber(1,10);
      svar = tala1*tala2;
      formerki = '*';
      break;
  
    default:
      var tala1 = randomNumber(2,10);
      var tala2 = randomNumber(2,10);
      svar = tala1/(tala1*tala2);
      formerki = '/';
      break;
  }
  
  var notendasvar = prompt('Hvað er: ' + tala1 + formerki + tala2);
  if (notendasvar || notendasvar == '') {
    if (notendasvar == eval(tala1+formerki+tala2)){
      return true;
    }
    return false;
  }
  else {
    alert('Hætt í leik');
    throw error();
  }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
do{
  var stig = 0;
  start();
  play();
  var again = confirm('Spila annan leik?')
}
while(again);
