/*2. Sukurkite funkciją, kuri paverstų dolerius į eurus.

Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais. */


function doleriaiIeurus () {
    doleriai = Math.floor(Math.random() * 1000);
    eurai = Math.floor(doleriai / 1.08);

console.log("Eurai:", eurai)
console.log("doleriai:",doleriai)
}

doleriaiIeurus ()