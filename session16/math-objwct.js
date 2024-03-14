let nombre = 5.4;

//console.log (Math.abs(nombre))

//console.log(Math.ceil(nombre))

//console.log(Math.trunc(nombre))

//console.log(Math.floor())

//console.log(Math.sqrt(25))

console.log(Math.max(12,45,10,34))
console.log(Math.min(12,45,10,34))

//let nombres = [12,45,10,34]
//console.log(Math.max(...nombres))
const stagiaires = [{ id: 1, nom: "ELKADIRI", note: 12},
                    { id: 1, nom: "FEYD", note: 17 },
                    { id: 1, nom: "ELFAKIRI", note: 11},
                    { id: 1, nom: "MOUMNI", note: 17}
                    ]

let listeNotes = stagiaires.map(function (itemValue) {
    return itemValue.note;
})
console.log(listeNotes)
let maxNote = Math.max(...listeNotes)


//console.log(maxNote)
let majorantsliste = stagiaires.filter(function (itemValue) {
    return itemValue.note === maxNote
})


console.log(majorantsliste)
console.log(Math.round(Math.random() * 20))
console.log( Math.floor(Math.random()*20)+1)

