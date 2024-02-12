let vDate = new Date().getDay();
let jour;

switch (vDate) {
  case 0:
    jour = "dimanche";
    break;
  case 1:
    jour = "lundi";
    break;
  case 2:
    jour = "mardi";
    break;
  case 3:
    jour = "mercredi";
    break;
  case 4:
    jour = "jeudi";
    break;
  case 5:
    jour = "vendredi";
    break;
  case 6:
    jour = "samedi";
    break;
}
console.log(jour);

let abreviation;
let branche;

abreviation = "ID"

switch (abreviation) {
    case "DD":
        branche = "Deveoppement digital";
        break;
    case "ID":
        branche = "infrastructure digitale";
        break;
    case "wd":
        branche = "web design";
        break;
    default:
        branche = "";
}
console.log("la branche : ", branche);
