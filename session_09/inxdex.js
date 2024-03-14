//les evainment
document.querySelector(".criee-titre").addEventListener("click", function () {
    const parent = document.querySelector(".section-01");

    const titre = document.createElement("h1");
    titre.innerHTML = "this is a title";
    titre.style.backgroundColor = "aqua";
    titre.style.color = "blue";
    parent.append(titre)

    const p = document.createElement("p");
    p.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit  Assumend a";
    p.style.color = "blue";
    parent.append(p)

})
document.querySelector(".criee-paragraphe").addEventListener("click", function () {
    const parent = document.querySelector(".section-02");

    const p = document.createElement("p");
    p.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit  Assumend a";
    p.style.color = "blue";
    parent.append(p)

})
//suprimer un element
document.querySelector(".suprimer").addEventListener("click", function () {
    //const parent = document.querySelector(".section-01");
    //const enfant = document.querySelector(".paragraphe-01");

    document.querySelector(".titre").remove();
    
    //parent.removeChild(enfant);
    document.querySelector(".paragraphe-01").remove();
    
})
//remplacer 
document.querySelector(".remplacer").addEventListener("click", function () {
    const parent = document.querySelector(".section-04");
    const ancElement = document.querySelector(".paragraphe-02");
    const nouvElement = document.querySelector(".titre-02");

    parent.replaceChild(nouvElement, ancElement)
    
})
//
document.querySelector(".conteneur").addEventListener("click", function () {
    const vContenur = document.createElement("div");
    vContenur.classList.add("container")
    vContenur.classList.add("encader")
    
    //set attribute
    vContenur.setAttribute("id", "conteneur")
    vContenur.setAttribute("name","conteneur-name")
    
   
    document.body.append(vContenur)
    document.querySelector(".paragraphe-01").classList.add("paragraphe")
    document.querySelector(".paragraphe-01").setAttribute("id","ma-paragraphe")


})


