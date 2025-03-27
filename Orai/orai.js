function rodytiInfo() {
    const miestas = document.getElementById('miestas').value

    rodytiOrus(miestas)
    rodytiNuotrauka(miestas)
}

function rodytiOrus(miestas) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${miestas}&units=metric&appid=0aa8679f7f4cfb9af5b36c2935c1a05d`
 
    axios.get(url)

}

async function rodytiNuotrauka(miestas) {
    
}