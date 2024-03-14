// stagiaire1 = {
//     nom: "ait",
//     prenom: "mohamed",
//     age:17,
//     branche:"dev",
//     presenterVous: function () {
//         console.log(" I am " + this.nom + " " + this.prenom)
//     }
// }

// console.log(stagiaire1.nom);
// console.log(stagiaire1.branche);
// console.log(stagiaire1.presenterVous())






// les objets
// function Stagiaire(nom, prenom, age, branche){//des parametre
//     this.nom = nom;
//     this.prenom = prenom;
//     this.age = age;
//     this.branche = branche;
//     this.presenterVous = function () {
//         //console.log("I am " + this.nom + " " + this.prenom)
//         console.log(`I am ${this.nom} ${this.prenom}`)
//     }
// }
// const stagiaire2 = new  Stagiaire("baddioui","ilham",20,"dev")
// console.log(stagiaire2)
// console.log(stagiaire2.presenterVous());



// function Achat(id, article, prix, qte) {
//     this.id = id;
//     this.article = article;
//     this.prix = prix;
//     this.qte = qte;
    
//     this.calculerTVA = function () {
//         let TVA = 20 / 100;
//         let total = this.qte * this.prix
//         let totalTTC = total + (total * TVA);
//         return totalTTC;
//     }
// }
// const achat1 = new  Achat(1, "mouse",100,4)
// console.log(achat1.article);
// console.log("le totale TTC est :" + achat1.calculerTVA());


//methode pour  calculer le prix total
// class Achat{
//     constructor(id, article, prix, qte) {
//         this.id = id;
//         this.article = article;
//         this.prix = prix;
//         this.qte = qte
//     }
//     calculerTVA() {
//         const TVA = 0.2;
//         let total = this.prix * this.qte;
//         let totalTTC = total + (total * TVA);
//         return totalTTC;
//     }
// }
// const achat1 = new Achat(1, "keyboard", 300, 5);
// const achat2 = new Achat(2, "screen", 1000, 2);

// console.log(achat1.calculerTVA());
// console.log(achat2.calculerTVA());




//formulaire validation 




