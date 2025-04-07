

const Komp3 = () => {
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

    const isViso = (a, b) => {
       
            return (a * b)
        
    }
  
    return (
    <div>
        <h2>Produktai
            <table border="1">
                <tr>
                    <td>Pavadinimas</td>
                    <td>Kiekis</td>
                    <td>Kaina</td>
                    <td>Is viso</td>
                </tr>
                {
                    prekes.map(preke => {
                        return <tr key={preke.id}>
<td>{preke.pavadinimas}</td>
<td>{preke.kaina}</td>
<td>{preke.kiekis}</td>
<td>{isViso(preke.kaina, preke.kiekis)}</td>
                        </tr>
                    })
                }
            </table>
        </h2>
    </div>
  )
}

export default Komp3