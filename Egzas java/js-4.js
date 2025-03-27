/*4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis. */

let metai = Math.floor(Math.random() * (100 - 30 +1) + 10)
console.log(metai)

function amziaus(metai) {
    let sekundes = metai * 31536000
    let minutes = metai * 525600
    let valandos = metai * 8760
    dienos = metai * 365

    console.log(`Žmogui kurio amžius yra: ${metai} metai, jo amžius dienomis bus: ${dienos} dienos,
        valandomis bus:${valandos} valandos , minutėmis bus: ${minutes} minutės ir sekundėmis bus: ${sekundes} sekundės`)
}

amziaus(metai)