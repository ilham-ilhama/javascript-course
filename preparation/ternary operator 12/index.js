//ternary operator = a shortcut to if{} and else{} statements
//                  helps to assign a variable based on a condition
//                   condition? codeIfTrue : codeIfFalse;

let age = 12;
let message = age >= 18 ? `you're an adult` : `you're a minor`;
console.log(message);

let time = 16;
let greeting = time < 12 ? `good morning!` : `good afternoon!`;
console.log(greeting);

let isStudent = true;
let message2 = isStudent ? `you are a student` : `you are not a student`;
console.log(message2);


let purchaseAmount = 200;
let discount = purchaseAmount >= 100 ? 10 : 0;
console .log(`your total is dh ${purchaseAmount - purchaseAmount * (discount/100) }`)