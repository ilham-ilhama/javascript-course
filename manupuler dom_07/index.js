/*console.log(document.querySelector(".nom").value);
document.querySelector(".nom").value = "AHMED";

console.log((document.querySelector(".age").value));
document.querySelector(".age").value = 22;

console.log((document.querySelector(".nom").value + document.querySelector(".age").value));

let x = (document.querySelector(".number1").value);
x=Number(x)
let y = (document.querySelector(".number2").value);
y=Number(y)


let somme = x + y

document.querySelector(".somme").value = somme;
*/


/*let calculeClick = function (e) {
    e.preventDefault();
    console.log("you clicked me")
}

document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("you clicked me")
});

//fuction flecher
document.querySelector(".btn").addEventListener("click", (e)=> {
    e.preventDefault();
    console.log("you clicked me")
});
*/

let calculerF = (e) => {
    e.preventDefault();
    let n1 = Number(document.querySelector(".nombre1").value);
    let n2 = Number(document.querySelector(".nombre2").value);
    document.querySelector(".somme").textContent = n1 + n2
}
document.querySelector(".btn").addEventListener("click", calculerF);