/*jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

for (i = 0; i <= 4; i++) {
  console.log(jours[i]);
}

for (item in jours) {
  console.log(item);
}

for (item of jours) {
  console.log(item);
}

let txt = "";

function myFunction(value, index, array) {
  txt += value + " ";
}

jours.forEach(myFunction);

console.log(txt);

//la boucle while
let n = 10;
while (n >= 0) {
  console.log(n);
  n = n - 1;
}

do {
  console.log(n);
  n = n - 1;
} while (n >= 0);*/

let texte = " ";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
    texte += "the number is" + i + "<br>";
    console.log(texte);
}

