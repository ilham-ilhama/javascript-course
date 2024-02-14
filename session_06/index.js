const jours = ["monday", "tuesday", "wednesday", "thurday", "friday"]

//for (i=0 ; i<=4; i++){

    // console.log(jours[i])
//}

for (item in jours) {
    console.log(jours[item]);
}
for (jr of jours) {
    console.log(jr);
}
let txt = "";
jours.forEach(myFunction);
function myFunction(value, index, array) {
    txt += value + " ";
}
console