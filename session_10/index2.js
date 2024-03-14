
let stagiaires = []

let stagiaire = {
    nom: nom,
    prenom: prenom,
    age:age,
}
document.querySelector(".ajout").addEventListener("click", function () {

let nom = document.getElementsByClassName(".nom").value
let prenom = document.getElementsByClassName(".prenom").value
let age = document.getElementsByClassName(".age").value
    stagiaires.nom = nom
    stagiaires.prenom = prenom
    stagiaires.age = age
    stagiaires.push(stagiaire)
    console.log(stagiaires)
})


stagiaires.map(function (item))
const titre = document.createElement("p")















