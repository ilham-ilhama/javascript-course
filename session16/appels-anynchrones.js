//pour ouvrire un liens

//setTimeOut :une execution anynschrones est executer une fois
//setInterrval : une execution il arret pas avec une duree il execute a la fin de duree
// document.getElementById("btn-google").addEventListener("click", function () {
//   open("https://www.google.com/");
// });

// //appel synchrone
// let a = 20;
// let b = 19;
// let somme = a + b;
// console.log(somme);

// //setInterrval

// setInterval(function () {
//   i++;
//   console.log;
// }, 1000);

// //setTimeOut
// setTimeout(function () {
//   console.log("ok 5 seconds ago");
// }, 5000);

//appel  anynschrones
// let stagiaires = getData(function(listeStagiaires) {
//     console.log(listeStagiaires);
// });

// function getData(myCallBackFuction) {
//     setTimeout(function () {
//         return myCallBackFuction(["elkadiri", "faid", "elbatoulu"]);
//     },200)

// }

//appel  anynschrones//promise

// const stagiaire = getData().then(function)

//consomateur de la promis
const stagiaire2 = [];
// producteur de la promise
function getData() {
  let vfound = false;
  return new Promise(function (resolve, reject) {
    if (vfound === true) {
      resolve([
        [
          { id: 1, nom: "elkadiri" },
          { id: 2, nom: "faid" },
          { id: 3, nom: "elbatoulu" },
        ],
      ]);
    } else {
      reject("not allwed");
    }
  });
}

function getNotes() {
  return new Promise(function (resolve, reject) {
    resolve([
      { idStagiaire: 1, module: "javascript", note: "14" },
      { idStagiaire: 1, module: "html css", note: "15" },
      { idStagiaire: 1, module: "poo", note: "10" },
      { idStagiaire: 2, module: "javascript", note: "9" },
      { idStagiaire: 2, module: "html css", note: "12" },
      { idStagiaire: 2, module: "poo", note: "5" },
      { idStagiaire: 3, module: "javascript", note: "1" },
      { idStagiaire: 3, module: "html css", note: "17" },
      { idStagiaire: 3, module: "poo", note: "10" },
    ]);
  });
}

document.getElementById("afficherbtn").addEventListener("click", function () {
  let dogA = fetch()
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  
});
const stagiaire = getData()
  .then(function (responce) {
    console.log(responce);

    return getNotes();
  })
  .then(function (responce) {
    console.log(responce);
    stagiaire2 = responce.filter(function (itemValue) {
      return itemValue.idStagiaire === 2;
    });
    console.log(responce);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally!!!!!!!!!!")
  });

//gestion des exceptions(erreurs)
//async await method
async function executerCeCode() {
  try {
    const stagiaires = await getStagiaires();
    const module = await getModule();
    const notes = await getNotes();
    console.log(stagiaires);
    console.log(module);
    console.log(notes)
  }
  catch (err) {
    console.log(err);

  } finally {
    console.log("remove loading...")
  }
};