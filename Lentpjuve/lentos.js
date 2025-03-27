let medienosKiekis = document.getElementById('medienos-skaicius');
let medienosIlgis = document.getElementById('medienos-ilgis');
let medienosPlotis = document.getElementById('medienos-plotis');
let medienosGylis = document.getElementById('medienos-gylis');
let medienosKaina = document.getElementById('medienos-kaina');
let atsakymai = document.getElementById('atsakymai');
function skaiciuoti() {
    let atsakymas = (medienosIlgis.value * medienosPlotis.value * medienosGylis.value) * medienosKiekis.value * medienosKaina.value;
    if (medienosKiekis.value.length === 0) {
    return atsakymai.innerHTML = `<h4>Neįvėdėte medienos kiekio</h4>`;
    } else if  (medienosIlgis.value.length === 0) {
        return atsakymai.innerHTML = `<h4>Neįvėdėte medienos ilgio</h4>`;
    } else if  (medienosPlotis.value.length === 0) {
        return atsakymai.innerHTML = `<h4>Neįvėdėte medienos pločio</h4>`;
    } else if  (medienosGylis.value.length === 0) {
        return atsakymai.innerHTML = `<h4>Neįvėdėte medienos gylio</h4>`;
    } else if  (medienosKaina.value.length === 0) {
        return atsakymai.innerHTML = `<h4>Neįvėdėte medienos kainos</h4>`;
    } else {
    return atsakymai.innerHTML = `<h4>Kaina: ${atsakymas} (Eur)</h4>`;
}
}





