// //manipulation JSON
// const stagiaires = {
//     id: 1,
//     nom: "BADDIOUI",
//     prenom: "ILHAM",
//     age: 19,
// }

// //objet JS ===> objet JSON
// let stagiaireJson = JSON.stringify(stagiaires);
// console.log(stagiaires.prenom)

// console.log(stagiaireJson);

// //objet JSON ===> objet JS
// stagiaireJson = JSON.parse(stagiaireJson);

// console.log(stagiaireJson.nom);


document.getElementById("btn-load", loadTxt).addEventListener("click", loadTxt);

function loadTxt(e) {
    e.preventDefault();
    let request = new XMLHttpRequest();

    request.open("GET", "main.txt", true);

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("container").innerHTML = this.responseText;
        }
       
        
    };
    request.send()
}