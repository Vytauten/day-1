/*1. Sukurkite funkciją, kuri paverstų eurus į dolerius.

Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais. */



function euraiIDolerius () {
    eurai = Math.floor(Math.random() * 1000);
doleriai = Math.floor(eurai / 0.93);

console.log("Eurai:", eurai)
console.log("doleriai:",doleriai)
}

euraiIDolerius ()