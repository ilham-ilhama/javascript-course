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