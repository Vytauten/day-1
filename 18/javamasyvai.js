// 1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.

console.log("-----------1 užduotis-------------");

let masyvas = [2, 4, 6, 8, 9, 4];

console.log("Pirmas sk:", masyvas[0], "Paskutinis sk:", masyvas[masyvas.length -1]);
console.log("pirmas is vidurio:", masyvas[2], "Antras is vidurio;", masyvas[4]);
console.log("Narių kiekis masyve:", masyvas.length);

// 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.

console.log("-----------2 užduotis-------------");

let masyvas1 = [2, 4, 6, 8, 9, 4];

console.log(masyvas1);
masyvas1[1] = 56;
masyvas1[2] = 33;
masyvas1[0] = 8;

console.log(masyvas1);

// 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.


console.log("-----------3 užduotis-------------");

let masyvas3 = [];

masyvas3.push(1, 2, 9, 8, 6, 89, 47);

console.log(masyvas3)

// 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.

console.log("-----------4 užduotis-------------");

let masyvas4 = [];

masyvas4.push(Math.floor(Math.random() * 100))
masyvas4.push(Math.floor(Math.random() * 100))
masyvas4.push(Math.floor(Math.random() * 100))
masyvas4.push(Math.floor(Math.random() * 100))
masyvas4.push(Math.floor(Math.random() * 100))
masyvas4.push(Math.floor(Math.random() * 100))

console.log(masyvas4);

// 5. Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.

console.log("-----------5 užduotis-------------");

let studentoPazymiai1 = [1, 2, 9, 8, 7];
let studentoPazymiai2 = [4, 2, 10, 8, 8];
let sumaPazymiu1 = 0;
let sumaPazymiu2 = 0;

for (i = 0; i < studentoPazymiai1.length; i++) {
    sumaPazymiu1 += studentoPazymiai1[i];
}

for (i = 0; i < studentoPazymiai2.length; i++) {
    sumaPazymiu2 += studentoPazymiai2[i];
}

let studentoPazymiai1Vidurkis = sumaPazymiu1 / studentoPazymiai1.length;
let studentoPazymiai2Vidurkis = sumaPazymiu2 / studentoPazymiai2.length;

if (studentoPazymiai1Vidurkis > studentoPazymiai2Vidurkis) {
    console.log(`Pirmo studento vidurkis (${studentoPazymiai1Vidurkis}) yra didenis už antro`);
} else {
    console.log(`Antro studento vidurkis (${studentoPazymiai2Vidurkis}) yra didenis už pirmo`)
}

// 6. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.

console.log("-----------6 užduotis-------------");

let masyvasStudijuProgramoms = ["matematika", "biologija", "geografija", "informatika"];

for (let i = 0; i < masyvasStudijuProgramoms.length; i++) {
    console.log(masyvasStudijuProgramoms[i]);
}

// 7. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.

console.log("-----------7 užduotis-------------");

let masyvasSaliu = ["Lietuva", "Anglija", "Bulgarija", "Lenkija", "Ispanija"];

for (let i = 0; i < masyvasSaliu.length; i++) {
    console.log(`Šalis: ${masyvasSaliu[i]}`)
}

// 8. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).

console.log("-----------8 užduotis-------------");

let proejktuMasyvas = ["Projektas1", "Projektas2", "Projektas3", "Projektas4"];

for (let i = 0; i < proejktuMasyvas.length; i++) {
    console.log(`${i + 1} projektas yra - ${proejktuMasyvas[i]}`)
}

// 9. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.

console.log("-----------9 užduotis-------------");

let masyvas5 = [1, 2, 9, 8, 6, 89, 47];

for (let i = 0; i < masyvas5.length; i++) {
    if (masyvas5[i] > 5) {
        console.log(masyvas5[i])
    }
}

// 10. Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.

console.log("-----------10 užduotis-------------");

let masyvas6 = [1, 2, 4, 8, 6, 80, 48];
let suma = 0

for (let i = 0; i < masyvas6.length; i++) {
    if (masyvas6[i] % 4 === 0) {
        suma += masyvas6[i]; 
    } 
}

console.log(`Skaičių, kurie dalinasi iš 4 suma yra: ${suma}`);

// 11. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
 
console.log("-----------11 užduotis-------------");

let masyvas7 = [8, 6, 10, 8, 7, 8, 8];
let suma7 = 0

for (let i = 0; i < masyvas7.length; i++) {
    suma7 += masyvas7[i]
}

let masyvas7Vidurkis = suma7 / masyvas7.length;

console.log(`Studento pažymiai yra tokie: ${masyvas7}, jų vidurkis yra: ${masyvas7Vidurkis}`);

// 12. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.

console.log("-----------12 užduotis-------------");

let masyvas8 = [10, 7, 10, 8, 7, 4, 8];
let suma8 = 0;

for (let i = 0; i < masyvas8.length; i++) {
    suma8 += masyvas8[i];
}

let vidurkis8 = suma8 / masyvas8.length;

for (let i = 0; i < masyvas8.length; i++) {
    if (masyvas8[i] > vidurkis8) {
        console.log(`Skaičiai didesni nei vidurkis yra: ${masyvas8[i]}`);
    }
}

// 13. Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo  kvadratą.

console.log("-----------13 užduotis-------------");

let masyvas9 = [10, 7, 10, 8, 7, 4, 8, 12];

for (let i = 0; i < masyvas9.length; i++) {
    if (masyvas9[i] % 2 === 0) {
        console.log("Skaičius:", masyvas9[i],"ir jo kvadratas", masyvas9[i] * masyvas9[i])
    } else console.log(masyvas9[i])
}

// 14.Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.

console.log("-----------14 užduotis-------------");

let masyvas10 = [10, 3, 10, 8, 7, 4, 8, 10];

for (let i = 0; i < masyvas10.length; i++) {
    if (masyvas10[i] > 5) {
        console.log(`Pažimys teigiamas - ${masyvas10[i]}`);
    } else console.log(`Pažimys neigiamas - ${masyvas10[i]}, iki teigiamo trūko ${5 - masyvas10[i]}`);
}

// 15. Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas. Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).

console.log("-----------15 užduotis-------------");

let masyvas11 = ["gfsgsg", "dasas", "dsf"];
let suma11 = 0;
let suma11Bendra = 0;
for (let i = 0; i < masyvas11.length; i++) {
    suma11 = masyvas11[i].length;
    suma11Bendra += masyvas11[i].length;
    console.log(`${masyvas11[i]}, Žodžių raidžių suma: ${suma11}`);
}

console.log(`Bendra raidžių suma masyve yra: ${suma11Bendra}`);

// 16. Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių,kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus atsakymus.

console.log("-----------16 užduotis-------------");

let masyvas12 = [12, 3, 10, 9, 7, 4, 8, 12];
let suma12 = 0;
let rezultatas = []
for (let i = 0; i < masyvas12.length; i++) {
 if (masyvas12[i] % 3 === 0) {
    rezultatas.push(masyvas12[i])
    suma12 += masyvas12[i];
}
}
let vidurkis12 = suma12 / rezultatas.length;

console.log(`Pradiniai skačiai: ${masyvas12}`)
console.log(`Skaičių kurie dalinasi iš 3 suma: ${suma12}`);
console.log(`Skaičių kurie dalinasi iš 3 vidurkis: ${vidurkis12}`);

// 17. Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...

console.log("-----------17 užduotis-------------");

let masyvas13 = ["gfsgsg", "dasas", "dsf"];

for (const indeksas in masyvas13) {
    console.log(indeksas, masyvas13[indeksas]);
}

// 18. Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.

console.log("-----------18 užduotis-------------");

let masyvas14 = ["gfsgsg", "dasas", "dsf"];

for (const zodis in masyvas14) {
    console.log(`Pirkinys: ${masyvas14[zodis]}`);
}


console.log(`Sarase yra: ${masyvas14.length} pirkiniai`);  

// 19. Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.

let masyvas15 = [10, 3, 10, 9, 7, 4, 8, 10];

let suma15 = 0;

for ( const pazimys of masyvas15) {
    suma15 += pazimys
}

let vidurkis15 = suma15 / masyvas15.length;

console.log(masyvas15,"Vidurkis:", vidurkis15);






