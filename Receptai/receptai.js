const priimaMasyva = async (url) => {
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
return data   
    } else {
        throw new Error ('Klaidutė');
    }
};

priimaMasyva("http://127.0.0.1:3000/Receptai/receptai.json")
.then((data) => {
    let ingredietnts = data.ingredientai
    console.log(ingredietnts)
    }
)

function ikonaHide() {
     document.querySelectorAll('.ikona').forEach((ikon) => {
        ikon.style.display = "none";
     })
   
}

let amount = 0;
let currentRecipe = {};

document.querySelectorAll('.receptas').forEach((recept) => {
    recept.addEventListener('click', function () {
        ikonaHide();
        this.querySelector('.ikona').style.display = "block";
    })
})