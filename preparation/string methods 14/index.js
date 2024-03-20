// string methods = allow you to manipulate and work with text(string)

let userName = " IlhamIlhama";

console.log(userName.charAt(1));
console.log(userName.indexOf("I"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
console.log(userName.repeat(3));

console.log(userName.startsWith(" "));
console.log(userName.endsWith(" "));

console.log(userName.includes(""));


let phoneNumber = `06-20-29-19-10`;

phoneNumber = phoneNumber.replaceAll(`-`, ``);
console.log(phoneNumber);

//phoneNumber = phoneNumber.padStart(15 ,`0`);
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15 ,`0`);
console.log(phoneNumber);

