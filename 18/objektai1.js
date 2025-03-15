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


console.log("-------7 objektai---------");


/*7. Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite
tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek
turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto
raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių
reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.). */

let knigynoInfo = {
    pavadinimas: "Vaga",
    adresas: "Gedimino 10",
    plotas: 100,
    knyguSkaicius: 2500,
    darboValandos: 8,
    arAtidarytas: true,
}

console.log(knigynoInfo);

for (const info in knigynoInfo) {
    if (typeof knigynoInfo[info] !== "string") {
        console.log(knigynoInfo[info]);
    }
}

Object.entries(knigynoInfo).filter((irasas) => typeof irasas[1] !== "string")
.forEach((eilute) => {
    console.log(eilute[0], eilute[1])
});



console.log("-------8 objektai---------");

/*8. Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose
objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų
programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių
vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius.
Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir
išveskite jo vardą su pavarde. */

let studentasInfo1 = {
    vardas: "Tomas",
    pavarde: "Tamulinas",
    studProgramosPavadinimas: "Java",
    pazymiai: [5, 10, 7, 8, 9],
}

let studentasInfo2 = {
    vardas: "Antanas",
    pavarde: "Visaraktas",
    studProgramosPavadinimas: "CSS",
    pazymiai: [8, 12, 5, 10, 9],
}

console.log("Studento 1 informacija: ", studentasInfo1);


for (const pazymiai in studentasInfo1) {
    console.log(pazymiai, ":", studentasInfo1[pazymiai])
}

let studSuma1 = 0;
for (const pazimys of studentasInfo1.pazymiai) {
    studSuma1 += pazimys;
}

let stud1Vidurkis = studSuma1 / studentasInfo1.pazymiai.length

console.log(studSuma1, stud1Vidurkis);

let studSuma2 = 0;
for (const pazimys of studentasInfo2.pazymiai) {
    studSuma2 += pazimys;
}

let stud1Vidurkis2 = studSuma2 / studentasInfo2.pazymiai.length

console.log(studSuma2, stud1Vidurkis2);

Object.entries(studentasInfo1).forEach((info) => {
    console.log(info)
})
console.log(`-----Pirmo studento info-------`)
Object.entries(studentasInfo1).filter((info) => info[1]).forEach((info) => {
    console.log(info[0], ":", info[1],);
})
console.log(`Studento vidurkis: ${stud1Vidurkis}`)

console.log(`-----Antro studento info-------`)
Object.entries(studentasInfo2).filter((info) => info[1]).forEach((info) => {
    console.log(info[0], ":", info[1],);
})
console.log(`Studento vidurkis: ${stud1Vidurkis2}`)

if (stud1Vidurkis > stud1Vidurkis2) {
    console.log("Studento", studentasInfo1.vardas, "vidurkis: ", stud1Vidurkis, "yra didesnis")
} else if (stud1Vidurkis < stud1Vidurkis2) {
    console.log("Studento", studentasInfo2.vardas, "vidurkis: ", stud1Vidurkis2, "yra didesnis")
} else console.log("Vidurkiai yra lygūs");


console.log("-------9 objektai---------");

/*9. Pagal 16-ą pavyzdį, pritaikykite skriptą prie kitos esybės, t.y. sukurkite tokį
objektą, kuriame turėtumėte tam tikrų savybių, bei metodą/funkciją, kuri
kažką paskaičiuotų iš objekto duomenų. Šio objekto informacijos ir
atsakymų išvedimas irgi būtų panašus į duotą nurodytame pavyzdyje. */

let studentoPazymiaiIrVidurkis = {
    vardas: "Petras",
    pavarde: "Kuncevicius",
    pazymiai: [4, 5, 10, 9, 8, 6, 8],
    vidurkis1: function() {
        let suma = 0;
        for (const skaiciai of this.pazymiai) {
            suma += skaiciai;
        }
        return suma / this.pazymiai.length
    }
};

for (const info in studentoPazymiaiIrVidurkis) {
    console.log(info, ":", studentoPazymiaiIrVidurkis[info])
}

    console.log(studentoPazymiaiIrVidurkis.vidurkis1())

let apsauginioDuomenys = {
    vardas: "John",
    pavarde: "Wayne",
    pareigos: "Naktinis sargas",
    darboValandos: [6, 2, 0, 10, 5, 7, 8],
    vidPerSav: function() {
        suma = 0;
        for (const sk of this.darboValandos) {
            suma += sk
        }
        return suma / this.darboValandos.length
    }
}

console.log("Darbuotojas:", apsauginioDuomenys.vardas, apsauginioDuomenys.pavarde,
    "kuris yra: ", apsauginioDuomenys.pareigos, "vidutiniškai per savaitę dirbo:",
    apsauginioDuomenys.vidPerSav(), "valandų"
);

console.log("-------10 objektai---------");

/*10.Pagal 18-ą pavyzdį, pritaikykite skriptą prie kitos esybės. Išveskite visą
objekto informaciją per atskirą nuo objekto console.log(), taip pat, išveskite
tam tikrą pasirinktą informaciją pasinaudojant funkcija/metodu iš objekto. */

let preke = {
    pavadinimas: "knyga",
    kodas: 465456546,
    kaina: 40,
    kiekisSandelyje: 156,
    visuVerte: function() {
        let uzdarbis = this.kaina * this.kiekisSandelyje;
        
        return uzdarbis
    }
}

console.log("pardavus galima uzdirbti:", preke.visuVerte());

let vidurkiui = {
    kazkas: "asfasfa",
    darkazkas: "asfasf",
    dar: 44,
    vidurkeja: [5, 50, 1, 40, 8, 6],
    vidurkis: function() {
        let suma = this.vidurkeja.reduce((a, b) => a + b, 0) 
        vidurkis = suma / this.vidurkeja.length
        return vidurkis.toFixed(2)
    }
}

console.log(vidurkiui.vidurkis());

/*11.Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus
sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas
šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią
savybę. */

console.log("-------11 objektai---------");

let knygos = [
    knyga1 = {
        pavadinimas: "Sau pačiam",
        autorius: "Masrkas Aurelijus",
        kaina: 100,
    },
    knyga2 = {
        pavadinimas: "1984",
        autorius: "Orwelas",
        kaina: 50,
    },
    knyga3 = {
        pavadinimas: "Tai aš, Edička",
        autorius: "Limonovas",
        kaina: 30,
    },
];

console.log(knygos);
console.log(knygos[0]);
console.log(knygos[0].pavadinimas)

/*12.Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis.
Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais
atskirose eilutėse. */
console.log("-------12 objektai---------");

let prekes = [
    preke1 = {
        pavadinimas: "flakonas",
        kodas: 456464,
        kaina: 200,
        arYra: true,
    },
    preke2 = {
        pavadinimas: "butelys",
        kodas: 658454,
        kaina: 50,
        arYra: true,
    },
    preke3 = {
        pavadinimas: "deze",
        kodas: 656499,
        kaina: 500,
        arYra: false,
    },
];

for (const stuffas of prekes) {
    console.log("Prekės pvadinimas: ", stuffas.pavadinimas, "Prekė kainuoja: ", stuffas.kaina,
        "prekės kodas yra: ", stuffas.kodas
    )
}

/*13.Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis.
Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių
(dabartiniai metai - gamybos metai). */

let automobiliai = [
    auto1 = {
        marke: "Lexus",
        modelis: "IS 250",
        gamybosMetai: 2007,
        amzius: function () {
            let dabartiniaiMetai = 2025
            let automobilioAmzius = dabartiniaiMetai - this.gamybosMetai
            return automobilioAmzius
        }
    },
    auto1 = {
        marke: "Mercedes",
        modelis: "190",
        gamybosMetai: 1989,
        amzius: function () {
            let dabartiniaiMetai = 2025
            let automobilioAmzius = dabartiniaiMetai - this.gamybosMetai
            return automobilioAmzius
        }
    },
    auto1 = {
        marke: "BMW",
        modelis: "Slyva",
        gamybosMetai: 2004,
        amzius: function () {
            let dabartiniaiMetai = 2025
            let automobilioAmzius = dabartiniaiMetai - this.gamybosMetai
            return automobilioAmzius
        }
    },
];

for (const info of automobiliai) {
    console.log("Automobilio markė: ", info.marke, "-", "Gamybos metai: ", info.gamybosMetai, "-",
        "Automobilio amžius: ", info.amzius(), "metai." 
    )
}

console.log(automobiliai[0].amzius());

/*14.Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite
duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse,
gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors
paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius,
darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.). */

let imones = [
    imone1 = {
        pavadinimas: "Kalvita",
        uzsiema: "Metalo perdirbimas",
        imonesAmzius: 20,
        siuMetuPelnas: 50000,
        darbuotojuKiekis: 40,
    },
    imone1 = {
        pavadinimas: "AutoKrusa",
        uzsiema: "Perekupinimas",
        imonesAmzius: 2,
        siuMetuPelnas: 35000,
        darbuotojuKiekis: 3,
    },
];

let bendrasPelnas = imones[0].siuMetuPelnas + imones[1].siuMetuPelnas
console.log("bendras pelnas per abi imones: ", bendrasPelnas, "eur");



for (const info of imones) {
    console.log("Imones pavadinimas: ", info.pavadinimas, "Imone uzsiema: ", info.uzsiema,
        "imones pelnas: ", info.siuMetuPelnas, "Imone ikurta: ", 2025 - info.imonesAmzius
    )
};

/*15.Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį
pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais
skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.:
bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.*/

let ligonines = [
    ligonine1 = {
        pavadinimas: "Santaros",
        vieta: "Santariškės",
        darbuotojai: 2315,
        lankytojaiPerMen: 56547,
    },
    ligonine1 = {
        pavadinimas: "Lazdynų",
        vieta: "Lazdynai",
        darbuotojai: 1923,
        lankytojaiPerMen: 45898,
    },
    ligonine1 = {
        pavadinimas: "Utenos",
        vieta: "Utena",
        darbuotojai: 987,
        lankytojaiPerMen: 2356,
    },
];



for (const info of ligonines) {
    console.log("Ligonin4s pavadinimas: ", info.pavadinimas, "Kurios apytikslis adresas: ", info.vieta,
        
    );
}

let dar_suma = 0;

for (const info of ligonines) {
    dar_suma += info.darbuotojai
};


let dar_vidurkis = 0;
for (const info of ligonines) {
    dar_vidurkis = dar_suma / info.darbuotojai.length
};



console.log(dar_suma, dar_vidurkis);

let visiLankytojai = ligonines.reduce((a, lankytojai) => a + lankytojai.lankytojaiPerMen, 0)
console.log(visiLankytojai);

/*16.Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų
žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų
programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje visi
studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai,
trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus
studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų
pažymių vidurkį. */

let studentumasyvas = [
    {
        vardas: "Peter",
        pavarde: "Petrovic",
        amzius: 19,
        pazymiai: [5, 10, 8, 6, 9],
        studPrograma: "Saudymas",
        kursas: 1,
    },
    {
        vardas: "Anton",
        pavarde: "Karpovic",
        amzius: 20,
        pazymiai: [7, 10, 4, 2, 5],
        studPrograma: "Voliojimasis",
        kursas: 4,
    },
    {
        vardas: "Petergen",
        pavarde: "Pen",
        amzius: 21,
        pazymiai: [4, 5, 5, 10, 10],
        studPrograma: "Lankymas",
        kursas: 2,
    },
];

for (const info of studentumasyvas) {
    console.log("Vardas:", info.vardas, "Pavarde:", info.pavarde, "Amžius:", info.amzius, "Studijų programa:", info.studPrograma,
        "Kursas:", info.kursas
    );
    console.log("Studento pažymiai:", info.pazymiai);
    let suma = 0;
    for (const sumele of info.pazymiai) {
        suma += sumele;

    }
    console.log("Pazymiu vidurkis: ", suma / info.pazymiai.length)
}

console.log("---------")

let bednraSuma = studentumasyvas
.map((info) => info.pazymiai)
.map((pazymiai) => ({
    pazymiuSuma: pazymiai.reduce((a , b) => a + b, 0),
    pazymiuKiekis: pazymiai.length
}))
.map((pazymiai) => pazymiai.pazymiuSuma / pazymiai.pazymiuKiekis);


console.log(bednraSuma)







































