import "./Komp7.css"

const Komp7 = () => {
 
    const prekes = [
        {
            id: 1,
            pavadinimas: "parkeris",
            kaina: 456,
            kiekis: 254,
        },
        {
            id: 2,
            pavadinimas: "piestukas",
            kaina: 542,
            kiekis: 123,
        },
        {
            id: 3,
            pavadinimas: "akiniai",
            kaina: 755,
            kiekis: 12,
        },
        {
            id: 4,
            pavadinimas: "ziebtuvelis",
            kaina: 12,
            kiekis: 254,
        },
        {
            id: 5,
            pavadinimas: "neasmone",
            kaina: 251200,
            kiekis: 213,
        },
    ]

    return (
    <div>
        <h1>Komp-7</h1>
        <div className="prekiu-sarasas">
            {prekes.length > 0 ? (
                prekes.map((preke) => (
                    <div className="prekes-blokas">
                        <h3>{preke.pavadinimas}</h3>
                        <p>kaina: {preke.kaina}</p>
                        <p>Jos turim {preke.kiekis}</p>
                    </div> 
                ))
            ) : (
                <p>prekiu nera</p>
            )}
        </div>
       
        
    </div>
  )
}

export default Komp7