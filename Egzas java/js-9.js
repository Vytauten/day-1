/*Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas */

let masyvas = [
    "Tomas", "Dainius", "Paulius", "Jonas",
]

console.log(masyvas)

function masyvasKeisti (masyvas) {
    let keistasmasyvas = ''
    for (data of masyvas) {
        keistasmasyvas += data
    }
    console.log(keistasmasyvas)
}

masyvasKeisti (masyvas)

