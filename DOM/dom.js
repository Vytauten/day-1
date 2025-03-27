//Pirmas div

document.querySelector("#pirma-antraste").innerHTML = "Naujas pirmos antraštės tekstas";
document.querySelector("#pirmas-paragrafas").innerHTML = "Naujas pakeistas pirmo paragrafo tekstas";

//Antras div

console.log("---Antras div---");

let tkstasIsParagrafo = document.querySelector("#antras-paragrafas").innerHTML;
console.log("Tekstas paimtas su innerHTML: ", tkstasIsParagrafo);

let tkstasIsParagrafo2 = document.querySelector("#antras-paragrafas").innerText;
console.log("Tekstas paimtas su innerText: ", tkstasIsParagrafo2);

console.log();

console.log("---Trečias div---");

console.log("Inner HTML turinys: ", document.querySelector("#trecias").innerHTML);
console.log("Inner Text turinys: ", document.querySelector("#trecias").innerText);

//Septinas div

function pakeisti() {
    document.querySelector('#septinto-tekstas').innerHTML = 'Pakeistas tekstas';
}

//Astuntas div

function pakeisti2(elementas, tekstas) {
document.querySelector(`#${elementas}`).innerHTML = tekstas;
}

//Devintas div

function pakeisti3(elemntas, tekstas) {
    document.querySelector(`#${elemntas}`).innerHTML = tekstas;
};

function kitaSpalva(elemntas, spalva) {
    document.querySelector(`#${elemntas}`).style.color = spalva;
}

//Desimtas div

let pirmas = 10;
let antras = 9;

let suma = pirmas + antras;
let skirtumas = pirmas - antras;
let sandauga = pirmas * antras;
let dalmuo = pirmas / antras;

document.querySelector('#suma').innerHTML = pirmas + '+' + antras + '=' + suma;
document.querySelector('#skirtumas').innerHTML = pirmas + '-' + antras + '=' + skirtumas;
document.querySelector('#sandauga').innerHTML = pirmas + '*' + antras + '=' + sandauga;
document.querySelector('#dalmuo').innerHTML = pirmas + '/' + antras + '=' + dalmuo;

//Vienuoliktas div

pirmas = 7;
antras = 5;

let isvedimui = `<p>${pirmas} + ${antras} = ${pirmas + antras}</p>
<p>${pirmas} - ${antras} = ${pirmas - antras}</p>
<p>${pirmas} * ${antras} = ${pirmas * antras}</p>
<p>${pirmas} / ${antras} = ${pirmas / antras}</p>`

document.querySelector('#vienuplikto-turinys').innerHTML = isvedimui;

//Dvyliktas div

function keistiSpalva(elemtas, spalva) {
    document.querySelector(`#${elemtas}`).style.color = spalva;
}

function keistiDydi(elemtas, dydis) {
    document.querySelector(`#${elemtas}`).style.fontSize = dydis + 'px';
}

//Tryliktas div

let divKeitimui = document.querySelector('#div-keitimui');

let plocioSlider = document.querySelector('#plocio-slider');
let aukscioSlider = document.querySelector('#aukscio-slider');

plocioSlider.oninput = function () {
    divKeitimui.style.width = this.value + 'px';
}

aukscioSlider.oninput = function () {
    divKeitimui.style.height = this.value + 'px';
}

let spalvosPasirinkimas = document.querySelector('#spalvos-pasirinkimas');

spalvosPasirinkimas.oninput = function () {
    divKeitimui.style.backgroundColor = this.value;
};

let tekstasDivui = document.querySelector('#tekstas-divui');

tekstasDivui.oninput = function () {
    divKeitimui.innerHTML = this.value;
}

//Keturioliktas div

function pridetiZodi(elementas, zodis) {
    document.querySelector(`#${elementas}`).value += zodis + ' | ';
}

//Penkioliktas div

let penkioliktoTekstas = document.querySelector('#penkiolikto-tekstas');

function zodziuKiekis() {
    let tekstas = penkioliktoTekstas.value;
    let zodziai = tekstas.trim().split(/\s+/);
    document.getElementById('penkiolikto-atsakymai').innerHTML = `<p>Žodžių kiekis: ${zodziai.length}</p>`;
    console.log(tekstas, zodziai);
}

function ilgiausiasZodis() {
    let tekstas = penkioliktoTekstas.value;
    let zodziai = tekstas.trim().split(/\s+/);

    let ilgiausias = '';

    for (zodis of zodziai) {
        if (zodis.length > ilgiausias.length) {
            ilgiausias = zodis;
        }
    }

   
    
    document.getElementById('penkiolikto-atsakymai').innerHTML =
`<p>Ilgiausias žodis: ${ilgiausias}</p>
<p>Jo ilgis: ${ilgiausias.length} simbolių</p>`;
}


function trumpiausiasZodis() {
    let tekstas = penkioliktoTekstas.value;
    let zodziai = tekstas.trim().split(/\s+/);

if (zodziai.length === 0 ) {
    document.getElementById('penkiolikto-atsakymai').innerHTML =
    `<p>Nėra žodžių</p>`;
    return;
}

    let trumpiausias = zodis[0];

for (zodis of zodziai) {
    if (zodis.length <= trumpiausias.length) {
        trumpiausias = zodis;
    }
}

document.getElementById('penkiolikto-atsakymai').innerHTML =
`<p>Trumpiausias žodis: ${trumpiausias}</p>
<p>Jo ilgis: ${trumpiausias.length} simbolių</p>`;

}

//Šešioliktas div

let pirmoSkirtukoTurinys = document.querySelector('#pirmas-skirtukas');
let antroSkirtukoTurinys = document.querySelector('#antras-skirtukas');

function pirmasSkirtukas() {
    pirmoSkirtukoTurinys.style.display = 'block';
    antroSkirtukoTurinys.style.display = 'none';
}

function antrasSkirtukas() {
    antroSkirtukoTurinys.style.display = 'block';
    pirmoSkirtukoTurinys.style.display = 'none';
}

//Septynioliktas div

let perjungtiMygtukas = document.querySelector('#perjungti-mygtukas');
let perjungtiTekstas = document.querySelector('#perjungti-tekstas');

perjungtiMygtukas.onclick = function () {
    if (this.innerText == "Rodyti") {
        this.innerText = "Nerodyi";
        perjungtiTekstas.style.display = 'block';
    } else {
        this.innerText = "Rodyti";
        perjungtiTekstas.style.display = "none";
    }
} 

//Aštuonioliktas div

let  kitasPerjungtiTekstas = document.querySelector('#kitas-perjungti-tekstas');

document.getElementById('kitas-perjungti-mygtukas').onclick = function() {
    if (kitasPerjungtiTekstas.style.display == 'block') {
        this.innerText = 'Rodyti';
        kitasPerjungtiTekstas.style.display = 'none';
    } else {
        this.innerText = 'Nerodyti';
        kitasPerjungtiTekstas.style.display = 'block';
    }
}

//Devynioliktas div

document.getElementById('devyniolikto-tekstas').onclick = function () {
    this.style.display = 'none';
}












