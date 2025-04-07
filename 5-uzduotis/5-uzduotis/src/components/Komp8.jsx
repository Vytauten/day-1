// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
    const salys = [
        {pavadinimas: "Lietuva", sostine: "Vilnius", gyvSkaicius: 455212,},
        {pavadinimas: "latvija", sostine: "Ryga", gyvSkaicius: 78788,},
        {pavadinimas: "Estija", sostine: "Talinas", gyvSkaicius: 45456,},

    ]
    
    return (
        <div>
            {salys.map((salis) => (
                <h3>Salis: {salis.pavadinimas}</h3>
            ))}
               {salys.map((salis) => (
                <h4>Sostine: {salis.sostine}</h4>
            ))}
               {salys.map((salis) => (
                <h4>Gyv skaicius: {salis.gyvSkaicius}</h4>
            ))}
        </div>
    )
}

export default Komp8
