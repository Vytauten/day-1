const getData = async (url) => {
    const response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error ('Įvyko klaida');
    }
};

console.log('---1---')

function funkcija7Sec(callback) {
    setTimeout(() => { 
        callback();
    }, 3000)
};

function callBack() {
    console.log('Laukiu tris sekundes')
};

funkcija7Sec(callBack);

/*2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su
duomenimis. */
console.log('---2---');


getData('http://127.0.0.1:3000/Async/duomenys.json')
.then(response => console.log('pavyko', response))
.catch(response => console.log('Nepavyko', err))


/*3. Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
pirmojiFunkcija(masyvas, callbackFunkcija) */
console.log('---3---');

const pirmojiFunkcij = async (url, callbackFunkcija) => {
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
        callbackFunkcija(data)
    } else {
        throw new Error ('Įvyko klaidaa');
    }
    
};

function callbackFunkcija(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            console.log(a[i], 'lyginis')
        } else {
            console.log(a[i], 'nelyginis')
        }
    } 
};

pirmojiFunkcij('http://127.0.0.1:3000/Async/skaicia.json', callbackFunkcija)

/*4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo
    reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir
    nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi
    grąžinti atsiųsto "string" ilgį.
    - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
    - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo
    
    nariui iškviest funkciją koksIlgis(string) */
console.log('---4---');

const patikrinkZodzioIlgi = async (url, callBack2) => {
    const response = await fetch(url);
    if (response.status === 200) {
        const data1 = await response.json();
        callBack2(data1)
    } else {
        throw new Error ("Klaidelė");
    }
};

function callBack2(a) {
    for (let i = 0; i < a.length; i++) {
        console.log('Žodis:', a[i], 'Jo ilgis:', a[i].length)
    }
};

patikrinkZodzioIlgi('http://127.0.0.1:3000/Async/masyvas.json', callBack2);

/*5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir
callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten
esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė,
modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback
funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik
atrinktos objekto properties, tarkim tik markė ir modelis) */

const priimaMasyva = async (url, trina) => {
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
        const trinta = trina(data);
        console.log(trinta)
        
    } else {
        throw new Error ('Klaidutė');
    }
};

function trina(a) {
   const remove = ["vardas", "Metai"]
   
   const removed = a.map(obj => {
    let naujas = {...obj };
    remove.forEach(bla => delete naujas[bla]);
    return naujas
   });
   
   return removed;
};


priimaMasyva('http://127.0.0.1:3000/Async/duomenys.json', trina);



