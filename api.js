

async function gauti() {
    try {
        const response = await fetch("https://icanhazdadjoke.com", {
            headers: {Accept: "application/json"}
        })
        const joke = await response.json()
        return joke
    } catch(e) {
        throw e
    }
};

function paspausti() {
    gauti().then(data =>  {document.querySelector('.juokeliams').append(data.joke)}).catch(e => console.log('klaida'));
};



document.querySelector('#juokas').addEventListener('click', paspausti);
    



//kita uzduotis

/*async function gautiFilma() {
const response = await fetch(`https://api.tvmaze.com/search/shows?q=$$`)
const data = await response.json()
console.log(data)


return data
}

gautiFilma()
.then(data => {
    const moviesContainer = document.createElement('div')
    moviesContainer.className = 'filmai-container'

    for (const item of data) {
        const title = item.show.name
        const year = item.show.premiered.slice(0, -6)
        const imgLink = item.show.image.medium
        const genres = item.show.genres
        const summary = item.show.summary

        const movieDiv = document.createElement('div')
        movieDiv.className = 'filmas'
        movieDiv.innerHTML = `
        <img src="${imgLink}" alt="${title}">
        <h3>${title} (${year})</h3>
        <p>Genres: ${genres.join(', ')}</p>
        <p>${summary}</p>    
        `

        moviesContainer.appendChild(movieDiv)
    } 

    document.body.appendChild(moviesContainer)
})
.catch(err => console.log(err)) 

function paieska() {
    
    const paeieska = document.getElementById('ieskok-btn').addEventListener
    ('click', () => {
let paieskosTekstas = document.getElementById('ieskok').value.trim();
console.log(paieskosTekstas);
if (paieskosTekstas) {
    gautiFilma(paieskosTekstas)
}
    });
    
}

paieska()*/


async function gautiFilma(bla) {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${bla}`);
    const data = await response.json();
    
    console.log("Fetched Data:", data);
    displayMovies(data);
}


function displayMovies(data) {
    const moviesContainer = document.createElement('div');
    moviesContainer.className = 'filmai-container';

    for (const item of data) {
        const title = item.show.name;
        const year = item.show.premiered ? item.show.premiered.slice(0, 4) : "Unknown";
        const imgLink = item.show.image ? item.show.image.medium : "https://via.placeholder.com/150";
        const genres = item.show.genres.length ? item.show.genres.join(', ') : "N/A";
        const summary = item.show.summary ? item.show.summary : "No summary available.";

        const movieDiv = document.createElement('div');
        movieDiv.className = 'filmas';
        movieDiv.innerHTML = `
            <img src="${imgLink}" alt="${title}">
            <h3>${title} (${year})</h3>
            <p><strong>Genres:</strong> ${genres}</p>
            <p>${summary}</p>    
        `;

        moviesContainer.appendChild(movieDiv);
    }

    
    document.getElementsByClassName('.filmams').innerHTML = "";
    document.body.appendChild(moviesContainer);
}


function paieska() {
    document.getElementById('ieskok-btn').addEventListener('click', () => {
        let paieskosTekstas = document.getElementById('ieskok').value.trim();
        console.log("Paiškos tekstas:", paieskosTekstas);

        if (paieskosTekstas) {
            gautiFilma(paieskosTekstas); 
        }
    });
}


paieska();


// kita užduotis

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {console.log('Atsakymas', response.data)})
.catch(error => {console.error('Erroras', error)}
)

const uzduotis = {
    userId: 1,
    id: 200,
    title: 'Nauja užduotis',
    body: 'Noriu popkornų'
}

axios.post('https://jsonplaceholder.typicode.com/posts', uzduotis)
.then(response => {console.log('Atsakymas', response.data)})
.catch(error => {console.error('Erroras', error)})

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/5')
        console.log('Atsakymas:', response.data)
    } catch (e) {
        console.error('Klaida:', e)
    }
}

fetchData()

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: {'Content-Type': 'aplication/json'},
})

instance.get('/todos/7')
.then(response => {console.log('Atsakymas:', response.data)})
.catch(response => {console.error('Klaida:', e)})

instance.get('/todos/11')
.then(response => {console.log('Atsakymas:', response.data)})
.catch(response => {console.error('Klaida:', e)})

instance.get('/todos/16')
.then(response => {console.log('Atsakymas:', response.data)})
.catch(response => {console.error('Klaida:', e)})

const gautiPokemonus = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/ability/5/")
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

gautiPokemonus()



async function parduotuvesDuomenys(url) {
    try {
        const response = await axios.get(url)
        console.log("Jei pavyko:", response.data)
        prekes = response.data
        console.log('aaa:', prekes)
        return prekes
    } catch (e) {
        console.error("nepavyko:", e)
    }
}

parduotuvesDuomenys('https://fakestoreapi.com/products/')
.then(prekes => {
    const prekesContainer = document.createElement('div');
    prekesContainer.className = 'prekes-container';


    for (const irasai of prekes) {
        const prekesPavadinimas = irasai.title;
        const prekeskaina = irasai.price;
        const prekesKategorija = irasai.category;
        const prekesFoto = irasai.image;

        const prekesDiv = document.createElement('div');
        prekesDiv.className = 'preke';
        prekesDiv.innerHTML = `
        <div class="foto-div"><img src="${prekesFoto}" alt="prekes-foto" class="prekes-foto"></div?
        <div class="irasu-div"><h5>${prekesPavadinimas}</h5>
        <button class="mygtukas">Peržiūrėti</button></div>
        `;

        prekesContainer.appendChild(prekesDiv);

    }

    document.getElementsByClassName('.prekiu-katalogas').innerHTML = "";
    document.body.appendChild(prekesContainer);
})






















