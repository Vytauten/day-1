
    let tekstas = document.getElementById('tekstas').value;
    let tuscias = document.getElementById('tuscias');
    let atsakymai = document.getElementById('atsakymai');
    document.getElementById('sukurti').onclick = function() {
if (tekstas.length > 0 ) {
tuscias.style.display == 'none';
atsakymai.innerHTML = `${tekstas.value}`;
}
    };

