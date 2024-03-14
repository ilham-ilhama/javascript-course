
//evenment du clavier
document.getElementById("nom").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        console.log("you click on enter ))) !")
    }
})
document.getElementById("nom").addEventListener("keypress", function(event){
    if (event.keyCode === 27) {
        console.log("you click on enter ))) !")
    }
})


//les formulaire
document.getElementById("name").addEventListener("keypress", function () {
    
})
    




document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();
    let nom = document.getElementById("name")
    if (nom.value.lenght < 5) {
        nom.classList
    }
    return;
})

