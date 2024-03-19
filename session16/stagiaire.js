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
