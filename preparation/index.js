//  console.log(`hello`);

// window.alert(`this is an alert`);

// //this is a comment
// document.getElementById("myH1").textContent = `hello`;
// document.getElementById("myP").textContent = `I like pizza!`;
// let x = 100;
// let age = 20;
// let name = `ilham`
// let online = true;


// console.log(typeof online);
// console.log(typeof name);
// console.log(`my name is ${name} years old ${age}`);

// let prenom = "ilham";
// let age = 20;
// let isStudent = true;


// document.getElementById("p1").textContent = `votre prenent est ${prenom}`;
// document.getElementById("p1").textContent = `votre age est ${age}`;
// document.getElementById("p1").textContent = `est ce que tu a  ${isStudent}`;

let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
// students = students % 3;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

//students++;
//students--;

// console.log(students);

// how to accept user input

//window prompt
//html textbox

// let username  = window.prompt("what's your username");
// console.log(username)

//en click a une chose est changer autre chose
// let username;
// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myTexte").value;
//     document.getElementById("myH1").textContent =`hello ${username}`
// }




//change the datatype of value to another (strings, numbers, booleans)
// let age = window.prompt("how old are you");
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);


// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


//const = a varibale that can't  be changed
const PI = 3.14159;
let radius;
let circumfrence;

document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("mytexte").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumfrence + "cm";
}















