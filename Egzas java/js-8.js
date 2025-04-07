/*8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.*/

let metuDiena = Math.floor(Math.random() * 365)

function kiekLiko (metuDiena) {
let kiekDienuIkiKaledu = ((365 - 7) - metuDiena)
console.log(`Šiuo metu yra: ${metuDiena} metų diena,iki kalėdų 
    liko: ${kiekDienuIkiKaledu} diena`)
}

kiekLiko (metuDiena)