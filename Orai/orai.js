/*function rodytiInfo() {
    const miestas = document.querySelector('#miestas').value

    rodytiOrus(miestas)
    rodytiNuotrauka(miestas)
} */



function keistiFoto(miestas) {

if (miestas === 'Kaunas') {
document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/f/fb/Kauno_senamiestis_by_Augustas_Didzgalvis.jpg')"
} else if ( miestas === 'Barcelona') {
document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_%28cropped%29.jpg/2560px-Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_%28cropped%29.jpg')"
} else if (miestas === 'Rome') {
document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rom_Colosseum_Sept_2021_3.jpg/1920px-Rom_Colosseum_Sept_2021_3.jpg')"  
} else if (miestas === 'London') {
document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg')"  
} else {
document.body.style.backgroundImage = "url('https://cdn.elebase.io/173fe953-8a63-4a8a-8ca3-1bacb56d78a5/902b3396-20c6-4e5a-836f-ac10300fd58c-laimonas-ciunys-cathedral-state-department-of-tourism.jpg?q=75')"  
   
}
}

async function gautiOrus(miestas) {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${miestas}&units=metric&appid=0aa8679f7f4cfb9af5b36c2935c1a05d`)
     const oras = await response.data
    
    
    console.log(oras)
    rodytiOrus(oras)
}



function rodytiOrus(oras) {
   
    const oraiContainerParent = document.getElementById('oru-container');
    oraiContainerParent.innerHTML = '';
    const oraiContainer = document.createElement('div');
    oraiContainer.className = 'orai-rodomi-container';

   
        const temperatura = oras.main.temp
        const dregme = oras.main.humidity
        const vejoGreitis = oras.wind.speed
        console.log(temperatura, dregme, vejoGreitis)

        oraiContainer.innerHTML =`
        <h3>Temperatūra: ${temperatura}°C</h3>
        <p><strong>Dregmė:</strong> ${dregme}%</p>
        <p><strong>Vėjo greitis:</strong> ${vejoGreitis}m/s</p>
        <input class="btn" type="button" onclick="location.href='http://127.0.0.1:3000/Orai/orai.html';" value="Nauja paieška" />        
        `;
    
        oraiContainerParent.appendChild(oraiContainer);
}



function paieska() {
    document.getElementById('btn-search').addEventListener('click', () => {
        let miestas = document.getElementById('miestas').value.trim();
        console.log("Paiškos tekstas:", miestas);

        if (miestas) {
            gautiOrus(miestas);
            keistiFoto(miestas); 
        }
    });
}


paieska();