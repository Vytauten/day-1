 

/*let ska = 8;
let skb = 7;
let skc = 6;
let didziausiasSk = (Math.max (ska, skb, skc));
let maziausiasSk = (Math.min (ska, skb, skc));
let vidurkisSk = ((ska + skb + skc) / 3);

console.log(didziausiasSk);
console.log(maziausiasSk);
console.log(vidurkisSk);

if (vidurkisSk >= 8.1) {
    console.log("vidurkis 8-10");
} else if (vidurkisSk <= 8 && vidurkisSk >= 5) {
    console.log("vidurkis 5-8");
} else  {
    console.log("negiamas vidurkis");}
 


let skao = 10;
let skap = 6;

if (skao > skap || skao === 0) {
    console.log("tiesa1");
} else {
    console.log("netiesa");}

if (skap > skao || skap === 5) {
    console.log("tiesa");
}  else {
    console.log("netiesavel");
}

if (skao > skap && skao === 20) {
    console.log("velgi tiesa");
} else {
    console.log("aleluja netiesa");
}

if (skap > skao && skao === 100) {
    console.log("velgi8 tiesa");
} else {
    console.log("aleluja netiesa89");
}


const darbovalandos = 8;
let darbuotojasperh = 20;
let darbuotojukiekis = 4;
let kepalosavikaina = 1;
let kepalopardavimokaina = 3;
let uzsakymuskaicius = 500;
let isvisokepaluperdiena = ((darbuotojasperh * darbuotojukiekis) * darbovalandos);
let kepalusavikaina = (kepalosavikaina * uzsakymuskaicius);
let pajamospardavus = (uzsakymuskaicius * kepalopardavimokaina);
let pelnaspardavus = (pajamospardavus - kepalusavikaina);


console.log("Iš viso kepalų per dieną:", isvisokepaluperdiena);
console.log("kepalusavikaina:", kepalusavikaina);
console.log("pajamos pardavus:", pajamospardavus);
console.log("pelnas pardavus:", pelnaspardavus);


if (isvisokepaluperdiena >= uzsakymuskaicius) {
    console.log("suspės įvykdyti dienos užsakymą");
} else if (isvisokepaluperdiena < uzsakymuskaicius) {
    console.log("trūksta:", isvisokepaluperdiena - uzsakymuskaicius);
}

let kintamasisPasirinkimui = 4;
switch (kintamasisPasirinkimui) {
    case 1:
        console.log("vartotojas laimejo vandens");
        break;
    case 2:
        console.log("vartotojas laimejo limonada");
        break;
    case 3:
        console.log("vartotojas laimejo arbata");
        break;
    case 4: 
    console.log("vartotojas laimejo kava");
     break;
     default: console.error("klaida");
}

let skaiciuks1 = 3;
let skaiciuks2 = 6;
let skaiciuks3 = 8;
let klaidosKodas = "klaidos kodas";

switch (skaiciuks1) {
    case 1: console.log(skaiciuks1 + skaiciuks2 + skaiciuks3); break;
    case 2: console.log(skaiciuks2 * skaiciuks3); break;
    case 3: console.log(skaiciuks1 ** 2); break;
    default: console.error("klaidele"); break;
}

switch (klaidosKodas) {
    case "klaidos kodas1": console.log("klaida nr 1"); break;
    case "klaidos kodas2": console.log("klaida nr 2"); break;
    case "klaidos kodas3": console.log("klaida nr 3"); break;
    default: console.log("ivyko klaida"); break;
}

let menesioSkaicius = 5;

switch (menesioSkaicius) {
    case 12:
    case 1:
    case 2:
    console.log("ziema"); break;
    case 3:
    case 4:
    case 5:
    console.log("pavasaris"); break;
    case 6:
    case 7:
    case 8:
    console.log("vasara"); break;

}

for (let i = 0; i <= 10; i++) {
    console.log("skaicius:", i);
}

for (let o = 0; o <= 15; o += 2) {
    console.log("kas antras skaicius:", o);
}

for (let p = 1; p <= 20; p += 3) {
    console.log("kas trecias skaicius:", [p]);
}


for (let u = 1; u <= 20; u ++) {
    if (u % 4 === 0) {
        console.log(u);
    }
}





// 5. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai
// būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet
// vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei
// atskiriant tarpu - tų skaičių kvadratus.

console.log("5 užduotis");
let pradzia = 4;
let pabaiga = 12;

if (pradzia < pabaiga) {
    for (let i = pradzia; i <= pabaiga; i++) {
        console.log(i,i * i)
    }
}

// 6. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai
// būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet
// vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos,
// kurie dalinasi iš 8. 

console.log("\n6 užduotis");

let pradzia2 = 4;
let pabaiga2 = 8;

if (pradzia2 < pabaiga2) {
    for (i = pradzia2; i <= pabaiga2; i++) {
        if (i % 2 !== 0 || i % 8 === 0) {
            console.log(i)
        }
    } 
}


// 8. Raskite visų skaičių nuo 1 iki 100 sumą.
// 9. Raskite visų lyginių skaičių nuo 20 iki 50 sumą.
// 10. Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.
// 11. Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5
// sumą.
// Pavyzdys:
// Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
// Šių skaičių suma yra 23.
// Turite gauti 233168 atsakymą.

console.log("\n8 užduotis");

let suma = 0;

for (let l = 0; l <= 100; l++) {
    suma += l; 
}

console.log(`skaiciu suma :${suma}`);

let suma3 = 0;

for (let t = 20; t <= 50; t++) {
    if (t % 2 === 0) {
    suma3 += t;
    }
}

console.log(`skaiciu suma :${suma3}`);

let suma4 = 0;

for (let i = 30; i <= 60; i++) {
    if (i % 2 !== 0) {
        suma4 += i;
    }
}

console.log(`skaiciu suma :${suma4}`)

let suma5 = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma5 += i;
    }
   
}
console.log(`skaiciu suma :${suma5}`)


// 12.The "Fizz-Buzz test" is an interview question designed to help filter out the
// 99.5% of programming job candidates who can't seem to program their
// way out of a wet paper bag. The text of the programming assignment is as
// follows:
// "Write a program that prints the numbers from 1 to 100. But for multiples
// of three print “Fizz” instead of the number and for the multiples of five
// print “Buzz”. For numbers which are multiples of both three and five print
// “FizzBuzz”."

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
        continue;
    }
    if (i % 5 === 0) {
        console.log("Buzz");
        continue;
    }
    if (i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz");
        continue;
    }
    console.log(i);
}

console.log("\n\n\nWHILE\n\n\n");

let skaicius7 = 1;

while (skaicius7 <= 20) {
    console.log(skaicius7);
    skaicius7++;
}

let skaicius8 = 1;

while (skaicius8 <= 50) {
    if (skaicius8 % 2 ===0) {
        console.log(skaicius8, "lyginis")
    }
    else {
        console.log(skaicius8, "nelyginis")
    }
    skaicius8++;
}

let skaicius9 = 25;

while ( skaicius9 <=50) {
    if (skaicius9 % 3 === 0) {
        console.log(`skaicius ${skaicius9} dalinasi is 3`)
    }
    else console.log (skaicius9)
    skaicius9++;
}

console.log("\nuzdutis while toliau");

let skaicius10 = 1;

while (skaicius10 % 3 === 0 && skaicius10 % 5 === 0) {
    console.log(skaicius10); {
        skaicius10++;
    }
    
}

console.log("\nuzdutis while toliau1")

let skaicius = 1;

while (skaicius < 5) {

console.log(skaicius, skaicius * skaicius);
skaicius++;

}

console.log("\nmasyvai")

let masyvas = [1, 2, 3, 4, 5,]
 console.log(masyvas[masyvas.length - 1]);
 console.log(masyvas[1]);
 console.log(masyvas[2]);
 console.log(masyvas[3]);
 console.log(masyvas.length)

 console.log("\nmasyvai2")

 let masyvas1 = [1, 2, 3, 4, 5,]


 masyvas1[2] = 89;
 masyvas1[5] = 202;
 masyvas1[3] = 555;

 console.log(masyvas1);

 let masyvas3 = [];
 
 masyvas3.push(23);
 masyvas3.push(25);
 masyvas3.push(27);
 masyvas3.push(29);

 console.log(masyvas3);
 
 let masyvas4 = [];

 masyvas4.push(Math.random() * 100);
 masyvas4.push(Math.random() * 100);
 masyvas4.push(Math.random() * 100);
 masyvas4.push(Math.random() * 100);
 console.log(masyvas4);

let studentas1 = [10, 8, 9, 7, 6];
let studentas2 = [5, 7, 10, 5, 10];
let studentas1Suma = studentas1[0] + studentas1[1] + studentas1[2] + studentas1[3] + studentas1[4];
let studentas2Suma = studentas2[0] + studentas2[1] + studentas2[2] + studentas2[3] + studentas2[4];
console.log(`studento 1 suma: ${studentas1Suma}, studento 1 suma: ${studentas2Suma}`);

let vidurkisStud1 = studentas1Suma / studentas1.length;
let vidurkisStud2 = studentas2Suma / studentas2.length;
console.log(vidurkisStud1, vidurkisStud2);

if (vidurkisStud1 < vidurkisStud2) {
    console.log("vidurkisStud2 - didesnis");
} else {
    console.log ("vidurkisStud1 - didesnis");
}
 
  
/*6. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį
masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
7. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis.

Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada
nurodant šalį iš masyvo.

8. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite
šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš
kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u)*/

let StudProgramos = ["istorija", "geografija", "matematika", "anglu"];

console.log(StudProgramos);

for (let i = 0; i < StudProgramos.length; i++) {
    console.log("Studijų programa:", StudProgramos[i]);
}

console.log("\n====================");

let salys = ["Lietuva", "Anglija", "Prancūzija", "Čekija"];

for (let i = 0; i < salys.length; i++) {
    console.log("Šalis:", salys[i]);
}

console.log("\n====================");

let projektai = ["satyti", "dirbti", "skaiciuoti", "mastyti", "matuoti"];

for (let i = 0; i < projektai.length; i++) {
    console.log("Proejektas nr." + (i + 1) + projektai[i]);
}

/*9. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite

tik tuos skaičius, kurie yra didesni nei 5.

10.Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite

visų skaičių, kurie dalinasi iš 4 sumą.

11.Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite

šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.

12.Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite
šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.*/

let skMasyvas = [(Math.random() * 10), (Math.random() * 10), (Math.random() * 10), (Math.random() * 10), (Math.random() * 10), (Math.random() * 10), (Math.random() * 10),];
console.log(skMasyvas)

for (let i = 0; i < skMasyvas.length; i++) {
    if (skMasyvas[i] > 5) {
        console.log(skMasyvas[i])
    } 
    
}

console.log("\n====================");

/*let skMasyvas2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),];
 
for (let i = 0; i < skMasyvas2.length; i++) {
    if (skMasyvas2[i] % 4 === 0) {
        suma56 = skMasyvas2[i];
        console.log(" skaicius:", skMasyvas2[i]);
    }
}

console.log(suma56);

console.log("\n====================");

let skMasyvas3 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),];
let suma45 = 0;
console.log(skMasyvas3)
for (let i = 0; i < skMasyvas3.length; i++) {
    suma45 += skMasyvas3[i];
    console.log(`${skMasyvas3} - toks skaicius, o vidurkis - ${suma45}`);
}


console.log("\n====================");

let skMasyvas4 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),];
vidurkis7 = 0;
skSuma7 = 0;
skKiekis = 0;
for (let i = 0; i < skMasyvas4.length; i++) {
    skSuma7 += skMasyvas4[i];
    skKiekis++;
}

console.log("vidurkis yra:", skSuma7 / skKiekis);*/

console.log("\n====================");

let skMasyvas5 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),];
vidurkis8 = 0;
skSuma8 = 0;
skKiekis1 = 0;

for (let i = 0; i < skMasyvas5.length; i++) {
    skSuma8 += skMasyvas5[i];
    skKiekis1++; 
    vidurkis8 = skSuma8 / skKiekis1; {
        if (skMasyvas5[i] > vidurkis8) {
            console.log(skMasyvas5[i])
        }
    }
    
 
}

console.log(vidurkis8);


console.log("\n====================");

/*13.Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus

skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo
kvadratą.

14.Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis

(atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje
eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas
pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek
balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.*/

let skMasyvas6 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),];
console.log("visi skaiciai", skMasyvas6);



for (let i = 0; i < skMasyvas6.length; i++) {
    console.log("skaicius yra:", skMasyvas6[i], "skaicius kvadratas:", skMasyvas6[i] * skMasyvas6[i]);
}

/*17.Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite

visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...

18.Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis.
Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą
atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.

19.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą
duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir
gautą vidurkį.*/

console.log("\n====================");

let zodziuMasyvas7 = ["medis", "zmogus", "masina", "dvirtatis", "mergina"] 

for (const indeksas in zodziuMasyvas7) {
    console.log("Indeksas:", indeksas, "zodis", zodziuMasyvas7[indeksas]);
}

let zodziuMasyvas8 = ["medis", "zmogus", "masina", "dvirtatis", "mergina"] 
console.log("masyve yra :", zodziuMasyvas8.length, "zodziai");

for (const zodis1 of zodziuMasyvas7) {
    console.log("kodas:", Math.floor(Math.random() * 444), "zodis", zodis1);
}

let studPazymiai4 = [2, 5, 7, 9, 5]; 
let vidurkis = 0;
let suma7 = 0;
let vidurkis91 = 0;
for (const pazimys of studPazymiai4) {
    suma7 += pazimys;
    
}


console.log("suma:", suma7);
console.log("vidurkis", suma7 / (studPazymiai4.length + 1));

// 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.

let masyvas5 = [];

masyvas5.push(1, 3, 5, 8, 9, 10);

console.log(`masyvo reikšmė: ${masyvas5}`);

// 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.

let masyvas6 = [];

masyvas6.push(Math.floor(Math.random() * 30));

console.log(`masyvo reikšmė: ${masyvas6}`);


console.log("------------------------");

let masyvas7 = ["pica", "burgeris", "mesa", "plovas", "balandelis", "arbata"];

masyvas7.push("jogurtas");
masyvas7.unshift("greitine");
masyvas7.splice(4, 0, "antrekotas", "kotletas");
masyvas7.pop();
masyvas7.shift();
masyvas7.slice(1, 4);
console.log(masyvas7);

/*2. Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra
kuris nors pasirinktas skaičius (pvz 8).*/

let masyvas8 = [4, 7, 8, 9, 6, 5, 8, 2];

let arYra9 = masyvas8.includes(2);

console.log(`yra ${arYra9}`);


/*Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. Panaudokite
join metodą, kad masyvą paverstumėte į teksto eilutę.
Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną
kartą panaudokite tarpą, kitą kablelius ir t.t.).*/

let zodziuMasyvas = ["cia", "yra", "keli", "zodziai"];

let zodziuMasyvasEiluteje = zodziuMasyvas.join(" ,");
console.log(zodziuMasyvasEiluteje);

/*Susikurkite kintamąjį kuriame būtų saugomas sakinys iš kelių žodžių
(string tipo kintamasis). Išskaidykite šį tekstą į masyvą naudojant split
metodą. Raskite kiek žodžių buvo sakinyje.*/

let zodziuMasyvas1 = ("keliu zodziu masyvas");

console.log(zodziuMasyvas1);

let zodziuMasyvas2 = zodziuMasyvas1.split(' ');
console.log(zodziuMasyvas2);


/*Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki
mažiausio. Išveskite tris didžiausius pažymius.*/

let pazymiuMasyvas = [4, 7, 8, 9, 6, 5, 8, 2];

let rikiuotasMasyvas = pazymiuMasyvas.slice().sort((b, a) => a - b);

console.log(rikiuotasMasyvas);

let didziausi3 = rikiuotasMasyvas.slice(0, 3);
console.log(didziausi3);


/*6. Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos
studentų vardai, o antrąjame būtų saugojami matematikos pamokos
studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą.
Bonus: ar jums pavyktų išskirti tik unikalius vardus? (galima ieškoti kaip
panaudoti set).*/


console.log("-------------------------");

let masyvasBiologijos = ["Tomas", "Petras", "Kastytis", "Antanas", "Marija"];
let masyvasMatematikos = ["Giedrius", "Domas", "Klemensas", "Pyteris", "Joana"];

let apjungtiVardai = [...masyvasBiologijos, ...masyvasMatematikos];
console.log(apjungtiVardai);


/*7. Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro
paskaitų temos, o antrame masyve - antro semestro paskaitų temos.
Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia
būtų pateikta pirmo semestro informacija ir tada antro.*/

let masyvasTemu1 = ["tema1", "tema2", "tema3"];
let masyvasTemu2 = ["tema4", "tema5", "tema6"];

let apjungtosTemos = [...masyvasTemu1, ...masyvasTemu2];
console.log(apjungtosTemos);

/*8. Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite
šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite
abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo
masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o
jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir
sutvarkyti.*/

let spalvos1 = ["zalia", "raudona", "geltona"];

let spalvos1Kopija = [...spalvos1];
console.log(spalvos1Kopija);

spalvos1.length = 0;

spalvosIsvalymas1 = [];
console.log(spalvos1);

/*9. Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite
paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas
miestas. */

let miestuMasyvas = ["Vilnius", "Klaipeda", "Birzai", "Utena"];

let rastasIndeksas = miestuMasyvas.indexOf("Klaipeda");

console.log(rastasIndeksas);

/*10. Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar
masyve yra bent vienas dublikatas.
Pvz, masyve [1, 2, 3] nėra dublikatų.
O masyve [1, 2, 3, 4, 2] yra dublikatų (skaičius 2).*/

/*let betKoksMasyvas = [4, 7, 8, 9, 6, 5, 8, 2];

let uniklausSk = new Set();
let dubliuojasi = 0;
for (const skaicius of betKoksMasyvas) */


/*1. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find
    metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai
    atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai. */

    console.log("----------1----------------");

let skMasyvas7 = [3, 7, 2, 9, 6, 4];

let rastasSkaicius = skMasyvas7.find(skaicius => skaicius % 2 === 0);

console.log(rastasSkaicius);

/*2. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu
masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5. */

console.log("----------2----------------");

let skMasyvas8 = [-3, 0, 5, -8, 2, 7];

let rastasSkaicius1 = skMasyvas8.find(skaicius => skaicius > 0);

console.log(rastasSkaicius1);

/*3. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o
jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4],
tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7,
5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus. */
console.log("----------3----------------");
let skMasyvas9 = [8, -2, 3, 4]; 

let rastaskaicius2 = skMasyvas9.find(skaicius => skaicius < 0);
let rastaskaicius2Idex = skMasyvas9.findIndex(index => index);




console.log(rastaskaicius2, rastaskaicius2Idex);

/*4. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus
arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra
išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1. */
console.log("----------4----------------");

let skMasyvas10 = [8, 12, 5, 3, 15, 9];

let rastasSkaicius3 = skMasyvas10.find(x => x >= 10);
let rastasSkaicius3Index = skMasyvas10.indexOf(x => x >= 10);

console.log(rastasSkaicius3, rastasSkaicius3Index);


/*5. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš
3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7,
18, 4], atsakymas bus 12. */
console.log("----------5----------------");
let skMasyvas11 = [5, 9, 12, 7, 18, 4];

let rastasSkaicius4 = skMasyvas11.find(x => x % 3 === 0 && x > 10);
console.log(rastasSkaicius4);



/*6. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra
neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas
yra -6. */
console.log("----------6----------------");

let skMasyvas12 = [5, 8, -3, -6, 4, 7];

let rastasSkaicius5 = skMasyvas12.find(x => x < 0 && x % 2 === 0);
console.log(rastasSkaicius5);



/*7. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra
teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o
jeigu masyvas [8, 9, -3, 2], tai atsakymas false. */
console.log("----------7----------------");
let skMasyvas13 = [8, 9, -3, 2];

let arVisiteigiami = skMasyvas13.every(x => x > 0);
console.log(arVisiteigiami);

/*8. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra
lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu
masyvas [7, 3, 6, 8, 10], tai atsakymas false. */

console.log("----------8----------------");

let skMasyvas14 = [7, 3, 6, 8, 10];

let arVisiLyginiai = skMasyvas14.every(x => x % 2 ===0);
console.log(arVisiLyginiai);

/*9. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas
skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai
atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true. */

console.log("----------9----------------");

let skMasyvas15 = [20, 3, 7, 9];

let arYraMazesnis = skMasyvas15.every(x => x < 5);

console.log(arYraMazesnis);

/*10. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis
nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu
masyvas yra [-8, -6, -4], tai atsakymas yra false. */

console.log("----------10----------------");

let skMasyvas16 = [-8, -6, -4];

let arYraVienasTeigiamas = skMasyvas16.some(x => x > 0);
console.log(arYraVienasTeigiamas);

/*11. Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys
žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘antis’,
‘ožka’, ‘arklys’], tai atsakymas true, o jeigu masyvas [‘abc’, ‘de’, ‘fgia’], tai
atsakymas false. */

console.log("----------11----------------");

let zodziuMasyvas3 = ["antis", "ožghf", "arklys"];

const sudarytiIs3 = zodziuMasyvas3.every(x => x.length >= 3);
console.log(sudarytiIs3);

/*12. Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas
žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar
mažoji raidė). Pvz, jeigu masyvas [‘bananas’, ‘agurkas’, ‘pomidoras’], tai
atsakymas true, o jeigu masyvas [‘kaunas’, ‘vilnius’, ‘klaipėda’], tai
atsakymas false. */

console.log("----------12----------------");

let zodziuMasyvas4 = ["bananas", "Agurkas", "pomidoras"];

const arPrasidedaA = zodziuMasyvas4.some(x => x.startsWith("a") || x.startsWith("A"));
console.log(arPrasidedaA);

/*13. Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys
skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz,
masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false. */

console.log("----------13----------------");

let masyvas13 = [3, 7, 2, 9, 6, 4];

let arViskasAtitinka = masyvas13.every(x => x > 0);
let arYraBentVienasLyginis = masyvas13.some(x => x % 2 === 0);


console.log(arViskasAtitinka, arYraBentVienasLyginis);

/*14. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8,
9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5]. */

console.log("----------14----------------");

let masyvas14 = [4, -3, -2, 8, 9, 5];

const masyvas14Teigiami = masyvas14.filter(x => x > 0);

console.log(masyvas14Teigiami);

/*15. Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai
(skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz,
jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2]. */

console.log("----------15----------------");

let masyvas15 = [5, 1, 4, 5, 1, 3, 4, 5, 2];

const masyvas15Isfiltruotas = masyvas15.filter(x => x === 1 || x === 2);

console.log(masyvas15Isfiltruotas);

/*16. Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių.
Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu
turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8]. */

console.log("----------16----------------");

let masyvas16 = [5, -3, 2, 7, 8, -4, 1];

const masyvas16Isfiltruota = masyvas16.filter(x => x > 0 && x % 2 === 0);

console.log(masyvas16Isfiltruota);

/*17. Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių
pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite
masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’,
‘Bulgarija’]. */

console.log("----------17----------------");

let masyvas17 = ["Belgija", "Lietuva", "Graikija", "Bulgarija"];

const masyvas17Isfiltruota = masyvas17.filter(x => x.startsWith("B") || x.startsWith("b"));

console.log(masyvas17Isfiltruota);

/*18. Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos
padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2,
6, 4], o padvigubinus galutinis variantas bus [4, 12, 8]. */

console.log("----------18----------------");

let masyvas18 = [3, 7, 2, 9, 6, 4];

let masyvas18Isfiltruotas = masyvas18.filter(x => x % 2 === 0).map(x => x * 2);

console.log(masyvas18Isfiltruotas);

/*19. Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz,
jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4]. */

console.log("----------19----------------");

let masyvas19 = [7, 8, 9, 2, 3];

let masyvas19Padidintas = masyvas19.map(x => x + 1);

console.log(masyvas19Padidintas);

/*20. Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į
variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą [‘bananas’, ‘baba’,
‘klėtis’], tai turi gautis [‘BANANAS’, ‘BABA’, ‘KLĖTIS’]. */

console.log("----------20----------------");

let masyvas20 = ["bananas", "baba", "klėtis"];

let masyvas20Padidintos = masyvas20.map(x => x.toUpperCase());

console.log(masyvas20Padidintos);

/*21. Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas
yra [2, 3, 1], tai atsakymas 6. */

console.log("----------21----------------");

let masyvas21 = [2, 3, 1];

let masyvas21Suma = masyvas21.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); 

console.log(masyvas21Suma);

/*22. Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir
gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4],
o šių skaičių suma ir galutinis atsakymas yra 6. */

console.log("----------22----------------");

let masyvas22 = [1, 2, 3, 4, 5];

let masyvas22Isfiltruotas = masyvas22.filter(x => x % 2 === 0).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
} );

console.log(masyvas22Isfiltruotas)

/*23. Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją
padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’,
‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’]. */

console.log("----------23----------------");

let masyvas23 = ["šuo", "katė", "gyvatė"];

let masyvas23Didzioji = masyvas23.map(x => x.toUpperCase());
let masyvas23DidziojiViena = masyvas23Didzioji.map(x => x.charAt(0));
console.log(masyvas23Didzioji, masyvas23DidziojiViena);

/*24. Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie
susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘bananas’,
‘persikas’, ‘abc’, ‘de’], tai atrinkus žodžius gausis [‘bananas’, ‘persikas’], o
tokių žodžių yra ir galutinis atsakymas skaitosi 2. */

console.log("----------24----------------");

let masyvas24 = ["bananas", "persikas", "abc", "de"];

let masyvas24Diziosios = masyvas24.filter(x => x.length >= 5);
let kiekZodziu = masyvas24Diziosios.length;

console.log(masyvas24Diziosios, kiekZodziu);

/*25. Susikurkite žodžių masyvą. Raskite kiekvieno žodžio simbolių kiekį. Pvz,
jeigu masyvas yra [‘obelis’, ‘liepa’, ‘eglė’, ‘uosis’], tai turi gautis [6, 5, 4, 5]. */

console.log("----------25----------------");

let masyvas25 = ["obelis", "liepa", "eglė", "uosis"]; 

let masyvas25ZodziuKiekis = masyvas25.map(x => x.length);

console.log(masyvas25ZodziuKiekis);

/*26. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti
vardai ir amžiai. Ištraukite iš tokio masyvo tik vardus. Pvz, jeigu masyvas
yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai turi gautis [‘Tomas’,
‘Jonas’, ‘Gintarė’, ‘Inga’]. */

console.log("----------26----------------");

let masyvas26 = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

let masyvas26Filtruotas = masyvas26.map(x => x.slice(0, -2));

console.log(masyvas26Filtruotas);

/*27. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti
vardai ir amžiai. Ištraukite iš tokio masyvo tik amžius, juos paverskite į
skaičius ir raskite bendrą sumą. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas
20’, ‘Gintarė 40’, ‘Inga 24’], tai išrinkus info gausis [34, 20, 40, 24] ir suradus
sumą turėsime 118. */

console.log("----------27----------------");

let masyvas27 = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

let masyvas27Filtruotas = masyvas27.map(x => x.slice(-2)).map(Number).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0 );


console.log(masyvas27Filtruotas);

/*28. Susikurkite masyvą prekių likučiams saugoti (tik likučių skaičiai). Išrinkite
visus likučius, kurių liko mažai (mažiau nei 5 vnt.), ties kiekvienu likučiu
paskaičiuokite kiek trūksta iki ribos. Pvz, jeigu turite masyvą [74, 2, 54, 3,
1, 87], išfiltravus liks [2, 3, 1], o paskaičiavus kiek kiekvieno trūksta iki 5,
gausis [3, 2, 4]. */

console.log("----------28----------------");

let masyvas28 = [74, 2, 54, 3, 1, 87];
let masyvas28FiltruotasTruksta = 5;
let masyvas28Filtruotas = masyvas28.filter(x => x <= 5).map(x => 5 - x);


console.log(masyvas28Filtruotas,);

/*29. Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas
turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9],
išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3. */

console.log("----------29----------------");

let masyvas29 = [7, 8, 10, 6, 5, 9];

let masyvas29Filtruotas = masyvas29.filter(x => x >= 8);

console.log(`Studento pažimiai yra: ${masyvas29Filtruotas} Iš viso teigiamų pažymių: ${masyvas29Filtruotas.length}`);

/*30. Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus
žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu masyvas
yra [‘bananas’, ‘obelis’, ‘automobilis’], gausis kad yra 4 raidės. */

console.log("----------30----------------");

let masyvas30 = ["bananas", "obelis", "automobilis"];

const raideA = "a";

let kiekRaidziuA = masyvas30.reduce((accumulator, word) => accumulator + (word.split(raideA).length -1), 0);

console.log(kiekRaidziuA);

/*1. Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite
tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa,
atsiskaitytų kreditų skaičius, pažymiai, amžius, ūgis, kelintame kurse
mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į
vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per
vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris
skirtingas pasirinktas savybes. */

console.log("---------Objektai 1-------------");

let studentoDuomenys = {
    vardas: "Vytautas",
    pavarde: "Luchtanas",
    amzius: 34,
    ugis: 180,
    kursas: 1,
    mokykla: "Salama",
}

console.log(studentoDuomenys);


/*2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite
tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių
sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis -
biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite
kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba
panaudoti new Date(Date.now()).getFullYear() funkciją). */

console.log("---------Objektai 2-------------");

let filmoDuomenys = {
    pavadinimas: "Full metal jacket",
    režisierius: "Stanley Kubrikas",
    biudžetas: 200000,
    uzdirbo: 356457,
    žanras: "Karinė drama",
    trukmė: 120,
    išleidimo: 1980,
    aktoriai: ["asfas", "asfasfasf", "asfasfasfa", "asfasfasfa"]
}
let metaiDabartiniai = 2025;
console.log("Filmas uzdirbo: ", filmoDuomenys.uzdirbo - filmoDuomenys.biudžetas);
console.log("Aktoriu skaicius: ", filmoDuomenys.aktoriai.length);
console.log("filmui yra", metaiDabartiniai - filmoDuomenys.išleidimo, "metai");

console.log(filmoDuomenys);

/*3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename
objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius,
žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais),
išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų
informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei
kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos
kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą? */

console.log("---------Objektai 3-------------");

let knyga1 = {
    pavadinimas: "Fear and Loathing in Las Vegas",
    autorius: "Hunter S. Thomson",
    žanras: "Gonzo",
    kaina: 20,
    puslapiuKiekis: 300,
    skyriuSarasas: ["asfasfaf", "asfasfaf", "asfasfaf", "asfasfaf", "asfasfaf", "asfasfaf", "asfasfaf", "asfasfaf"],
    isleidimoMetai: 1986,
    arYraKnigyne: true,
}

let knyga2 = {
    pavadinimas: "Basketbal Diearies",
    autorius: "Jim Caroll",
    žanras: "Trash life",
    kaina: 30,
    puslapiuKiekis: 200,
    skyriuSarasas: ["asfasfaf", "asfasfaf", "asfasfaf", "asfasfaf", "asfasfaf", "asfasfaf", "asfasfaf"],
    isleidimoMetai: 1981,
    arYraKnigyne: true,
}

console.log(knyga1,knyga2);

if (knyga1.puslapiuKiekis < knyga2.puslapiuKiekis) {
    console.log("Pirma knyga yra plonesnė");
} else if (knyga1.puslapiuKiekis > knyga2.puslapiuKiekis) {
    console.log("Antra knyga yra plonesnė");
} else console.log("Knygos vienodo ilgio");

if (knyga1.skyriuSarasas.length < knyga2.skyriuSarasas.length) {
    console.log("Knyga 2 turi daugiau skyrių");
} else if (knyga1.skyriuSarasas.length > knyga2.skyriuSarasas.length) {
    console.log("Knyga 1 turi daugiau skyrių");
} else console.log("Abi knygos turi vienodai skyrių");

if (knyga1.kaina * 2 > knyga2.kaina) {
    console.log("kaina bus didesnė");
} else console.log("kaina bus mažesnė");


/*4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte
sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas,
turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite
visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje
(pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir
išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos
prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
pelningumą ((kaina - savikaina) * kiekis sandėlyje). */

console.log("---------Objektai 4-------------");

let prekiuDuomenys1 = {
    pavadinimas: "preke 1",
    kaina: 20,
    savikaina: 10,
    kodas: 454564,
    kiekisSandelyje: 56,
    matmenys: {
        ilgis: 20,
        plotis: 10,
        aukstis: 21,
    },
}

let prekiuDuomenys2 = {
    pavadinimas: "preke 2",
    kaina: 450,
    savikaina: 52,
    kodas: 789789,
    kiekisSandelyje: 45,
    matmenys: {
        ilgis: 20,
        plotis: 15,
        aukstis: 21,
    },

}

let prekiuDuomenys3 = {
    pavadinimas: "preke 3",
    kaina: 56,
    savikaina: 20,
    kodas: 23321,
    kiekisSandelyje: 32,
    matmenys: {
        ilgis: 20,
        plotis: 13,
        aukstis: 21,
    },

}

console.log(prekiuDuomenys1, prekiuDuomenys2, prekiuDuomenys3);
console.log(`Pirma prekė kainuoja: ${prekiuDuomenys1.kaina} eurų. Antra prekė kainuoja: ${prekiuDuomenys2.kaina} eurų. Tračia prekė kainuoja: ${prekiuDuomenys3.kaina} eurus`);

if (prekiuDuomenys2.kaina < prekiuDuomenys1.kaina > prekiuDuomenys3.kaina) {
    console.log(`Brangiausia prekė yra: ${prekiuDuomenys1.pavadinimas} ji kainuoja: ${prekiuDuomenys1.kaina}`);
} else if (prekiuDuomenys1.kaina < prekiuDuomenys2.kaina > prekiuDuomenys3.kaina) {
    console.log(`Brangiausia prekė yra: ${prekiuDuomenys2.pavadinimas} ji kainuoja: ${prekiuDuomenys2.kaina}`);
} else if (prekiuDuomenys1.kaina < prekiuDuomenys3.kaina > prekiuDuomenys2.kaina) {
 console.log(`Brangiausia prekė yra: ${prekiuDuomenys3.pavadinimas} ji kainuoja: ${prekiuDuomenys3.kaina}`); 
} 

console.log("prekes 3 turis: ", prekiuDuomenys3.matmenys.ilgis * prekiuDuomenys3.matmenys.plotis * prekiuDuomenys3.matmenys.aukstis);
console.log("prekes 2 turis: ", prekiuDuomenys2.matmenys.ilgis * prekiuDuomenys2.matmenys.plotis * prekiuDuomenys2.matmenys.aukstis);
console.log("prekes 1 turis: ", prekiuDuomenys1.matmenys.ilgis * prekiuDuomenys1.matmenys.plotis * prekiuDuomenys1.matmenys.aukstis);

let pelningumas1 = (prekiuDuomenys1.kaina - prekiuDuomenys1.savikaina) * prekiuDuomenys1.kiekisSandelyje;
let pelningumas2 = (prekiuDuomenys2.kaina - prekiuDuomenys2.savikaina) * prekiuDuomenys2.kiekisSandelyje;
let pelningumas3 = (prekiuDuomenys3.kaina - prekiuDuomenys3.savikaina) * prekiuDuomenys3.kiekisSandelyje;
console.log(pelningumas1, pelningumas2, pelningumas3);


/*5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su
reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys).
Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, rida metai,
spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio
informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis
įrašykite dabartinius metus arba panaudokite new
Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek
vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300
kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.). */

console.log("---------Objektai 5-------------");

let automobilioDuomenys = {};

automobilioDuomenys.marke = "Lexus";
automobilioDuomenys.modelis = "Is 250";
automobilioDuomenys.rida = 250000;
automobilioDuomenys.metai = 2007;
automobilioDuomenys.spalva = "Juoda";
automobilioDuomenys.tūris = 2500;
automobilioDuomenys.daužta = false;
automobilioDuomenys.parduodama = true;
let sieMetai = 2025;
console.log(automobilioDuomenys);

let autoAmzius = sieMetai - automobilioDuomenys.metai;
let vidutiniskaiNuvaziavo = automobilioDuomenys.rida / autoAmzius; 
console.log(autoAmzius, "vidutiniskai nuvaziavo per metus: ",vidutiniskaiNuvaziavo);


/*6. Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes
su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją.
Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai
padarykite. */

console.log("---------Objektai 6-------------");

let norimasObjektas = {
    kazkas1: "belenkas",
    kazkas2: "belenkas",
    kazkas3: [4, 5, 7, 8],
    kazkas4: "asffsaf",
    kazkas5: "basfafs",
    kazkas6: "asdasd",
}

console.log(norimasObjektas);
let suma45 = 0;
for (const skaicius of norimasObjektas.kazkas3) {
    suma45 += skaicius
}

console.log(suma45);

/*1. Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote
programavimą. Iškvieskite šią funkciją tris kartus. */

function vardas() {
    console.log("Mano vardas yra Vytautas")
} 

vardas();
vardas();
vardas();

/*2. Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5
kartus. */

function eilerastis() {
console.log(`
    Koks baltumas, neapsakomas baltumas!
    Kur dangus, kur žemė – neatskirsi.
    Krinta sniegas – baltas nerūpestingumas.
    Rodos, šūktelsi iš džiaugsmo ir numirsi.`)
}

eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();

/*3. Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite
visas tris funkcijas po vieną kartą. */

function tekstas1() {
    console.log(`bla bla bb bla bla bla `)
}

function tekstas2() {
    console.log(`bla bla bb bla bla bla `)
}

function tekstas3() {
    console.log(`bla bla bb bla bla bla `)
}

tekstas1();
tekstas2();
tekstas3();

/*4. Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutė, kitoje - kita.
Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią
trečiąją funkciją už visų funkcijų ribų. */

function tekstas4() {
    console.log(`tra le ka ra ta`)
}

function tekstas5() {
    console.log(`prikulsi draugelis`)
}

function abutekstai() {
    tekstas4();
    tekstas5();
}

abutekstai();

/*5. Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius.
Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant
ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą
kartų. */

function skaiciai() {
    let skaicius1 = Math.floor(Math.random() * 25);
    let skaicius2 = Math.floor(Math.random() * 25);
    let skaicius3 = skaicius1 + skaicius2;
    console.log(`${skaicius1} + ${skaicius2} = ${skaicius3}`)
}

skaiciai();

/*6. Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma
informacija apie policininką (vardas, pavardė, amžius, alga, etatas,
specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite
į sakinį, ar išveskite sąrašu ar pan.). */

function policininkas() {
    let info = {
        vardas: "Petras",
        pavarde: "Antanauskas",
        amzius: "38",
        alga: 2000,
        etatas: "Naktinis",
        specializacija: "Keliusnikas",
    }
    console.log("policninko duomenys:", info)
}

policininkas();

/*7. Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje,
skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus. */

function atsitiktiniai() {
    let skaiciaiAts1 = Math.floor(Math.random() * 100);
    let skaiciaiAts2 = Math.floor(Math.random() * 100);
    let skaiciaiAts3 = Math.floor(Math.random() * 100);
    let skaiciaiAts4 = Math.floor(Math.random() * 100);
    let skaiciaiAts5 = Math.floor(Math.random() * 100);
    let skaiciaiAts6 = Math.floor(Math.random() * 100);
    let skaiciaiAts7 = Math.floor(Math.random() * 100);
    let skaiciaiAts8 = Math.floor(Math.random() * 100);
    let skaiciaiAts9 = Math.floor(Math.random() * 100);
    let skaiciaiAts10 = Math.floor(Math.random() * 100);
    console.log(`${skaiciaiAts1} ${skaiciaiAts2} ${skaiciaiAts3} ${skaiciaiAts4} ${skaiciaiAts5} ${skaiciaiAts6} ${skaiciaiAts7} ${skaiciaiAts8} ${skaiciaiAts9} ${skaiciaiAts10}`)
}

atsitiktiniai();
atsitiktiniai();
atsitiktiniai();
atsitiktiniai();
atsitiktiniai();

/*8. Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų
sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją
cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių. */

function atsitiktinia2() {
    let sk1 = Math.floor(Math.random() * 100);
    return sk1
}

for (i = 0; i <= 10; i++) {
    console.log(atsitiktinia2())
}

/*9. Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus
perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite
kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso
gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir
įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms. */

function pasisveikinti(vardas7) {
    console.log(`Labas, mano vardas yra ${vardas7}`)
}

let vardas7 = "Vytautas";

function atsiveikinti(vardas7) {
    console.log(`viso gero  ${vardas7}`)
}

pasisveikinti(vardas7);
atsiveikinti(vardas7);


/*10.Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti
kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs -
tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų,
duodant skirtingus skaičius. */

function duSkaiciai(skaicius1, skaicius2) {
    if (skaicius1 > skaicius2) {
        console.log(`Skaicius 1 (${skaicius1}) yra didesnis`)
    } else if (skaicius1 < skaicius2) {
        console.log(`Skaicius 2 (${skaicius2}) yra didesnis`)
    } else console.log("Abu skaičia yra lygūs")
}

let skaicius1 = Math.floor(Math.random() * 100);
let skaicius2 = Math.floor(Math.random() * 100);

duSkaiciai(skaicius1, skaicius2);
duSkaiciai(skaicius1, skaicius2);
duSkaiciai(skaicius1, skaicius2);

/*11.Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė,
 modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti
kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant
skirtingus duomenis jai. */

function avtomobilis(marke, modelis, gamybosMetai, darbinisTuris) {
console.log(`
    Automobilio marke: ${marke}
    Automobilio modelis: ${modelis}
    Gamybos metai: ${gamybosMetai}
    Darbini tūris ${darbinisTuris}`)
}

 
   let marke = "Audi";
  let modelis = "Silke";
  let gamybosMetai =  "1980";
   let darbinisTuris = 2;


avtomobilis(marke, modelis, gamybosMetai, darbinisTuris);

/*12.Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du
skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias
pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną
funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas,
perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą
kartų. */

function skaiciuoti(sk7, sk8) {
let suma1 = sk7 + sk8;
console.log(`${sk7} + ${sk8} = ${suma1}`)
}

let sk7 = Math.floor(Math.random() * 100);
let sk8 = Math.floor(Math.random() * 100);



function atimti(sk7, sk8) {
    let suma1 = sk7 - sk8;
    console.log(`${sk7} - ${sk8} = ${suma1}`)
    }

    
    
    function dauginti(sk7, sk8) {
        let suma1 = sk7 * sk8;
        console.log(`${sk7} * ${sk8} = ${suma1}`)
        }   

        

        function dalinti(sk7, sk8) {
            let suma1 = sk7 / sk8;
            console.log(`${sk7} / ${sk8} = ${suma1}`)
            }

            
function bendra(sk9, sk10) {
    skaiciuoti(sk9, sk10);
    atimti(sk9, sk10);
    dauginti(sk9, sk10); 
    dalinti(sk9, sk10);
    
  
}

let sk9 = Math.floor(Math.random() * 100);
    let sk10 = Math.floor(Math.random() * 100);

bendra(sk9, sk10);
bendra(sk7, sk10);

/*13.Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje
išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį
(simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį
duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą. */

function masyvasPem(masyvas50) {
    for (const zodis of masyvas50) {
        console.log(`${zodis} - šis zodis turi ${zodis.length} raidžių`)
    }
}

let masyvas50 = ["zodis1", "betkas", "kazkas", "arbatinis", "puodelis"];

masyvasPem(masyvas50);

/*14.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį
padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir
užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą
perduodant skirtingą turimą masyvą. */

function skMasyvui (skFuckijaiMasyvas1, skFuckijaiMasyvas2) {
    for (const skaicius of skFuckijaiMasyvas1) {
        console.log(`Skaiciaus ${skaicius} kvadratas yra: ${skaicius * skaicius}, o kvadratas padalintas is 2: ${skaicius * skaicius / 2}`);
    }

  
}

let skFuckijaiMasyvas1 = [1, 5, 7, 6, 7, 9, 15];
let skFuckijaiMasyvas2 = [5, 7, 2, 8, 10, 5, 45];

skMasyvui(skFuckijaiMasyvas1);
skMasyvui(skFuckijaiMasyvas2);

console.log("=========Judam toliau===========");

/*15.Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei
studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir
pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už
funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba
objektus studentų pažymiams saugoti ir užpildykite juos duomenimis.
Iškvieskite šią funkciją perduodant visus reikalingus duomenis. */

function judamToliau(studentenPazymiai, studentenvardas, studentenpavarde) {
console.log(`Studento pazymiai: ${studentenPazymiai}, studento vardas: ${studentenvardas}, ${studentenpavarde}`);

let suma = 0;
let vidurkis = 0;

for (const skaicius of studentenPazymiai) {
    suma += skaicius;
    vidurkis = suma / studentenPazymiai.length + 1;
}
console.log(`Studento vidurkis: ${vidurkis}`)
}

let studentenPazymiai = [1, 5 ,7, 10, 4, 8];
let studentenvardas = "Antoske";
let studentenpavarde = "Kartsoke";

judamToliau(studentenPazymiai, studentenvardas, studentenpavarde);



console.log("=========16===========");

/*16.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat,
susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų
pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus.
Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą
perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti,
masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba
per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos
funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją. */

function uzduotis16 (masyvas51) {
let diziausiasSk = masyvas51[0];
    for (const skaicius of masyvas51) {
        if (skaicius > diziausiasSk) {
            diziausiasSk = skaicius;
        }
    }
    console.log(`Didziausias masyvo skaicius yra: ${diziausiasSk}`)
}

function uzduotis161 (masyvas52, masyvas53, masyvas54) {
    masyvas52.push(
        Math.floor(Math.random() * 50 ),
        Math.floor(Math.random() * 50 ),
        Math.floor(Math.random() * 50 ));
    
    console.log(`Masyvo skaiciai: ${masyvas52}`);
    
}



let masyvas51 = [1, 5 ,7, 10, 4, 8];
let masyvas52 = [];
let masyvas53 = [];
let masyvas54 = [];
uzduotis16 (masyvas51);




uzduotis161 (masyvas52);
uzduotis16 (masyvas52);
uzduotis161 (masyvas53);
uzduotis16 (masyvas53);
uzduotis161 (masyvas54);
uzduotis16 (masyvas54);


/*17.Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite
šią funkciją ir išspausdinkite gautus rezultatus. */

console.log("=========Funkcijos 17===========");

function sakinys() {
    return "bet koks sakinys" 
}

console.log( sakinys() );

/*18.Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių.
Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu
norite būdu. */
console.log("=========Funkcijos 18===========");

function betKoksSkaicius1() {
    let betKoksSkaicius12 = Math.floor(Math.random() * 25);
    return betKoksSkaicius12
}




console.log(betKoksSkaicius1());
console.log(betKoksSkaicius1());
console.log(betKoksSkaicius1());

/*19.Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį.
Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį
8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų,
perduodant vis skirtingus duomenis. Gautus atsakymus išveskite. */

console.log("=========Funkcijos 19===========");

function varduiVidurkiai(studeVardas, studestudeVidurkis) {
    return "Studento vardas: " + studeVardas + ", studento vidurkis " + studestudeVidurkis;
}

console.log(varduiVidurkiai("Tomenas", 8));
console.log(varduiVidurkiai("Ausra", 10));


/*23.Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų
rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite
du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du
kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite.
Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą. */

console.log("=========Funkcijos 23===========");


function masyvuiSkaiciuoti(masyvas) {
    let suma = 0;
    for (const skaicius of masyvas) {
        suma += skaicius;
    }
    return suma;
}

let masyvasFunkcijai = [1, 5 ,7, 10, 4, 8];
let masyvasFunkcijai2 = [1, 50 ,8, 10, 4, 8];
let masyvasFunkcijai3 = [1, 5 ,7, 10, 50, 100];

let masyvoSuma = masyvuiSkaiciuoti(masyvasFunkcijai);
let masyvoSuma2 = masyvuiSkaiciuoti(masyvasFunkcijai2);
let masyvoSuma3 = masyvuiSkaiciuoti(masyvasFunkcijai3);
console.log(masyvoSuma);
console.log(`
    Masyvo 1 suma: ${masyvuiSkaiciuoti(masyvasFunkcijai)}
    Masyvo 2 suma: ${masyvuiSkaiciuoti(masyvasFunkcijai2)}
    Masyvo 3 suma : ${masyvuiSkaiciuoti(masyvasFunkcijai3)}`);


     if (masyvoSuma < masyvoSuma2 > masyvoSuma3) {
        console.log(`${masyvoSuma2} yra didesne`);
    } else if (masyvoSuma2 < masyvoSuma > masyvoSuma3) {
        console.log(`${masyvoSuma} yra didesne`);
    } else if (masyvoSuma < masyvoSuma3 > masyvoSuma2) {
        console.log(`${masyvoSuma} yra didesne`);
    } 

console.log("----------------factory");

function darbuotojoFactory (vardas, pavarde, pareigos, alga) {
    return {
        vardas: "Vytautas",
        pavarde: "Luchtanas",
        pareigos: "pareigos",
        alga: 4564,
        isvestiInfo: function() {
            console.log("----Apie darbuotoja----");
            console.log(`Darbuotojo vardas: ${this.vardas}`);
            console.log(`Darbuotojo vardas: ${this.pavarde}`);
            console.log(`Darbuotojo vardas: ${this.pareigos}`);
            console.log(`Darbuotojo vardas: ${this.alga}`);
        }
    }
};

let darbiotojas1 = darbuotojoFactory("Antonio", "Banderas", "killer", 900000);
let darbiotojas2 = darbuotojoFactory("Arnold", "Schwarzneger", "killer2", 1000000);

console.log(darbiotojas1, darbiotojas2)













