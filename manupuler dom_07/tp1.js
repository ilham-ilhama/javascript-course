let valeur;
let nombre = 10;
let reponse = document
  .querySelector(".envoyer")
  .addEventListener("click", function (e) {
    e.preventDefault();
    valeur = Number(document.querySelector(".entrer").value);
    if (valeur > 20) {
      return console.log("entrer un nombre un nmbre entre 1 et 20");
    } else if (valeur < 0) {
      return console.log("entrer un nombre un nmbre entre 1 et 20");
    } else if (valeur === nombre) {
      return console.log("tu es gagné");
    } else if (
      valeur !== nombre &&
      valeur < 20 &&
      valeur > 1 &&
      valeur > nombre
    ) {
      return console.log("ce nombre est plus grand");
    } else if (
      valeur !== nombre &&
      valeur < 20 &&
      valeur > 1 &&
      valeur < nombre
    ) {
      return console.log("ce nombre est plus petit");
    }
  });
