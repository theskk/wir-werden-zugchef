$(function() {
  zeigeStartBild("Weißt du eigentlich wo du hier gelandet bist!? Was willst du hier?","..Ich bin neu hier.");
});

function start() {
  frage1();
}

function frage1() {
  output("Neu hier? Du bist also die neue an der Bar?");
  input("Ja oder Nein?", antwort1);
}
  
function antwort1(antwort) {
  if (antwort == "Ja") {
    frage2();
  } else if (antwort == "Nein") {
    frage3();
  } else {
    clear();
    output("Ich verstehe dich nicht! Hau ab hier!");
  }  
}

function frage2() {
  output("Sowas nehmen die mittlerweile, nagut. Wie heißt du?");
  input("Wie heißt du?", antwort2);
}

function frage3() {
  output("Ok. Wie heißt du?");
  input("Wie heißt du?", antwort2);
}

var name;
function antwort2(antwort) {
    name = antwort;
    frage4();
}

function frage4() {
  output("Nagut " + name + ". Du weißt schon was mit der letzen passiert ist?");
  input("Ja oder Nein?", antwort3);
}

function antwort3(antwort) {
  if (antwort == "Ja") {
    frage5();
  } else if (antwort == "Nein") {
    frage6();
  } else {
    frage4();
  }  
}

function frage5() {
  clear();
  output("Ach ja? Was würdest du tun, wenn ein 3800 epos schwerer Tedaianer einen BowaBowa-Drink haben will?");
}

function frage6() {
  clear();
  output("Wenn du es nicht gehört hast, dann ist das besser so für dich. Wo kommst du eigentlich her?");
  input("Wo kommst du her?", antwort6);
}

var woher;
function antwort6(antwort) {
  woher = antwort;
  frage6_1();
}

function frage6_1() {
  if (woher!="Erde") {
    output( woher + "... Auf welchem Planeten ist das denn?");
    input("Welcher Planet?", antwort6_1);
  } else {
    frage7();
  }
}

function antwort6_1(antwort) {
  woher = antwort;
  if (woher != "Erde") {
    clear();
    frage6_1();
  } else {
    frage7();
  }
}

function frage7() {
  output("Von der Erde! Da bist du aber ganz schön vom Weg abgekommen was? Noch ne Frage, wie alt bist du?");
  input("Dein Alter in Jahren:", antwort7);
}

function antwort7(antwort) {
  if (antwort < 18) {
    output(antwort + "!? Das glaube ich dir nicht. Mit eurer Technologie bräuchtest du alleine 10 Jahre um hier her zukommen. Du kannst mir nicht erzählen, dass du mit " + (antwort-10) + " losgeflogen bist!");
  } else if (antwort < 34) {
    output(antwort + "!? Dann hast du noch nicht das notwendige Alter erreicht um hier arbeiten zu dürfen. Hier gelten andere Regeln!");
  } else if (antwort > 33) {
    output(antwort + ". Hätte dich 3 Jahre älter geschätzt. Siehst aus, als wenn du schon ein paar Abenteuer hinter dir hast!");
  }
}

