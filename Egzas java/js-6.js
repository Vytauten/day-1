/*6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko. */

function kodasMasyvui() {
    let skaiciai = []
    skaiciai.push(1)
    for (let i = 2; i <= 10; i++) {
        
        skaiciai.push(-i);
        console.log(i)
    }
    
    console.log(skaiciai)
}

kodasMasyvui()

function kitasKodasKintamajui() {
    let skaicia = ''
    skaicia += 1
    for (let i = 2; i <= 10; i++) {
        
        skaicia += (-i);
        console.log(i)
    }
    
    console.log(skaicia)
}

kitasKodasKintamajui()