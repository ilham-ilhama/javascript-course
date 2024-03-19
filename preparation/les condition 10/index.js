//IF STATEMENTS = IF A CONDITION IS TRUE,
//EXECUTE SOME CODE IF NOT,DO SOME THING ELSE

let age1 = 10;

if (age1 >= 18) {
  console.log("you are olde enough to enter this site ");
} else {
  console.log("you must be 18+ enter this site ");
}

let time = 9;
if (time < 12) {
  console.log("good moorning!");
} else {
  console.log("good afternoon!");
}

//boolen

let isStudent = false;
if (isStudent) {
  console.log("you are a student!");
} else {
  console.log("you are not a student!");
}

let age = 18;
let hasLicense = false;

if (age >= 16) {
  console.log("you are old enough to drive");
  if (hasLicense) {
    console.log("you have your license!");
  } else {
    console.log("you do not have your license yet!");
  }
} else {
  console.log("you must be 16+ to have a license");
}

//exercice
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("myBtn");
const resultElement = document.getElementById("resultElement");
let age2;

mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age);
    if (age >= 100) {
        resultElement.textContent = `you are too old toenter this site`
      } else if (age == 0) {
        resultElement.textContent = `you can't enter you were just born`
      } else if (age >= 18) {
        resultElement.textContent = `you are old enough  to enter this site`
      } else if (age < 0) {
        resultElement.textContent = `your age can't be below 0`
      } else {
        resultElement.textContent = `you must be 18+ entrer this site`
      }
}











