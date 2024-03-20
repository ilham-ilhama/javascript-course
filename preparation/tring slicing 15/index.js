//string slicing = creating a substring
//                  from a portion of nother string

//                  string.slice(start,end)

const fullName = `Ilham Ilhama`;

// let fristName = fullName.slice(0, 3);
// let lastName = fullName.slice(4, 8);

// let fristChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// let fristName = fullName.slice(0, fullName.indexOf(` `));
// let lastName = fullName.slice(0, fullName.indexOf(` `));

// console.log(fristName);
// console.log(lastName);

const email = `ilhambaddioui@gmail.com`;

let userName = email.slice(0, email.indexOf(`@`));
let extension = email.slice(email.indexOf(`@`) + 1);

console.log(userName);
console.log(extension);
